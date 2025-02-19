"use client";
import { usePathname } from "next/navigation"; // Use usePathname for capturing URL
import Properties from "@/components/user/pages/properties"; // Import PropertyList
import Township from "@/components/user/pages/township"; // Import TownshipList
import Header from "@/components/user/components/header/page";
import Footer from "@/components/user/components/footer/footer"; // ✅ Only importing Footer

export default function DynamicUserPage() {
  const pathname = usePathname(); // Capture the current pathname (URL)

  // Extract the slug from the URL manually
  const slug = pathname?.split("/")[2]; // Assuming URL like /user/township/manila

  console.log("Slug:", slug); // Log the slug value (e.g., 'manila')

  return (
    <>
      <Header />
      <div className="mx-auto px-6 py-16 bg-[#F9FAF1] w-full">
        {slug === "properties" ? (
          <Properties />
        ) : slug === "township" ? (
          <Township township={slug} />
        ) : (
          <p className="text-center text-gray-700 text-lg">Page Not Found or Under Development</p>
        )}
      </div>
      <Footer />
    </>
  );
}
