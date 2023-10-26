import { configureStore } from "@reduxjs/toolkit";
import predictionReducer from "../slices/predicitonSlice";

const store = configureStore({
  reducer: { prediction: predictionReducer },
});

export default store;
