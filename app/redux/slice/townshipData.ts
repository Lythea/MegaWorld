
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define the state type for each category
interface Project {
  name: string;
  location: string;
  image: string;
}

interface Township {
  name: string;
  location: string;
  description: string;
  image: string;
}

interface Image {
  label: string;
  src: string;
}

// Define the state structure including projects, townships, and images
interface ProjectsState {
  projects: Project[];
  townships: Township[];
  images: Image[];
}

// Define the initial state with your provided data
const initialState: ProjectsState = {
  projects: [
    { name: "Arden", location: "Cavite", image: "/townships/properties/arden.jpg" },
    { name: "Capital Town", location: "Pampanga", image: "/townships/properties/capitaltown.jpg" },
    { name: "Maple Grove", location: "Cavite", image: "/townships/properties/maple-grove.jpg" },
    { name: "Southwoods", location: "Laguna", image: "/townships/properties/southwoods.jpg" },
    { name: "Upper East", location: "Bacolod", image: "/townships/properties/uppereast.jpg" },
    { name: "Westside", location: "Entertainment City", image: "/townships/properties/westside.jpg" },
  ],
  townships: [
    { 
      name: 'Uptown Bonifacio', 
      location: 'Taguig City, Metro Manila',
      description: 'A modern and upscale township featuring premium residences, office spaces, and commercial establishments. Uptown Bonifacio is designed for those who seek a luxurious and dynamic urban lifestyle in the heart of the city.', 
      image: '/townships/Township1.jpg' 
    },
    { 
      name: 'Eastwood City', 
      location: 'Quezon City, Metro Manila',
      description: 'A pioneering live-work-play township that combines high-rise residential towers, corporate offices, and entertainment hubs. Eastwood City is well-known for its vibrant nightlife, shopping malls, and pet-friendly environment, making it a favorite among young professionals and families alike.', 
      image: '/townships/Township2.jpg' 
    },
    { 
      name: 'McKinley Hill', 
      location: 'Fort Bonifacio, Taguig City',
      description: 'A European-inspired township featuring elegant residential villages, business parks, and international institutions. McKinley Hill offers a blend of culture and modernity, making it an ideal location for global citizens looking for world-class amenities and scenic landscapes.', 
      image: '/townships/Township3.webp' 
    }
  ],
  images: [
    { label: 'Live', src: '/townships/images/live.jpg' },
    { label: 'Work', src: '/townships/images/work.jpg' },
    { label: 'Play', src: '/townships/images/play.jpg' },
    { label: 'Learn', src: '/townships/images/learn.jpg' },
  ],
};

// Create the slice
const townshipSlice = createSlice({
  name: 'projects',
  initialState,
  reducers: {
    // Action to add a new project
    addProject: (state, action: PayloadAction<Project>) => {
      state.projects.push(action.payload);
    },
    // Action to remove a project by name
    removeProject: (state, action: PayloadAction<string>) => {
      state.projects = state.projects.filter(project => project.name !== action.payload);
    },
    // Action to update a project by name
    updateProject: (state, action: PayloadAction<Project>) => {
      const index = state.projects.findIndex(project => project.name === action.payload.name);
      if (index !== -1) {
        state.projects[index] = action.payload;
      }
    },
    // Action to add a township
    addTownship: (state, action: PayloadAction<Township>) => {
      state.townships.push(action.payload);
    },
    // Action to remove a township by name
    removeTownship: (state, action: PayloadAction<string>) => {
      state.townships = state.townships.filter(township => township.name !== action.payload);
    },
    // Action to update a township
    updateTownship: (state, action: PayloadAction<Township>) => {
      const index = state.townships.findIndex(township => township.name === action.payload.name);
      if (index !== -1) {
        state.townships[index] = action.payload;
      }
    },
    // Action to add an image
    addImage: (state, action: PayloadAction<Image>) => {
      state.images.push(action.payload);
    },
    // Action to remove an image by label
    removeImage: (state, action: PayloadAction<string>) => {
      state.images = state.images.filter(image => image.label !== action.payload);
    },
    // Action to update an image
    updateImage: (state, action: PayloadAction<Image>) => {
      const index = state.images.findIndex(image => image.label === action.payload.label);
      if (index !== -1) {
        state.images[index] = action.payload;
      }
    },
  },
});
export const { 
  addProject, 
  removeProject, 
  updateProject, 
  addTownship, 
  removeTownship, 
  updateTownship, 
  addImage, 
  removeImage, 
  updateImage 
} = townshipSlice.actions;

// Export reducer to add to store
export default townshipSlice.reducer; // Fix this line
