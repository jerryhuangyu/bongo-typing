import { useEffect, useState } from "react";
import { useAppKeypress } from "../../hooks/useAppKeypress";
import { Confetti } from "../../services/confetti";
import Character from "./components/Character";

type Item = { name: string; weight: number };

function App(): JSX.Element {
  const [item, setItem] = useState<Item | null>(null);
  const { count: keypressCount } = useAppKeypress();

  const isRightHandUp = keypressCount % 2 === 0;
  const isLeftHandUp = keypressCount % 2 === 1;

  // try to earn item every 3 keypress
  useEffect(() => {
    setItem(null);
    if (keypressCount < 0) return;
    if (keypressCount % 3 !== 0) return;
    window.api.tryEarnItem();
  }, [keypressCount]);

  // listen to earn item event from main process
  useEffect(() => {
    window.api.onEarnItem((item) => {
      Confetti.triggerSideCannon();
      setItem(item);
    });
  }, []);

  return (
    <div className="w-screen h-screen relative pointer-events-none">
      {item?.name !== "None" && (
        <p className="absolute w-full inline-flex justify-center left-0 top-4 font-mono text-[8px] text-amber-200">
          {item?.name}
        </p>
      )}

      <div className="absolute bottom-0 isolate">
        <Character isLeftHandUp={isLeftHandUp} isRightHandUp={isRightHandUp} />
      </div>

      <p className="text-black absolute bottom-0 font-mono text-sm">
        {keypressCount}
      </p>
    </div>
  );
}

export default App;
