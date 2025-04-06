import { create } from "zustand";
import { persist } from "zustand/middleware";
import { createSelectors } from "./utils";

const CharacterTypes = {
  BLACK_CAT: "black-cat",
  WHITE_CAT: "cat",
  YELLOW_CAT: "yellow-cat",
  LGBT_CAT: "lgbt-cat",
  OTTER: "otter",
} as const;

export type CharacterType =
  (typeof CharacterTypes)[keyof typeof CharacterTypes];

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
      bg: "/character/cat/bg.png",
      leftDownHand: "/character/cat/left-down.png",
      leftUpHand: "/character/cat/left-up.png",
      rightUpHand: "/character/cat/right-up.png",
      rightDownHand: "/character/cat/right-down.png",
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

export const makeRandomCharacter = () => {
  const typeValues = Object.values(CharacterTypes);
  const randomNumber = Math.floor(Math.random() * typeValues.length);
  const randomCharacterName = typeValues[randomNumber];

  const getSrc = (type: string) => {
    return `/character/${randomCharacterName}/${type}.png`;
  };

  setCharacter({ type: "bg", src: getSrc("bg") });
  setCharacter({ type: "left-up", src: getSrc("left-up") });
  setCharacter({ type: "left-down", src: getSrc("left-down") });
  setCharacter({ type: "right-up", src: getSrc("right-up") });
  setCharacter({ type: "right-down", src: getSrc("right-down") });
};
