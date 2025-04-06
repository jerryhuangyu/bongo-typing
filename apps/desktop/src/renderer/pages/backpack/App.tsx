import type { ItemDTO } from "@preload/share";
import { setCharacter } from "@renderer/stores/character";
import { useCallback, useEffect, useState } from "react";
import PrizeCarouselItem from "./components/PrizeCarouseItem";
import PrizesCarousel from "./components/PrizesCarousel";

function App(): JSX.Element {
  const [items, setItems] = useState<ItemDTO[]>([]);

  const bgItems = getSortedItemsByType(items, "bg");
  const leftUpItems = getSortedItemsByType(items, "left-up");
  const leftDownItems = getSortedItemsByType(items, "left-down");
  const rightUpItems = getSortedItemsByType(items, "right-up");
  const rightDownItems = getSortedItemsByType(items, "right-down");

  const getBackpackItems = useCallback(async () => {
    const result = await window.api.getBackpackItems();
    setItems(result);
  }, []);

  useEffect(() => {
    getBackpackItems();
  }, [getBackpackItems]);

  useEffect(() => {
    window.api.onEarnItem(async (_item) => {
      getBackpackItems();
    });
  }, [getBackpackItems]);

  return (
    <div className="flex flex-col items-start container mx-auto">
      <h1 className="text-2xl h-20 inline-flex justify-center items-center w-full">
        獎品包包
      </h1>

      <div className="flex gap-20">
        <h2 className="text-sm w-30 h-full self-center">角色</h2>
        <PrizesCarousel>
          {bgItems.map((item) => (
            <PrizeCarouselItem
              key={item.id}
              onClick={() => {
                if (!item.has_won) return;
                setCharacter({ type: "bg", src: item.img_src });
              }}
              showQuestionMark={!item.has_won}
              src={item.img_src}
              alt={item.name}
            />
          ))}
        </PrizesCarousel>
      </div>

      <div className="flex gap-20">
        <h2 className="text-sm w-30 h-full self-center">左手（舉起）</h2>
        <PrizesCarousel>
          {leftUpItems.map((item) => (
            <PrizeCarouselItem
              key={item.id}
              onClick={() => {
                if (!item.has_won) return;
                setCharacter({ type: "left-up", src: item.img_src });
              }}
              showQuestionMark={!item.has_won}
              src={item.img_src}
              alt={item.name}
            />
          ))}
        </PrizesCarousel>
      </div>

      <div className="flex gap-20">
        <h2 className="text-sm w-30 h-full self-center">左手（放下）</h2>
        <PrizesCarousel>
          {leftDownItems.map((item) => (
            <PrizeCarouselItem
              key={item.id}
              onClick={() => {
                if (!item.has_won) return;
                setCharacter({ type: "left-down", src: item.img_src });
              }}
              showQuestionMark={!item.has_won}
              src={item.img_src}
              alt={item.name}
            />
          ))}
        </PrizesCarousel>
      </div>

      <div className="flex gap-20">
        <h2 className="text-sm w-30 h-full self-center">右手（舉起）</h2>
        <PrizesCarousel>
          {rightUpItems.map((item) => (
            <PrizeCarouselItem
              key={item.id}
              onClick={() => {
                if (!item.has_won) return;
                setCharacter({ type: "right-up", src: item.img_src });
              }}
              showQuestionMark={!item.has_won}
              src={item.img_src}
              alt={item.name}
            />
          ))}
        </PrizesCarousel>
      </div>

      <div className="flex gap-20">
        <h2 className="text-sm w-30 h-full self-center">右手（放下）</h2>
        <PrizesCarousel>
          {rightDownItems.map((item) => (
            <PrizeCarouselItem
              key={item.id}
              onClick={() => {
                if (!item.has_won) return;
                setCharacter({ type: "right-down", src: item.img_src });
              }}
              showQuestionMark={!item.has_won}
              src={item.img_src}
              alt={item.name}
            />
          ))}
        </PrizesCarousel>
      </div>
    </div>
  );
}

export default App;

function getSortedItemsByType(items: ItemDTO[], type: ItemDTO["type"]) {
  return items
    .filter((item) => item.type === type)
    .sort((a, b) => {
      // Prioritize items with weight === 0 (move them to the top)
      if (a.weight === 0 && b.weight !== 0) return -1;
      if (b.weight === 0 && a.weight !== 0) return 1;

      // Sort by weight (descending)
      if (a.weight !== b.weight) return b.weight - a.weight;

      // Sort by name (ascending)
      return a.name.localeCompare(b.name);
    });
}
