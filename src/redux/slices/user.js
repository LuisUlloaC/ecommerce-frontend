import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const user = createSlice({
    name: 'userInfo',
    initialState: { userInfo: userInfoFromStorage },
    reducers: {
        userLogin(state, action) {
            
        }
    }
})

export default user.reducer

