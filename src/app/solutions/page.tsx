import type { Metadata } from "next";
import PageHeader from "@/components/Solutions/PageHeader";
import SolutionsOverview from "@/components/Solutions/SolutionsOverview";
import ServicesGrid from "@/components/Solutions/ServicesGrid";
import ServiceHighlights from "@/components/Solutions/ServiceHighlights";
import CTASection from "@/components/Solutions/CTASection";

export const metadata: Metadata = {
  title: "Solutions | VDS Business Center",
  description:
    "VDS is Thailand's leading workforce and outsourcing solutions provider for industrial estates and large enterprises. We deliver trusted, high-quality staffing and manpower supply services to support your business growth.",
  keywords: [
    "VDS",
    "Workforce Solutions",
    "Industrial Staffing",
    "Workforce Thailand",
    "Outsourcing Services",
    "Workforce Management",
    "Manpower Supply",
    "Industrial Estate Staffing",
    "Human Resource Solutions",
    "Employee Outsourcing",
    "Factory Staffing",
    "Labor Supply",
    "Professional Staffing",
    "Recruitment Thailand",
    "Talent Solutions",
    "จัดส่งพนักงาน",
    "จัดหาคนงาน",
    "จัดส่งแรงงาน",
    "จัดหาแรงงานอุตสาหกรรม",
    "Outsourcing โรงงาน",
    "บริษัทจัดหางาน",
    "บริหารแรงงาน",
    "บริหารบุคลากร",
    "นิคมอุตสาหกรรม",
    "บริการจัดหาแรงงาน",
    "ผู้ให้บริการแรงงาน",
    "รับเหมาแรงงาน",
    "Outsourcing บุคลากร",
    "บริการจัดส่งแรงงานนิคม",
    "รับเหมาแรงงานอุตสาหกรรม",
  ],
  openGraph: {
    title: "Solutions | VDS Business Center",
    description:
      "VDS is Thailand's leading workforce and outsourcing solutions provider for industrial estates and large enterprises.",
    images: ["/img/og-solutions.jpg"],
  },
};

export default function SolutionsPage() {
  return (
    <div className="p-relative bottom-1">
      <div role="main" className="main">
        <PageHeader />
        <SolutionsOverview />
        <ServicesGrid />
        <ServiceHighlights />
        <CTASection />
      </div>
    </div>
  );
}
