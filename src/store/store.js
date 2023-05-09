import { configureStore } from "@reduxjs/toolkit";
import { getDefaultMiddleware } from '@reduxjs/toolkit';

import  userDetail  from "./userDetailSlice";


export const store = configureStore({
  reducer: {
    app : userDetail,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});