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

const REACTION_OBJECTS = [
  {
    type: 'REACTION_LOVE',
    emoji: '❤️'
  },
  {
    type: 'REACTION_LIKE',
    emoji: '👍'
  },
  {
    type: 'REACTION_DISLIKE',
    emoji: '👎'
  },
  {
    type: 'REACTION_LAUGH',
    emoji: '😂'
  } 
];

export {
  newMessage,
  NEW_MESSAGES,
  REACTION_OBJECTS
};
