import { useState, useEffect } from "react";
import useTypewriter from "react-typewriter-hook";

const phrases = [
  "Adebiyi Kabir",
  "A Full-Stack Developer",
  "A Software Engineer"
];

export default function TypewriterLoop() {
  const [index, setIndex] = useState(0);
  const phrase = phrases[index % phrases.length];
  const typing = useTypewriter(phrase);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIndex((prev) => prev + 1);
    }, 2200);
    return () => clearTimeout(timeout);
  }, [typing]);

  // Show underscore only when typing is empty (between phrases)
  return (
    <span>
      {typing ? typing : <span className="text-teal-400">_</span>}
    </span>
  );
}
