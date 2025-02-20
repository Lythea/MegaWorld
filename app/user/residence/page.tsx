"use client";
import Header from "@/components/user/components/header/page";
import Footer from "@/components/user/components/footer/footer";
import ResidenceParent from "@/components/user/pages/residence/residenceParent"; // Import the Township component

export default function ResidencePage() {
  return (
    <>
      <Header />
      <div>
        <ResidenceParent /> 
      </div>
      <Footer />
    </>
  );
}
