import Player from "./components/Player";

function App() {
  return (
    <main>
      <div id="game-container">
        {/* Players */}
        <ol id="players">
          <Player initialName="Player 1" symbol="X" />
          <Player initialName="Player 2" symbol="O" />
        </ol>
        {/* GameBoard */}
      </div>
      {/* Log Game Activity */}
    </main>
  )
}

export default App;
