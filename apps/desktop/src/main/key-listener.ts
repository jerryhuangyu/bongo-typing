import {
  GlobalKeyboardListener,
  type IGlobalKeyEvent,
} from "node-global-key-listener";

class KeyListener {
  private keyboardListener: GlobalKeyboardListener;
  private listeners: Set<(e: IGlobalKeyEvent) => void>;

  constructor() {
    this.keyboardListener = new GlobalKeyboardListener();
    this.listeners = new Set();
  }

  public listenForKeyDown(callback: (key: string) => void): () => void {
    const handler = (e: IGlobalKeyEvent) => {
      if (e.state !== "DOWN" || e.name?.includes("MOUSE")) return;
      callback(e.name || "unknown");
    };

    this.keyboardListener.addListener(handler);
    this.listeners.add(handler);

    // Return an unsubscribe function
    return () => {
      this.listeners.delete(handler);
      this.keyboardListener.removeListener(handler);
    };
  }

  public removeAllListeners(): void {
    for (const handler of this.listeners) {
      this.keyboardListener.removeListener(handler);
    }
    this.listeners.clear();
  }
}

export default KeyListener;