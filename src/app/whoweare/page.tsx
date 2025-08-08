import { Metadata } from "next";
import PageHeader from "@/components/WhoWeAre/PageHeader";
import CompanyIntro from "@/components/WhoWeAre/CompanyIntro";
import TeamSection from "@/components/WhoWeAre/TeamSection";

export const metadata: Metadata = {
  title: "Who We Are | VDS Business Center",
  description:
    "Learn about VDS Business Center, Thailand's leading workforce and outsourcing solutions provider with over 22 years of experience in manpower supply and recruitment services.",
  keywords:
    "VDS, company profile, workforce solutions, manpower outsourcing, recruitment Thailand, industrial staffing, about us",
};

export default function WhoWeArePage() {
  return (
    <div className="p-relative bottom-1">
      <div role="main" className="main">
        <PageHeader />
        <CompanyIntro />
        <TeamSection />
      </div>
    </div>
  );
}
