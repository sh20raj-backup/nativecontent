"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Navigation from "../components/Navigation";
import InteractiveCanvas from "../components/InteractiveCanvas";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

// Video project list with real lightweight streaming links harvested from DatoCMS assets
const projects = [
  {
    id: "wrapbook",
    title: "The Directors of 2025",
    client: "The WrapBook",
    director: "Eva Michon",
    directorSlug: "eva-michon",
    videoUrl: "https://stream.mux.com/K5vHiVOA007I1Rv1HfRRYfm32q3fgbbnM/medium.mp4",
  },
  {
    id: "toyota",
    title: "Imagine",
    client: "Toyota",
    director: "Tristan Holmes",
    directorSlug: "tristan-holmes",
    videoUrl: "https://stream.mux.com/3J3igVyISyWQ3nQLt02vwf00c3Dy2KE3ps/medium.mp4",
  },
  {
    id: "air-jordan",
    title: "Revolution",
    client: "Air Jordan",
    director: "Christo Anesti",
    directorSlug: "christo-anesti",
    videoUrl: "https://stream.mux.com/qq1NsaEli01wSI00cM2WYe5Bi3RWdDEPKm/medium.mp4",
  },
  {
    id: "vera-bradley",
    title: "Most Perfect Couple",
    client: "Vera Bradley",
    director: "Eva Michon",
    directorSlug: "eva-michon",
    videoUrl: "https://stream.mux.com/Af00VCSk01iyrimhWFqMLbCZjDy4aMfdVk/medium.mp4",
  },
  {
    id: "smartfood",
    title: "Park",
    client: "Smartfood",
    director: "John O'Hagan",
    directorSlug: "john-o-hagan",
    videoUrl: "https://stream.mux.com/1fGD3stl6jBNKwSjxVSIaXX5qvn93bfs/medium.mp4",
  },
  {
    id: "red-robin",
    title: "Fun Guy",
    client: "Red Robin",
    director: "Jonathan Zames",
    directorSlug: "jonathan-zames",
    videoUrl: "https://stream.mux.com/OBRVdDHRAolOO02XtznIUAB6kPucNBpNU/medium.mp4",
  },
];

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div ref={containerRef} className="relative bg-brand-dark text-white select-none overflow-x-hidden">
      <Navigation />
      <InteractiveCanvas />

      {/* Hero Section - Sticky Layer */}
      <div className="relative h-screen w-full" style={{ zIndex: 1 }}>
        <section className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
          {/* Background Video */}
          <div className="absolute inset-0 z-0">
            <video
              src="https://stream.mux.com/TeI01Tg4SyUP1sGFxNkmfYgckESI3GNwZ/medium.mp4"
              loop
              muted
              autoPlay
              playsInline
              className="w-full h-full object-cover brightness-50"
            />
          </div>

          {/* SVG Logo Knockout Mask */}
          <div className="absolute inset-0 z-10 flex items-center justify-center bg-brand-dark/25 pointer-events-none">
            <svg
              viewBox="0 0 1201 473"
              className="w-[85vw] md:w-[60vw] max-w-[1200px] h-auto text-brand-dark fill-current opacity-90 transition-transform duration-500"
              style={{
                transform: `scale(${1 + scrollY * 0.0008})`,
              }}
            >
              <defs>
                <mask id="logoKnockout">
                  <rect x="-1000" y="-1000" width="3200" height="2473" fill="white" />
                  <path
                    fill="black"
                    d="M 308.8 0 C 316.911 0 324.618 3.2989 330.18 9.1291 L 453.937 138.856 C 472.294 158.098 504.737 145.105 504.737 118.511 L 504.737 29.4737 C 504.737 13.1958 517.932 0 534.21 0 L 1171 0 C 1187.28 0 1200.47 13.1958 1200.47 29.4737 L 1200.47 188.421 C 1200.47 204.699 1187.28 217.895 1171 217.895 L 800.529 217.895 C 790.355 217.895 782.107 226.142 782.107 236.316 C 782.107 246.489 790.355 254.737 800.529 254.737 L 1171 254.737 C 1187.28 254.737 1200.47 267.933 1200.47 284.21 L 1200.47 443.158 C 1200.47 459.436 1187.28 472.632 1171 472.632 L 508.556 472.632 C 500.501 472.632 492.798 469.336 487.236 463.51 L 361.845 332.156 C 343.485 312.923 311.052 325.918 311.052 352.508 L 311.052 443.158 C 311.052 459.436 297.857 472.632 281.579 472.632 L 29.4737 472.632 C 13.1958 472.632 0 459.436 0 443.158 L 0 29.4737 C 0 13.1958 13.1959 0 29.4737 0 Z"
                  />
                </mask>
              </defs>
              <rect x="-1000" y="-1000" width="3200" height="2473" mask="url(#logoKnockout)" />
            </svg>
          </div>

          {/* Foreground Title overlay */}
          <div className="absolute z-20 inset-0 flex flex-col items-center justify-between py-12 md:py-16 mix-blend-difference text-white">
            <div /> {/* Spacer */}
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-center"
            >
              <h1 className="font-title text-4xl md:text-8xl tracking-tight leading-none mb-4 select-none">
                NATIVE CONTENT
              </h1>
              <p className="text-xs md:text-sm font-semibold tracking-widest uppercase text-brand-gray/80">
                Creative Production Studio
              </p>
            </motion.div>

            {/* Scroll Cue */}
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="flex flex-col items-center gap-2 text-[10px] tracking-widest uppercase text-brand-gray"
            >
              Scroll to view projects
              <div className="w-[1px] h-8 bg-brand-gray/50" />
            </motion.div>
          </div>
        </section>
      </div>

      {/* Card Stacking Parallax Portfolio Sections */}
      <div className="relative">
        {projects.map((project, index) => {
          return (
            <div
              key={project.id}
              className="relative h-screen w-full"
              style={{ zIndex: index + 2 }}
            >
              <div className="sticky top-0 h-screen w-full overflow-hidden">
                {/* Background Video */}
                <video
                  src={project.videoUrl}
                  loop
                  muted
                  autoPlay
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover brightness-[0.45]"
                />

                {/* Left/Right Text Links Overlay (Sticky with the video section) */}
                <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 px-6 md:px-16 flex justify-between items-center z-10 mix-blend-difference">
                  {/* Left Side: Client Name */}
                  <h2 className="font-title text-2xl md:text-6xl tracking-tighter uppercase text-white hover:text-brand-blue transition-colors duration-200 cursor-pointer select-none">
                    <Link href={`/project/${project.id}`}>
                      {project.client}
                    </Link>
                  </h2>

                  {/* Right Side: Director */}
                  <div className="text-right">
                    <Link
                      href={`/directors/${project.directorSlug}`}
                      className="group font-title text-xs md:text-lg uppercase text-white hover:text-brand-blue transition-colors duration-200 flex items-center gap-2"
                    >
                      Directed by {project.director}
                      <ArrowUpRight
                        size={16}
                        className="text-brand-gray group-hover:text-brand-blue transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-250"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Footer / Contact Cue - Overlays the last stuck card */}
      <footer className="relative z-[100] bg-brand-dark/95 border-t border-white/5 py-24 px-6 md:px-16 flex flex-col items-center justify-center gap-8">
        <div className="text-center flex flex-col gap-3 max-w-lg">
          <h2 className="font-title text-xl md:text-3xl tracking-tight">
            Let's Collaborate
          </h2>
          <p className="text-xs md:text-sm text-brand-gray leading-relaxed">
            By establishing open dialogue where mutual trust is key, we build long-term relationships with brands and creative talents.
          </p>
        </div>

        <Link
          href="/contact"
          className="group flex items-center gap-3 px-8 py-4 bg-white text-black font-title text-xs tracking-widest uppercase hover:bg-brand-blue hover:text-white transition-colors duration-300 rounded-full"
        >
          Get in Touch
          <ArrowUpRight size={14} className="transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200" />
        </Link>

        {/* Social Links & Copyright */}
        <div className="w-full flex flex-col md:flex-row justify-between items-center gap-4 mt-16 pt-8 border-t border-white/5 text-[10px] uppercase tracking-wider text-brand-gray">
          <span>© {new Date().getFullYear()} Native Content. All Rights Reserved.</span>
          <div className="flex gap-6">
            <a
              href="https://www.instagram.com/nativecontent/"
              target="_blank"
              className="hover:text-white transition-colors duration-200"
            >
              Instagram
            </a>
            <a
              href="https://www.linkedin.com/company/native-content-la/"
              target="_blank"
              className="hover:text-white transition-colors duration-200"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
