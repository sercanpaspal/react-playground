import { createSelector, createSlice } from '@reduxjs/toolkit';

const fruitSlice = createSlice({
  name: 'fruit',
  initialState: {
    berry: 0,
    apple: 0,
    banana: 0,
  },
  reducers: {
    increaseBerry: (state) => {
      state.berry += 1;
    },
    increaseApple: (state) => {
      state.apple += 1;
    },
    increaseBanana: (state) => {
      state.banana += 1;
    },
  },
});

export const { increaseBerry, increaseApple, increaseBanana } =
  fruitSlice.actions;

export default fruitSlice.reducer;

export const getFruit = ({ fruit }) => fruit;
export const getBerry = createSelector(getFruit, ({ berry }) => berry);
export const getApple = createSelector(getFruit, ({ apple }) => apple);
export const getBanana = createSelector(getFruit, ({ banana }) => banana);
