import { createSlice } from "@reduxjs/toolkit";

export const mailSlice = createSlice({
  name: "mail",
  initialState: {
    sendMessagePopup: "close",
    selectedMail: null,
  },
  reducers: {
    openSendMasseage: (state) => {
      state.sendMessagePopup = "open";
    },
    closeSendMasseage: (state) => {
      state.sendMessagePopup = "close";
    },
    minimizeSendMasseage: (state) => {
      state.sendMessagePopup = "minimize";
    },
    openSelectedMail: (state, action) => {
      state.selectedMail = action.payload;
    },
  },
});

export const {
  openSendMasseage,
  closeSendMasseage,
  minimizeSendMasseage,
  openSelectedMail,
} = mailSlice.actions;

export const selectSendMessagePopup = (state) => state.mail.sendMessagePopup;
export const selectedMail = (state) => state.mail.selectedMail;

export default mailSlice.reducer;
