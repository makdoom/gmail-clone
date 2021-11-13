import { createSlice } from "@reduxjs/toolkit";

export const mailSlice = createSlice({
  name: "mail",
  initialState: {
    sendMessagePopup: "close",
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
  },
});

export const { openSendMasseage, closeSendMasseage, minimizeSendMasseage } =
  mailSlice.actions;

export const selectSendMessagePopup = (state) => state.mail.sendMessagePopup;

export default mailSlice.reducer;
