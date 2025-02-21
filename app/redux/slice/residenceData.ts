import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the Unified Data Type
interface Property {
  name: string;
  description: string;
  image: string;
  location: string;
  division: string;
}

// Define the State Structure
interface PropertyState {
  properties: Property[];
}

// Initial State
const initialState: PropertyState = {
  properties: [
    // Properties
    { 
      name: "Greenfield District", 
      location: "Mandaluyong City, Metro Manila",
      description: "Greenfield District is a meticulously planned eco-friendly community in Mandaluyong City, offering a perfect blend of modern urban living and lush green spaces. The district boasts smart home technology, pedestrian-friendly pathways, high-end commercial establishments, and premium residential options. It is designed to provide a refreshing and sustainable lifestyle amidst the bustling city environment.", 
      image: "/residence/Residence1.jpg", 
      division: "Ready for Occupancy" 
    },

    // Projects
    { 
      name: "Arden", 
      location: "Cavite", 
      description: "Arden is an emerging residential community that promises a vibrant and harmonious lifestyle. Nestled in the heart of Cavite, it features modern amenities, expansive green spaces, and thoughtfully designed homes. The community is perfect for families and individuals looking for a peaceful yet well-connected environment.", 
      image: "/residence/property/Property1.jpg", 
      division: "Pre-Selling" 
    },
    
    { 
      name: "Capital Town", 
      location: "Pampanga", 
      description: "Capital Town is Pampanga’s first integrated mixed-use development inspired by the rich cultural heritage of the province. This sprawling estate offers commercial and residential hubs, beautifully landscaped streets, and world-class amenities, making it an ideal destination for business and leisure. Its strategic location ensures accessibility while preserving Pampanga’s historical charm.", 
      image: "/residence/property/Property2.jpg", 
      division: "Ready for Occupancy" 
    },

    { 
      name: "The Rise Makati", 
      location: "Makati City, Metro Manila",
      description: "The Rise Makati is a revolutionary residential tower built for the modern urban professional. Situated near Makati’s central business district, it offers a dynamic living experience with cutting-edge architecture, luxurious interiors, and premium facilities. Residents enjoy access to lifestyle hubs, world-class retail spaces, and a vibrant social scene.", 
      image: "/residence/Residence3.jpg", 
      division: "New" 
    },

    { 
      name: "Maple Grove", 
      location: "Cavite", 
      description: "Maple Grove is a forward-thinking sustainable city development in Cavite. Designed to be an eco-friendly township, it integrates residential, commercial, and business districts with green architecture and smart infrastructure. Residents benefit from a modern urban lifestyle with a commitment to environmental preservation.", 
      image: "/residence/property/Property3.jpg", 
      division: "Under Construction" 
    },

    { 
      name: "Southwoods", 
      location: "Laguna", 
      description: "Southwoods is a highly developed township in Laguna, offering a seamless combination of residential, business, and leisure spaces. With its premier golf courses, top-tier schools, commercial hubs, and resort-style amenities, it provides an elevated lifestyle while maintaining a strong connection to nature.", 
      image: "/residence/property/Property4.png", 
      division: "New" 
    },

    { 
      name: "Arca South", 
      location: "Taguig City, Metro Manila",
      description: "Arca South is a futuristic mixed-use estate in Taguig City that redefines urban convenience. Featuring wide open spaces, modern residential developments, and cutting-edge business centers, it is envisioned to be the next premier lifestyle and commercial district. Its seamless connectivity and smart infrastructure make it a prime investment for the future.", 
      image: "/residence/Residence2.jpg", 
      division: "Under Construction" 
    },

    { 
      name: "Upper East", 
      location: "Bacolod", 
      description: "Upper East is a sophisticated commercial and residential estate inspired by the world-famous New York Upper East Side. Located in Bacolod City, this master-planned development features luxurious condominiums, premium office spaces, high-end retail shops, and a vibrant entertainment scene, all within a well-connected and highly accessible community.", 
      image: "/residence/property/Property5.jfif", 
      division: "Pre-Selling" 
    },

    { 
      name: "Westside", 
      location: "Entertainment City", 
      description: "Westside is a premier entertainment and leisure hub set to become one of the most exciting destinations in the country. Designed as a world-class waterfront development, it offers luxurious residential units, grand casinos, high-end shopping malls, and top-tier entertainment facilities. It is poised to become a major hotspot for both local and international tourists.", 
      image: "/residence/property/Property6.jpg", 
      division: "Under Construction" 
    }
  ]
};

const propertySlice = createSlice({
  name: "propertyParent",
  initialState,
  reducers: {
    // Actions for Properties
    addProperty: (state, action: PayloadAction<Property>) => {
      state.properties.push(action.payload);
    },
    removeProperty: (state, action: PayloadAction<string>) => {
      state.properties = state.properties.filter((prop) => prop.name !== action.payload);
    },
    updateProperty: (state, action: PayloadAction<Property>) => {
      const index = state.properties.findIndex((p) => p.name === action.payload.name);
      if (index !== -1) {
        state.properties[index] = action.payload;
      }
    }
  }
});

// Export actions
export const { addProperty, removeProperty, updateProperty } = propertySlice.actions;

// Export reducer
export default propertySlice.reducer;