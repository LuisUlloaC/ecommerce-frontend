import * as constant from "../constants/userConstants";
import axios from "axios";

export const logout = () => (dispatch) => {
    dispatch({ type: constant.USER_LOGOUT });
    localStorage.removeItem("userInfo");
};

export const login = (email, password) => async (dispatch) => {
    try {
        dispatch({
            type: constant.USER_LOGIN_REQUEST,
        });

        const config = {
            headers: {
                "Content-Type": "application/json",
            },
        };

        const { data } = await axios.post(
            `${window.location.host}/api/login`,
            { email: email, password: password },
            config
        );

        if (data.detail) {
            dispatch({
                type: constant.USER_LOGIN_FAIL,
                payload: data.detail,
            });
        } else {
            dispatch({
                type: constant.USER_LOGIN_SUCCESS,
                payload: data,
            });
            localStorage.setItem("userInfo", JSON.stringify(data));
        }
    } catch (error) {
        dispatch({
            type: constant.USER_LOGIN_FAIL,
            payload:
                error.response && error.response.data.detail
                    ? error.response.data.detail
                    : error.message,
        });
    }
};

export const createUser = (data) => async (dispatch, getState) => {
    try {
        dispatch({
            type: constant.USER_CREATE_REQUEST,
        });

        const {
            userLogin: { userInfo },
        } = getState();

        const config = {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${userInfo.access}`,
            },
        };

        await axios.post(`${defaultApi}/api/auth/users/`, data, config);

        dispatch({
            type: constant.USER_CREATE_SUCCESS,
        });
    } catch (error) {
        dispatch({
            type: constant.USER_CREATE_FAIL,
            payload:
                error.response && error.response.data.detail
                    ? error.response.data.detail
                    : error.message,
        });
    }
};

export const getUserDetails = (id) => async (dispatch, getState) => {
    try {
        dispatch({
            type: constant.USER_DETAILS_REQUEST,
        });

        const {
            userLogin: { userInfo },
        } = getState();

        const config = {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${userInfo.token}`,
            },
        };

        const url =
            id === "profile"
                ? `${defaultApi}/api/auth/profile/`
                : `${defaultApi}/api/auth/users/${id}/`;
        const { data } = await axios.get(url, config);

        dispatch({
            type: constant.USER_DETAILS_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: constant.USER_DETAILS_FAIL,
            payload:
                error.response && error.response.data.detail
                    ? error.response.data.detail
                    : error.message,
        });
    }
};

export const updateUser = (id, newUser) => async (dispatch, getState) => {
    try {
        dispatch({
            type: constant.USER_UPDATE_REQUEST,
        });

        const {
            userLogin: { userInfo },
        } = getState();

        const config = {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${userInfo.token}`,
            },
        };

        const url =
            id === "profile"
                ? `${defaultApi}/api/auth/profile/update/`
                : `${defaultApi}/api/auth/users/${id}/`;
        const { data } = await axios.put(url, newUser, config);

        dispatch({
            type: constant.USER_UPDATE_SUCCESS,
            payload: data,
        });

        if (id === "profile") {
            dispatch({
                type: constant.USER_LOGIN_SUCCESS,
                payload: data,
            });
        }
    } catch (error) {
        dispatch({
            type: constant.USER_UPDATE_FAIL,
            payload:
                error.response && error.response.data.detail
                    ? error.response.data.detail
                    : error.message,
        });
    }
};