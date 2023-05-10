import React, { Fragment } from "react";

const MessageReactions = ({ messageReactions }) => {
  return (
    <Fragment>
    {
      messageReactions &&
        messageReactions.map((msgReaction, index) => {
          const { id, emoji, username } = msgReaction;
          return (
            <span key={id}>
              <em>{username}</em>
              {emoji}
              {index !== messageReactions.length - 1 ? ', ' : ''}
            </span>
          );
        })
    }
    </Fragment>
  );
};

export default MessageReactions;
