type Item = {
  type: "bg" | "right-up" | "right-down" | "left-up" | "left-down" | "none";
  name: string;
  weight: number;
  img_src: string;
};

export const DEFAULT_ITEMS: Item[] = [
  {
    type: "bg",
    name: "Cat",
    weight: 0,
    img_src: "./cat/bg.png",
  },
  {
    type: "left-down",
    name: "Cat Left Down Hand",
    weight: 0,
    img_src: "./cat/left-down.png",
  },
  {
    type: "left-up",
    name: "Cat Left Up Hand",
    weight: 0,
    img_src: "./cat/left-up.png",
  },
  {
    type: "right-up",
    name: "Cat Right Up Hand",
    weight: 0,
    img_src: "./cat/right-up.png",
  },
  {
    type: "right-down",
    name: "Cat Right Down Hand",
    weight: 0,
    img_src: "./cat/right-down.png",
  },
] as const;
