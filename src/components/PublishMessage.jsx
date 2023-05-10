import React, { useState } from "react";
import { newMessage } from "../actions/types";
import { useAppContext } from "./hooks";

const PublishMessage = () => {
  const { state: { username }, pubsub: { publish } } = useAppContext();
  const [text, setText] = useState('');
  
  const updateText = event => {
    setText(event.target.value);
  };

  const publishMessage = () => {
    console.log('hi');
    publish(newMessage({text, username}));
    setText('');
  };

  const handleKeyPress = event => {
    if (event.key === 'Enter') {
      publishMessage();
    }
  }

  return (
    <div>
      <h3>Got something to say?</h3>
      <input value={text} onChange={updateText} onKeyDown={handleKeyPress} />
      {' '}
      <button onClick={publishMessage}>Publish it!</button>
    </div>
  );
};

export default PublishMessage;
