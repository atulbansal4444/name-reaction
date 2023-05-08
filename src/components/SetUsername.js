import React from "react";
import { useAppContext } from "./hooks";
import { setUsername } from "../actions/actions";

const SetUsername = () => {
  const { state: { username }, dispatch } = useAppContext();
  return (
    <div>
      <h2>Username: </h2>
      <input onChange={(e) => { dispatch(setUsername(e.target.value)) }}
        value={username} />
    </div>
  )
}

export default SetUsername;
