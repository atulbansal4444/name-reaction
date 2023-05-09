import React from "react";
import { REACTION_OBJECTS } from "../actions/types";

const CreateReaction = () => {
  return (
    <div className="CreateReaction">
      {
        REACTION_OBJECTS.map(reactionObj => {
          const { type, emoji } = reactionObj;
          return (
            <span key={type}>{ emoji }</span>
          );
        })
      }
    </div>
  );
};

export default CreateReaction;
