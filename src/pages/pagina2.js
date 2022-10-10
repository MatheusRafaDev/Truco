import  { useEffect} from 'react'
import React, { useState, useRef  } from 'react';

import Conteudo from "./styled2";

import  { useElesContext } from './../Context';
import ElesContextProvider from './../Context';

export default function Pagina19 (props){

  const [pontosum, setPontosUm ] = useState(0);
  const [pontosdois, setPontosDois ] = useState(0);

  // const { eles, setEles } = useElesContext();


  const [nos, setNos ] = useState("");
  const [maodeferro, SetMaoDeFerro] = useState("");

  const [vitoriasum, SetVitoriasUm]= useState(0);
  const [vitoriasdois, SetVitoriasDois]= useState(0);



  function reset(){
    setPontosUm(0)
    setPontosDois(0)
  }


  function MaisUmPontoUm() {
    let a = pontosum + 1
    if (a == 13) {
        console.log("+1")
        a = 12
    }

    setPontosUm(a)
  }

  function MenosUmPontoUm() {
    let a = pontosum - 1
    if (a == -1) {
      console.log("-1")
      a = 0
    }

    setPontosUm(a)
  }

  function MaisUmPontoDois() {
    let a = pontosdois + 1

    if (a == 13) {
      console.log("+1")
      a = 12
    }

    setPontosDois(a)
  }

  function MenosUmPontoDois() {
    let a = pontosdois - 1

    if (a == -1) {
      console.log("-1")
      a = 0
    }

  setPontosDois(a)
  }




  function MenosTresPontoUm() {
    
    let a = pontosum - 3
    if (a <= 0) {
      console.log("-3")
      a = 0
    }

    setPontosUm(a)
  }

  function MaisTresPontoUm() {
    let a = pontosum + 3
    if (a >= 12) {
      console.log("+3")
      a = 12
    }

    setPontosUm(a)
  }

  function MenosTresPontoDois() {

    let a = pontosdois - 3
    if (a <= 0) {
      console.log("-3")
      a = 0
    }


    setPontosDois(a)
  }

  function MaisTresPontoDois() {

    let a = pontosdois + 3

    if (a >= 12) {
      console.log("+3")
      a = 12
    }

    setPontosDois(a)
  }



  function MaisSeisPontoUm() {

    let a = pontosum + 6

    if (a >= 12) {
      console.log("+6")
      a = 12
    }

    setPontosUm(a)
  }

  function MenosSeisPontoUm() {

    let a = pontosum - 6

    if (a <= 0) {
      console.log("-6")
      a = 0
    }

    setPontosUm(a)
  }

  function MaisSeisPontoDois() {

    let a = pontosdois + 6

    if (a >= 12) {
      a = 12
      console.log("+6")
    }

    setPontosDois(a)
  }

  function MenosSeisPontoDois() {

    let a = pontosdois - 6

    if (a <= 0) {
      console.log("-6")
      a = 0
    }
    
    setPontosDois(a)
  }

  function ElesContent() {
    const { eles, setEles } = useElesContext();
  
    return(
      <div style={{margin: '1em'}}>
          {eles}
      </div>
    )
  }

  return (

    <Conteudo>
      
      <div class="App">

        <div class="cabecalho">
          <div class="marcador"> Marcador de <br/> Truco </div>
          <button class="zerar"> Zerar Jogo <img class="refesh" src="../../assets/sinchronize-xxl.png" alt="" onClick={() => reset()}/></button>
        </div>
        
        <div class="game" id="game">
      
          <div class="Player1">
          
            <div class="eles">
              <ElesContextProvider> 
                <ElesContent />
              </ElesContextProvider>
            </div> 

            <div class="pontos">{pontosum}</div>
            <div class="vitorias">Vitorias ( )</div>

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
            <div class="eles">{ nos } </div> 
            <div class="pontos">{pontosdois}</div>
            <div class="vitorias">Vitorias ( )</div>

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
