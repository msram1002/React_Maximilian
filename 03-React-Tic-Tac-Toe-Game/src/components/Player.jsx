import { useState } from "react";

export default function Player({initialName, symbol, isActive}) {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(initialName);

  function handleEdit() {
    // setIsEditing(!isEditing); Wrong way of updating state
    // As state updates aren't instantenous, need to pass a function
    setIsEditing((editing) => !editing);
  }
  
  function handlePlayerNameChange(event) {
    setPlayerName(event.target.value);
  }
  let editablePlayerName = <span className="player-name">{playerName}</span>;

  if (isEditing) {
    // Two-way binding
    editablePlayerName = <input type='text' required value={playerName} onChange={handlePlayerNameChange}/>;
  }

  return (
    <li className={isActive ? 'active' : ''}>
      <span className="player">
        {editablePlayerName}
        <span className="player-symbol">
          {symbol}
        </span>
      </span>
      <button onClick={handleEdit}> {isEditing ? 'Save' : 'Edit'}</button>
    </li>
  )
}