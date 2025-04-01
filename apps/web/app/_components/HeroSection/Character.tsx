import { cn } from "@/lib/utils";

type CharacterProps = {
  isLeftHandUp: boolean;
  isRightHandUp: boolean;
  bgSrc: string;
  leftUpSrc: string;
  leftDownSrc: string;
  rightUpSrc: string;
  rightDownSrc: string;
  className?: string;
};

const Character = ({
  isLeftHandUp,
  isRightHandUp,
  bgSrc,
  leftDownSrc,
  leftUpSrc,
  rightDownSrc,
  rightUpSrc,
  className = "",
}: CharacterProps) => {
  return (
    <div className="absolute -bottom-1 right-0 isolate">
      {isLeftHandUp ? (
        <img
          src={leftUpSrc}
          className="absolute top-[2px] left-0 z-0"
          alt="left-hand-up"
        />
      ) : (
        <img
          src={leftDownSrc}
          className="absolute top-[2px] left-0 z-0"
          alt="left-hand-down"
        />
      )}

      <img
        src={bgSrc}
        className={cn("h-32 z-10 py-0.5", className)}
        alt="basic-character"
      />

      {isRightHandUp ? (
        <img
          src={rightUpSrc}
          className="absolute top-0 left-0 z-20"
          alt="right-hand-up"
        />
      ) : (
        <img
          src={rightDownSrc}
          className="absolute top-0 left-0 z-20"
          alt="right-hand-down"
        />
      )}
    </div>
  );
};

export default Character;
