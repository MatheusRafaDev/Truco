import styled from 'styled-components'


const Conteudo = styled.div`

    margin: 0;
    justify-content: center;
    display: flex;
    font-family: font-family: 'Montserrat', sans-serif;

    background-image: url("../../assets/Comp 1_00000.png");
    height: 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

    padding: 0px;

    @font-face {
        font-family: fonte1;
        src: url('../../Montserrat-Bold.ttf');
    }

    .game {
        display: flex;
        margin-top: 1.3em;
        flex-direction: row;
        text-align: center;
        display: flex;
        justify-content: center;
    }

    .eles,.pontos,.vitorias {
        text-align: center;
        color: white;
        font-family: fonte1;
        text-shadow: 2px 2px 4px #000000;
    }

    .pontos {
        font-size: 6rem;
    }

    .eles {
        font-size: 3rem;
        font-family: fonte1;
        color: white;
    }

    .menosum {
        margin-right: 2rem;
    }

    .Player1, .Player2 {
        padding: 1.5rem;
    }


    .cabecalho {
        flex-direction: row;
        display: flex;
        justify-content: center;
        margin-top: 2rem;
        align-content: center;
        align-items: center;
        background-color:rgba(0,0,0,0.5);
        padding-left: 2em;
        padding-right: 2em;
        padding-top: 1em;
        padding-bottom: 1em;
        border-radius: 1em;
    }

    

    .menosum {
        outline: none;
        border: none;
        margin-top: 2rem;
        padding: 1.2rem;
        border-radius: 100%;
        background-color: white;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
        font-family: fonte1;
        color: black;
        cursor: pointer;
        text-shadow: 2px 2px 4px #000000;
    }

    .maisum {
        outline: none;
        border: none;
        margin-top: 2rem;
        padding: 1.2rem;
        border-radius: 100%;
        background-color: #1A75AE;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
        font-family: fonte1;
        color: white;
        cursor: pointer;
        text-shadow: 2px 2px 4px #000000;
    }

    .maisum:hover{
        background: #19507b;
        transition: 1s;
    }
    .menosum:hover{
        background: #19507b;
        transition: 1s;
    }


    .marcador {
        justify-content: center;
        display: flex;
        font-family: fonte1;
        color: white;
        font-size: 1.8rem;
        text-shadow: 2px 2px 4px #000000;
    }

    .botao1 {
        display: flex;
        flex-direction: row;
        justify-content: center;
    }
 
    
    .vitorias {
        margin-bottom: 1.5rem;
    }

    .marcador {
        text-align: center;
        margin-right: 1.5em;
    }

    .zerar {
        background-color: #1A75AE;
        border-radius: 10em;
        outline: none;
        height: 3em;
        width: 10em;
        border: none;

        display: flex;
        justify-content: center;
        align-content: center;
        align-items: center;

        font-family: fonte1;
        color: white;
        font-size: 1rem;

        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }

    .zerar:hover {
        background: #19507b;
        transition: 1s;
    }

    .refesh {
        height: 2em;
        margin-left: 0.5em;
        width: auto;
        cursor: pointer;
        align-content: center;
        display: flex;
        align-items: center;
    }

   



`
export default Conteudo;