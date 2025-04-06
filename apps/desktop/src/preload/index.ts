import { electronAPI } from "@electron-toolkit/preload";
import { contextBridge, ipcRenderer } from "electron";
import type { ItemDTO } from "./share";

// Custom APIs for renderer
const api = {
  onKeyPressCountUpdate: (callback: (count: number) => void) => {
    ipcRenderer.on("key-press-count", (_event, value) => callback(value));
  },
  getKeyPressCount: (): Promise<number> => {
    return ipcRenderer.invoke("get-key-press-count");
  },
  getBackpackItems: (): Promise<ItemDTO[]> => {
    return ipcRenderer.invoke("get-backpack-items");
  },
  tryEarnItem: () => {
    return ipcRenderer.invoke("try-earn-item");
  },
  onEarnItem: (callback: (item: { name: string; weight: number }) => void) => {
    ipcRenderer.on("earn-item", (_event, item) => callback(item));
  },
};

// Use `contextBridge` APIs to expose Electron APIs to
// renderer only if context isolation is enabled, otherwise
// just add to the DOM global.
if (process.contextIsolated) {
  try {
    contextBridge.exposeInMainWorld("electron", electronAPI);
    contextBridge.exposeInMainWorld("api", api);
  } catch (error) {
    console.error(error);
  }
} else {
  // @ts-ignore (define in dts)
  window.electron = electronAPI;
  // @ts-ignore (define in dts)
  window.api = api;
}
