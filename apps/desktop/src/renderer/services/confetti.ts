import confetti from "canvas-confetti";

const triggerSideCannon = ({
  duration = 100,
  spread = 45,
}: { duration?: number; spread?: number } = {}) => {
  const colors = ["#F8E152", "#00C6FE", "#51C153", "#FF7002", "#FF3B00"];
  const end = Date.now() + duration;

  const sideCannon = () => {
    confetti({
      particleCount: 5,
      startVelocity: 11,
      angle: 70,
      spread: spread,
      ticks: 100,
      scalar: 0.5,
      origin: { x: 0, y: 0.8 },
      colors: colors,
    });

    confetti({
      particleCount: 5,
      startVelocity: 11,
      angle: 110,
      spread: spread,
      ticks: 100,
      scalar: 0.5,
      origin: { x: 1, y: 0.8 },
      colors: colors,
    });

    if (Date.now() < end) {
      requestAnimationFrame(sideCannon);
    }
  };

  requestAnimationFrame(sideCannon);
};

export const Confetti = {
  triggerSideCannon,
};
