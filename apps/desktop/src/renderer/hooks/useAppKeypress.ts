import { useEffect, useState } from "react";

export const useAppKeypress = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // fetch the initial keypress count
    const fetchKeyPressCount = async () => {
      const count = await window.api.getKeyPressCount();
      setCount(count);
    };

    fetchKeyPressCount();

    // handle keypress event from  the main process
    window.api.onKeyPressCountUpdate((count) => {
      setCount(count);
    });
  }, []);

  return {
    count,
  };
};
