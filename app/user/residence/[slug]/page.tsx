"use client";

import { useParams,useSearchParams } from "next/navigation"; // Import useParams
import ResidenceChild from "@/components/user/pages/residence/residenceChild";
import Header from "@/components/user/components/header/page";
import Footer from "@/components/user/components/footer/footer";

export default function ResidenceSlugPage() {
  const params = useParams(); // Unwrap params
  const slug = params?.slug as string; // Ensure slug is properly accessed
  const searchParams = useSearchParams();
  const projects = JSON.parse(searchParams.get("projects") || "[]");

  console.log("Residence Data:", projects);

  return (
    <>
      <Header />
      <div className="mx-auto px-6 py-16 bg-[#F9FAF1] w-full">
        <ResidenceChild residence={slug} />
      </div>
      <Footer />
    </>
  );
}
