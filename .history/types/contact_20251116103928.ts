// types/contact.ts
export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
  company?: string;
  phone?: string;
  inquiryType: "general" | "support" | "partnership" | "careers" | "other";
}

export interface SupportTopic {
  id: string;
  title: string;
  description: string;
  icon: string;
  questions: string[];
}

export interface OfficeLocation {
  id: string;
  name: string;
  address: string;
  city: string;
  country: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  phone: string;
  email: string;
  hours: string;
}
