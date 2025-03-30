import { useCharacterStore } from "@/store/character";

type CharacterProps = {
  isLeftHandUp: boolean;
  isRightHandUp: boolean;
};

const Character = ({ isLeftHandUp, isRightHandUp }: CharacterProps) => {
  const bg = useCharacterStore.use.bg();
  const leftUp = useCharacterStore.use.leftUpHand();
  const leftDown = useCharacterStore.use.leftDownHand();
  const rightUp = useCharacterStore.use.rightUpHand();
  const rightDown = useCharacterStore.use.rightDownHand();

  return (
    <div className="absolute bottom-0 right-0 isolate">
      {isLeftHandUp ? (
        <img
          src={leftUp}
          className="absolute top-[2px] left-0 z-0"
          alt="left-hand-up"
        />
      ) : (
        <img
          src={leftDown}
          className="absolute top-[2px] left-0 z-0"
          alt="left-hand-down"
        />
      )}

      <img src={bg} className="h-32 z-10 py-0.5" alt="basic-character" />

      {isRightHandUp ? (
        <img
          src={rightUp}
          className="absolute top-0 left-0 z-20"
          alt="right-hand-up"
        />
      ) : (
        <img
          src={rightDown}
          className="absolute top-0 left-0 z-20"
          alt="right-hand-down"
        />
      )}
    </div>
  );
};

export default Character;
