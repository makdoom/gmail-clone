import { configureStore } from "@reduxjs/toolkit";
import mailReducer from "../features/mail/mailSlice";
import userReducer from "../features/user/userSlice";

export const store = configureStore({
  reducer: {
    mail: mailReducer,
    user: userReducer,
  },
});
