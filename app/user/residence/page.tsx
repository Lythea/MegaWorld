"use client";
import Header from "@/components/user/components/header/page";
import Footer from "@/components/user/components/footer/footer";
import ResidenceParent from "@/components/user/pages/residence/residenceParent"; // Import the Township component
import { Provider } from 'react-redux'; // Import Provider
import store from "@/app/redux/store"; // Default import for store

export default function ResidencePage() {
  return (
    <>
      <Header />
      <div>
      <Provider store={store}>
         <ResidenceParent /> 
      </Provider>
    
      </div>
      <Footer />
    </>
  );
}
