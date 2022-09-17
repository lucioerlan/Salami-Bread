import { createSlice } from '@reduxjs/toolkit';
import { Catalog } from 'src/interfaces/catalog';

const initialState: Catalog[] = [];

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    initializeCategories: (state, action) => action.payload,
  },
});

export const { initializeCategories } = categoriesSlice.actions;
export default categoriesSlice.reducer;

