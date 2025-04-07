import type { ElectronAPI } from "@electron-toolkit/preload";
import type { ItemDTO } from "./share";

declare global {
  interface Window {
    electron: ElectronAPI;
    api: {
      onKeyPressCountUpdate: (callback: (count: number) => void) => void;
      onEarnItem: (
        callback: (item: { name: string; weight: number }) => void,
      ) => void;
      getKeyPressCount: () => Promise<number>;
      getBackpackItems: () => Promise<ItemDTO[]>;
      tryEarnItem: () => void;
    };
  }
}
