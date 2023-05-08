import React, { useReducer, useEffect } from "react";
import reducer from "../reducers/types";
import Context from "../context";
import PubSub from "../pubsub";
import { initialState } from "../reducers/types";
import MessageBoard from "./MessageBoard";
import PublishMessage from "./PublishMessage";
import SetUsername from "./SetUsername";

const pubsub = new PubSub();

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    pubsub.addListener({
      message: msgObj => {
        const { channel, message } = msgObj;
        console.log(channel + message);
        dispatch(message);
      }
    })
  }, []);
  return (
    <Context.Provider value={{state, dispatch, pubsub}}>
      <h2>Reaction</h2>
      <SetUsername />
      <hr />
      <PublishMessage />
      <MessageBoard />
    </Context.Provider>
  );
}

export default App;
