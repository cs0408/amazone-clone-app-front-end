import React, { createContext, useReducer, useContext } from "react";

// 1. - create context == Prepares the data layer
export const ContextCreated = createContext();

// 2. - create Provider == wrap out app and provide the data layer
export const ProviderCreated = ({ reducer, initialState, children }) => (
  <ContextCreated.Provider value={useReducer(reducer, initialState)}>
    {children}
  </ContextCreated.Provider>
);

// 3. - create useContext instead of create Consumer == Pull the information from the data layer
export const usePullStateValue = () => useContext(ContextCreated);
