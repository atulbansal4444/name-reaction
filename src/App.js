import React, { useReducer, useEffect } from "react";
import { newMessage } from "./actions/types";
import reducer from "./reducers/types";
import { initialState } from "./reducers/types";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    setInterval(() => dispatch(newMessage('foo')), 3000);
  }, []);
  console.log(state);
  return (
    <div>
      <h2>Reaction</h2>
    </div>
  );
}

export default App;
