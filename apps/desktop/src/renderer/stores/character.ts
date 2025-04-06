import { DEFAULT_ITEMS } from "@preload/const";
import { useEffect } from "react";
import { create } from "zustand";
import { persist } from "zustand/middleware";
import { createSelectors } from "./utils";

type Character = {
  bg: string;
  rightUpHand: string;
  rightDownHand: string;
  leftUpHand: string;
  leftDownHand: string;
};

const useStore = create<Character>()(
  persist(
    () => ({
      bg: DEFAULT_ITEMS[0].img_src,
      leftDownHand: DEFAULT_ITEMS[1].img_src,
      leftUpHand: DEFAULT_ITEMS[2].img_src,
      rightUpHand: DEFAULT_ITEMS[3].img_src,
      rightDownHand: DEFAULT_ITEMS[4].img_src,
    }),
    {
      name: "character-storage",
    },
  ),
);

export const useCharacterStore = createSelectors(useStore);

const set = useStore.setState;

export const setCharacter = ({
  type,
  src,
}: {
  type: "bg" | "right-up" | "right-down" | "left-up" | "left-down";
  src: string;
}) => {
  if (type === "bg") set({ bg: src });
  if (type === "right-up") set({ rightUpHand: src });
  if (type === "right-down") set({ rightDownHand: src });
  if (type === "left-up") set({ leftUpHand: src });
  if (type === "left-down") set({ leftDownHand: src });

  // Notify other tabs
  const bc = new BroadcastChannel("character-state-sync");
  bc.postMessage("src-update");
  bc.close();
};

export const syncCharacterStore = async () => {
  await useStore.persist.rehydrate();
};

// Sync store to other tabs
export const useCharacterStoreBroadcastSync = () => {
  useEffect(() => {
    const bc = new BroadcastChannel("character-state-sync");
    bc.onmessage = (e) => {
      if (e.data === "src-update") {
        console.log("trigger update");
        syncCharacterStore();
      }
    };
    return () => bc.close();
  }, []);
};
