import { LOGIN_USER } from "../_actions/types";

export default function (state = {}, action) {
  switch (action.type) {
    case LOGIN_USER:
      return { ...state, success: action };
    default:
      return state;
  }
}
