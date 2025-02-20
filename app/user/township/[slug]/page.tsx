"use client";


import { useParams,useSearchParams } from "next/navigation"; // Import useParams
import TownshipChild from "@/components/user/pages/township/townshipChild";
import TownshipVideos from "@/components/user/pages/township/townshipVideos"; // Import TownshipVideos
import Header from "@/components/user/components/header/page";
import Footer from "@/components/user/components/footer/footer";


export default function TownshipSlugPage() {
  const params = useParams(); // Unwrap params
  const slug = params?.slug as string; // Ensure slug is properly accessed

  // const searchParams = useSearchParams();
  // const projects = JSON.parse(searchParams.get("data") || "[]");


  // console.log("Township Data:", projects);
  return (
    <>
      <Header />
      <div className="mx-auto px-6 py-16 bg-[#F9FAF1] w-full">
        {slug === "watch-videos" ? (
          <TownshipVideos /> // Render TownshipVideos when slug is "watch-videos"
        ) : (
          <TownshipChild township={slug} /> // Otherwise, render TownshipChild
        )}
      </div>
      <Footer />
    </>
  );
}
