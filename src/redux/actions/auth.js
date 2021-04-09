import store from "../store";
import { setUserData, apiPost, apiGet, clearUserData } from "../../utils/utils";
import types from "../types";
import {
  LOGIN_OTP,
  VERIFY_OTP,
  USER_SEARCH,
  USER_NEAR_ME,
  USER_GET_ALL_CONVERSATIONS ,
  USER_GET_CONVERSATION_MESSAGES
} from "../../config/urls";
const { dispatch } = store;

const saveUserData = (data) => {
  dispatch({
    type: types.LOGIN,
    payload: data,
  });
};

const saveViewData = (data) => {
  dispatch({
    type: types.SAVE_VIEW_DATA,
    payload: data,
  });
};

export const login = (data = {}) => {
  console.log(data, "the login data");
  return new Promise((resolve, reject) => {
    apiPost(LOGIN, data)
      .then((res) => {
        saveUserData(res.data);
        setUserData(res.data).then((suc) => {
          resolve(res);
        });
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const signup = (data = {}) => {
  console.log(data, "the signup data");
  return new Promise((resolve, reject) => {
    apiPost(SIGNUP, data)
      .then((res) => {
        saveUserData(res.data);
        setUserData(res.data).then((suc) => {
          resolve(res);
        });
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export function onSendOTP(data = {}) {
  return new Promise((resolve, reject) => {
    apiPost(LOGIN_OTP, data)
      .then((res) => {
        resolve(res);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

export function onVerifyOTP(data = {}) {
  return new Promise((resolve, reject) => {
    apiPost(VERIFY_OTP, data)
      .then((res) => {
        setUserData(res.data).then((suc) => {
          dispatch({
            type: types.ISLOGIN,
            payload: res.data,
          });
        });
        resolve(res);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

export function onUserSearch(data = {}) {
  return new Promise((resolve, reject) => {
    apiPost(USER_SEARCH, data)
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

export function OnNearUser(query) {
  return apiGet(USER_NEAR_ME + "?name=" + query);
}

export function OnNearUserbyCoordinates(longitude , latitude) {
  let query = `?coordinates=[${longitude},${latitude}]`;
  return apiGet(USER_NEAR_ME + query);
}

export function OnGetAllConversations( limit ) {
  let query = `?limit=${ limit }&skip=0` ;
  return apiGet( USER_GET_ALL_CONVERSATIONS + query);
}

export function getUserMessageOneToOne( id ) {
  let query = `?commonConversationId=${id}` ;
  return apiGet( USER_GET_CONVERSATION_MESSAGES + query);
}
