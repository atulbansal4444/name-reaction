import { SET_USERNAME } from "../actions/actions";
import { NEW_MESSAGES } from "../actions/types";

export const initialState = {
  messages: [],
  username: 'anonymus'
};

const reducer = (
  state,
  action
) => {
  switch (action.type) {
    case NEW_MESSAGES:
      return {
        ...state,
        messages: [...state.messages, action.item]
      };
    case SET_USERNAME:
      return {
        ...state,
        username: action.username
      };
    default:
      return state;
  }
}

export default reducer;
