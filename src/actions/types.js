import uuid from 'uuid/v4';

const NEW_MESSAGES = 'NEW_MESSAGES';
const newMessage = ({text, username}) => {
  return {
    type: NEW_MESSAGES,
    item: {
      text,
      username,
      timestamp: Date.now(),
      id: uuid()
    }
  }
}

export {
  newMessage,
  NEW_MESSAGES
};
