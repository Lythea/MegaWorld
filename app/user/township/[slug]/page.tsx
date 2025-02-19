// app/user/township/[slug]/page.tsx
"use client";
import Township from "@/components/user/pages/township"; // Import the Township component
import Header from "@/components/user/components/header/page";
import Footer from "@/components/user/components/footer/footer";

interface TownshipSlugPageProps {
  params: {
    slug: string; // Capture the dynamic parameter (slug)
  };
}

export default function TownshipSlugPage({ params }: TownshipSlugPageProps) {
  const { slug } = params; // Extract the slug from params

  console.log("Slug:", slug); // Log the slug to the console for debugging

  return (
    <>
      <Header />
      <div className="mx-auto px-6 py-16 bg-[#F9FAF1] w-full">
        <Township township={slug} /> {/* Pass the slug as a prop */}
      </div>
      <Footer />
    </>
  );
}
