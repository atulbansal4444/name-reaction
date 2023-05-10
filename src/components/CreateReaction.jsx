import React from "react";
import { REACTION_OBJECTS } from "../actions/types";
import { useAppContext } from "./hooks";
import { createReaction } from "../actions/actions";

const CreateReaction = ({messageId}) => {
  const { state: { username }, pubsub: { publish } } = useAppContext();
  const publishReaction = ({ type, emoji }) => () => {
    publish(createReaction({type, emoji, username, messageId}));
  };

  return (
    <div className="CreateReaction">
      {REACTION_OBJECTS.map((reactionObj) => {
        const { type, emoji } = reactionObj;
        return (
          <span key={type} onClick={publishReaction({type, emoji})}>
            {emoji}
          </span>);
      })}
    </div>
  );
};

export default CreateReaction;
