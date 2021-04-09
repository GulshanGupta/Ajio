import types from "../types";

const initialstate = {
  cart_array: [] 

};

export default function (state = initialstate, action) {
  switch (action.type) {
    case types.ADD_TO_CART: {
      const { blankcartArray, item } = action.payload;

      if (!state.cart_array.includes(blankcartArray[item.id - 1])) {
        let newarr = [...state.cart_array, blankcartArray[item.id - 1]];

        return { ...state, cart_array: [...newarr] };
      } else {
        return { ...state };
      }
    }

    case types.PRODUCT_DETAILS: {
      const { item } = action.payload;
      return { ...state, item };
    }

    // case types.USER_SEARCH: {
    //     const data = [ ...state.data, ...action.payload ] ;
    //     return { ...state, data: data };
    // }

    default: {
      return { ...state };
    }
  }
}
