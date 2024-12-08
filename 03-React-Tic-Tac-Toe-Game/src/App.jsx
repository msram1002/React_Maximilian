function App() {
  return (
    <main>
      <div id="game-container">
        {/* Players */}
        <ol id="players">
          <li>
            <span className="player-name">Player 1</span>
            <span className="player-symbol">X</span>
          </li>
          <li>
            <span className="player-name">Player 2</span>
            <span className="player-symbol">O</span>
          </li>
        </ol>
        {/* GameBoard */}
      </div>
      {/* Log Game Activity */}
    </main>
  )
}

export default App;
