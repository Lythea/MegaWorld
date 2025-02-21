"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Properties from "@/components/user/pages/properties";
import Header from "@/components/user/components/header/page";
import Footer from "@/components/user/components/footer/footer";
import WatchVideos from "@/components/user/pages/user/watchVideos"

import { Provider } from 'react-redux'; // Import Provider
import store from "@/app/redux/store"; // Default import for store

export default function DynamicUserPage() {
  const [slug, setSlug] = useState<string | null>(null);
  const paramsPromise = useParams(); // This is a Promise

  useEffect(() => {
    async function fetchParams() {
      const resolvedParams = await paramsPromise; // Await the resolved params

      // Ensure slug is a string and not an array
      const slugValue = Array.isArray(resolvedParams?.slug)
        ? resolvedParams.slug[0] // Take the first element if it's an array
        : resolvedParams?.slug || null; // Otherwise, use it as is or set null

      setSlug(slugValue);
    }
    fetchParams();
  }, [paramsPromise]);

  console.log("Slug:", slug);

  return (
    <>
      <Header />
      <div className="mx-auto px-6 py-16 bg-[#F9FAF1] w-full">
        {slug === "properties" ? (
          <Properties />
          ) : slug === "watch-videos" ? (
             <Provider store={store}>  <WatchVideos />  </Provider>
    
    ): slug ? (
          <p className="text-center text-gray-700 text-lg">
            Page Not Found or Under Development
          </p>
        ) : (
          <p className="text-center text-gray-700 text-lg">Loading...</p>
        )}
      </div>
      <Footer />
    </>
  );
}
