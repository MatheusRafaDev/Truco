import styled from 'styled-components'


const Conteudo = styled.div`

    margin: 0;
    justify-content: center;
    display: flex;
    font-family: font-family: 'Montserrat', sans-serif;

    background-color: #1A75AE;
    height: 100vh;

    @font-face {
        font-family: fonte1;
        src: url('../../Montserrat-Bold.ttf');
    }

    .marcador {
        font-size: 2rem;
        font-family: fonte1;
        color: white;
        text-align: center;
        margin-bottom: 2em;
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    }

    .eles,.nos {
        width:21em;
        height: 3em;
        margin-top: 1em;
        margin-bottom: 1em;

        outline: none;
        border: none;
        font-size:0.8rem;
        font-family: fonte1;
        border-radius: 0.2rem;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }

    .cabecalho {
        margin-top: 2em;
    }
    .game {
        margin-bottom:1em;
    }

    .game,.noti,.mao {
        font-size:1.5rem;
        font-family: fonte1;
        color: white;
        margin-left: 48vh;
        margin-right: 52vh;
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    }

    button {
        background-color: #1A75AE;
        border-radius: 10em;
        outline: none;
        height: 2em;
        width: 10em;
        border: none;

        display: flex;
        justify-content: center;
        align-content: center;
        align-items: center;

        font-family: fonte1;
        color: white;
        font-size: 1.5rem;

        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }

    .Jogadores {
        margin-bottom: 2em;
    }

    .mao {
        font-size: 1rem;
        margin-top: 1em;
    }

    .maoferro {
        margin-right: 9em;
    }

    button {
        margin-top: 2em;
        margin-bottom: 2em;
        justify-content: center;
        display: flex;
        margin-left: 50vh;
        margin-right: 50vh;
        cursor: pointer;
    }

    button:hover {
        background: #19507b;
        transition: 1s;
    }

    .noti {
        font-size: 1.5rem;
    }

    .user {
        width: 2em;
        height: 2em;
        margin-right: 1em;
        
    }

    .users {
        justify-content: center;
        display: flex;
        align-items: center;
        align-content: center;
        flex-direction: row;
    }

    .ferro {
        outline: none;
        width: 1.2em;
        height: 1.2em;

    }

    .switch {
        position: relative;
        display: inline-block;
        width: 41px;
        height: 23.6px;
      }
      
      /* Hide default HTML checkbox */
      .switch input {
        opacity: 0;
        width: 0;
        height: 0;
      }
      
      /* The slider */
      .slider {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #ccc;
        -webkit-transition: .4s;
        transition: .4s;
      }
      
      .slider:before {
        position: absolute;
        content: "";
        height: 17px;
        width: 17px;
        left: 4px;
        bottom: 4px;
        background-color: white;
        -webkit-transition: .4s;
        transition: .4s;
      }
      
      input:checked + .slider {
        background-color: #19507b;;
      }
      
      input:focus + .slider {
        box-shadow: 0 0 1px #2196F3;
      }
      
      input:checked + .slider:before {
        -webkit-transform: translateX(16px);
        -ms-transform: translateX(16px);
        transform: translateX(16px);
      }
      
      /* Rounded sliders */
      .slider.round {
        border-radius: 34px;
      }
      
      .slider.round:before {
        border-radius: 50%;
      }

      .mao {
          flex-direction: row;
          display: flex;
      }


`

export default Conteudo;