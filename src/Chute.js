



export default function Chute(props) {

    const { palavraEscolhida, setPalavraEscolhida,
        corretas, setCorretas,
        erradas, setErradas,
        clicado, setClicado,
        underLine, setUnderLine,
        venceu, setVenceu,
        fimdeJogo, setFimdeJogo,
        tentativa, setTentativa,
        criarInput, setCriarInput } = props


    function shoot() {

        if (tentativa === palavraEscolhida) {
            setPalavraEscolhida("")
            setClicado("")
            setCorretas(0)
            setUnderLine(palavraEscolhida.split())
            setVenceu(true)
        } else {
            setPalavraEscolhida("")
            setClicado("")
            setErradas(6)
            setUnderLine(palavraEscolhida.spli())
            setFimdeJogo(true)
        }

    }

    return (
        
        <span className="shoot">
            <strong> Já sei a resposta! </strong>

            <input disabled={criarInput} type="text"onChange={(e)=>setTentativa(e.target.value)} value={tentativa}></input> 

            <button className="estilizar" onClick={shoot}> Chutar </button>
        </span>
    )
}