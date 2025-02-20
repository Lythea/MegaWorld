// src/pages/townshipPage.tsx (or your relevant page file)
"use client";

import { useEffect, useState } from "react";
import Header from "@/components/user/components/header/page";
import Footer from "@/components/user/components/footer/footer";
import TownshipParent from "@/components/user/pages/township/townshipParent";
import { Provider } from 'react-redux'; // Import Provider
import store from "@/app/redux/store"; // Default import for store

export default function TownshipPage() {
  return (
    <>
      <Header />
      {/* Wrap your components with Provider and pass the store */}
      <Provider store={store}>
        <TownshipParent />
      </Provider>
      <Footer />
    </>
  );
}
