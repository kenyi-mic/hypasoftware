// components/support/Chatbot.tsx
"use client";

import { useState, useRef, useEffect } from "react";

interface Message {
  id: string;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
}

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hello! I'm HypaBot, your AI assistant. How can I help you with Hypasoftware today?",
      sender: "bot",
      timestamp: new Date(),
    },
  ]);
  const [inputText, setInputText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const commonQuestions = [
    "How do I set up my school management system?",
    "What's the pricing for your products?",
    "Do you offer training for teachers?",
    "How does the offline functionality work?",
    "Can I integrate with existing systems?",
  ];

  const botResponses: Record<string, string> = {
    setup:
      "To set up your school management system, you'll need to: 1) Create an account, 2) Add your school information, 3) Import student and teacher data, and 4) Configure your settings. Would you like me to send you our setup guide?",
    pricing:
      "Our pricing is based on the number of students and features needed. We offer flexible plans starting from $50/month for small schools. Would you like to see our detailed pricing page?",
    training:
      "Yes! We provide comprehensive training for teachers and administrators. This includes online workshops, video tutorials, and documentation. Most schools see proficiency within 2-3 weeks.",
    offline:
      "Our offline functionality allows the system to work without internet by caching data locally. When connectivity returns, it automatically syncs all changes. Perfect for areas with unreliable internet!",
    integration:
      "We offer API integration with most common school systems including student information systems, payment gateways, and learning management systems. Our technical team can assist with setup.",
  };

  const handleSendMessage = async () => {
    if (!inputText.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputText,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputText("");
    setIsTyping(true);

    // Simulate bot thinking
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Generate bot response
    let botResponse =
      "I understand you're asking about: " +
      inputText +
      ". For detailed assistance, our support team can provide specific guidance. Would you like me to connect you with a human agent?";

    // Check for keywords in the message
    const lowerInput = inputText.toLowerCase();
    if (lowerInput.includes("setup") || lowerInput.includes("install")) {
      botResponse = botResponses.setup;
    } else if (lowerInput.includes("price") || lowerInput.includes("cost")) {
      botResponse = botResponses.pricing;
    } else if (lowerInput.includes("train") || lowerInput.includes("learn")) {
      botResponse = botResponses.training;
    } else if (
      lowerInput.includes("offline") ||
      lowerInput.includes("internet")
    ) {
      botResponse = botResponses.offline;
    } else if (
      lowerInput.includes("integrate") ||
      lowerInput.includes("connect")
    ) {
      botResponse = botResponses.integration;
    }

    const botMessage: Message = {
      id: (Date.now() + 1).toString(),
      text: botResponse,
      sender: "bot",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, botMessage]);
    setIsTyping(false);
  };

  const handleQuickQuestion = (question: string) => {
    setInputText(question);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
      {/* Chatbot Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 text-white">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
              <svg
                className="w-6 h-6"
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
            </div>
            <div>
              <h3 className="font-bold text-lg">HypaBot Assistant</h3>
              <p className="text-blue-100 text-sm">AI-powered support</p>
            </div>
          </div>
          <div
            className={`w-3 h-3 rounded-full ${
              isOpen ? "bg-green-400" : "bg-gray-300"
            }`}
          ></div>
        </div>
      </div>

      {/* Chat Messages */}
      <div className="h-96 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${
              message.sender === "user" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`max-w-xs lg:max-w-md px-4 py-2 rounded-2xl ${
                message.sender === "user"
                  ? "bg-blue-600 text-white rounded-br-none"
                  : "bg-gray-100 text-gray-900 rounded-bl-none"
              }`}
            >
              <p className="text-sm">{message.text}</p>
              <p
                className={`text-xs mt-1 ${
                  message.sender === "user" ? "text-blue-200" : "text-gray-500"
                }`}
              >
                {message.timestamp.toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </p>
            </div>
          </div>
        ))}

        {isTyping && (
          <div className="flex justify-start">
            <div className="bg-gray-100 text-gray-900 px-4 py-2 rounded-2xl rounded-bl-none">
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                <div
                  className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                  style={{ animationDelay: "0.1s" }}
                ></div>
                <div
                  className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                  style={{ animationDelay: "0.2s" }}
                ></div>
              </div>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Quick Questions */}
      <div className="border-t border-gray-200 p-4">
        <p className="text-sm text-gray-600 mb-3">Quick questions:</p>
        <div className="flex flex-wrap gap-2">
          {commonQuestions.map((question, index) => (
            <button
              key={index}
              onClick={() => handleQuickQuestion(question)}
              className="px-3 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs rounded-full transition-colors"
            >
              {question}
            </button>
          ))}
        </div>
      </div>

      {/* Input Area */}
      <div className="border-t border-gray-200 p-4">
        <div className="flex space-x-2">
          <textarea
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Type your question here..."
            className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
            rows={2}
          />
          <button
            onClick={handleSendMessage}
            disabled={!inputText.trim()}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors self-end"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
              />
            </svg>
          </button>
        </div>
        <p className="text-xs text-gray-500 mt-2">
          Press Enter to send. HypaBot can help with setup, pricing, and general
          questions.
        </p>
      </div>
    </div>
  );
};

export default Chatbot;
