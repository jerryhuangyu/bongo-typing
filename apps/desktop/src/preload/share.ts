export const ItemType = {
  BG: "bg",
  RIGHT_UP: "right-up",
  RIGHT_DOWN: "right-down",
  LEFT_UP: "left-up",
  LEFT_DOWN: "left-down",
  NONE: 'none',
} as const;

export type ItemType = (typeof ItemType)[keyof typeof ItemType];

export function isItemType(value: string): value is ItemType {
  return Object.values(ItemType).includes(value as ItemType);
}

export type ItemDTO = {
  id: number;
  name: string;
  weight: number;
  img_src: string;
  type: ItemType;
  timestamp: string;
  has_won: 1 | 0; // SQLite doesn't have a boolean type, so we use 1 for true and 0 for false
};

export type ItemCreateDTO = Omit<ItemDTO, "id" | "timestamp"> ;

export type KeypressLogDTO = {
  id: number;
  key: string;
  timestamp: string;
}

export type KeypressLogCreateDTO = Omit<KeypressLogDTO, "id" | "timestamp">;