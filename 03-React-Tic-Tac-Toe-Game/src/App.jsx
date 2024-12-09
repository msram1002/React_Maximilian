import Player from "./components/Player";
import Gameboard from "./components/Gameboard";
import { useState } from "react";
function App() {
  // Lifting the state up
  // Sharing the state for two components - Player and Gameboard
  const [activePlayer, setActivePlayer] = useState('X');

  function handleSelectSquare() {
    setActivePlayer((currentActivePlayer) => currentActivePlayer === 'X' ? 'O' : 'X');
  }
  return (
    <main>
      <div id="game-container">
        {/* Players */}
        <ol id="players" className="highlight-player">
          <Player initialName="Player 1" symbol="X" isActive={activePlayer === 'X'}/>
          <Player initialName="Player 2" symbol="O" isActive={activePlayer === 'O'}/>
        </ol>
        {/* Click on squares get executed on Gameboard Component */}
        <Gameboard activePlayerSymbol={activePlayer} onSelectSquare={handleSelectSquare}/>
      </div>
      {/* Log Game Activity */}
    </main>
  )
}

export default App;
