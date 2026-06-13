import Link from "next/link";
import Navigation from "../../components/Navigation";
import InteractiveCanvas from "../../components/InteractiveCanvas";
import { ArrowLeft, Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";

export default function ContactPage() {
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
          <span className="text-xs uppercase tracking-widest text-brand-blue font-bold">Contact / Inquiries</span>
          <h1 className="font-title text-4xl md:text-8xl tracking-tighter uppercase leading-none">SAY HELLO</h1>
        </div>

        {/* Contact Details Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-4">
          
          {/* General Inquiries */}
          <div className="flex flex-col gap-6 bg-white/5 border border-white/5 rounded-xl p-8 hover:border-white/10 transition-all duration-300">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-brand-blue">
              General Inquiries
            </h2>
            
            <div className="flex flex-col gap-4">
              <a
                href="mailto:hello@nativecontent.com"
                className="group flex items-center gap-3 text-white/80 hover:text-brand-blue transition-colors duration-200 text-sm font-medium"
              >
                <Mail size={16} className="text-brand-gray group-hover:text-brand-blue" />
                hello@nativecontent.com
                <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200" />
              </a>

              <a
                href="tel:+13105550199"
                className="group flex items-center gap-3 text-white/80 hover:text-brand-blue transition-colors duration-200 text-sm font-medium"
              >
                <Phone size={16} className="text-brand-gray group-hover:text-brand-blue" />
                +1 (310) 555-0199
                <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200" />
              </a>

              <div className="flex items-start gap-3 text-white/80 text-sm font-medium">
                <MapPin size={16} className="text-brand-gray mt-1 shrink-0" />
                <span>
                  8424 Santa Monica Blvd<br />
                  Suite 430<br />
                  Los Angeles, CA 90069
                </span>
              </div>
            </div>
          </div>

          {/* Social Presence */}
          <div className="flex flex-col gap-6 bg-white/5 border border-white/5 rounded-xl p-8 hover:border-white/10 transition-all duration-300">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-brand-blue">
              Follow Our Work
            </h2>
            
            <p className="text-xs text-brand-gray leading-relaxed">
              We post behind-the-scenes material, director announcements, and completed spots on our social media networks.
            </p>

            <div className="flex flex-col gap-3 mt-2">
              <a
                href="https://www.instagram.com/nativecontent/"
                target="_blank"
                className="group flex items-center justify-between border-b border-white/5 pb-2 text-sm text-white/80 hover:text-brand-blue transition-colors duration-200 font-medium"
              >
                Instagram
                <ArrowUpRight size={16} className="text-brand-gray group-hover:text-brand-blue transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200" />
              </a>

              <a
                href="https://www.linkedin.com/company/native-content-la/"
                target="_blank"
                className="group flex items-center justify-between border-b border-white/5 pb-2 text-sm text-white/80 hover:text-brand-blue transition-colors duration-200 font-medium"
              >
                LinkedIn
                <ArrowUpRight size={16} className="text-brand-gray group-hover:text-brand-blue transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
