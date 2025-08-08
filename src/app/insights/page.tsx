import type { Metadata } from "next";
import PageHeader from "@/components/Insights/PageHeader";
import BlogGrid from "@/components/Insights/BlogGrid";

export const metadata: Metadata = {
  title: "Insights | VDS Business Center",
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
  authors: [{ name: "vds co.,ltd." }],
};

export default function InsightsPage() {
  return (
    <div className="p-relative bottom-1">
      <div role="main" className="main">
        <PageHeader />
        <BlogGrid />
      </div>
    </div>
  );
}
