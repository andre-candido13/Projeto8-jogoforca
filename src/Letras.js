


export default function Letras(props) {

   const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

   const { palavraEscolhida, setPalavraEscolhida,
      corretas, setCorretas,
      erradas, setErradas,
      clicado, setClicado,
      underLine, setUnderLine,
      venceu, setVenceu,
      fimdeJogo, setFimdeJogo} = props


   const underLine2 = [...underLine]

   function teclado(clicou) {  
      const indexes = []
      const palavraMinuscula = clicou.toLowerCase()
      let index = palavraEscolhida.indexOf(palavraMinuscula)
      let acertou = 0
      let arrayPalavra = palavraEscolhida.split("")
      let j = 0
      let jErro = 0
      if (index === -1) {
         jErro = jErro + 1
      }
      setErradas(jErro + erradas)
      while (index !== -1) {
         indexes.push(index)
         index = palavraEscolhida.indexOf(clicou, index + 1)
         j++
      }
      acertou = indexes.length + corretas
      for (let i = 0; i < indexes.length; i++) {
         let indiceArray = indexes[i]; underLine2[indiceArray] = palavraMinuscula
      }

      setCorretas(j + corretas)
      setUnderLine(underLine2)

      if (!clicado.includes(palavraMinuscula)) {
         setClicado([...clicado, palavraMinuscula])
      }

    
      if (underLine.length === acertou) {
         setPalavraEscolhida("")
         setClicado("")
         setCorretas(0)
         setVenceu(true)

      }
      if (erradas > 4) {
         setPalavraEscolhida("")
         setClicado("")
         setCorretas(0)
         setUnderLine(arrayPalavra)
         setFimdeJogo(true)
      }

   } 
   return (

         <ul>
            {alfabeto.map(clicou => (<button disabled={!palavraEscolhida ? true : false || clicado.includes(clicou) ? true : false}
               data-test="letter" onClick={() => teclado(clicou)} className={!palavraEscolhida || clicado.includes(clicou) ? "teclado bloqueado" : "teclado liberado"}> {clicou.toUpperCase()} </button>))}
         
        
         </ul>

      )

   }



