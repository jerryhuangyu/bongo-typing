import fs from "node:fs";
import path from "node:path";
import sqlite3 from "better-sqlite3";
import { app } from "electron";
import {
  type ItemCreateDTO,
  type ItemDTO,
  type KeypressLogCreateDTO,
  type KeypressLogDTO,
  isItemType,
} from "../preload/share";
import { fetchItemBase64, fetchItems } from "./fetch";

const configPath = app.getPath("userData");
const dbPath = path.join(configPath, "bongo-otter.db");

if (!fs.existsSync(configPath)) {
  fs.mkdirSync(configPath, { recursive: true });
}

class AppDatabase {
  private db: sqlite3.Database;

  constructor() {
    this.db = new sqlite3(dbPath);

    // Create keypress_logs table
    this.db
      .prepare(`
        CREATE TABLE IF NOT EXISTS keypress_logs (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          key TEXT NOT NULL,
          timestamp DATETIME DEFAULT CURRENT_TIMESTAMP
        )
      `)
      .run();

    // Create backpack_items table
    this.db
      .prepare(`
      CREATE TABLE IF NOT EXISTS backpack_items (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        weight REAL NOT NULL,
        img_src string,
        type TEXT,
        has_won BOOLEAN DEFAULT false,
        timestamp DATETIME DEFAULT CURRENT_TIMESTAMP
      )
      `)
      .run();
  }

  // keypress logs
  insertKeypressLog(key: KeypressLogCreateDTO["key"]) {
    this.db
      .prepare(`
      INSERT INTO keypress_logs (key)
      VALUES (?)
    `)
      .run(key);
  }

  queryKeypressLogs() {
    return this.db
      .prepare<[], KeypressLogDTO>("SELECT * FROM keypress_logs")
      .all();
  }

  // backpack items
  private addItemToBackpack(item: ItemCreateDTO) {
    // Try to find an existing entry by the item name
    const existing = this.db
      .prepare(`
        SELECT * FROM backpack_items
        WHERE name = ?
      `)
      .get(item.name);

    if (existing) return;

    this.db
      .prepare(`
        INSERT INTO backpack_items (name, weight, img_src, type, has_won)
        VALUES (?, ?, ?, ?, ?)
      `)
      .run(item.name, item.weight, item.img_src, item.type, item.has_won);
  }

  async syncItemsFromServer({ force }: { force: boolean } = { force: false }) {
    try {
      const serverItemsResponse = await fetchItems();
      if (serverItemsResponse.status !== 200) {
        console.error(
          "Failed to fetch items from server:",
          serverItemsResponse.status,
          serverItemsResponse.statusText,
        );
        return;
      }

      // Check if the items already exist in the local database
      const localExistingItems = this.queryBackpackItems();
      const localExistingItemNames = new Set(
        localExistingItems.map((item) => item.name),
      );

      // Filter out items that already exist in the local database and only keep the new items
      let newItems = serverItemsResponse.data.filter(
        (item) => !localExistingItemNames.has(item.name),
      );
      if (force) {
        newItems = [...serverItemsResponse.data];
      }

      if (newItems.length === 0) {
        console.log("No new items to sync from server.");
        return;
      }

      // Fetch and convert item images to base64
      const base64ImagePromises = newItems.map((item) =>
        fetchItemBase64(item.img_src),
      );
      const base64ImageResults = await Promise.all(base64ImagePromises);

      const itemNameToBase64Map = new Map<string, string>();
      newItems.forEach((item, index) => {
        const base64 = base64ImageResults[index];
        if (!base64) {
          throw new Error(
            `Image base64 string not found for item: ${item.name}`,
          );
        }
        itemNameToBase64Map.set(item.name, base64);
      });

      // Insert new items into local database
      for (const item of newItems) {
        const imgBase64String = itemNameToBase64Map.get(item.name);
        if (!imgBase64String) {
          throw new Error(
            `Image base64 string not found for item: ${item.name}`,
          );
        }

        if (isItemType(item.type) === false) {
          throw new Error(`Invalid type for item: ${item.name}`);
        }

        this.addItemToBackpack({
          name: item.name,
          weight: item.weight,
          img_src: `data:image/jpeg;base64,${imgBase64String}`,
          type: item.type,
          has_won: item.weight === 0 ? 1 : 0,
        });
      }

      console.log(
        `Successfully synced ${newItems.length} new item(s) from the server.`,
      );
    } catch (error) {
      console.error("Error syncing items from server:", error);
    }
  }

  queryBackpackItems() {
    return this.db.prepare<[], ItemDTO>("SELECT * FROM backpack_items").all();
  }

  checkItemWonStatus(itemId: ItemDTO["id"]) {
    const item = this.db
      .prepare<[number], { has_won: boolean }>(`
        SELECT has_won FROM backpack_items
        WHERE id = ?
        LIMIT 1
      `)
      .get(itemId);

    return item ? item.has_won : true;
  }

  markItemAsWon(itemId: ItemDTO["id"]) {
    this.db
      .prepare(`
      UPDATE backpack_items
      SET has_won = true
      WHERE id = ?
    `)
      .run(itemId);
  }

  close() {
    if (this.db) {
      this.db.close();
    }
  }
}

export default AppDatabase;
