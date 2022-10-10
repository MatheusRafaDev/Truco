import  { useEffect} from 'react'
import React, { useContext } from "react";
import { useState } from "react";

import { useHistory } from 'react-router-dom'
import LoadingBar from 'react-top-loading-bar'
import Cookies from 'js-cookie'

import Conteudo from "./styled1";
import Context from './../Context';

import  { useElesContext } from './../Context';
import ElesContextProvider from './../Context';

export default function Pagina19 (props){


  const [nos, setNos ] = useState("");
  const [maodeferro, SetMaoDeFerro] = useState("");

  const navigation = useHistory();

  const MaoDeFerro = () => {
    SetMaoDeFerro(true);
  };

  function ElesContent() {
    const [eles, setEles] = useState('eles');
  
    return(
      <div>
          <input class="eles" type="text" value={eles} onChange={e => setEles(e.target.value)} placeholder="Digite o nome da equipe inimiga" />
      </div>
    )
  }

  function BotaoContent() {
    const { eles, setEles } = useElesContext();
    const navigation = useHistory();

    console.log(eles + "botao")

    function Jogo() {
      setEles(eles)
      navigation.push('/truco');
    }
  
    return(
      <div>
          <button onClick={ Jogo }> Jogar </button>
      </div>
    )
  }


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
              <ElesContextProvider> 
                <ElesContent />
              </ElesContextProvider>
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

              <ElesContextProvider> 
                <BotaoContent />
              </ElesContextProvider>
          </div>
        </div>
    </Conteudo>

  );
}
