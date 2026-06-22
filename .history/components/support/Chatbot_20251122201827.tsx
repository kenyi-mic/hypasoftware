"use client";

import { useState, useRef, useEffect, useCallback, useMemo } from "react";

interface Message {
  id: string;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
  type?: "text" | "quick_reply" | "agent_handoff";
}

interface QuickReply {
  text: string;
  payload: string;
}

interface KnowledgeBase {
  [key: string]: {
    patterns: string[];
    responses: string[];
    quickReplies?: QuickReply[];
  };
}

// Fixed custom hook for time formatting
const useFormattedTime = (timestamp: Date) => {
  const [formattedTime, setFormattedTime] = useState("");

  useEffect(() => {
    // Use setTimeout to avoid synchronous state updates in effects
    const timer = setTimeout(() => {
      setFormattedTime(
        timestamp.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        })
      );
    }, 0);

    return () => clearTimeout(timer);
  }, [timestamp]);

  return formattedTime;
};

// Alternative approach: Format time directly without state
const formatTimeDirectly = (timestamp: Date) => {
  if (typeof window === "undefined") {
    // Return a consistent format for server-side rendering
    return timestamp.toISOString().slice(11, 16); // "HH:MM" format
  }
  return timestamp.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
};

// Custom hook for chatbot logic
const useChatbot = () => {
  const [messages, setMessages] = useState<Message[]>(() => [
    {
      id: "initial-message",
      text: "Hello! I'm HypaBot, your AI assistant for Hypasoftware. I can help you with product information, pricing, technical support, and more. How can I assist you today?",
      sender: "bot",
      timestamp: new Date(),
      type: "text",
    },
  ]);
  const [inputText, setInputText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [awaitingConfirmation, setAwaitingConfirmation] = useState(false);
  const [userRequestedAgent, setUserRequestedAgent] = useState(false);

  const generateId = useCallback((): string => {
    return `${Date.now()}-${Math.random().toString(36).slice(2, 11)}`;
  }, []);

  const knowledgeBase: KnowledgeBase = useMemo(
    () => ({
      greetings: {
        patterns: [
          "hello",
          "hi",
          "hey",
          "good morning",
          "good afternoon",
          "good evening",
          "howdy",
        ],
        responses: [
          "Hello! Welcome to Hypasoftware support. How can I help you today?",
          "Hi there! I'm here to assist you with anything about our educational solutions.",
          "Hey! Great to see you. What can I help you with today?",
        ],
      },
      pricing: {
        patterns: [
          "price",
          "cost",
          "how much",
          "pricing",
          "fee",
          "subscription",
          "plan",
          "currency",
          "dollar",
          "usd",
        ],
        responses: [
          "Our pricing starts at $50/month for small schools and scales based on student count and features. We offer custom quotes for larger institutions.",
          "We have flexible pricing plans based on your school's size and needs. Basic plans start from $50/month, while enterprise solutions are customized.",
          "Pricing varies by the number of students and features needed. We accept multiple currencies including USD, EUR, and local African currencies where available.",
        ],
        quickReplies: [
          { text: "See pricing plans", payload: "show_pricing" },
          { text: "Get a custom quote", payload: "custom_quote" },
          { text: "Compare features", payload: "compare_features" },
        ],
      },
      location: {
        patterns: [
          "where",
          "location",
          "address",
          "office",
          "juba",
          "south sudan",
          "africa",
          "visit",
        ],
        responses: [
          "Our main office is in Tongping, Juba, South Sudan, near the American Residence. We serve schools across Africa.",
          "We're based in Juba, South Sudan, but our cloud-based solutions work anywhere in Africa and beyond.",
          "Headquarters: Tongping area, Juba, South Sudan. We have partners across East Africa.",
        ],
      },
      education: {
        patterns: [
          "education",
          "learning",
          "teaching",
          "school",
          "student",
          "teacher",
          "classroom",
          "curriculum",
        ],
        responses: [
          "We specialize in educational technology solutions for African schools - from school management to digital learning platforms.",
          "Our tools help schools manage administration, engage students, and connect with parents across Africa.",
          "We provide comprehensive EdTech solutions tailored for African educational contexts.",
        ],
        quickReplies: [
          { text: "School Management", payload: "school_management" },
          { text: "Learning Platform", payload: "learning_platform" },
          { text: "Teacher Tools", payload: "teacher_tools" },
        ],
      },
      products: {
        patterns: [
          "product",
          "software",
          "solution",
          "platform",
          "system",
          "app",
          "application",
        ],
        responses: [
          "We offer: School Manager Pro, LearnAfrica Platform, ParentConnect, and EduAnalytics. Which interests you?",
          "Our main products include school management systems, learning platforms, and parent engagement tools.",
          "We have solutions for school administration, digital learning, and parent communication.",
        ],
      },
      technical: {
        patterns: [
          "technical",
          "support",
          "help",
          "issue",
          "problem",
          "error",
          "bug",
          "not working",
        ],
        responses: [
          "I can help with technical issues. Please describe the problem, or I can connect you with our technical team.",
          "For technical support, please provide details about the issue you're experiencing.",
          "Let me help troubleshoot. What specific problem are you facing?",
        ],
      },
      setup: {
        patterns: [
          "setup",
          "install",
          "configure",
          "get started",
          "implementation",
        ],
        responses: [
          "Setup typically takes 1-2 weeks. We provide full implementation support and training.",
          "Our team will guide you through setup, data migration, and staff training.",
          "We offer complete implementation services including data setup and user training.",
        ],
      },
      features: {
        patterns: ["feature", "what can", "capability", "function", "tool"],
        responses: [
          "Key features: attendance tracking, grade management, parent communication, online learning, and analytics.",
          "We offer comprehensive features for administration, teaching, and parent engagement.",
          "Our platform includes management tools, learning resources, and communication features.",
        ],
      },
      agent: {
        patterns: [
          "human",
          "agent",
          "person",
          "representative",
          "talk to someone",
          "real person",
          "support agent",
        ],
        responses: [
          "I can connect you with a human agent. Would you like me to transfer you to our support team?",
          "I understand you'd like to speak with a person. Shall I connect you with one of our support agents?",
          "Happy to connect you with our human support team. Should I initiate the transfer?",
        ],
      },
      payment: {
        patterns: [
          "payment",
          "pay",
          "bill",
          "invoice",
          "billing",
          "credit card",
          "bank transfer",
          "mobile money",
        ],
        responses: [
          "We accept bank transfers, credit cards, and mobile money payments in supported regions.",
          "Payment options include bank transfer, credit card, and mobile money where available.",
          "We offer flexible payment methods including electronic transfers and mobile payments.",
        ],
      },
      default: {
        patterns: [], // Added empty patterns array for default
        responses: [
          "I understand you're asking about: {input}. Could you provide more details so I can help better?",
          "Thanks for your question about {input}. Let me connect you with the right information.",
          "I want to make sure I help you properly with {input}. Could you elaborate a bit more?",
        ],
        quickReplies: [
          { text: "Get pricing info", payload: "pricing" },
          { text: "Technical support", payload: "technical" },
          { text: "Product features", payload: "features" },
          { text: "Talk to human agent", payload: "human_agent" },
        ],
      },
    }),
    []
  );

  const commonQuestions = useMemo(
    () => [
      "What's the pricing for a school with 500 students?",
      "How does the offline mode work?",
      "Can I integrate with existing systems?",
      "Do you offer teacher training?",
      "What payment methods do you accept?",
      "How do I get technical support?",
      "Can I speak with a human agent?",
    ],
    []
  );

  const getRandomResponse = useCallback((responses: string[]): string => {
    return responses[Math.floor(Math.random() * responses.length)];
  }, []);

  const findMatchingTopic = useCallback(
    (input: string): string => {
      const lowerInput = input.toLowerCase();

      for (const [topic, data] of Object.entries(knowledgeBase)) {
        if (topic === "default") continue;

        if (data.patterns.some((pattern) => lowerInput.includes(pattern))) {
          return topic;
        }
      }

      return "default";
    },
    [knowledgeBase]
  );

  const handleSendMessage = useCallback(async () => {
    if (!inputText.trim()) return;

    const userMessageId = generateId();
    const userInput = inputText;

    // Add user message
    const userMessage: Message = {
      id: userMessageId,
      text: userInput,
      sender: "user",
      timestamp: new Date(),
      type: "text",
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputText("");
    setIsTyping(true);

    // Simulate bot thinking
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Handle agent transfer confirmation
    if (awaitingConfirmation) {
      const confirmationId = generateId();
      if (
        userInput.toLowerCase().includes("yes") ||
        userInput.toLowerCase().includes("confirm") ||
        userInput.toLowerCase().includes("ok")
      ) {
        const confirmationMessage: Message = {
          id: confirmationId,
          text: "Great! I'm connecting you with one of our support agents. They'll be with you shortly. In the meantime, you can continue browsing or prepare any details about your issue.",
          sender: "bot",
          timestamp: new Date(),
          type: "agent_handoff",
        };
        setMessages((prev) => [...prev, confirmationMessage]);
        setUserRequestedAgent(true);
        setAwaitingConfirmation(false);
      } else {
        const cancellationMessage: Message = {
          id: confirmationId,
          text: "No problem! I'm still here to help. What else can I assist you with?",
          sender: "bot",
          timestamp: new Date(),
        };
        setMessages((prev) => [...prev, cancellationMessage]);
        setAwaitingConfirmation(false);
      }
      setIsTyping(false);
      return;
    }

    // Find matching topic
    const topic = findMatchingTopic(userInput);
    const topicData = knowledgeBase[topic];

    let response = getRandomResponse(topicData.responses).replace(
      "{input}",
      userInput
    );

    // Check if user explicitly requested human agent
    const wantsHumanAgent = knowledgeBase.agent.patterns.some((pattern) =>
      userInput.toLowerCase().includes(pattern)
    );

    if (wantsHumanAgent && !userRequestedAgent) {
      response = getRandomResponse(knowledgeBase.agent.responses);
      setAwaitingConfirmation(true);
    }

    const botMessageId = generateId();
    const botMessage: Message = {
      id: botMessageId,
      text: response,
      sender: "bot",
      timestamp: new Date(),
      type:
        topicData.quickReplies && !awaitingConfirmation && !wantsHumanAgent
          ? "quick_reply"
          : "text",
    };

    setMessages((prev) => [...prev, botMessage]);
    setIsTyping(false);
  }, [
    inputText,
    awaitingConfirmation,
    userRequestedAgent,
    generateId,
    findMatchingTopic,
    knowledgeBase,
    getRandomResponse,
  ]);

  const handleQuickQuestion = useCallback((question: string) => {
    setInputText(question);
  }, []);

  const handleQuickReply = useCallback(
    (payload: string) => {
      setInputText(payload);
      setTimeout(() => handleSendMessage(), 100);
    },
    [handleSendMessage]
  );

  const getQuickRepliesForTopic = useCallback(
    (topic: string): QuickReply[] => {
      const topicData = knowledgeBase[topic];
      return topicData.quickReplies || [];
    },
    [knowledgeBase]
  );

  const currentTopic = useMemo(
    () =>
      messages.length > 0
        ? findMatchingTopic(messages[messages.length - 1].text)
        : "default",
    [messages, findMatchingTopic]
  );

  return {
    messages,
    inputText,
    setInputText,
    isTyping,
    awaitingConfirmation,
    userRequestedAgent,
    commonQuestions,
    currentTopic,
    handleSendMessage,
    handleQuickQuestion,
    handleQuickReply,
    getQuickRepliesForTopic,
  };
};

// Message Component with fixed time formatting
const MessageBubble = ({ message }: { message: Message }) => {
  // Use the direct formatting approach to avoid useEffect state updates
  const formattedTime = formatTimeDirectly(message.timestamp);

  return (
    <div
      className={`flex ${
        message.sender === "user" ? "justify-end" : "justify-start"
      }`}
    >
      <div
        className={`max-w-xs lg:max-w-md px-4 py-2 rounded-2xl ${
          message.sender === "user"
            ? "bg-blue-600 text-white rounded-br-none"
            : message.type === "agent_handoff"
            ? "bg-yellow-100 text-yellow-900 border border-yellow-200 rounded-bl-none"
            : "bg-gray-100 text-gray-900 rounded-bl-none"
        }`}
      >
        <p className="text-sm whitespace-pre-wrap">{message.text}</p>
        <p
          className={`text-xs mt-1 ${
            message.sender === "user"
              ? "text-blue-200"
              : message.type === "agent_handoff"
              ? "text-yellow-700"
              : "text-gray-500"
          }`}
          suppressHydrationWarning // Suppress warning since we handle the formatting
        >
          {formattedTime}
        </p>
      </div>
    </div>
  );
};

// Quick Replies Component
const QuickReplies = ({
  topic,
  onQuickReply,
}: {
  topic: string;
  onQuickReply: (payload: string) => void;
}) => {
  const { getQuickRepliesForTopic } = useChatbot();
  const quickReplies = getQuickRepliesForTopic(topic);

  if (quickReplies.length === 0) return null;

  return (
    <div className="flex justify-start mt-2">
      <div className="flex flex-wrap gap-2 max-w-xs lg:max-w-md">
        {quickReplies.map((reply, index) => (
          <button
            key={`${reply.payload}-${index}`}
            onClick={() => onQuickReply(reply.payload)}
            className="px-3 py-2 bg-white border border-blue-300 text-blue-700 text-xs rounded-full hover:bg-blue-50 transition-colors whitespace-nowrap"
          >
            {reply.text}
          </button>
        ))}
      </div>
    </div>
  );
};

// Typing Indicator Component
const TypingIndicator = () => (
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
);

// Quick Questions Component
const QuickQuestions = ({
  questions,
  onQuestionClick,
}: {
  questions: string[];
  onQuestionClick: (question: string) => void;
}) => (
  <div className="border-t border-gray-200 p-4">
    <p className="text-sm text-gray-600 mb-3">Quick questions:</p>
    <div className="flex flex-wrap gap-2">
      {questions.map((question, index) => (
        <button
          key={index}
          onClick={() => onQuestionClick(question)}
          className="px-3 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs rounded-full transition-colors"
        >
          {question}
        </button>
      ))}
    </div>
  </div>
);

// Input Area Component
const ChatInput = ({
  inputText,
  onInputChange,
  onSendMessage,
  onKeyPress,
  isTyping,
  awaitingConfirmation,
  userRequestedAgent,
}: {
  inputText: string;
  onInputChange: (text: string) => void;
  onSendMessage: () => void;
  onKeyPress: (e: React.KeyboardEvent) => void;
  isTyping: boolean;
  awaitingConfirmation: boolean;
  userRequestedAgent: boolean;
}) => {
  if (userRequestedAgent) {
    return (
      <div className="border-t border-gray-200 p-4">
        <div className="text-center p-4 bg-yellow-50 rounded-lg border border-yellow-200">
          <p className="text-yellow-800 text-sm">
            <strong>Agent connection in progress:</strong> Please wait while we
            connect you with a support agent.
          </p>
          <p className="text-yellow-700 text-xs mt-1">
            Average wait time: 2-3 minutes
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="border-t border-gray-200 p-4">
      <div className="flex space-x-2">
        <textarea
          value={inputText}
          onChange={(e) => onInputChange(e.target.value)}
          onKeyDown={onKeyPress}
          placeholder={
            awaitingConfirmation
              ? "Type 'yes' to confirm agent connection, or 'no' to continue with me..."
              : "Type your question here..."
          }
          className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
          rows={2}
          disabled={isTyping}
        />
        <button
          onClick={onSendMessage}
          disabled={!inputText.trim() || isTyping}
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
        {awaitingConfirmation
          ? "Confirm to speak with a human agent, or ask another question."
          : "Press Enter to send. I can help with pricing, features, support, and more."}
      </p>
    </div>
  );
};

// Main Chatbot Component
const Chatbot = () => {
  const {
    messages,
    inputText,
    setInputText,
    isTyping,
    awaitingConfirmation,
    userRequestedAgent,
    commonQuestions,
    currentTopic,
    handleSendMessage,
    handleQuickQuestion,
    handleQuickReply,
  } = useChatbot();

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, scrollToBottom]);

  const handleKeyPress = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        handleSendMessage();
      }
    },
    [handleSendMessage]
  );

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
              <p className="text-blue-100 text-sm">
                {userRequestedAgent
                  ? "Connecting you with agent..."
                  : "AI-powered support"}
              </p>
            </div>
          </div>
          <div
            className={`w-3 h-3 rounded-full ${
              userRequestedAgent ? "bg-yellow-400" : "bg-green-400"
            }`}
          ></div>
        </div>
      </div>

      {/* Chat Messages */}
      <div className="h-96 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div key={message.id}>
            <MessageBubble message={message} />
            {message.type === "quick_reply" && (
              <QuickReplies
                topic={currentTopic}
                onQuickReply={handleQuickReply}
              />
            )}
          </div>
        ))}

        {isTyping && <TypingIndicator />}

        <div ref={messagesEndRef} />
      </div>

      {/* Quick Questions */}
      {!userRequestedAgent && (
        <QuickQuestions
          questions={commonQuestions}
          onQuestionClick={handleQuickQuestion}
        />
      )}

      {/* Input Area */}
      <ChatInput
        inputText={inputText}
        onInputChange={setInputText}
        onSendMessage={handleSendMessage}
        onKeyPress={handleKeyPress}
        isTyping={isTyping}
        awaitingConfirmation={awaitingConfirmation}
        userRequestedAgent={userRequestedAgent}
      />
    </div>
  );
};

export default Chatbot;
