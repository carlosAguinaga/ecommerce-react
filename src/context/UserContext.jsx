import React, { createContext, useReducer } from "react";

const UserContext = createContext();

const initialState = {
  user: {},
};

const reducer = (state, action) => {

  switch (action.type) {
    case "SUCCESS":
      return {
        ...state,
        user: action.payload,
      };

    default:
      return state;
  }
};

const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const data = { state, dispatch };

  return <UserContext.Provider value={data}>{children}</UserContext.Provider>;
};

export { UserContext, UserProvider };
