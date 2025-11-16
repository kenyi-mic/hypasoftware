// components/support/FAQPage.tsx
"use client";

import { useState, useRef } from "react";
import Chatbot from "./Chatbot";

interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: "general" | "pricing" | "technical" | "setup" | "features";
  popularity: number;
}

const FAQPage = () => {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set());
  const chatbotRef = useRef<HTMLDivElement>(null);

  // FAQ data that aligns with the chatbot's knowledge base
  const faqData: FAQItem[] = [
    {
      id: "1",
      question: "What is Hypasoftware and what do you offer?",
      answer:
        "Hypasoftware provides comprehensive educational technology solutions for schools across Africa. We offer school management systems, digital learning platforms, parent communication tools, and analytics solutions tailored for African educational contexts.",
      category: "general",
      popularity: 95,
    },
    {
      id: "2",
      question: "How much does your software cost?",
      answer:
        "Our pricing starts at $50/month for small schools and scales based on student count and features. We offer custom quotes for larger institutions and accept multiple currencies including USD, EUR, and local African currencies where available.",
      category: "pricing",
      popularity: 90,
    },
    {
      id: "3",
      question: "Where is Hypasoftware located?",
      answer:
        "Our main office is in Tongping, Juba, South Sudan, near the American Residence. We serve schools across Africa with our cloud-based solutions that work anywhere with internet connectivity.",
      category: "general",
      popularity: 85,
    },
    {
      id: "4",
      question: "What are your main products?",
      answer:
        "We offer: School Manager Pro (comprehensive school administration), LearnAfrica Platform (digital learning), ParentConnect (parent engagement), and EduAnalytics (data insights). Each solution can be used independently or integrated together.",
      category: "features",
      popularity: 88,
    },
    {
      id: "5",
      question: "How long does setup and implementation take?",
      answer:
        "Setup typically takes 1-2 weeks. We provide full implementation support including data migration, system configuration, and staff training to ensure a smooth transition.",
      category: "setup",
      popularity: 82,
    },
    {
      id: "6",
      question: "What payment methods do you accept?",
      answer:
        "We accept bank transfers, credit cards, and mobile money payments in supported regions. We work with local payment providers to ensure convenient payment options for our African customers.",
      category: "pricing",
      popularity: 80,
    },
    {
      id: "7",
      question: "Do you offer technical support?",
      answer:
        "Yes, we provide comprehensive technical support through multiple channels including email, phone, and our chatbot. For complex issues, we can connect you directly with our technical team.",
      category: "technical",
      popularity: 87,
    },
    {
      id: "8",
      question: "Can the platform work offline?",
      answer:
        "Yes, our solutions include offline functionality for areas with unreliable internet connectivity. Data syncs automatically when connection is restored.",
      category: "features",
      popularity: 83,
    },
    {
      id: "9",
      question: "Do you provide teacher training?",
      answer:
        "Absolutely! We offer comprehensive training programs for teachers and administrators, both during implementation and as ongoing professional development.",
      category: "setup",
      popularity: 79,
    },
    {
      id: "10",
      question: "Can I integrate with existing systems?",
      answer:
        "Yes, our platform offers API integration capabilities for common school management systems, learning management systems, and financial software.",
      category: "technical",
      popularity: 81,
    },
    {
      id: "11",
      question: "What features does your school management system include?",
      answer:
        "Key features include: student information management, attendance tracking, grade management, timetable scheduling, fee management, reporting, and parent communication portals.",
      category: "features",
      popularity: 86,
    },
    {
      id: "12",
      question: "Is there a free trial available?",
      answer:
        "Yes, we offer a 30-day free trial for schools to evaluate our platform. This includes full access to all features with sample data and guided setup assistance.",
      category: "pricing",
      popularity: 84,
    },
    {
      id: "13",
      question: "What kind of security measures do you have?",
      answer:
        "We implement enterprise-grade security including data encryption, regular backups, role-based access controls, and compliance with data protection regulations applicable in our operating regions.",
      category: "technical",
      popularity: 78,
    },
    {
      id: "14",
      question: "How often do you release updates?",
      answer:
        "We release regular updates monthly with new features and improvements. Major version updates occur quarterly, always with backward compatibility in mind.",
      category: "general",
      popularity: 76,
    },
    {
      id: "15",
      question: "Do you offer customized solutions?",
      answer:
        "Yes, we understand that each school has unique needs. We offer customization services for larger institutions with specific requirements beyond our standard feature set.",
      category: "features",
      popularity: 77,
    },
  ];

  const categories = [
    { id: "all", name: "All Questions", count: faqData.length },
    {
      id: "general",
      name: "General",
      count: faqData.filter((item) => item.category === "general").length,
    },
    {
      id: "pricing",
      name: "Pricing & Plans",
      count: faqData.filter((item) => item.category === "pricing").length,
    },
    {
      id: "technical",
      name: "Technical",
      count: faqData.filter((item) => item.category === "technical").length,
    },
    {
      id: "setup",
      name: "Setup & Implementation",
      count: faqData.filter((item) => item.category === "setup").length,
    },
    {
      id: "features",
      name: "Features",
      count: faqData.filter((item) => item.category === "features").length,
    },
  ];

  const toggleItem = (id: string) => {
    const newExpanded = new Set(expandedItems);
    if (newExpanded.has(id)) {
      newExpanded.delete(id);
    } else {
      newExpanded.add(id);
    }
    setExpandedItems(newExpanded);
  };

  const scrollToChatbot = () => {
    chatbotRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const filteredFAQs = faqData.filter((item) => {
    const matchesCategory =
      activeCategory === "all" || item.category === activeCategory;
    const matchesSearch =
      searchQuery === "" ||
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const popularFAQs = [...faqData]
    .sort((a, b) => b.popularity - a.popularity)
    .slice(0, 5);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-xl max-w-2xl">
            Find answers to common questions about Hypasoftware products,
            pricing, setup, and technical support.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className="lg:w-2/3">
            {/* Search Bar */}
            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search FAQs..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <svg
                  className="absolute left-4 top-3.5 w-5 h-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
            </div>

            {/* Category Filters */}
            <div className="flex overflow-x-auto gap-2 mb-6 pb-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-4 py-2 rounded-full whitespace-nowrap transition-colors ${
                    activeCategory === category.id
                      ? "bg-blue-600 text-white"
                      : "bg-white text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>

            {/* FAQ List */}
            <div className="space-y-4">
              {filteredFAQs.length > 0 ? (
                filteredFAQs.map((faq) => (
                  <div
                    key={faq.id}
                    className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden"
                  >
                    <button
                      onClick={() => toggleItem(faq.id)}
                      className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                    >
                      <span className="font-medium text-gray-900 pr-4">
                        {faq.question}
                      </span>
                      <svg
                        className={`w-5 h-5 text-gray-500 transition-transform ${
                          expandedItems.has(faq.id)
                            ? "transform rotate-180"
                            : ""
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
                    {expandedItems.has(faq.id) && (
                      <div className="px-6 py-4 border-t border-gray-100">
                        <p className="text-gray-700 leading-relaxed">
                          {faq.answer}
                        </p>
                        <div className="mt-4 flex justify-between items-center">
                          <span className="text-sm text-gray-500">
                            Category:{" "}
                            <span className="capitalize">{faq.category}</span>
                          </span>
                          <button
                            onClick={scrollToChatbot}
                            className="text-sm text-blue-600 hover:text-blue-800 font-medium"
                          >
                            Need more help? Ask our chatbot →
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                ))
              ) : (
                <div className="bg-white rounded-lg shadow-sm p-8 text-center">
                  <svg
                    className="w-12 h-12 text-gray-400 mx-auto mb-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">
                    No results found
                  </h3>
                  <p className="text-gray-600 mb-4">
                    We couldn&apos;t find any FAQs matching your search. Try
                    different keywords or ask our chatbot.
                  </p>
                  <button
                    onClick={scrollToChatbot}
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Ask HypaBot
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:w-1/3">
            {/* Popular Questions */}
            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <h3 className="font-bold text-lg mb-4 text-gray-900">
                Popular Questions
              </h3>
              <div className="space-y-3">
                {popularFAQs.map((faq) => (
                  <button
                    key={faq.id}
                    onClick={() => {
                      setActiveCategory("all");
                      setSearchQuery("");
                      // Expand this FAQ
                      const newExpanded = new Set([faq.id]);
                      setExpandedItems(newExpanded);
                      // Scroll to this FAQ
                      setTimeout(() => {
                        document
                          .getElementById(`faq-${faq.id}`)
                          ?.scrollIntoView({
                            behavior: "smooth",
                            block: "center",
                          });
                      }, 100);
                    }}
                    className="block w-full text-left p-3 rounded-lg hover:bg-gray-50 transition-colors border border-gray-100"
                  >
                    <span className="font-medium text-gray-900 text-sm">
                      {faq.question}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Support Options */}
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg p-6 border border-blue-100">
              <h3 className="font-bold text-lg mb-3 text-gray-900">
                Still need help?
              </h3>
              <p className="text-gray-700 mb-4">
                Our support team is here to assist you with any questions not
                covered in our FAQs.
              </p>
              <div className="space-y-3">
                <button
                  onClick={scrollToChatbot}
                  className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center"
                >
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                    />
                  </svg>
                  Chat with HypaBot
                </button>
                <a
                  href="mailto:support@hypasoftware.com"
                  className="block w-full bg-white text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-50 transition-colors border border-gray-300 text-center"
                >
                  Email Support
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Chatbot Section */}
        <div ref={chatbotRef} className="mt-12">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Can&apos;t find what you&apos;re looking for?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our AI assistant HypaBot is available 24/7 to answer your
              questions about products, pricing, technical support, and more.
            </p>
          </div>
          <Chatbot />
        </div>
      </div>
    </div>
  );
};

export default FAQPage;
