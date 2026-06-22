// components/support/SupportTopics.tsx
"use client";

import { supportTopics } from "@/lib/data";

import { useState } from "react";

interface SupportTopicsProps {
  activeTopic: string | null;
  onTopicSelect: (topicId: string) => void;
}

const SupportTopics = ({ onTopicSelect }: SupportTopicsProps) => {
  const [expandedTopic, setExpandedTopic] = useState<string | null>(null);

  const toggleTopic = (topicId: string) => {
    setExpandedTopic(expandedTopic === topicId ? null : topicId);
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-2">Support Topics</h2>
      <p className="text-gray-600 mb-6">
        Browse our knowledge base by category to find answers to common
        questions
      </p>

      <div className="space-y-4">
        {supportTopics.map((topic) => (
          <div
            key={topic.id}
            className="border border-gray-200 rounded-xl hover:border-blue-300 transition-colors"
          >
            <button
              onClick={() => toggleTopic(topic.id)}
              className="w-full p-4 text-left flex items-center justify-between hover:bg-gray-50 rounded-xl transition-colors"
            >
              <div className="flex items-center space-x-4">
                <div className="text-2xl">{topic.icon}</div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-lg">
                    {topic.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{topic.description}</p>
                </div>
              </div>
              <svg
                className={`w-5 h-5 text-gray-400 transition-transform ${
                  expandedTopic === topic.id ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {expandedTopic === topic.id && (
              <div className="px-4 pb-4">
                <div className="border-t border-gray-200 pt-4">
                  <h4 className="font-medium text-gray-900 mb-3">
                    Common Questions:
                  </h4>
                  <ul className="space-y-2">
                    {topic.questions.map((question, index) => (
                      <li key={index}>
                        <button
                          onClick={() => onTopicSelect(topic.id)}
                          className="text-sm text-blue-600 hover:text-blue-700 text-left w-full py-1 px-2 rounded hover:bg-blue-50 transition-colors"
                        >
                          {question}
                        </button>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-4 flex space-x-3">
                    <button
                      onClick={() => onTopicSelect(topic.id)}
                      className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      Get Help with This Topic
                    </button>
                    <button className="px-4 py-2 border border-gray-300 text-gray-700 text-sm font-medium rounded-lg hover:bg-gray-50 transition-colors">
                      View Documentation
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Additional Resources */}
      <div className="mt-8 p-4 bg-blue-50 rounded-xl border border-blue-200">
        <h3 className="font-semibold text-blue-900 mb-2">
          Can&apos;t find what you need?
        </h3>
        <p className="text-blue-800 text-sm mb-3">
          Our support team is ready to help you with any specific questions or
          issues.
        </p>
        <div className="flex space-x-3">
          <button className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors">
            Contact Support Team
          </button>
          <button className="px-4 py-2 border border-blue-300 text-blue-700 text-sm font-medium rounded-lg hover:bg-blue-100 transition-colors">
            Schedule a Call
          </button>
        </div>
      </div>
    </div>
  );
};

export default SupportTopics;
