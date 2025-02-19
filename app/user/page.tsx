"use client";
import Header from "@/components/user/components/header/page";
import Form from "@/components/user/components/homepage/herosection";
import AboutUs from "@/components/user/components/homepage/aboutus";
import Featured from "@/components/user/components/homepage/featured";
import Footer from "@/components/user/components/footer/footer"; // ✅ Only importing Footer

export default function Home() {
  return (
    <>
      <Header />
<div className="overflow-hidden relative min-h-screen">
  <video
    className="absolute top-0 left-0 w-full h-full object-cover min-h-screen sm:min-h-[700px] -z-10"
    src="/logo/bgclip.mp4"
    autoPlay
    loop
    muted
    playsInline
  />

  <Form />
  </div>
  <AboutUs />

  <Featured />
  <Footer />


    </>
  );
}
