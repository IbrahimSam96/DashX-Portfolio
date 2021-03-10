import React from "react"; 

const CTX = React.createContext(); 

export const Provider = CTX.Provider;
export const Consumer = CTX.Consumer;

export default CTX;