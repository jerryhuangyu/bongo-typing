import { useCallback, useEffect, useRef, useState } from "react";

export function useTypingTextEffect(phrases: string[]) {
  const [text, setText] = useState("");

  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const isDeletingRef = useRef(false);
  const currentPhraseIndexRef = useRef(0);
  const currentCharIndexRef = useRef(0);

  const schedule = useCallback((callback: () => void, delay: number) => {
    clearExistingTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(callback, delay);
  }, []);

  const handleTyping = useCallback(() => {
    const phrase = phrases[currentPhraseIndexRef.current];

    const isDeleting = isDeletingRef.current;
    const isTypingComplete = currentCharIndexRef.current >= phrase.length;
    const isDeletingComplete = currentCharIndexRef.current === 0;

    // Typing forward
    if (!isDeleting && !isTypingComplete) {
      currentCharIndexRef.current++;
      setText(phrase.slice(0, currentCharIndexRef.current));
      schedule(handleTyping, 100);
      return;
    }

    if (!isDeleting && isTypingComplete) {
      schedule(() => {
        isDeletingRef.current = true;
        handleTyping();
      }, 1000); // Pause before deleting
      return;
    }

    // Deleting backward
    if (isDeleting && !isDeletingComplete) {
      currentCharIndexRef.current--;
      setText(phrase.slice(0, currentCharIndexRef.current));
      schedule(handleTyping, 50);
      return;
    }

    if (isDeleting && isDeletingComplete) {
      schedule(() => {
        isDeletingRef.current = false;
        currentPhraseIndexRef.current =
          (currentPhraseIndexRef.current + 1) % phrases.length;
        handleTyping();
      }, 1000); // Pause before moving to next phrase
      return;
    }
  }, [phrases, schedule]);

  useEffect(() => {
    handleTyping();
    return () => clearExistingTimeout(timeoutRef.current);
  }, [handleTyping]);

  return { text };
}

const clearExistingTimeout = (timeout: NodeJS.Timeout | null) => {
  if (!timeout) return;
  clearTimeout(timeout);
};
