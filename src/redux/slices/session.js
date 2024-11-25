import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../services/axiosInstance";

export const loginUser = createAsyncThunk('user/login', async ({email, password}, { rejectWithValue }) => {
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


export const logoutUser = createAsyncThunk('user/logout', async ({ refreshToken }, { rejectWithValue }) => {
    try {
        await axiosInstance.post('/logout', {
            refreshToken: refreshToken
        })
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
    //
    isLoadingLogout: false,
    errorLogout: null,
    successLogout: false,
}


export const sessionSlice = createSlice({
    name: 'session',
    initialState,
    reducers: {
        setSuccessLogin(state, action) {
            state.successLogin = action.payload
        },
        resetSuccessLogin(state) {
            state.successLogin = false
        },
        clearErrorLogin(state) {
            state.errorLogin = null
        },
        resetSuccessLogout(state) {
            state.successLogout = false
        }
    },
    extraReducers: (builder) => {
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
            .addCase(logoutUser.pending, (state) => {
                state.isLoadingLogout = true
                state.successLogout = false
                state.errorLogout = null
            })
            .addCase(logoutUser.fulfilled, (state, action) => {
                localStorage.removeItem('accessToken')
                localStorage.removeItem('refreshToken')

                state.isLoadingLogout = false
                state.successLogout = true
                state.errorLogout = null
            })
            .addCase(logoutUser.rejected, (state, action) => {
                state.isLoadingLogout = false
                state.successLogout = false
                state.errorLogout = action.payload
            })
    }
})

export const { setSuccessLogin, resetSuccessLogin, clearErrorLogin, resetSuccessLogout } = sessionSlice.actions
export default sessionSlice.reducer