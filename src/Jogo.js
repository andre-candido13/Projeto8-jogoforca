import { useState } from "react"
import Letras from "./Letras"
import palavras from "./Palavras"
import Chute from "./Chute"



export default function Jogo(props) {

    const aleatorio = Math.random() * palavras.length | 0;
    const [palavraEscolhida, setPalavraEscolhida] = useState("")
    const [corretas, setCorretas] = useState(0)
    const [erradas, setErradas] = useState(0)
    const [clicado, setClicado] = useState([])
    const [underLine, setUnderLine] = useState([])
    const [venceu, setVenceu] = useState(false)
    const [fimdeJogo, setFimdeJogo] = useState(false)
    const [tentativa, setTentativa] = useState("")
    const [criarInput, setCriarInput] = useState(true)
    const tLetra = []

    function escolhaPalavra() {
        setCriarInput(!true)
        setClicado("")
        setCorretas(0)
        setErradas(0)
        setVenceu(false)
        setFimdeJogo(false)
        const palavra = palavras[aleatorio]
        setPalavraEscolhida(palavra)
        const result = palavra.split("")
        for (let i = 0; i < result.length; i++) {
            tLetra.push("_")
            setUnderLine(tLetra)
        }

    }

    return (
        <>
            <div className="corpo">

                <img data-test="game-image" src={`./img/forca${erradas}.png`} alt="figura-forca" />
                <button data-test="choose-word" onClick={escolhaPalavra} className="escolher"> Escolher Palavra </button>

            </div>

            <div className={fimdeJogo===false? "estiliza":"estiliza derrota"}>
                {underLine.map (e=> (<span className={venceu===false?"underline": "underline ganhou"}>{e}</span>))}
            </div>

            <Letras palavraEscolhida = {palavraEscolhida}
            setPalavraEscolhida={setPalavraEscolhida}
            corretas={corretas}
            setCorretas={setCorretas}
            erradas={erradas}
            setErradas={setErradas}
            clicado={clicado}
            setClicado={setClicado}
            underLine={underLine}
            setUnderLine={setUnderLine}
            venceu={venceu}
            setVenceu={setVenceu}
            fimdeJogo={fimdeJogo}
            setFimdeJogo={setFimdeJogo}
            tentativa={tentativa}
            setTentativa={setTentativa}
            criarInput={criarInput}
            setCriarInput={setCriarInput} />

            <Chute palavraEscolhida = {palavraEscolhida}
            setPalavraEscolhida={setPalavraEscolhida}
            corretas={corretas}
            setCorretas={setCorretas}
            erradas={erradas}
            setErradas={setErradas}
            clicado={clicado}
            setClicado={setClicado}
            underLine={underLine}
            setUnderLine={setUnderLine}
            venceu={venceu}
            setVenceu={setVenceu}
            fimdeJogo={fimdeJogo}
            setFimdeJogo={setFimdeJogo}
            tentativa={tentativa}
            setTentativa={setTentativa}
             />


        </>


    )

}