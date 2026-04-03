export interface SanityImage {
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
  };
  alt?: string;
}

export interface AdmissionProcedureStep {
  _key: string;
  step: number;
  title: string;
  description: string;
  icon?: string;
}

export interface AdmissionProcedure {
  _id: string;
  _type: "admissionProcedure";
  title: string;
  slug: { current: string };
  heroTitle: string;
  heroSubtitle: string;
  heroImage?: SanityImage;
  steps: AdmissionProcedureStep[];
  importantDates?: { label: string; date: string }[];
  body?: unknown[];
  seoTitle?: string;
  seoDescription?: string;
}

export interface OnlineApplication {
  _id: string;
  _type: "onlineApplication";
  title: string;
  formTitle: string;
  formDescription: string;
  applicationLink: string;
  enquiryEmail: string;
  enquiryPhone: string;
  body?: unknown[];
  faqs?: { question: string; answer: string; _key: string }[];
}

export interface InfoBrochure {
  _id: string;
  _type: "infoBrochure";
  title: string;
  description: string;
  brochures: {
    _key: string;
    name: string;
    year: string;
    fileUrl: string;
    thumbnail?: SanityImage;
  }[];
}

export interface AdmissionFee {
  _id: string;
  _type: "admissionFee";
  title: string;
  description: string;
  feeCategories: {
    _key: string;
    category: string;
    amount: number;
    currency: string;
    note?: string;
  }[];
  paymentModes: string[];
  body?: unknown[];
}

export interface AdmissionOffice {
  _id: string;
  _type: "admissionOffice";
  title: string;
  offices: {
    _key: string;
    name: string;
    address: string;
    phone: string;
    email: string;
    mapLink?: string;
    image?: SanityImage;
  }[];
}

export interface NoticeItem {
  _id: string;
  _type: "notice";
  title: string;
  category: "exam" | "admission" | "general";
  date: string;
  isNew?: boolean;
  fileUrl?: string;
  body?: unknown[];
}
