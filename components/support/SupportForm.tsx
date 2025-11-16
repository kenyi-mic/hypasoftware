// components/support/SupportForm.tsx
"use client";

import { useState } from "react";

interface SupportFormData {
  name: string;
  email: string;
  subject: string;
  priority: "low" | "medium" | "high" | "urgent";
  topic: string;
  description: string;
  attachments?: FileList;
}

const SupportForm = () => {
  const [formData, setFormData] = useState<SupportFormData>({
    name: "",
    email: "",
    subject: "",
    priority: "medium",
    topic: "",
    description: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      attachments: e.target.files || undefined,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));
      console.log("Support ticket submitted:", formData);
      alert(
        "Support ticket created successfully! We'll get back to you within 2 hours."
      );

      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        priority: "medium",
        topic: "",
        description: "",
      });
    } catch (error) {
      console.error("Error submitting support ticket:", error);
      alert(
        "Sorry, there was an error creating your support ticket. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const supportTopics = [
    "Technical Issue",
    "Billing Question",
    "Feature Request",
    "Account Problem",
    "Setup Assistance",
    "Integration Help",
    "Other",
  ];

  const priorityColors = {
    low: "text-green-600 bg-green-100",
    medium: "text-yellow-600 bg-yellow-100",
    high: "text-orange-600 bg-orange-100",
    urgent: "text-red-600 bg-red-100",
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 sticky top-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-2">
        Submit a Support Ticket
      </h2>
      <p className="text-gray-600 mb-6">
        Can&apos;t find the answer? Our support team will help you within 2
        hours.
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name & Email */}
        <div className="grid grid-cols-1 gap-4">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              placeholder="Your full name"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              placeholder="your.email@example.com"
            />
          </div>
        </div>

        {/* Topic & Priority */}
        <div className="grid grid-cols-1 gap-4">
          <div>
            <label
              htmlFor="topic"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Issue Topic *
            </label>
            <select
              id="topic"
              name="topic"
              value={formData.topic}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            >
              <option value="">Select a topic</option>
              {supportTopics.map((topic) => (
                <option key={topic} value={topic}>
                  {topic}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label
              htmlFor="priority"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Priority Level *
            </label>
            <select
              id="priority"
              name="priority"
              value={formData.priority}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            >
              <option value="low">Low - General question</option>
              <option value="medium">Medium - Feature not working</option>
              <option value="high">High - System performance issue</option>
              <option value="urgent">
                Urgent - System down/critical error
              </option>
            </select>
            <p
              className={`text-xs mt-1 px-2 py-1 rounded ${
                priorityColors[formData.priority]
              }`}
            >
              {formData.priority.charAt(0).toUpperCase() +
                formData.priority.slice(1)}{" "}
              priority -{" "}
              {formData.priority === "low"
                ? "Response within 24 hours"
                : formData.priority === "medium"
                ? "Response within 4 hours"
                : formData.priority === "high"
                ? "Response within 2 hours"
                : "Response within 1 hour"}
            </p>
          </div>
        </div>

        {/* Subject */}
        <div>
          <label
            htmlFor="subject"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Subject *
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            placeholder="Brief description of your issue"
          />
        </div>

        {/* Description */}
        <div>
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Detailed Description *
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
            rows={6}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-vertical"
            placeholder="Please describe your issue in detail. Include steps to reproduce, error messages, and what you were trying to accomplish."
          />
        </div>

        {/* Attachments */}
        <div>
          <label
            htmlFor="attachments"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Attachments (Optional)
          </label>
          <input
            type="file"
            id="attachments"
            name="attachments"
            onChange={handleFileChange}
            multiple
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
          />
          <p className="text-xs text-gray-500 mt-1">
            You can attach screenshots, error logs, or documents (max 10MB
            total)
          </p>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full px-6 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 disabled:bg-blue-400 disabled:cursor-not-allowed transition-colors flex items-center justify-center gap-2"
        >
          {isSubmitting ? (
            <>
              <svg
                className="animate-spin h-5 w-5 text-white"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
              Creating Support Ticket...
            </>
          ) : (
            <>
              Submit Support Ticket
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
            </>
          )}
        </button>

        {/* Support Info */}
        <div className="text-center text-sm text-gray-500">
          <p>📞 Emergency support: +211 912 345 678</p>
          <p>⏰ Support hours: 24/7 for urgent issues</p>
        </div>
      </form>
    </div>
  );
};

export default SupportForm;
