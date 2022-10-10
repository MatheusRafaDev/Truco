import { createContext, useContext, useState } from "react";
const ElesContext = createContext();


export function useElesContext() {
  const {eles, setEles} = useContext(ElesContext);
  
  return {
    eles,
    setEles
  }
}

export default function ContextProvider(props) {
  const { eles, setEles } = useElesContext();
  setEles(eles)

    return (
      <ElesContext.Provider value={{ eles, setEles }}>
        {props.children}
      </ElesContext.Provider>
    )
}


