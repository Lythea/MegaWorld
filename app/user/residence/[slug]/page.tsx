"use client";

import { useParams,useSearchParams } from "next/navigation"; // Import useParams
import ResidenceChild from "@/components/user/pages/residence/residenceChild";
import Header from "@/components/user/components/header/page";
import Footer from "@/components/user/components/footer/footer";
import { Provider } from 'react-redux'; // Import Provider
import store from "@/app/redux/store"; // Default import for store

export default function ResidenceSlugPage() {
  const params = useParams(); // Unwrap params
  const slug = params?.slug as string; // Ensure slug is properly accessed

  return (
    <>
      <Header />
      
      <div className="mx-auto px-6 py-16 bg-[#F9FAF1] w-full">
      <Provider store={store}>
          <ResidenceChild residence={slug} />
      </Provider>
      </div>
      <Footer />
    </>
  );
}
