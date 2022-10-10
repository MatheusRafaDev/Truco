import  { useEffect} from 'react'
import React, { useContext } from "react";
import { useState } from "react";

import { useHistory } from 'react-router-dom'
import LoadingBar from 'react-top-loading-bar'
import Cookies from 'js-cookie'

import Conteudo from "./styled1";

export default function Pagina19 (props){


  const [nos, setNos ] = useState("");
  const [maodeferro, SetMaoDeFerro] = useState("");

  const navigation = useHistory();

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
              <input class="nos"  value={nos} onChange={e => setNos(e.target.value)} placeholder="Digite o nome da sua equipe"/>
            </div> 


            <div class="users"><img class="user" src="../../assets/user (1).png" alt=""/>

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
        </div>
    </Conteudo>

  );
}
