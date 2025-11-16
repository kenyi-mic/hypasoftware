// components/contact/ContactContent.tsx
"use client";

import { useState } from "react";
import PageHeader from "@/components/shared/PageHeader";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";
import OfficeMap from "./OfficeMap";
import type { ContactFormData } from "@/types/contact";

const ContactContent = (): React.ReactElement => {
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const handleSubmit = async (formData: ContactFormData): Promise<void> => {
    setIsSubmitting(true);

    try {
      // Simulate API call with proper typing
      await new Promise<void>((resolve) => setTimeout(resolve, 2000));
      console.log("Form submitted:", formData);

      // Here you would typically send to your backend
      // Example with fetch:
      /*
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (!response.ok) {
        throw new Error('Failed to submit form');
      }
      */

      alert("Thank you for your message! We'll get back to you soon.");
    } catch (error: unknown) {
      console.error("Error submitting form:", error);
      const errorMessage =
        error instanceof Error
          ? error.message
          : "Sorry, there was an error sending your message. Please try again.";
      alert(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactMethods = [
    {
      icon: (
        <svg
          className="w-8 h-8 text-blue-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
          />
        </svg>
      ),
      title: "Call Us",
      details: "+211 912 345 678",
      description: "Mon-Fri, 8AM-6PM EAT",
      bgColor: "bg-blue-100",
    },
    {
      icon: (
        <svg
          className="w-8 h-8 text-green-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
      title: "Email Us",
      details: "info@hypasoftware.com",
      description: "We respond within 24 hours",
      bgColor: "bg-green-100",
    },
    {
      icon: (
        <svg
          className="w-8 h-8 text-purple-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      ),
      title: "Visit Us",
      details: "Tongping, Juba",
      description: "Near American Residence",
      bgColor: "bg-purple-100",
    },
  ] as const;

  return (
    <div className="min-h-screen bg-gray-50">
      <PageHeader
        badge="Get In Touch"
        title="Contact Us"
        subtitle="Let's work together to transform education across Africa"
        description="Have questions about our solutions? Interested in partnership opportunities? We'd love to hear from you."
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div
              className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 lg:p-8"
              role="region"
              aria-labelledby="contact-form-heading"
            >
              <h2
                id="contact-form-heading"
                className="text-2xl font-bold text-gray-900 mb-2"
              >
                Send us a Message
              </h2>
              <p className="text-gray-600 mb-8">
                Fill out the form below and our team will get back to you within
                24 hours.
              </p>

              <ContactForm
                onSubmit={handleSubmit}
                isSubmitting={isSubmitting}
              />
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-6 lg:space-y-8">
            <ContactInfo />
          </div>
        </div>

        {/* Office Location Map */}
        <div className="mt-12 lg:mt-16">
          <OfficeMap />
        </div>

        {/* Additional Contact Options */}
        <section
          className="mt-12 lg:mt-16"
          aria-labelledby="contact-methods-heading"
        >
          <h2 id="contact-methods-heading" className="sr-only">
            Additional Contact Methods
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {contactMethods.map((method, index) => (
              <div
                key={index}
                className="text-center p-6 bg-white rounded-2xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-300"
              >
                <div
                  className={`w-16 h-16 ${method.bgColor} rounded-2xl flex items-center justify-center mb-4 mx-auto`}
                  aria-hidden="true"
                >
                  {method.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {method.title}
                </h3>
                <p className="text-gray-600 font-medium">{method.details}</p>
                <p className="text-gray-500 text-sm mt-1">
                  {method.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default ContactContent;
