import { NEW_MESSAGES } from "../actions/types";

export const initialState = {
  messages: []
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
      }
    default:
      return state;
  }
}

export default reducer;
