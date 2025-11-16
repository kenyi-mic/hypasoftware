// components/home/HeroSection.tsx
"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";

const HeroSection = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Force video to play if autoplay is blocked
    const video = videoRef.current;
    if (video) {
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Autoplay was prevented, show fallback
          setVideoError(true);
        });
      }
    }
  }, []);

  const handleVideoError = () => {
    setVideoError(true);
    setIsVideoLoaded(false);
  };

  const handleVideoLoad = () => {
    setIsVideoLoaded(true);
    setVideoError(false);
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        {/* Fallback gradient background - always visible */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-gray-900"></div>

        {/* Video element */}
        {!videoError && (
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            onLoadedData={handleVideoLoad}
            onError={handleVideoError}
            className={`w-full h-full object-cover transition-opacity duration-1000 ${
              isVideoLoaded ? "opacity-40" : "opacity-0"
            }`}
          >
            {/* Try multiple video sources and formats */}
            <source src="/videos/hero-background.mp4" type="video/mp4" />
            <source src="/videos/hero-background.webm" type="video/webm" />
            <source src="/videos/hero-background.ogg" type="video/ogg" />
            {/* Fallback text for browsers that don't support video */}
            Your browser does not support the video tag.
          </video>
        )}

        {/* Enhanced overlay gradients */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/60 to-blue-900"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/40 to-purple-900/40"></div>

        {/* Additional overlay for better text readability */}
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Animated badge */}
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8 animate-fade-in">
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse mr-2"></span>
          <span className="text-sm font-medium">
            Transforming Education with Technology
          </span>
        </div>

        {/* Main heading */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 animate-slide-up">
          <span className="bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
            Education
          </span>
          <br />
          <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Reimagined
          </span>
        </h1>

        {/* Subheading */}
        <p className="text-xl sm:text-2xl lg:text-3xl text-blue-100 mb-8 max-w-4xl mx-auto animate-slide-up [animation-delay:200ms]">
          Empowering educators, engaging students, and connecting parents
          through
          <span className="text-white font-semibold">
            {" "}
            innovative software solutions
          </span>
        </p>

        {/* Description */}
        <p className="text-lg text-gray-200 mb-12 max-w-3xl mx-auto animate-slide-up [animation-delay:300ms]">
          Hypasoftware builds cutting-edge educational technology that
          simplifies complex processes, enhances learning experiences, and
          creates seamless connections between teachers, students, and parents
          in today&apos;s digital world.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up [animation-delay:400ms]">
          <Link
            href="/demo"
            className="group relative px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
          >
            <span className="relative z-10">Get Started Free</span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </Link>

          <Link
            href="/products"
            className="px-8 py-4 border-2 border-white/30 hover:border-white/50 text-white font-semibold rounded-xl backdrop-blur-sm transition-all duration-300 transform hover:scale-105"
          >
            View Our Products
          </Link>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2"></div>
          </div>
        </div>
      </div>

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse [animation-delay:1000ms]"></div>
      </div>

      {/* Debug info - remove in production */}
      {process.env.NODE_ENV === "development" && (
        <div className="absolute top-4 left-4 z-50 bg-black/80 text-white p-2 rounded text-xs">
          Video: {isVideoLoaded ? "Loaded" : "Loading"} | Error:{" "}
          {videoError ? "Yes" : "No"}
        </div>
      )}
    </section>
  );
};

export default HeroSection;
