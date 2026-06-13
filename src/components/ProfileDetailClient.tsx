"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navigation from "./Navigation";
import InteractiveCanvas from "./InteractiveCanvas";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Plus, Minus } from "lucide-react";

// Mock portfolio works for each profile
const worksMap: Record<string, Array<{ title: string; client: string; url: string }>> = {
  default: [
    { title: "Imagine", client: "Toyota", url: "https://stream.mux.com/3J3igVyISyWQ3nQLt02vwf00c3Dy2KE3ps/medium.mp4" },
    { title: "Revolution", client: "Air Jordan", url: "https://stream.mux.com/qq1NsaEli01wSI00cM2WYe5Bi3RWdDEPKm/medium.mp4" },
    { title: "The Perfect Pour", client: "Patron", url: "https://stream.mux.com/TeI01Tg4SyUP1sGFxNkmfYgckESI3GNwZ/medium.mp4" },
  ],
  "eva-michon": [
    { title: "The Directors of 2025", client: "The WrapBook", url: "https://stream.mux.com/K5vHiVOA007I1Rv1HfRRYfm32q3fgbbnM.m3u8" },
    { title: "Most Perfect Couple", client: "Vera Bradley", url: "https://stream.mux.com/Af00VCSk01iyrimhWFqMLbCZjDy4aMfdVk/medium.mp4" },
  ],
  "jasper-soloff": [
    { title: "Olay x RuPaul's Drag Race", client: "Olay", url: "https://stream.mux.com/3J3igVyISyWQ3nQLt02vwf00c3Dy2KE3ps/medium.mp4" },
    { title: "Break Free", client: "Maybelline", url: "https://stream.mux.com/qq1NsaEli01wSI00cM2WYe5Bi3RWdDEPKm/medium.mp4" },
    { title: "Pete Davidson", client: "Paper Magazine", url: "https://stream.mux.com/TeI01Tg4SyUP1sGFxNkmfYgckESI3GNwZ/medium.mp4" },
  ]
};

interface ProfileDetailClientProps {
  name: string;
  slug: string;
  type: "director" | "collaborator";
}

export default function ProfileDetailClient({ name, slug, type }: ProfileDetailClientProps) {
  const [showInfo, setShowInfo] = useState(false);
  const works = worksMap[slug] || worksMap.default;
  const rightColumnRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = rightColumnRef.current;
    if (!container) return;

    const handleScroll = () => {
      const singleSetHeight = container.scrollHeight / 3;
      // Seamlessly wrap from bottom of 2nd set back to 1st set
      if (container.scrollTop >= singleSetHeight * 2) {
        container.scrollTop = container.scrollTop - singleSetHeight;
      }
      // Seamlessly wrap from top of 2nd set into 3rd set
      else if (container.scrollTop <= singleSetHeight * 0.5) {
        container.scrollTop = container.scrollTop + singleSetHeight;
      }
    };

    const initTimer = setTimeout(() => {
      const singleSetHeight = container.scrollHeight / 3;
      container.scrollTop = singleSetHeight;
      container.addEventListener("scroll", handleScroll);
    }, 100);

    return () => {
      clearTimeout(initTimer);
      container.removeEventListener("scroll", handleScroll);
    };
  }, [works]);

  // Split name to display first and last name in separate lines
  const nameParts = name.split(" ");
  const firstName = nameParts[0];
  const lastName = nameParts.slice(1).join(" ");

  return (
    <div className="min-h-screen bg-brand-dark text-white select-none relative font-sans overflow-hidden">
      <Navigation />
      <InteractiveCanvas />

      {/* Main Split Layout Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 min-h-screen w-full relative z-20">
        
        {/* Left Section: Sticky Profile Header */}
        <div className="md:col-span-7 h-auto md:h-screen sticky top-0 flex flex-col justify-between py-16 px-6 md:py-24 md:px-16 border-r border-white/5 bg-brand-dark/40 backdrop-blur-sm">
          
          {/* Back Nav Link */}
          <Link
            href={`/${type === "director" ? "directors" : "collaborators"}`}
            className="group flex items-center gap-2 text-xs uppercase tracking-widest text-brand-gray hover:text-brand-blue transition-colors duration-200 w-fit"
          >
            <ArrowLeft size={14} className="transform group-hover:-translate-x-1 transition-transform duration-200" />
            Back to {type === "director" ? "Directors" : "Collaborators"}
          </Link>

          {/* Huge Profile Name & Info Toggle */}
          <div className="flex flex-col gap-6 my-auto pt-16 pb-12 md:py-0">
            <h1 className="font-title text-4xl md:text-8xl tracking-tighter uppercase leading-[0.85] flex flex-col">
              <motion.span
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                {firstName}
              </motion.span>
              {lastName && (
                <motion.span
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                >
                  {lastName}
                </motion.span>
              )}
            </h1>

            {/* Expandable Information Panel */}
            <div className="flex flex-col gap-4 mt-2">
              <button
                onClick={() => setShowInfo(!showInfo)}
                className="flex items-center gap-2 text-xs uppercase tracking-widest text-brand-gray hover:text-white transition-colors duration-200 focus:outline-none w-fit font-semibold"
              >
                {showInfo ? <Minus size={14} className="text-brand-blue" /> : <Plus size={14} className="text-brand-blue" />}
                INFORMATION
              </button>

              <AnimatePresence>
                {showInfo && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="text-xs md:text-sm text-brand-gray leading-relaxed max-w-md bg-white/5 border border-white/5 rounded-lg p-4 mt-2">
                      {name} is an award-winning creative talent represented globally by Native Content. Specializing in high-end commercials, music videos, and cinematic visual narratives, their work pushes the limits of modern pacing and styling.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Left Footer Details */}
          <div className="flex gap-6 text-[10px] uppercase tracking-wider text-brand-gray">
            <a
              href="https://www.instagram.com/nativecontent/"
              target="_blank"
              className="hover:text-white transition-colors duration-200"
            >
              Instagram ↗
            </a>
            <a
              href="https://www.linkedin.com/company/native-content-la/"
              target="_blank"
              className="hover:text-white transition-colors duration-200"
            >
              LinkedIn ↗
            </a>
          </div>
        </div>

        {/* Right Section: Scrollable Portfolio Columns */}
        <div
          ref={rightColumnRef}
          className="md:col-span-5 py-16 px-6 md:py-24 md:px-12 flex flex-col gap-12 overflow-y-auto md:max-h-screen h-auto md:h-screen scrollbar-none"
        >
          {[...works, ...works, ...works].map((work, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="group flex flex-col gap-3 shrink-0"
            >
              {/* Media Frame */}
              <div className="aspect-video w-full rounded-xl overflow-hidden bg-black relative border border-white/5">
                <video
                  src={work.url}
                  loop
                  muted
                  autoPlay
                  playsInline
                  className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                />
              </div>

              {/* Title Card details */}
              <div className="flex justify-between items-center text-xs tracking-wider px-1">
                <span className="font-bold text-white/95 uppercase">{work.client}</span>
                <span className="text-brand-gray group-hover:text-brand-blue transition-colors duration-200 italic">
                  "{work.title}"
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
