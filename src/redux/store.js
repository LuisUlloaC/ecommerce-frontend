import { configureStore } from "@reduxjs/toolkit"
import loginReducer from "./slices/session"
//import userReducer from "./slices/user"



const store = configureStore({
  devTools: false,
  reducer: {
    login: loginReducer,
    //user: userReducer,
  }
});

export default store;
