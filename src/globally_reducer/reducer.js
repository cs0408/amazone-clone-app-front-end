//import cradential
import { usersCradantial } from "../dummy_data/dummyData";

// create initialState
export const initialState = {
  cart: [], // for basket
  users: [...usersCradantial], // for users list
  currentUserName: null, // for current user name
};

const reducer = (state, action) => {
  console.log(state, action);
  switch (action.type) {
    // for add to cart, delet from cart
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, action.item],
      };

    case "REMOVE_FROM_CART":
      const index = state.cart.findIndex(
        (cartItem) => cartItem.id === action.id
      );
      let newCart = [...state.cart];

      if (index >= 0) {
        newCart.splice(index, 1);
      } else {
        console.warn(`Can't remove (id: ${action.id}) as it's not in cart!!!`);
      }

      return {
        ...state,
        cart: newCart,
      };

    // new user add into users list array
    case "SIGN_UP_USER":
      return {
        ...state,
        users: [...state.users, action.item],
      };

    // login user
    case "SET_USER":
      return {
        ...state,
        currentUserName: action.item,
      };

    // default case
    default:
      return state;
  }
};

export default reducer;
