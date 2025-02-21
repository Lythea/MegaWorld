import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the Project Type
interface Project {
  name: string;
  image: string;
  location: string;
  details: string;
  price: string;
}

// Initial state
const initialState: Project[] = [
  {
    name: "9 Central Park",
    image: "/featuredbuilding/CentralPark.webp",
    location: "Marilao, Bulacan",
    details: "No Downpayment, 0% Interest, 38 months to pay",
    price: "Starting at ₱15,300/month ($260) with Lumpsum every 10 months",
  },
  {
    name: "Uptown Modern",
    image: "/featuredbuilding/Uptown Modern.webp",
    location: "Uptown Bonifacio, Taguig City",
    details: "No Downpayment, 0% Interest, 72 months to pay",
    price: "Starting at ₱27,000/month ($178) with Annual Lumpsum",
  },
  {
    name: "Uptown Arts Residence",
    image: "/featuredbuilding/Uptown Arts Residence.webp",
    location: "Uptown Bonifacio, Taguig City",
    details: "No Downpayment, 0% Interest, 36 months to pay",
    price: "Starting at ₱38,500/month ($656) with Lumpsum every 10 months",
  },
  {
    name: "Park McKinley West",
    image: "/featuredbuilding/Park McKinly West.webp",
    location: "McKinley West, Fort Bonifacio, Taguig City",
    details: "No Downpayment, 0% Interest, 36 months to pay",
    price: "Starting at ₱32,400/month ($578) with Lumpsum every 10 months",
  },
];

const featuredProperty = createSlice({
  name: "featuredData",
  initialState,
  reducers: {
    addProject: (state, action: PayloadAction<Project>) => {
      state.push(action.payload);
    },
    removeProject: (state, action: PayloadAction<string>) => {
      return state.filter((project) => project.name !== action.payload);
    },
    updateProject: (state, action: PayloadAction<Project>) => {
      const index = state.findIndex((p) => p.name === action.payload.name);
      if (index !== -1) {
        state[index] = action.payload;
      }
    },
  },
});

// Export actions
export const { addProject, removeProject, updateProject } = featuredProperty.actions;

// Export reducer
export default featuredProperty.reducer;
