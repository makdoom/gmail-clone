import { createSlice } from "@reduxjs/toolkit";

export const mailSlice = createSlice({
  name: "mail",
  initialState: {
    sendMessageIsOpen: false,
  },
  reducers: {
    openSendMasseage: (state) => {
      state.sendMessageIsOpen = true;
    },
    closeSendMasseage: (state) => {
      state.sendMessageIsOpen = false;
    },
  },
});

export const { openSendMasseage, closeSendMasseage } = mailSlice.actions;

export const selectSendMessageIsOpen = (state) => state.mail.sendMessageIsOpen;

export default mailSlice.reducer;
