// components/home/StatsSection.tsx
"use client";

import { useState, useEffect } from "react";
import { Stat } from "@/types/home";

const StatsSection = () => {
  const [counters, setCounters] = useState([0, 0, 0, 0]);

  const stats: Stat[] = [
    {
      id: "schools",
      number: "500",
      suffix: "+",
      label: "Schools Empowered",
    },
    {
      id: "teachers",
      number: "25",
      suffix: "K+",
      label: "Teachers Supported",
    },
    {
      id: "students",
      number: "1",
      suffix: "M+",
      label: "Students Impacted",
    },
    {
      id: "countries",
      number: "15",
      suffix: "+",
      label: "Countries Served",
    },
  ];

  useEffect(() => {
    const duration = 2000; // 2 seconds
    const steps = 60;
    const stepDuration = duration / steps;

    stats.forEach((stat, index) => {
      const target = parseInt(stat.number);
      let current = 0;
      const increment = target / steps;

      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target;
          clearInterval(timer);
        }
        setCounters((prev) => {
          const newCounters = [...prev];
          newCounters[index] = Math.floor(current);
          return newCounters;
        });
      }, stepDuration);

      return () => clearInterval(timer);
    });
  }, []);

  return (
    <section className="py-20 bg-linear-to-br from-blue-900 to-purple-900 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: "50px 50px",
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Trusted by Educational Institutions Worldwide
          </h2>
          <p className="text-xl text-blue-200 max-w-2xl mx-auto">
            Join thousands of schools and institutions that are transforming
            education with our innovative solutions.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={stat.id} className="text-center">
              <div className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-2">
                <span className="bg-linear-to-r from-white to-blue-200 bg-clip-text text-transparent">
                  {counters[index]}
                </span>
                <span className="bg-linear-to-r from-white to-blue-200 bg-clip-text text-transparent">
                  {stat.suffix}
                </span>
              </div>
              <div className="text-blue-200 font-semibold text-lg">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
