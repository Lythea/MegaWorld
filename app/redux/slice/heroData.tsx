// src/redux/slice/heroData.tsx
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Residence {
  title: string;
  location: string;
  description: string;
  buttonText: string;
}

interface HeroDataState {
  residences: Residence[];
}

const initialState: HeroDataState = {
  residences: [
    {
      title: "Uptown Arts Residence",
      location: "Makati City",
      description:
        "Location is everything for Uptown Arts Residence, the latest residential condominium gem to rise within Uptown Bonifacio—Fort Bonifacio’s center for nightlife and entertainment.",
      buttonText: "Discover Uptown",
    },
    {
      title: "Skyline Premier Suites",
      location: "Batangas City",
      description:
        "Experience luxury living with breathtaking city views at Skyline Premier Suites, offering world-class amenities and a vibrant community.",
      buttonText: "Explore More",
    },
    {
      title: "Harbor Bay Towers",
      location: "Davao City",
      description:
        "Wake up to stunning ocean views at Harbor Bay Towers, a premium seaside condominium designed for those who seek peace and exclusivity.",
      buttonText: "See Availability",
    },
    {
      title: "The Green Haven",
      location: "Laguna",
      description:
        "A nature-inspired sanctuary in the heart of the city, The Green Haven offers sustainable living spaces with lush greenery and eco-friendly amenities.",
      buttonText: "Learn More",
    },
    {
      title: "Metro Heights Residences",
      location: "Mandaluyong City",
      description:
        "Modern and stylish high-rise living at Metro Heights Residences, located in the city's most dynamic business and lifestyle district.",
      buttonText: "Schedule a Visit",
    },
  ],
};

const heroDataSlice = createSlice({
  name: 'heroData',
  initialState,
  reducers: {
    // Example action to modify the residences (optional, in case you need to update data)
    updateResidence(state, action: PayloadAction<{ index: number; updatedData: Residence }>) {
      const { index, updatedData } = action.payload;
      state.residences[index] = updatedData;
    },
  },
});

export const { updateResidence } = heroDataSlice.actions;
export default heroDataSlice.reducer;
