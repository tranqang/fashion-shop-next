const { createSlice } = require('@reduxjs/toolkit');

const toggleSlice = createSlice({
  name: 'toggle',
  initialState: {
    search: false,
    contact: false,
    mobile_subnav: false,
  },
  reducers: {
    show: (state, action) => {
      state[action.payload.key] = action.payload.value;
    },
  },
});
export const { show } = toggleSlice.actions;
export default toggleSlice.reducer;
