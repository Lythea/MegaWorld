"use client";
import Header from "@/components/user/components/header/page";
import Footer from "@/components/user/components/footer/footer";
import Township from "@/components/user/pages/township"; // Import the Township component

export default function TownshipPage() {
  return (
    <>
      <Header />
      <div className="mx-auto px-6 py-16 bg-[#F9FAF1] w-full">
        <Township /> {/* Render Township without a slug */}
      </div>
      <Footer />
    </>
  );
}
