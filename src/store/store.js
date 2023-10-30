import { configureStore } from "@reduxjs/toolkit";
import predictionReducer from "../slices/predicitonSlice";
import playerReducer from "../slices/playerSlice";

const store = configureStore({
  reducer: { prediction: predictionReducer, player: playerReducer },
});

export default store;
