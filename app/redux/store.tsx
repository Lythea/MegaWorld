// src/redux/store.ts
import { configureStore } from '@reduxjs/toolkit';
import townshipParentData from '@/app/redux/slice/townshipData';
import heroParentData from '@/app/redux/slice/heroData';
const store = configureStore({
  reducer: {
    townshipParentData: townshipParentData,
    heroParentData: heroParentData,
  },
});


export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
