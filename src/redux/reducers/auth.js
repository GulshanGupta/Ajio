import types from "../types";

const initial_state = {
  isLoggedin: false,
  userData: {},
  
};

export default function (state = initial_state, action) {
  switch (action.type) {
    case types.LOGIN: {
      const data = action.payload;
      return { userData: data };
    }

    case types.ISLOGIN:
      const userData = { ...action.payload };
      return { ...state, userData };

    default:
      return state;
  }
}
