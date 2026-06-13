"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Navigation from "../../components/Navigation";
import InteractiveCanvas from "../../components/InteractiveCanvas";

const rows = [
  { left: "Charles", right: "Copsey", slug: "charles-copsey" },
  { left: "Christelle", right: "de Castro", slug: "christelle-de-castro" },
  { left: "Meg", right: "Gamez", slug: "meg-gamez" },
  { left: "Øcean", right: "Jude", slug: "ocean-jude" },
  { left: "James", right: "Lees", slug: "james-lees" },
  { left: "Maya", right: "Margolina", slug: "maya-margolina" },
  { left: "John", right: "O'Hagan", slug: "john-o-hagan" },
  { left: "Magellan", right: "Rubin", slug: "magellan-rubin" },
  { left: "Jasper", right: "Soloff", slug: "jasper-soloff" },
];

const centerRows = [
  { name: "Anton Watts", slug: "anton-watts" },
  { name: "Jonathan Zames", slug: "jonathan-zames" },
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

export default function CollaboratorsListing() {
  const [hoveredWord, setHoveredWord] = useState<{ row: number; side: "left" | "right" | "center" } | null>(null);

  // V-shape left/right margin offset percentages based on row index
  const getOffset = (idx: number) => {
    const startOffset = 6;
    const endOffset = 38;
    const offset = startOffset + (idx / 8) * (endOffset - startOffset);
    return `${offset}vw`;
  };

  return (
    <main className="min-h-screen bg-brand-dark text-white select-none relative pt-36 pb-36 flex flex-col justify-center items-center overflow-hidden">
      <Navigation />
      <InteractiveCanvas />

      {/* V-shape Roster Container */}
      <section className="relative z-20 w-full flex flex-col gap-1 md:gap-2">
        {rows.map((row, index) => (
          <div key={index} className="flex justify-between items-center w-full py-1">
            {/* Left name */}
            <div
              style={{ marginLeft: getOffset(index) }}
              className="overflow-hidden"
            >
              <motion.div
                initial={{ y: "150%" }}
                animate={{ y: "0%" }}
                transition={{
                  duration: 0.8,
                  ease: [0.76, 0, 0.24, 1],
                  delay: index * 0.04,
                }}
              >
                <Link
                  href={`/collaborators/${row.slug}`}
                  onMouseEnter={() => setHoveredWord({ row: index, side: "left" })}
                  onMouseLeave={() => setHoveredWord(null)}
                  className="font-title text-xl md:text-5xl tracking-tighter uppercase inline-block hover:text-brand-blue transition-colors duration-200"
                >
                  <ScrambleText
                    text={row.left}
                    isHovered={hoveredWord?.row === index && hoveredWord?.side === "left"}
                  />
                </Link>
              </motion.div>
            </div>

            {/* Right name */}
            <div
              style={{ marginRight: getOffset(index) }}
              className="overflow-hidden"
            >
              <motion.div
                initial={{ y: "150%" }}
                animate={{ y: "0%" }}
                transition={{
                  duration: 0.8,
                  ease: [0.76, 0, 0.24, 1],
                  delay: index * 0.04,
                }}
              >
                <Link
                  href={`/collaborators/${row.slug}`}
                  onMouseEnter={() => setHoveredWord({ row: index, side: "right" })}
                  onMouseLeave={() => setHoveredWord(null)}
                  className="font-title text-xl md:text-5xl tracking-tighter uppercase inline-block hover:text-brand-blue transition-colors duration-200 text-right"
                >
                  <ScrambleText
                    text={row.right}
                    isHovered={hoveredWord?.row === index && hoveredWord?.side === "right"}
                  />
                </Link>
              </motion.div>
            </div>
          </div>
        ))}

        {/* Center/Bottom names */}
        <div className="flex flex-col items-center justify-center gap-1 md:gap-2 mt-1 md:mt-2">
          {centerRows.map((row, idx) => (
            <div key={row.slug} className="overflow-hidden py-1">
              <motion.div
                initial={{ y: "150%" }}
                animate={{ y: "0%" }}
                transition={{
                  duration: 0.8,
                  ease: [0.76, 0, 0.24, 1],
                  delay: (rows.length + idx) * 0.04,
                }}
              >
                <Link
                  href={`/collaborators/${row.slug}`}
                  onMouseEnter={() => setHoveredWord({ row: rows.length + idx, side: "center" })}
                  onMouseLeave={() => setHoveredWord(null)}
                  className="font-title text-xl md:text-5xl tracking-tighter uppercase inline-block hover:text-brand-blue transition-colors duration-200"
                >
                  <ScrambleText
                    text={row.name}
                    isHovered={hoveredWord?.row === rows.length + idx && hoveredWord?.side === "center"}
                  />
                </Link>
              </motion.div>
            </div>
          ))}
        </div>
      </section>

      {/* Warning Text fixed in bottom right corner */}
      <div className="fixed bottom-8 right-12 z-20 pointer-events-none text-right">
        <p className="text-[10px] text-brand-blue uppercase tracking-widest font-semibold select-none max-w-[280px]">
          Collaborators are not represented by Native Content
        </p>
      </div>
    </main>
  );
}
