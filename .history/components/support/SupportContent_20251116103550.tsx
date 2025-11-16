// components/support/SupportContent.tsx
"use client";

import { useState } from "react";
import PageHeader from "@/components/shared/PageHeader";
import Chatbot from "./Chatbot";
import SupportTopics from "./SupportTopics";
import SupportForm from "./SupportForm";

const SupportContent = () => {
  const [activeTopic, setActiveTopic] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-gray-50">
      <PageHeader
        badge="Help & Support"
        title="Support Center"
        subtitle="Find answers and get help with Hypasoftware products"
        description="Browse our knowledge base, chat with our AI assistant, or contact our support team for personalized help."
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Chatbot Section */}
        <div className="mb-16">
          <Chatbot />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Support Topics */}
          <div className="lg:col-span-2">
            <SupportTopics
              activeTopic={activeTopic}
              onTopicSelect={setActiveTopic}
            />
          </div>

          {/* Support Form */}
          <div>
            <SupportForm />
          </div>
        </div>

        {/* Additional Support Resources */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center p-6 bg-white rounded-2xl shadow-sm border border-gray-200">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4 mx-auto">
              <svg
                className="w-6 h-6 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Documentation</h3>
            <p className="text-gray-600 text-sm">
              Comprehensive guides and manuals
            </p>
          </div>

          <div className="text-center p-6 bg-white rounded-2xl shadow-sm border border-gray-200">
            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4 mx-auto">
              <svg
                className="w-6 h-6 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">FAQs</h3>
            <p className="text-gray-600 text-sm">Frequently asked questions</p>
          </div>

          <div className="text-center p-6 bg-white rounded-2xl shadow-sm border border-gray-200">
            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4 mx-auto">
              <svg
                className="w-6 h-6 text-purple-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
                />
              </svg>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">
              Video Tutorials
            </h3>
            <p className="text-gray-600 text-sm">Step-by-step video guides</p>
          </div>

          <div className="text-center p-6 bg-white rounded-2xl shadow-sm border border-gray-200">
            <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-4 mx-auto">
              <svg
                className="w-6 h-6 text-orange-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Status</h3>
            <p className="text-gray-600 text-sm">System status and updates</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportContent;
