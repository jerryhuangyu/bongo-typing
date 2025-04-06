import { CarouselItem } from "@renderer/components/Carousel";
import type { FC } from "react";

interface PrizeCarouselItemProps {
  src: string;
  alt: string;
  showQuestionMark: boolean;
  onClick: () => void;
}

const PrizeCarouselItem: FC<PrizeCarouselItemProps> = ({
  src,
  alt,
  showQuestionMark,
  onClick,
}) => {
  return (
    <CarouselItem className="basis-1/3" onClick={onClick}>
      {showQuestionMark ? (
        <img
          className="h-20 object-contain rounded select-none"
          src="./question/question.png"
          alt="question mark"
        />
      ) : (
        <img className="h-20 object-contain select-none" src={src} alt={alt} />
      )}
    </CarouselItem>
  );
};

export default PrizeCarouselItem;
