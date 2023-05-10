import { SET_USERNAME } from "../actions/actions";
import { NEW_MESSAGES, REACTION_OBJECTS } from "../actions/types";

export const initialState = {
  messages: [],
  username: 'anonymus',
  reactionMap: {}
};

const REACTION_TYPES = REACTION_OBJECTS.map(
  reactionObj => reactionObj.type
);

const reducer = (
  state,
  action
) => {
  if (REACTION_TYPES.includes(action.type)) {
    let reactionMap;

    const { messageId } = action.item;

    const msgReactions = state.reactionMap[messageId];

    reactionMap = {
      ...state.reactionMap,
      [messageId]: msgReactions ? [...msgReactions, action.item] : [action.item]
    };

    return { ...state, reactionMap };
  }

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
