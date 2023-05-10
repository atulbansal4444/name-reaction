import React from "react";
import CreateReaction from "./CreateReaction";
import { useAppContext } from "./hooks";
import MessageReactions from "./MessageReactions";

const MessageBoard = () => {
  const { state: { messages, reactionMap } } = useAppContext();
  
  return (
    <div>
      {messages.map((message) => {
        const { id, text, username, timestamp } = message;
        return (
          <div key={id}>
            <h4>{new Date(timestamp).toLocaleString()}</h4>
            <p>{text}</p>
            <h4>- {username}</h4>
            <CreateReaction messageId={id} />
            <MessageReactions messageReactions={ reactionMap[id] } />
            <hr />
          </div>
        );
      })}
    </div>
  );
};

export default MessageBoard;
