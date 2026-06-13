import Link from "next/link";
import Navigation from "../../components/Navigation";
import InteractiveCanvas from "../../components/InteractiveCanvas";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-brand-dark text-white select-none relative pt-32 pb-24">
      <Navigation />
      <InteractiveCanvas />

      <div className="max-w-4xl mx-auto px-6 md:px-12 flex flex-col gap-12 z-20 relative">
        {/* Back Link */}
        <Link
          href="/"
          className="group flex items-center gap-2 text-xs uppercase tracking-widest text-brand-gray hover:text-brand-blue transition-colors duration-200 w-fit"
        >
          <ArrowLeft size={14} className="transform group-hover:-translate-x-1 transition-transform duration-200" />
          Back to Home
        </Link>

        {/* Header Name */}
        <div className="flex flex-col gap-2">
          <span className="text-xs uppercase tracking-widest text-brand-blue font-bold">About Us / Story</span>
          <h1 className="font-title text-4xl md:text-8xl tracking-tighter uppercase leading-none">NATIVE CONTENT</h1>
        </div>

        {/* Content sections */}
        <div className="flex flex-col gap-8 text-sm md:text-base leading-relaxed text-white/80 max-w-2xl font-light mt-4">
          <p>
            Since opening our doors in 2008, we've worked with a wide range of local and global brands. By establishing an open dialogue where mutual trust is key, many of our partners and clients keep coming back to us, leading to highly successful, long-term creative relationships.
          </p>
          <p>
            We operate as a dynamic content studio, representing a roster of internationally acclaimed directors and creative collaborators. We bridge the gap between traditional broadcast production and the fast-paced modern digital media landscape.
          </p>
          <p>
            Every project we craft represents a commitment to high-end visual aesthetics, distinct narrative voices, and production excellence.
          </p>
        </div>

        {/* Highlight Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 border-t border-white/5 pt-8">
          <div className="flex flex-col gap-2">
            <span className="text-[10px] uppercase tracking-widest text-brand-blue font-bold">01 / TRUST</span>
            <p className="text-xs text-brand-gray leading-relaxed">
              We base all our partnerships on transparency, direct communication, and shared creative aspirations.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-[10px] uppercase tracking-widest text-brand-blue font-bold">02 / QUALITY</span>
            <p className="text-xs text-brand-gray leading-relaxed">
              From global television spots to digital campaigns, our commitment to visual and narrative quality is absolute.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-[10px] uppercase tracking-widest text-brand-blue font-bold">03 / ROSTER</span>
            <p className="text-xs text-brand-gray leading-relaxed">
              We scout and foster unique creative voices, providing a robust platform for award-winning commercial output.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
