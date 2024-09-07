"use client";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";

export interface IRedoAnimTextProps {
  delay: number;
}

export default function RedoAnimText({ delay }: IRedoAnimTextProps) {
  const textIndex = useMotionValue(0);
  const texts = [
    "Experienced Frontend Developer with 5 years of expertise in React.js, Redux, JavaScript, TypeScript, SASS, Webpack and more.",
    "Experienced in Agile development and leveraging Git Copilot within organizational privacy guidelines.",
    "Expert in crafting responsive, scalable React components, leveraging service workers for web push notifications and optimizing performance through strategic API response caching.",
    "Specialized in developing scalable, high-performance micro frontend applications, with deep expertise in API orchestration, AEM and analytics calls integrations.",
    "Adept at collaborating with cross-functional teams, including UX, QA, API, analytics teams, and product owners"
  ];

  const baseText = useTransform(textIndex, (latest) => texts[latest] || "");
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const displayText = useTransform(rounded, (latest) =>
    baseText.get().slice(0, latest)
  );
  const updatedThisRound = useMotionValue(true);

  useEffect(() => {
    animate(count, 180, {
      type: "tween",
      delay: delay,
      duration: 1,
      ease: "easeIn",
      repeat: Infinity,
      repeatType: "reverse",
      repeatDelay: 1,
      onUpdate(latest) {
        if (updatedThisRound.get() === true && latest > 0) {
          updatedThisRound.set(false);
        } else if (updatedThisRound.get() === false && latest === 0) {
          if (textIndex.get() === texts.length - 1) {
            textIndex.set(0);
          } else {
            textIndex.set(textIndex.get() + 1);
          }
          updatedThisRound.set(true);
        }
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <motion.span className="inline text-md text-zinc-400">{displayText}</motion.span>;
}
