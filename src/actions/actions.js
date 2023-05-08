const SET_USERNAME = 'SET_USERNAME';
const setUsername = username => {
  return {
    type: SET_USERNAME,
    username
  }
};

export {
  SET_USERNAME,
  setUsername
};
