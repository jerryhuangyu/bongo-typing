import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from "@renderer/components/Carousel";

const PrizesCarousel = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full relative flex justify-center">
      <Carousel opts={{ align: "start" }} className="w-full h-20 max-w-sm">
        <CarouselContent>{children}</CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default PrizesCarousel;
