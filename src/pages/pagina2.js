import  { useEffect} from 'react'
import React, { useState, useRef  } from 'react';

import Conteudo from "./styled2";
import { useAuth } from "../providers/auth";

export default function Pagina19 (props){
  const [pontosum, setPontosUm ] = useState(0);
  const [pontosdois, setPontosDois ] = useState(0);
  const [vitoriasum, SetVitoriasUm] = useState(0);
  const [vitoriasdois, SetVitoriasDois]= useState(0);

  var resposta = ''

  function reset(){
    setPontosUm(0)
    setPontosDois(0)
  }

  function MaisUmPontoUm() {
    let a = pontosum + 1
    if (a > 12) {
        a = 12
    }
    setPontosUm(a)
  }

  function MenosUmPontoUm() {
    let a = pontosum - 1
    if (a < 0) {
      a = 0
    }
    setPontosUm(a)
  }


  function MaisUmPontoDois() {
    let b = pontosdois + 1
    if (b > 12) {
      b = 12
    }
    setPontosDois(b)
  }

  function MenosUmPontoDois() {
    let b = pontosdois - 1
    if (b < 0) {
      b = 0
    }
    setPontosDois(b)
  }


  function MenosTresPontoUm() {
    let a = pontosum - 3
    if (a < 0) {
      a = 0
    }
    setPontosUm(a)
  }

  function MaisTresPontoUm() {
    let a = pontosum + 3
    if (a > 12) {
      a = 12
    }
    setPontosUm(a)
  }


  function MenosTresPontoDois() {
    let b = pontosdois - 3
    if (b < 0) {
      b = 0
    } 
    setPontosDois(b)
  }

  function MaisTresPontoDois() {
    let b = pontosdois + 3
    if (b > 12) {
      b = 12
    }
    setPontosDois(b)
  }


  function MaisSeisPontoUm() {
    let a = pontosum + 6
    if (a > 12) {
      a = 12
    }
    setPontosUm(a)
  }

  function MenosSeisPontoUm() {
    let a = pontosum - 6
    if (a < 0) {
      a = 0
    }
    setPontosUm(a)
  }


  function MaisSeisPontoDois() {
    let b = pontosdois + 6
    if (b > 12) {
      b = 12
    }
    setPontosDois(b)
  }

  function MenosSeisPontoDois() {
    let b = pontosdois - 6
    if (b < 0) {
      b = 0
    }
    setPontosDois(b)
  }

  const { usernos,usereles } = useAuth();
  const [maodeferro, SetMaoDeFerro] = useState("");

  const MaoDeFerro = new Promise((resolve,reject) => {
    console.log(pontosum)
    console.log(pontosdois)
    if (pontosum === 11 && pontosdois === 11) {
      resposta = 'Mão de ferro'
    } else {
      return
    }
  })

  MaoDeFerro.then((data) => {
    alert.log(data)
  })


  const Vitoria = new Promise((resolve,reject) => {
    if (pontosum === 12) {
      resposta = 'Jogador ' + usernos.nos + ' ganhou a partida'
      pontosdois = 0
    } if (pontosdois === 12) {
      resposta = 'Jogador ' + usereles.eles + ' ganhou a partida'
      pontosum = 0
    }
  })

  Vitoria.then((data) => {
    resposta = data
  })


  return (
    <Conteudo>
      <div class="App">
        <div class="menu">
          <div class="cabecalho">
            <div class="marcador"> Marcador de <br/> Truco </div>
            <button class="zerar"> Zerar Jogo <img class="refesh" src="../../assets/sinchronize-xxl.png" alt="" onClick={() => reset()}/></button>
          </div>
          <div class="resposta"> { resposta }  </div>
        </div>
        
        
        <div class="game" id="game">
          <div class="Player1">
            <div class="eles"> { usernos.nos } </div> 
            <div class="pontos">{pontosum}</div>
            <div class="vitorias">Vitorias ( {vitoriasum} )</div>
              <div class="botao"> 
                  <div class="botao1"> 
                    <button class="menosum" onClick={() => MenosUmPontoUm()}>-1</button> 
                    <button class="maisum" onClick={() => MaisUmPontoUm()}>+1</button>
                  </div>
                  <div class="botao1"> 
                    <button class="menosum" onClick={() => MenosTresPontoUm()}>-3</button> 
                    <button class="maisum" onClick={() => MaisTresPontoUm()}>+3</button>  
                  </div>
                  <div class="botao1"> 
                    <button class="menosum" onClick={() => MenosSeisPontoUm()}>-6</button> 
                    <button class="maisum" onClick={() => MaisSeisPontoUm()}>+6</button>  
                  </div>
              </div>
          </div>

          <div class="Player2">
            <div class="eles"> {usereles.eles} </div> 
            <div class="pontos">{pontosdois}</div>
            <div class="vitorias">Vitorias ( {vitoriasdois} )</div>
              <div class="botao"> 
                <div class="botao1"> 
                  <button class="menosum" onClick={() => MenosUmPontoDois()}>-1</button> 
                  <button class="maisum" onClick={() => MaisUmPontoDois()}>+1</button>
                </div>
                <div class="botao1"> 
                  <button class="menosum" onClick={() => MenosTresPontoDois()}>-3</button> 
                  <button class="maisum" onClick={() => MaisTresPontoDois()}>+3</button> 
                </div>
                <div class="botao1"> 
                  <button class="menosum" onClick={() => MenosSeisPontoDois()}>-6</button> 
                  <button class="maisum" onClick={() => MaisSeisPontoDois()}>+6</button> 
                </div>
              </div>
            </div>
        </div>
      </div>
    </Conteudo>
  );
}
