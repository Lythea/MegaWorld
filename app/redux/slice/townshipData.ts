import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define the unified development type
interface Development {
  name: string;
  location: string;
  description: string;
  image: string;
  division:string;
  featured: 0 | 1; // 0 = not featured, 1 = featured
}

// Define the image type
interface Image {
  label: string;
  src: string;
}

// Define the state structure
interface DevelopmentsState {
  allDevelopments: Development[];
  images: Image[];
}

// Initial state with merged projects and township
const initialState: DevelopmentsState = {
  allDevelopments: [
    // Projects (added default descriptions)
    { 
      name: "Arden", 
      location: "Cavite", 
      division:"Metro Manila",
      description: "A premier residential community with modern amenities and lush landscapes, providing a balanced lifestyle in Cavite.", 
      image: "/township/properties/arden.jpg",
      featured: 0
    },
    { 
      name: "Capital Town", 
      location: "Pampanga", 
        division:"Luzon",
      description: "A vibrant mixed-use township that seamlessly integrates business, lifestyle, and leisure in the heart of Pampanga.", 
      image: "/township/properties/capitaltown.jpg",
      featured: 0
    },
    { 
      name: "Maple Grove", 
      location: "Cavite", 
        division:"Visayas",
      description: "An eco-friendly township in Cavite, offering sustainable living with green spaces, business districts, and modern properties.", 
      image: "/township/properties/maplegrove.jpg",
      featured: 0
    },
    { 
      name: "Southwoods", 
      location: "Laguna", 
        division:"Visayas",
      description: "A master-planned community in Laguna with residential, commercial, and recreational developments for a modern lifestyle.", 
      image: "/township/properties/southwoods.jpg",
      featured: 0,
    },
    { 
      name: "Upper East", 
      location: "Bacolod", 
        division:"Mindanao",
      description: "A contemporary township that blends urban convenience with historic charm in the heart of Bacolod City.", 
      image: "/township/properties/uppereast.jpg",
      featured: 0
    },
    { 
      name: "Westside", 
      location: "Entertainment City", 
      description: "An emerging entertainment and residential hub that offers luxurious waterfront living in the Metro.", 
      image: "/township/properties/westside.jpg",
      featured: 0,
          division:"Mindanao",
    },

    // Townships
    { 
      name: "Uptown Bonifacio", 
      location: "Taguig City, Metro Manila",
      description: "A modern and upscale township featuring premium properties, office spaces, and commercial establishments. Designed for those who seek a luxurious and dynamic urban lifestyle.", 
      image: "/township/properties/Township1.jpg",
      featured: 1,
          division:"Luzon",
    },
    { 
      name: "Eastwood City", 
      location: "Quezon City, Metro Manila",
      description: "A pioneering live-work-play township that combines high-rise residential towers, corporate offices, and entertainment hubs, making it a favorite among young professionals and families.", 
      image: "/township/properties/Township2.jpg",
      featured: 1,
       division:"Mindanao",
    },
    { 
      name: "McKinley Hill", 
      location: "Fort Bonifacio, Taguig City",
      description: "A European-inspired township featuring elegant residential villages, business parks, and international institutions, offering world-class amenities and scenic landscapes.", 
      image: "/township/properties/Township3.webp",
      featured: 1,
           division:"Visayas",
    }
  ],
  images: [
    { label: "Live", src: "/township/images/live.jpg" },
    { label: "Work", src: "/township/images/work.jpg" },
    { label: "Play", src: "/township/images/play.jpg" },
    { label: "Learn", src: "/township/images/learn.jpg" },
  ],
};

// Create the slice
const developmentSlice = createSlice({
  name: "developments",
  initialState,
  reducers: {
    // Add a new development
    addDevelopment: (state, action: PayloadAction<Development>) => {
      state.allDevelopments.push(action.payload);
    },
    // Remove a development by name
    removeDevelopment: (state, action: PayloadAction<string>) => {
      state.allDevelopments = state.allDevelopments.filter(dev => dev.name !== action.payload);
    },
    // Update a development
    updateDevelopment: (state, action: PayloadAction<{ name: string; updatedData: Partial<Development> }>) => {
      const index = state.allDevelopments.findIndex(dev => dev.name === action.payload.name);
      if (index !== -1) {
        state.allDevelopments[index] = { ...state.allDevelopments[index], ...action.payload.updatedData };
      }
    },
    // Add an image
    addImage: (state, action: PayloadAction<Image>) => {
      state.images.push(action.payload);
    },
    // Remove an image by label
    removeImage: (state, action: PayloadAction<string>) => {
      state.images = state.images.filter(image => image.label !== action.payload);
    },
    // Update an image
    updateImage: (state, action: PayloadAction<Image>) => {
      const index = state.images.findIndex(image => image.label === action.payload.label);
      if (index !== -1) {
        state.images[index] = action.payload;
      }
    },
  },
});

// Export actions
export const { 
  addDevelopment, 
  removeDevelopment, 
  updateDevelopment, 
  addImage, 
  removeImage, 
  updateImage 
} = developmentSlice.actions;

// Export reducer to add to store
export default developmentSlice.reducer;
