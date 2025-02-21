// src/redux/store.ts
import { configureStore } from '@reduxjs/toolkit';

import heroParentData from '@/app/redux/slice/heroData';
import featuredData from '@/app/redux/slice/featuredProperty';
import townshipVideoData from '@/app/redux/slice/whatsNewVideos';
import residenceData from '@/app/redux/slice/residenceData'
import officeData from '@/app/redux/slice/officeData'

const store = configureStore({
  reducer: {
    officeData:officeData,
    townshipVideo: townshipVideoData,
    heroParentData: heroParentData,
    featuredData: featuredData,
    residenceData: residenceData, 

  },
});


export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
