import React, { useEffect, useState } from "react";

export const AuthContext = React.createContext({});

export const AuthProvider = (props) => {

  const[usernos, setUserNos] = useState({
    nos: "Nós",
  });

  const[usereles, setUserEles] = useState({
    eles: "Eles",
  });


  useEffect(() => {
    const userNos = localStorage.getItem("usernos");
    const userEles = localStorage.getItem("usereles");
    if (userNos || userEles) {
      setUserNos(JSON.parse(userNos));
      setUserEles(JSON.parse(userEles));
    } else {
      setUserNos({
        nos: "",
      });
      setUserEles({
        eles: "",
      });
    }
  }, []);

  return (
    <AuthContext.Provider value={{ usernos, setUserNos, usereles, setUserEles }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => React.useContext(AuthContext);