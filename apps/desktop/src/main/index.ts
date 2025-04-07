import { electronApp, optimizer } from "@electron-toolkit/utils";
import { BrowserWindow, Menu, app, ipcMain } from "electron";
import ChanceSystem from "./chance";
import AppDatabase from "./db";
import KeyListener from "./key-listener";
import AppWindow from "./window";

const appDatabase = new AppDatabase();
const keyListener = new KeyListener();
const appWindow = new AppWindow();

let moveTimeout: NodeJS.Timeout | null = null;

// * Context Menu Setup
const contextMenuTemplate = [
  { label: "Backpack", click: () => appWindow.createBackpack() },
];
export const contextMenu = Menu.buildFromTemplate(contextMenuTemplate);

// * Main app startup
// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(bootstrapApp);

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

async function bootstrapApp() {
  // * Sync items from server and initialize chance system
  await appDatabase.syncItemsFromServer();
  const items = appDatabase.queryBackpackItems();
  const chanceSystem = new ChanceSystem(items);

  // * Set Windows-specific App User Model ID
  electronApp.setAppUserModelId("app.bongo-typing");

  // * Setup dev tools and shortcut overrides
  app.on("browser-window-created", (_, window) => {
    // Default open or close DevTools by F12 in development
    // and ignore CommandOrControl + R in production.
    // see https://github.com/alex8088/electron-toolkit/tree/master/packages/utils
    optimizer.watchWindowShortcuts(window);
  });

  const mainWindow = appWindow.createMain();
  if (!mainWindow) throw new Error("Failed to create main window");

  setupKeyListener(mainWindow);
  setupGetKeyPressCountIpcHandler();
  setupGetBackpackItemsIpcHandler();
  setupTryEarnItemIpcHandler(appWindow, chanceSystem);
  setupContextMenu(mainWindow);
  setupWindowSnapDetection(mainWindow);

  app.on("activate", () => {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) {
      appWindow.createMain();
    }
  });
}

function setupKeyListener(mainWindow: BrowserWindow) {
  keyListener.listenForKeyDown((key) => {
    appDatabase.insertKeypressLog(key);
    const logs = appDatabase.queryKeypressLogs();
    mainWindow.webContents.send("key-press-count", logs.length);
  });
}

function setupGetKeyPressCountIpcHandler() {
  ipcMain.handle("get-key-press-count", () => {
    return appDatabase.queryKeypressLogs().length;
  });
}

function setupGetBackpackItemsIpcHandler() {
  ipcMain.handle("get-backpack-items", () => {
    return appDatabase.queryBackpackItems();
  });
}

function setupTryEarnItemIpcHandler(
  appWindow: AppWindow,
  chanceSystem: ChanceSystem,
) {
  ipcMain.handle("try-earn-item", () => {
    const item = chanceSystem.getRandomItem();
    if (item.name === "None") return;

    const alreadyWon = appDatabase.checkItemWonStatus(item.id);
    if (alreadyWon) return;

    appDatabase.markItemAsWon(item.id);
    const mainWindow = appWindow.getMainInstance()
    mainWindow?.webContents.send("earn-item", item);
    const backpackWindow = appWindow.getBackpackInstance();
    backpackWindow?.webContents.send("earn-item", item);
  });
}

function setupContextMenu(mainWindow: BrowserWindow) {
  mainWindow.webContents.on("context-menu", () => {
    contextMenu.popup();
  });
}

function setupWindowSnapDetection(mainWindow: BrowserWindow) {
  mainWindow.on("moved", () => {
    if (moveTimeout) clearTimeout(moveTimeout);
    moveTimeout = setTimeout(() => {
      appWindow.snapWindowToNearestCorner(mainWindow);
    }, 300);
  });
}
