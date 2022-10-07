import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: [],
  reducers: {
    addFilter: (state, action) => {
      const item = action.payload;
      const existItem = state.find(filter => filter.id === item.id);
      if (existItem) {
        return state.filter(filter => filter.id !== item.id);
      } else {
        const removedFilter = state.filter(
          filter => filter.parentId !== item.parentId
        );
        return [...removedFilter, item];
      }
    },
    removeFilter: (state, action) => {
      const removeItem = action.payload;
      return state.filter(current => current.id !== removeItem.id);
    },
    clearFilter: (state, action) => {
      return [];
    },
  },
});
export const { addFilter, removeFilter, clearFilter } = filterSlice.actions;
export default filterSlice.reducer;
