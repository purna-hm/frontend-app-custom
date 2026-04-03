import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import { getAdmissionOffices } from "@/lib/sanity/queries";
import { MapPin, Phone, Mail, ExternalLink } from "lucide-react";

export const metadata: Metadata = { title: "Admission Offices" };

const defaultOffices = [
  { _key: "1", name: "Main Campus Admission Office", address: "MyUni University, Knowledge Park, University Road, City — 000001", phone: "+91-9999-000001", email: "admissions@myuni.edu.in", mapLink: "#" },
  { _key: "2", name: "City Centre Admission Office", address: "Plot No. 12, Commercial Complex, MG Road, City — 000002", phone: "+91-9999-000002", email: "citycentre@myuni.edu.in", mapLink: "#" },
  { _key: "3", name: "North Campus Office", address: "Sector 21, North Campus, Near Metro Station, City — 000003", phone: "+91-9999-000003", email: "northcampus@myuni.edu.in", mapLink: "#" },
  { _key: "4", name: "International Students Cell", address: "Admin Block, Main Campus, MyUni University — 000001", phone: "+91-9999-000004", email: "international@myuni.edu.in", mapLink: "#" },
];

export default async function AdmissionOfficesPage() {
  const data = await getAdmissionOffices().catch(() => null);
  const offices = data?.offices ?? defaultOffices;

  return (
    <>
      <PageHeader
        title={data?.title ?? "Admission Offices"}
        subtitle="Find an admission office nearest to you. Walk-in timings: Mon–Sat, 9:00 AM – 5:00 PM."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Admissions", href: "/admissions" },
          { label: "Admission Offices" },
        ]}
      />
      <div className="max-w-5xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-6">
          {offices.map(({ _key, name, address, phone, email, mapLink }) => (
            <div key={_key} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-3 mb-4">
                <h3 className="font-bold text-[#1a1a5e]">{name}</h3>
                {mapLink && mapLink !== "#" && (
                  <a
                    href={mapLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 text-xs text-[#1a1a5e] font-semibold flex items-center gap-1 hover:underline"
                  >
                    Map <ExternalLink size={12} />
                  </a>
                )}
              </div>
              <div className="space-y-2.5 text-sm text-gray-600">
                <div className="flex items-start gap-2.5">
                  <MapPin size={14} className="text-[#1a1a5e] mt-0.5 shrink-0" />
                  <span>{address}</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Phone size={14} className="text-[#1a1a5e] shrink-0" />
                  <a href={`tel:${phone}`} className="hover:text-[#1a1a5e] hover:underline">{phone}</a>
                </div>
                <div className="flex items-center gap-2.5">
                  <Mail size={14} className="text-[#1a1a5e] shrink-0" />
                  <a href={`mailto:${email}`} className="hover:text-[#1a1a5e] hover:underline">{email}</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
