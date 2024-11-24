import { combineReducers, configureStore } from '@reduxjs/toolkit';

// USERS REDUCERS IMPORTS
import {
    userLoginReducers,
    userDeleteReducer,
    userCreateReducer,
    userDetailsReducers,
    userUpdateReducer,
  } from "./reducers/userReducers";


const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;


export const initialState = {
  sidebarShow: true,
  userLogin: { userInfo: userInfoFromStorage },
};


const reducers = combineReducers({
    //USER REDUCERS
    userLogin: userLoginReducers,
    userDelete: userDeleteReducer,
    userCreate: userCreateReducer,
    userUpdate: userUpdateReducer,
    userDetails: userDetailsReducers,
})


const store = configureStore({
    reducer: reducers,
    initialState
});

export default store;
