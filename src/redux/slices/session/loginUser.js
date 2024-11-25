import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../../services/axiosInstance";

export const loginUser = createAsyncThunk('user/login', async ({ email, password }, { rejectWithValue }) => {
    try {
        const response = await axiosInstance.post('/login', {
            email: email,
            password: password
        })
        return response.data
    } catch (err) {
        const errorBundle = {
            detail: err.response.data.error.detail,
            status: err.response.status,
            statusText: err.response.statusText
        }
        return rejectWithValue(errorBundle)
    }
})

const initialState = {
    isLoadingLogin: false,
    errorLogin: null,
    successLogin: false,
}

const reducers = {
    setSuccessLogin(state, action) {
        state.successLogin = action.payload
    },
    resetSuccessLogin(state) {
        state.successLogin = false
    },
    clearErrorLogin(state) {
        state.errorLogin = null
    },
}

function extraReducers(builder) {
    builder
        .addCase(loginUser.pending, (state) => {
            state.isLoadingLogin = true
            state.successLogin = false
            state.errorLogin = null
        })
        .addCase(loginUser.fulfilled, (state, action) => {
            localStorage.setItem('accessToken', JSON.stringify(action.payload.access))
            localStorage.setItem('refreshToken', JSON.stringify(action.payload.refresh))
            state.isLoadingLogin = false
            state.successLogin = true
            state.errorLogin = null
        })
        .addCase(loginUser.rejected, (state, action) => {
            state.isLoadingLogin = false
            state.successLogin = false
            state.errorLogin = action.payload
        })
}


export default {
    loginUser,
    initialState,
    reducers,
    extraReducers
}