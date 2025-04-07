import { join } from "node:path";
import { is } from "@electron-toolkit/utils";
import { BrowserWindow, screen, shell } from "electron";
import icon from "../../build/icon.png?asset";

class AppWindow {
  private readonly SNAP_RANGE = 30;
  private readonly PRELOAD_PATH: string;
  private mainWindow: BrowserWindow | null = null;
  private backpackWindow: BrowserWindow | null = null;

  constructor() {
    this.PRELOAD_PATH = join(__dirname, "../preload/index.js");
  }

  createMain() {
    if (this.mainWindow) {
      this.mainWindow.focus();
      return;
    }

    const { width, height } = screen.getPrimaryDisplay().workAreaSize;
    this.mainWindow = new BrowserWindow({
      width: 124,
      height: 100,
      x: width,
      y: height,
      resizable: false,
      frame: false,
      transparent: true,
      alwaysOnTop: true,
      hasShadow: false,
      show: false,
      autoHideMenuBar: true,
      ...(process.platform === "linux" ? { icon } : {}),
      webPreferences: {
        preload: this.PRELOAD_PATH,
        sandbox: false,
      },
    });

    this.mainWindow.setVisibleOnAllWorkspaces(true);

    this.mainWindow.on("ready-to-show", () => {
      this.mainWindow?.show();
    });

    this.mainWindow.webContents.setWindowOpenHandler((details) => {
      shell.openExternal(details.url);
      return { action: "deny" };
    });

    if (is.dev && process.env.ELECTRON_RENDERER_URL) {
      this.mainWindow.loadURL(process.env.ELECTRON_RENDERER_URL);
    } else {
      this.mainWindow.loadFile(join(__dirname, "../renderer/index.html"));
    }

    this.mainWindow.on("closed", () => {
      this.mainWindow = null;
    });

    return this.mainWindow;
  }

  getMainInstance() {
    return this.mainWindow;
  }

  createBackpack() {
    if (this.backpackWindow) {
      this.backpackWindow.focus();
      return;
    }

    this.backpackWindow = new BrowserWindow({
      width: 700,
      height: 650,
      webPreferences: {
        preload: this.PRELOAD_PATH,
        sandbox: false,
      },
    });

    if (is.dev && process.env.ELECTRON_RENDERER_URL) {
      this.backpackWindow.loadURL(
        `${process.env.ELECTRON_RENDERER_URL}/backpack.html`,
      );
    } else {
      this.backpackWindow.loadFile(
        join(__dirname, "../renderer/backpack.html"),
      );
    }

    this.backpackWindow.on("closed", () => {
      this.backpackWindow = null;
    });
  }

  getBackpackInstance() {
    return this.backpackWindow;
  }

  snapWindowToNearestCorner(win: BrowserWindow) {
    if (!win) return;

    const { x, y, width, height } = win.getBounds();
    const { bounds } = screen.getPrimaryDisplay();

    const screenWidth = bounds.width;
    const screenHeight = bounds.height;

    // Define four corner positions
    const corners = [
      { x: 0, y: 0 }, // Top-left
      { x: screenWidth - width, y: 0 }, // Top-right
      { x: 0, y: screenHeight - height }, // Bottom-left
      { x: screenWidth - width, y: screenHeight - height }, // Bottom-right
    ];

    // Find the closest corner within the SNAP_RANGE
    let closestCorner: null | { x: number; y: number } = null;

    for (const corner of corners) {
      const dist = Math.hypot(corner.x - x, corner.y - y);
      if (dist > this.SNAP_RANGE) continue;
      closestCorner = corner;
      break;
    }

    // Only move if within snap range
    if (closestCorner) {
      win.setBounds({ x: closestCorner.x, y: closestCorner.y, width, height });
    }
  }
}

export default AppWindow;
