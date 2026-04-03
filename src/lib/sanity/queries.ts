import { client } from "./client";
import type {
  AdmissionProcedure,
  OnlineApplication,
  InfoBrochure,
  AdmissionFee,
  AdmissionOffice,
  NoticeItem,
} from "./types";

export async function getAdmissionProcedure(): Promise<AdmissionProcedure | null> {
  return client.fetch(
    `*[_type == "admissionProcedure"][0]{
      _id, _type, title, slug, heroTitle, heroSubtitle, heroImage,
      steps, importantDates, body, seoTitle, seoDescription
    }`
  );
}

export async function getOnlineApplication(): Promise<OnlineApplication | null> {
  return client.fetch(
    `*[_type == "onlineApplication"][0]{
      _id, _type, title, formTitle, formDescription,
      applicationLink, enquiryEmail, enquiryPhone, body, faqs
    }`
  );
}

export async function getInfoBrochure(): Promise<InfoBrochure | null> {
  return client.fetch(
    `*[_type == "infoBrochure"][0]{
      _id, _type, title, description,
      brochures[]{ _key, name, year, fileUrl, thumbnail }
    }`
  );
}

export async function getAdmissionFee(): Promise<AdmissionFee | null> {
  return client.fetch(
    `*[_type == "admissionFee"][0]{
      _id, _type, title, description, feeCategories, paymentModes, body
    }`
  );
}

export async function getAdmissionOffices(): Promise<AdmissionOffice | null> {
  return client.fetch(
    `*[_type == "admissionOffice"][0]{
      _id, _type, title, offices[]{ _key, name, address, phone, email, mapLink, image }
    }`
  );
}

export async function getExamNotices(): Promise<NoticeItem[]> {
  return client.fetch(
    `*[_type == "notice" && category == "exam"] | order(date desc)[0...10]{
      _id, _type, title, category, date, isNew, fileUrl
    }`
  );
}

export async function getAllNotices(): Promise<NoticeItem[]> {
  return client.fetch(
    `*[_type == "notice"] | order(date desc)[0...20]{
      _id, _type, title, category, date, isNew, fileUrl
    }`
  );
}
