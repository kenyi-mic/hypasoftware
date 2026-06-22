// components/home/HeroSection.tsx
"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const HeroSection = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [isHovered, setIsHovered] = useState<string | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      const playVideo = async () => {
        try {
          await video.play();
          setIsVideoLoaded(true);
        } catch (error) {
          console.log("Autoplay prevented, showing fallback");
          setIsVideoLoaded(true);
        }
      };
      playVideo();
    }
  }, []);

  const handleVideoLoad = () => setIsVideoLoaded(true);

  // Sophisticated color palette
  const colors = {
    surface: {
      primary: "from-slate-950 via-indigo-950 to-violet-950",
      secondary: "from-slate-900/95 via-indigo-900/90 to-violet-900/95",
      overlay: "from-transparent via-indigo-950/80 to-slate-950/95",
    },
    accent: {
      gradient: "from-violet-400 via-indigo-400 to-sky-400",
      hover: "from-violet-500 via-indigo-500 to-sky-500",
      glow: "from-violet-400/20 via-indigo-400/20 to-sky-400/20",
    },
    text: {
      primary: "from-white via-slate-100 to-indigo-100",
      secondary: "from-indigo-200 via-violet-200 to-sky-200",
      muted: "text-slate-300/90",
    },
  };

  return (
    <section className="relative h-screen py-30 flex items-center justify-center overflow bg-slate-950">
      {/* Sophisticated Video Background */}
      <div className="absolute inset-0 z-0">
        {/* Multi-layered gradient background */}
        <div
          className={`absolute inset-0 bg-gradient-to-br ${colors.surface.primary}`}
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(99,102,241,0.15),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(139,92,246,0.15),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(56,189,248,0.1),transparent_70%)]" />
        </div>

        {/* Advanced video layer with blend modes */}
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          onLoadedData={handleVideoLoad}
          onError={() => setIsVideoLoaded(true)}
          className={`w-full h-full object-cover transition-all duration-1000 ease-out ${
            isVideoLoaded ? "opacity-25 mix-blend-soft-light" : "opacity-0"
          }`}
        >
          <source
            src="https://assets.mixkit.co/videos/preview/mixkit-tree-with-yellow-flowers-1173-large.mp4"
            type="video/mp4"
          />
          <source src="/videos/hero-background.mp4" type="video/mp4" />
        </video>

        {/* Sophisticated overlay layers */}
        <div
          className={`absolute inset-0 bg-gradient-to-b ${colors.surface.overlay}`}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-950/40 via-transparent to-violet-950/40" />

        {/* Dynamic grain texture overlay */}
        <div className="absolute inset-0 opacity-[0.015] mix-blend-overlay">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJub2lzZSI+PGZlVHVyYnVsZW5jZSB0eXBlPSJmcmFjdGFsTm9pc2UiIGJhc2VGcmVxdWVuY3k9Ii42NSIgbnVtT2N0YXZlcz0iMyIgc3RpdGNoVGlsZXM9InN0aXRjaCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNub2lzZSkiIG9wYWNpdHk9IjAuNCIvPjwvc3ZnPg==')] opacity-50" />
        </div>
      </div>

      {/* Content Layer with Advanced Animations */}
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: isVideoLoaded ? 1 : 0,
            y: isVideoLoaded ? 0 : 20,
          }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
        >
          {/* Main Heading with Gradient Typography */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-5xl sm:text-7xl lg:text-8xl font-bold mb-8 tracking-tight"
          >
            <span
              className={`bg-gradient-to-r ${colors.accent.gradient} bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]`}
            >
              Education
            </span>
            <br />
            <span
              className={`bg-gradient-to-r ${colors.accent.gradient} bg-clip-text text-transparent opacity-90`}
            >
              Reimagined
            </span>
          </motion.h1>

          {/* Subheading with Enhanced Typography */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-xl sm:text-2xl lg:text-3xl text-slate-200/90 mb-8 max-w-4xl mx-auto leading-relaxed font-light tracking-wide"
          >
            Empowering educators, engaging students, and connecting parents
            through
            <span
              className={`bg-gradient-to-r ${colors.accent.gradient} bg-clip-text text-transparent font-semibold`}
            >
              {" "}
              innovative software solutions
            </span>
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-lg text-slate-400/90 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Hypasoftware builds cutting-edge educational technology that
            simplifies complex processes, enhances learning experiences, and
            creates seamless connections between teachers, students, and parents
            in today&apos;s digital world.
          </motion.p>

          {/* Advanced CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            {/* Primary CTA */}
            <Link
              href="/demo"
              onMouseEnter={() => setIsHovered("primary")}
              onMouseLeave={() => setIsHovered(null)}
              className="group relative inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-indigo-600 to-violet-600 text-white font-semibold rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-indigo-500/25 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-indigo-950"
            >
              <span className="relative z-10 flex items-center gap-2">
                Get Started Free
                <svg
                  className={`w-5 h-5 transition-transform duration-300 ${
                    isHovered === "primary" ? "translate-x-1" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-violet-500 rounded-2xl opacity-0 group-hover:opacity-20 blur transition-opacity duration-300" />
            </Link>

            {/* Secondary CTA */}
            <Link
              href="/products"
              onMouseEnter={() => setIsHovered("secondary")}
              onMouseLeave={() => setIsHovered(null)}
              className="group relative inline-flex items-center gap-2 px-8 py-4 border border-white/10 hover:border-white/20 text-white font-semibold rounded-2xl backdrop-blur-xl bg-white/[0.05] transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-black/20 hover:bg-white/[0.08]"
            >
              <span className="relative z-10 flex items-center gap-2">
                View Our Products
                <svg
                  className={`w-5 h-5 transition-transform duration-300 ${
                    isHovered === "secondary" ? "translate-x-1" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </span>
            </Link>
          </motion.div>

          {/* Refined Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="w-8 h-12 border-2 border-white/20 rounded-full flex justify-center p-1.5 backdrop-blur-sm"
            >
              <motion.div
                animate={{ y: [0, 16, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="w-1.5 h-1.5 bg-gradient-to-b from-white to-white/50 rounded-full"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </AnimatePresence>

      {/* Advanced Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-gradient-to-r from-indigo-500/20 to-violet-500/20 rounded-full blur-[128px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-gradient-to-r from-sky-500/20 to-indigo-500/20 rounded-full blur-[128px]"
        />
        <motion.div
          animate={{
            scale: [1, 0.9, 1],
            opacity: [0.05, 0.1, 0.05],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-violet-500/10 to-indigo-500/10 rounded-full blur-[128px]"
        />
      </div>

      {/* Global Styles for Animations */}
      <style jsx global>{`
        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        .animate-gradient {
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
