import uuid from 'uuid/v4';

const SET_USERNAME = 'SET_USERNAME';
const setUsername = username => {
  return {
    type: SET_USERNAME,
    username
  }
};

const createReaction = ({type, emoji, username, messageId}) => {
  return {
    type,
    item: {id: uuid(), timestamp: Date.now(), emoji, username, messageId}
  }
}

export {
  SET_USERNAME,
  setUsername,
  createReaction
};
