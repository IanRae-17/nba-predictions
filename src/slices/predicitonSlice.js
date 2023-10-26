import { createSlice } from "@reduxjs/toolkit";

const initialPreictionState = {
  MVP: {
    choice: null,
    hm1: null,
    hm2: null,
    hm3: null,
  },
  DPOY: {
    choice: null,
    hm1: null,
    hm2: null,
    hm3: null,
  },
  SMOY: {
    choice: null,
    hm1: null,
    hm2: null,
    hm3: null,
  },
  ROY: {
    choice: null,
    hm1: null,
    hm2: null,
    hm3: null,
  },
  MIP: {
    choice: null,
    hm1: null,
    hm2: null,
    hm3: null,
  },
  COY: {
    choice: null,
    hm1: null,
    hm2: null,
    hm3: null,
  },
};

const predictionSlice = createSlice({
  name: "prediciton",
  initialState: initialPreictionState,
  reducers: {
    setPlayer: (state, action) => {
      const { award, slot, result } = action.payload;

      state[award][slot] = result;
    },
  },
});

export const { setPlayer } = predictionSlice.actions;
export default predictionSlice.reducer;
