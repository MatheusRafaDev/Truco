import  { useEffect} from 'react'
import React, { useContext } from "react";
import { useState } from "react";

import { useHistory } from 'react-router-dom'
import LoadingBar from 'react-top-loading-bar'
import Cookies from 'js-cookie'
import Conteudo from "./styled1";
import { useAuth } from "../providers/auth";
import { Link } from "react-router-dom";

export default function Pagina19 (props){

  
  const [nos, SetNos] = useState({
    nos: "",
  });
  
  const [eles, SetEles] = useState({
    nos: "",
  });

  const { setUserNos,setUserEles } = useAuth();

  const NameNos = () => {
    localStorage.setItem("nos", JSON.stringify(nos));
    setUserNos(nos);
  };

  const NameEles = () => {
    localStorage.setItem("eles", JSON.stringify(eles));
    setUserEles(eles);
  };
 
  const Jogar = () => {
    NameNos()
    NameEles()
  }

  const navigation = useHistory();

  const [maodeferro, SetMaoDeFerro] = useState("");

  const MaoDeFerro = () => {
    SetMaoDeFerro(true);
  };
  
  return (
    <Conteudo>
        <div class="App">

          <div class="cabecalho">
            <div class="marcador"> Marcador de <br/> Truco </div>
          </div>

          <div class="Jogadores">

            <div class="game"> Jogadores </div>
            <br/> 

            <div class="users"><img class="user" src="../../assets/user (1).png" alt=""/> 
              <input class="nos" placeholder="Digite o nome da sua equipe" onChange={(e) => SetNos({ nos: e.target.value })} />
            </div> 

            <div class="users"><img class="user" src="../../assets/user (1).png" alt=""/> 
              <input class="nos" placeholder="Digite o nome o seu inimigo" onChange={(e) => SetEles({ eles: e.target.value })} />
            </div>

          </div>

          <div class="notificacao">
              <div class="noti"> Notificação </div>
              <div class="mao"> 
              <div class="maoferro">Mão de Ferro</div> 
                <label class="switch">
                  <input type="checkbox" onChange={ MaoDeFerro} checked={maodeferro}/>
                  <span class="slider round"></span>
                </label>
              </div>
          </div>

          <div class="jogar"></div>
            <div class="botao">
               <Link to="/truco">
                  <button onClick={ Jogar }>jogar</button> 
               </Link>
            </div> 

        </div>
    </Conteudo>

  );
}
