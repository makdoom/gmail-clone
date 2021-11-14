import { createSlice } from "@reduxjs/toolkit";

export const mailSlice = createSlice({
  name: "mail",
  initialState: {
    sendMessagePopup: "close",
    selectedMail: null,
    emailList: null,
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
    emailList: (state, action) => {
      state.emailList = action.payload;
    },
  },
});

export const {
  openSendMasseage,
  closeSendMasseage,
  minimizeSendMasseage,
  openSelectedMail,
  emailList,
} = mailSlice.actions;

export const selectSendMessagePopup = (state) => state.mail.sendMessagePopup;
export const selectedMail = (state) => state.mail.selectedMail;
export const currentEmailList = (state) => state.mail.emailList;

export default mailSlice.reducer;
