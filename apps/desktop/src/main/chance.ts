import type { ItemDTO } from "../preload/share";

class ChanceSystem {
  private items: ItemDTO[] = [];
  private totalWeight = 0;

  constructor(items: ItemDTO[]) {
    this.items = items;
    this.totalWeight = items.reduce((acc, item) => acc + item.weight, 0);
  }

  public getRandomItem(): ItemDTO {
    if (!this.items.length) {
      throw new Error(
        "No items available. Ensure configuration is setup correctly.",
      );
    }

    let target = Math.random() * this.totalWeight;

    for (const item of this.items) {
      target -= item.weight;
      if (target <= 0) {
        return item;
      }
    }

    return this.items[0]; // Fallback (should never reach here)
  }
}

export default ChanceSystem;
