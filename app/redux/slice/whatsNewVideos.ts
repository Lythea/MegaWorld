import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the video type
interface Video {
  id: number;
  title: string;
  url: string;
  thumbnail: string;
  location: string;
  date: string;
  views: string;
}

// Initial state
const initialState: Video[] = [
  {
    id: 1,
    title: "Welcome to Uptown Bonifacio!",
    url: "https://www.youtube.com/watch?v=44IbjON9VuU",
    thumbnail: "/images/video-thumbnail-1.jpg",
    location: "Taguig City",
    date: "June 26, 2017",
    views: "209,023",
  },
  {
    id: 2,
    title: "See You at Twin Lakes!",
    url: "https://www.youtube.com/watch?v=0SkTqtwpj9A",
    thumbnail: "/images/video-thumbnail-2.jpg",
    location: "Batangas",
    date: "February 20, 2017",
    views: "72,887",
  },
  {
    id: 3,
    title: "Southwoods City: A Township and a Destination",
    url: "https://www.youtube.com/watch?v=HBD_uXALssg",
    thumbnail: "/images/video-thumbnail-3.jpg",
    location: "Cavite",
    date: "April 07, 2018",
    views: "77,174",
  },
];

// Create Redux slice
const townshipVideosSlice = createSlice({
  name: "townshipVideos",
  initialState,
  reducers: {
    addVideo: (state, action: PayloadAction<Video>) => {
      state.push(action.payload);
    },
    removeVideo: (state, action: PayloadAction<number>) => {
      return state.filter((video) => video.id !== action.payload);
    },
    updateVideo: (state, action: PayloadAction<{ id: number; updatedData: Partial<Video> }>) => {
      const index = state.findIndex((video) => video.id === action.payload.id);
      if (index !== -1) {
        state[index] = { ...state[index], ...action.payload.updatedData };
      }
    },
  },
});

// Export actions
export const { addVideo, removeVideo, updateVideo } = townshipVideosSlice.actions;

// Export reducer
export default townshipVideosSlice.reducer;
