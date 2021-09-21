import * as type from "../actions-types/users.types";

const initialState = {
  array: [],
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case type.REGISTER_USER:
      return { ...state, array: action.payload };
    default:
      return state;
  }
}
