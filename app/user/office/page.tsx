"use client";
import Header from "@/components/user/components/header/page";
import Footer from "@/components/user/components/footer/footer";
import OfficeParent from "@/components/user/pages/office/officeParent"; // Import the Township component
import { Provider } from 'react-redux'; // Import Provider
import store from "@/app/redux/store"; // Default import for store

export default function OfficePage() {
  return (
    <>
      <Header />

      <Provider store={store}>
         <OfficeParent /> 
      </Provider>
 
      <Footer />
    </>
  );
}
