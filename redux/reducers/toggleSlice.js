const { createSlice } = require('@reduxjs/toolkit');

const toggleSlice = createSlice({
  name: 'toggle',
  initialState: {
    search: false,
    contact: false,
    mobile_subnav: false,
    toast: {
      status: 'success',
      show: true,
    },
  },
  reducers: {
    show: (state, action) => {
      state[action.payload.key] = action.payload.value;
    },
    showToast: (state, action) => {
      state.toast.status = action.payload.status;
      state.toast.show = action.payload.show;
    },
  },
});
export const { show, showToast } = toggleSlice.actions;
export default toggleSlice.reducer;
