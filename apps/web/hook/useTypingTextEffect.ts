import { useCallback, useEffect, useRef, useState } from "react";

const TYPING_DELAY_MS = 100;
const DELETE_DELAY_MS = 50;
const PAUSE_DELAY_MS = 1000;

/**
 * Simulates a typing and deleting animation
 * cycling through a given array of phrases.
 *
 * This is especially useful for animated headers, hero sections, or
 * dynamic intros in UIs that need to catch user attention.
 *
 * Timing behavior:
 * - Typing delay per character: 100ms
 * - Deleting delay per character: 50ms
 * - Pause after typing and deleting: 1000ms
 *
 * @param phrases - An array of strings to type out and delete in a continuous loop
 * @returns An object containing:
 *   - `text`: the current animated string
 *
 * @example
 * ```tsx
 * const { text } = useTypingTextEffect(["Hello", "Welcome", "Enjoy!"]);
 * return <h1>{text}</h1>;
 * ```
 */
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
      schedule(handleTyping, TYPING_DELAY_MS);
      return;
    }

    if (!isDeleting && isTypingComplete) {
      schedule(() => {
        isDeletingRef.current = true;
        handleTyping();
      }, PAUSE_DELAY_MS); // Pause before deleting
      return;
    }

    // Deleting backward
    if (isDeleting && !isDeletingComplete) {
      currentCharIndexRef.current--;
      setText(phrase.slice(0, currentCharIndexRef.current));
      schedule(handleTyping, DELETE_DELAY_MS);
      return;
    }

    if (isDeleting && isDeletingComplete) {
      schedule(() => {
        isDeletingRef.current = false;
        currentPhraseIndexRef.current =
          (currentPhraseIndexRef.current + 1) % phrases.length;
        handleTyping();
      }, PAUSE_DELAY_MS); // Pause before moving to next phrase
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
