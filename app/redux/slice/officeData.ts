import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the Unified Data Type
interface Office {
  name: string;
  description: string;
  image: string;
  location: string;
  division: string;
}

// Define the State Structure
interface OfficeState {
  offices: Office[];
}

// Initial State
const initialState: OfficeState = {
  offices: [
    { 
      name: "One World Place", 
      location: "Bonifacio Global City, Taguig",
      description: "A premium-grade office tower located in the heart of Bonifacio Global City, One World Place offers state-of-the-art facilities, flexible office spaces, and sustainable architecture designed for modern businesses.",
         image: "/residence/property/Property1.jpg", 
      division: "For Lease" 
    },
    { 
      name: "PBCom Tower", 
      location: "Makati City",
      description: "PBCom Tower is one of the tallest office skyscrapers in the Philippines, strategically situated in the Makati Central Business District. It houses multinational companies and offers top-tier office spaces with high-end amenities.", 
      image: "/residence/property/Property2.jpg", 
      division: "For Rent" 
    },
    { 
      name: "The Enterprise Center", 
      location: "Makati City",
      description: "A twin-tower premium office complex in Makati, The Enterprise Center is home to corporate headquarters and high-profile firms. It boasts modern business facilities, advanced security, and a prime location.",
      image: "/residence/property/Property3.jpg", 
      division: "For Sale" 
    },
    { 
      name: "Cyber Sigma", 
      location: "Taguig City",
      description: "Cyber Sigma is a modern business hub in Taguig City designed for IT and BPO companies. It features high-speed connectivity, ergonomic workspaces, and cutting-edge security systems.",
       image: "/residence/property/Property1.jpg", 
      division: "For Lease" 
    },
    { 
      name: "Rockwell Business Center", 
      location: "Ortigas, Pasig City",
      description: "Rockwell Business Center is a premium office complex offering stylish workspaces and high-end commercial establishments. It provides a dynamic and professional environment ideal for growing enterprises.",
         image: "/residence/property/Property1.jpg", 
      division: "For Rent" 
    }
  ]
};

const officeSlice = createSlice({
  name: "officeParent",
  initialState,
  reducers: {
    addOffice: (state, action: PayloadAction<Office>) => {
      state.offices.push(action.payload);
    },
    removeOffice: (state, action: PayloadAction<string>) => {
      state.offices = state.offices.filter((office) => office.name !== action.payload);
    },
    updateOffice: (state, action: PayloadAction<Office>) => {
      const index = state.offices.findIndex((o) => o.name === action.payload.name);
      if (index !== -1) {
        state.offices[index] = action.payload;
      }
    }
  }
});

// Export actions
export const { addOffice, removeOffice, updateOffice } = officeSlice.actions;

// Export reducer
export default officeSlice.reducer;