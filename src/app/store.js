import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import cameraReducer from "../features/cameraSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    camera: cameraReducer
  },
});
