"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Navigation from "../../components/Navigation";
import InteractiveCanvas from "../../components/InteractiveCanvas";

const directors = [
  { name: "Christo Anesti", slug: "christo-anesti" },
  { name: "Sorrel Brae", slug: "sorrel-brae" },
  { name: "Melanie Chung", slug: "melanie-chung" },
  { name: "Tristan Holmes", slug: "tristan-holmes" },
  { name: "Ben Lankester", slug: "ben-lankester" },
  { name: "Eva Michon", slug: "eva-michon" },
  { name: "Robin Nishio", slug: "robin-nishio" },
  { name: "Jörn Threlfall", slug: "jorn-threlfall" },
  { name: "Adrian Vieni", slug: "adrian-vieni" },
];

function ScrambleText({ text, isHovered }: { text: string; isHovered: boolean }) {
  const [displayText, setDisplayText] = useState(text);
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%&()_+{}[]:;?/";

  useEffect(() => {
    if (!isHovered) {
      setDisplayText(text);
      return;
    }

    let iterations = 0;
    const interval = setInterval(() => {
      setDisplayText(() =>
        text
          .split("")
          .map((char, index) => {
            if (char === " ") return " ";
            if (index < iterations) return text[index];
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join("")
      );

      iterations += 1 / 3;
      if (iterations >= text.length) {
        setDisplayText(text);
        clearInterval(interval);
      }
    }, 20);

    return () => clearInterval(interval);
  }, [isHovered, text]);

  return <span>{displayText}</span>;
}

export default function DirectorsListing() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <main className="min-h-screen bg-white text-black select-none relative pt-32 pb-24 flex items-center justify-center">
      <Navigation />
      <InteractiveCanvas />

      {/* Roster Listing Container */}
      <section className="relative z-20 w-full max-w-4xl px-6 md:px-12 flex flex-col items-center justify-center">
        <ul className="w-full flex flex-col gap-4 text-center">
          {directors.map((director, index) => (
            <li key={director.slug} className="overflow-hidden py-1">
              <motion.div
                initial={{ y: "150%" }}
                animate={{ y: "0%" }}
                transition={{
                  duration: 0.8,
                  ease: [0.76, 0, 0.24, 1],
                  delay: index * 0.05,
                }}
              >
                <Link
                  href={`/directors/${director.slug}`}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className="font-title text-2xl md:text-5xl tracking-tighter uppercase inline-block hover:text-brand-blue transition-colors duration-200"
                >
                  <ScrambleText
                    text={director.name}
                    isHovered={hoveredIndex === index}
                  />
                </Link>
              </motion.div>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
