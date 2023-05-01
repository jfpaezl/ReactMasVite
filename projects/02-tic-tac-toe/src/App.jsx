import './App.css'
import { useState } from 'react'
import { Square } from './components/Square'

//crear un diccionario con los turnos que se van a tener 
const TURNS = {
  X: 'x',
  O: 'o'
}

const WINNERCOMBOS = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6]
]



function App(){

  //dibujar el tablero y esto se hace creando una lista de 9 posiciones y iterandolos dentro de un div
  //const boart = Array(9).fill(null) //se indica se va a crear un array de 9 pociciones y se rellena con un null con la funcion fill.
  //el board se pasa dontro del componente para hacerlo pasar por un estado y asi que cada ves que cambie una pocicion dentro del arreglo se actualice el componente

  const [boart, setBoard] = useState(Array(9).fill(null))
  //crear un estado para saber de quien es el turno 
  const [turn, setTurn] = useState(TURNS.X)
  //crear el estado para saber cuando hay un ganador 
  const [winner, setWinner] = useState(null) //null es que no hay ganador y el false es que hay un empate

  const checkWinner = (boardToCheck) =>{
    //revisar todas las combinaciones ganadoras 
    for(const combo of WINNERCOMBOS){
      const [a, b, c] = combo
      if ( 
        boardToCheck[a] &&
        boardToCheck[a] === boardToCheck[b] &&
        boardToCheck[a] === boardToCheck[c]
      ){
        return boardToCheck[a]
      }
    }
    //si no hay ganador 
    return null
  }

  const checkEndGame = (newBoard) =>{
    return newBoard.every((square) => square !== null)
  }

  //resetear los valores 
  const resetGame = () =>{
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)
  }
  //funcion para actualizara el tablero o boart
  const updateBoard = (index) =>{ //se pasa el indice para sabe la pocicion que se esta actualizando

    const newBoart = [... boart] //clonar la boart ya existente
    if (boart[index] || winner) return //es para indicar si el valor de la casilla es diferente a null o false no modifique
    newBoart[index] = turn // asignar el varol en la nueva boart 
    setBoard(newBoart) //actualizar el board en mi useState
    //cambiar el turno 
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    //pasarle el nuevo valor en mi useState
    setTurn(newTurn)
    //revisar si hay un ganador 
    const newWinner = checkWinner(newBoart)
    if (newWinner){
      setWinner(newWinner)
    } else if (checkEndGame(newBoart)){
      setWinner(false)
    }
  }
  return (
    <main className='board'>
      <h1>Tic Tac Toe</h1>
      <button onClick={resetGame}>Reiniciar Juego</button>
      <section className='game'>
        {
          boart.map((_, index) =>{
            return(
              <Square 
                key={index}
                index={index} 
                updateBoard={updateBoard} 
              >
                {boart[index]}
              </Square>
            )
          })
        }
      </section>
      <section className='turn'>
        <Square isSelected={turn === TURNS.X}>
          {TURNS.X}
        </Square>
        <Square isSelected={turn === TURNS.O}>
          {TURNS.O}
        </Square>
      </section>
      {
        winner !== null && (
          <section className='winner'>
            <div className='text'>
              <h2>
                {
                  winner === false ? 'Empate' : 'Gano: '
                }
              </h2>
              <header className='win'>
                {winner && <Square>{winner}</Square>}
              </header>
              <footer>
                <button onClick={resetGame}>Empezar de nuevo</button>
              </footer>
            </div>
          </section>
        )
      }
    </main>
  )
}

export default App
