// components/home/TestimonialsSection.tsx
"use client";

import { useState } from "react";
import { Testimonial } from "@/types/home";

const TestimonialsSection = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials: Testimonial[] = [
    {
      id: "principal-miller",
      quote:
        "Hypasoftware has revolutionized how our school operates. The management system saved us 20+ hours weekly in administrative tasks, allowing our staff to focus on what matters most - student success.",
      author: "Sarah Miller",
      role: "Principal, Greenwood High School",
      avatar: "/avatars/principal-miller.jpg",
    },
    {
      id: "teacher-johnson",
      quote:
        "The teacher tools have transformed my classroom. I can easily track student progress, create engaging lessons, and communicate with parents seamlessly. It's like having a teaching assistant!",
      author: "Michael Johnson",
      role: "Science Teacher, Riverside Academy",
      avatar: "/avatars/teacher-johnson.jpg",
    },
    {
      id: "parent-davis",
      quote:
        "As a working parent, staying connected with my child's education was challenging. The parent portal gives me real-time updates and peace of mind. It's incredibly user-friendly!",
      author: "Jennifer Davis",
      role: "Parent, Maplewood Elementary",
      avatar: "/avatars/parent-davis.jpg",
    },
  ];

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Loved by Educators & Parents
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover how Hypasoftware is making a difference in educational
            communities worldwide.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-50 rounded-2xl p-8 lg:p-12 shadow-lg relative">
            {/* Quote icon */}
            <div className="absolute top-8 left-8 text-blue-500/20">
              <svg
                className="w-12 h-12"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
              </svg>
            </div>

            {/* Testimonial content */}
            <div className="relative z-10">
              <blockquote className="text-xl lg:text-2xl text-gray-700 mb-8 leading-relaxed">
                &ldquo;{testimonials[activeTestimonial].quote}&rdquo;
              </blockquote>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-linear-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                    {testimonials[activeTestimonial].author.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">
                      {testimonials[activeTestimonial].author}
                    </div>
                    <div className="text-gray-600 text-sm">
                      {testimonials[activeTestimonial].role}
                    </div>
                  </div>
                </div>

                {/* Navigation buttons */}
                <div className="flex space-x-2">
                  <button
                    onClick={prevTestimonial}
                    className="p-2 rounded-full border border-gray-300 hover:border-blue-500 hover:bg-blue-50 transition-colors"
                  >
                    <svg
                      className="w-5 h-5 text-gray-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 19l-7-7 7-7"
                      />
                    </svg>
                  </button>
                  <button
                    onClick={nextTestimonial}
                    className="p-2 rounded-full border border-gray-300 hover:border-blue-500 hover:bg-blue-50 transition-colors"
                  >
                    <svg
                      className="w-5 h-5 text-gray-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* Dots indicator */}
            <div className="flex justify-center space-x-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === activeTestimonial ? "bg-blue-600" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
