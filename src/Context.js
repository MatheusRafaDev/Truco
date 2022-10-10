import { createContext, useContext, useState } from "react";

const ElesContext = createContext();


export default function ContextProvider(props) {

    const [eles, setEles] = useState('eles');
  
    return (
      <ElesContext.Provider value={{ eles, setEles }}>
        {props.children}
      </ElesContext.Provider>
    )

}


export function useElesContext() {

    const context = useContext(ElesContext);
    const {eles, setEles} = context;
    return {
      eles,
      setEles
    }
}
