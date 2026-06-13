"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

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

const collaborators = [
  { name: "Charles Copsey", slug: "charles-copsey" },
  { name: "Christelle de Castro", slug: "christelle-de-castro" },
  { name: "Meg Gamez", slug: "meg-gamez" },
  { name: "Øcean Jude", slug: "ocean-jude" },
  { name: "James Lees", slug: "james-lees" },
  { name: "Maya Margolina", slug: "maya-margolina" },
  { name: "John O'Hagan", slug: "john-o-hagan" },
  { name: "Magellan Rubin", slug: "magellan-rubin" },
  { name: "Jasper Soloff", slug: "jasper-soloff" },
  { name: "Anton Watts", slug: "anton-watts" },
  { name: "Jonathan Zames", slug: "jonathan-zames" },
];

// Helper scramble text component
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
    }, 25);

    return () => clearInterval(interval);
  }, [isHovered, text]);

  return <span>{displayText}</span>;
}

// Interactive Link with Hover Scramble
interface ScrambleLinkProps {
  href: string;
  text: string;
  target?: string;
  className?: string;
}

function ScrambleLink({ href, text, target, className = "" }: ScrambleLinkProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <Link
      href={href}
      target={target}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`${className} transition-colors duration-200 uppercase`}
    >
      <ScrambleText text={text} isHovered={hovered} />
    </Link>
  );
}

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSubMenu, setActiveSubMenu] = useState<"directors" | "collaborators" | null>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = (menu: "directors" | "collaborators") => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setActiveSubMenu(menu);
  };

  const handleMouseLeave = () => {
    timerRef.current = setTimeout(() => {
      setActiveSubMenu(null);
    }, 400);
  };

  return (
    <>
      {/* Primary Fixed Navigation Bar */}
      <header className="fixed top-0 left-0 right-0 z-[100] px-6 py-6 md:px-12 md:py-8 flex justify-between items-center mix-blend-difference text-white">
        <div className="flex items-center gap-12">
          {/* Logo Mark */}
          <Link href="/" className="group flex items-center">
            <svg
              width="40"
              height="16"
              viewBox="0 0 1201 473"
              fill="currentColor"
              className="text-white group-hover:text-brand-blue transition-colors duration-200"
            >
              <path d="M 308.8 0 C 316.911 0 324.618 3.2989 330.18 9.1291 L 453.937 138.856 C 472.294 158.098 504.737 145.105 504.737 118.511 L 504.737 29.4737 C 504.737 13.1958 517.932 0 534.21 0 L 1171 0 C 1187.28 0 1200.47 13.1958 1200.47 29.4737 L 1200.47 188.421 C 1200.47 204.699 1187.28 217.895 1171 217.895 L 800.529 217.895 C 790.355 217.895 782.107 226.142 782.107 236.316 C 782.107 246.489 790.355 254.737 800.529 254.737 L 1171 254.737 C 1187.28 254.737 1200.47 267.933 1200.47 284.21 L 1200.47 443.158 C 1200.47 459.436 1187.28 472.632 1171 472.632 L 508.556 472.632 C 500.501 472.632 492.798 469.336 487.236 463.51 L 361.845 332.156 C 343.485 312.923 311.052 325.918 311.052 352.508 L 311.052 443.158 C 311.052 459.436 297.857 472.632 281.579 472.632 L 29.4737 472.632 C 13.1958 472.632 0 459.436 0 443.158 L 0 29.4737 C 0 13.1958 13.1959 0 29.4737 0 Z" />
            </svg>
          </Link>

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center gap-8 text-[11px] font-bold tracking-widest uppercase">
            {/* Directors Link & Dropdown */}
            <div
              className="relative py-2 cursor-pointer select-none"
              onMouseEnter={() => handleMouseEnter("directors")}
              onMouseLeave={handleMouseLeave}
            >
              <ScrambleLink
                href="/directors"
                text="Directors"
                className={`${activeSubMenu === "directors" ? "text-brand-blue" : "hover:text-brand-blue"}`}
              />
              
              <AnimatePresence>
                {activeSubMenu === "directors" && (
                  <div className="absolute top-full left-0 pt-4 flex flex-col gap-1 w-max z-[99]">
                    {directors.map((item, index) => (
                      <div key={item.slug} className="overflow-hidden">
                        <motion.div
                          initial={{ y: "128%" }}
                          animate={{ y: "0%" }}
                          exit={{ y: "128%" }}
                          transition={{
                            duration: 0.6,
                            ease: [0.76, 0, 0.24, 1],
                            delay: index * 0.02,
                          }}
                        >
                          <Link
                            href={`/directors/${item.slug}`}
                            className="block py-1 text-[11px] font-bold uppercase tracking-wider text-white opacity-35 hover:text-brand-blue hover:opacity-100 transition-all duration-200"
                          >
                            <ScrambleText text={item.name} isHovered={true} />
                          </Link>
                        </motion.div>
                      </div>
                    ))}
                  </div>
                )}
              </AnimatePresence>
            </div>

            {/* Collaborators Link & Dropdown */}
            <div
              className="relative py-2 cursor-pointer select-none"
              onMouseEnter={() => handleMouseEnter("collaborators")}
              onMouseLeave={handleMouseLeave}
            >
              <ScrambleLink
                href="/collaborators"
                text="Collaborators"
                className={`${activeSubMenu === "collaborators" ? "text-brand-blue" : "hover:text-brand-blue"}`}
              />

              <AnimatePresence>
                {activeSubMenu === "collaborators" && (
                  <div className="absolute top-full left-0 pt-4 flex flex-col gap-1 w-max z-[99]">
                    {collaborators.map((item, index) => (
                      <div key={item.slug} className="overflow-hidden">
                        <motion.div
                          initial={{ y: "128%" }}
                          animate={{ y: "0%" }}
                          exit={{ y: "128%" }}
                          transition={{
                            duration: 0.6,
                            ease: [0.76, 0, 0.24, 1],
                            delay: index * 0.02,
                          }}
                        >
                          <Link
                            href={`/collaborators/${item.slug}`}
                            className="block py-1 text-[11px] font-bold uppercase tracking-wider text-white opacity-35 hover:text-brand-blue hover:opacity-100 transition-all duration-200"
                          >
                            <ScrambleText text={item.name} isHovered={true} />
                          </Link>
                        </motion.div>
                      </div>
                    ))}
                  </div>
                )}
              </AnimatePresence>
            </div>

            <ScrambleLink
              href="https://overturestudios.com/"
              target="_blank"
              text="Post"
              className="hover:text-brand-blue py-2"
            />
            <ScrambleLink href="/about" text="About" className="hover:text-brand-blue py-2" />
          </nav>
        </div>

        {/* Right items */}
        <div className="flex items-center gap-6 text-[11px] font-bold tracking-widest uppercase">
          <ScrambleLink href="/contact" text="Contact" className="hidden md:inline-block hover:text-brand-blue" />

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white hover:text-brand-blue focus:outline-none transition-colors duration-200"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Fullscreen Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[98] bg-brand-blue text-white flex flex-col justify-between p-8 md:hidden"
          >
            {/* Nav Menu Content */}
            <div className="flex flex-col gap-8 mt-24">
              <div className="flex flex-col gap-2">
                <span className="text-[10px] uppercase tracking-widest text-white/50 font-bold">Roster</span>
                <Link
                  href="/directors"
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-title text-4xl hover:text-black transition-colors duration-200"
                >
                  Directors
                </Link>
              </div>

              <div className="flex flex-col gap-2">
                <span className="text-[10px] uppercase tracking-widest text-white/50 font-bold">Network</span>
                <Link
                  href="/collaborators"
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-title text-4xl hover:text-black transition-colors duration-200"
                >
                  Collaborators
                </Link>
              </div>

              <div className="flex flex-col gap-6 font-title text-3xl mt-4">
                <Link
                  href="https://overturestudios.com/"
                  target="_blank"
                  className="hover:text-black transition-colors duration-200"
                >
                  Post
                </Link>
                <Link
                  href="/about"
                  onClick={() => setMobileMenuOpen(false)}
                  className="hover:text-black transition-colors duration-200"
                >
                  About
                </Link>
                <Link
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="hover:text-black transition-colors duration-200"
                >
                  Contact
                </Link>
              </div>
            </div>

            {/* Footer details in menu */}
            <div className="flex justify-between items-center border-t border-white/20 pt-6">
              <span className="text-[10px] uppercase tracking-wider text-white/60">
                © {new Date().getFullYear()} Native Content
              </span>
              <div className="flex gap-4">
                <a
                  href="https://www.instagram.com/nativecontent/"
                  target="_blank"
                  className="text-xs uppercase hover:text-black transition-colors duration-200"
                >
                  Instagram
                </a>
                <a
                  href="https://www.linkedin.com/company/native-content-la/"
                  target="_blank"
                  className="text-xs uppercase hover:text-black transition-colors duration-200"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
