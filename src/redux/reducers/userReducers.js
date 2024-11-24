import * as constant from "../constants/userConstants";
  
  export const userLoginReducers = (state = {}, action) => {
    switch (action.type) {
      case constant.USER_LOGIN_REQUEST:
        return { loading: true };
  
      case constant.USER_LOGIN_SUCCESS:
        return { loading: false, userInfo: action.payload };
  
      case constant.USER_LOGIN_FAIL:
        return { loading: false, error: action.payload };
  
      case constant.USER_LOGOUT:
        return {};
  
      default:
        return state;
    }
  };

  
  export const userDeleteReducer = (state = {}, action) => {
    switch (action.type) {
      case constant.USER_DELETE_REQUEST:
        return { loading: true };
  
      case constant.USER_DELETE_SUCCESS:
        return { loading: false, success: true };
  
      case constant.USER_DELETE_FAIL:
        return { loading: false, error: action.payload };
  
      case constant.USER_DELETE_RESET:
        return {};
  
      default:
        return state;
    }
  };
  
  export const userCreateReducer = (state = {}, action) => {
    switch (action.type) {
      case constant.USER_CREATE_REQUEST:
        return { loading: true };
  
      case constant.USER_CREATE_SUCCESS:
        return { loading: false, success: true };
  
      case constant.USER_CREATE_FAIL:
        return { loading: false, error: action.payload };
  
      case constant.USER_CREATE_RESET:
        return {};
  
      default:
        return state;
    }
  };
  
  export const userDetailsReducers = (state = { user: {} }, action) => {
    switch (action.type) {
      case constant.USER_DETAILS_REQUEST:
        return { ...state, loading: true };
  
      case constant.USER_DETAILS_SUCCESS:
        return { loading: false, user: action.payload };
  
      case constant.USER_DETAILS_FAIL:
        return { loading: false, error: action.payload };
  
      case constant.USER_DETAILS_RESET:
        return { user: {} };
  
      default:
        return state;
    }
  };
  
  export const userUpdateReducer = (state = {}, action) => {
    switch (action.type) {
      case constant.USER_UPDATE_REQUEST:
        return { loading: true };
  
      case constant.USER_UPDATE_SUCCESS:
        return { loading: false, success: true };
  
      case constant.USER_UPDATE_FAIL:
        return { loading: false, error: action.payload };
  
      case constant.USER_UPDATE_RESET:
        return {};
  
      default:
        return state;
    }
  };
  