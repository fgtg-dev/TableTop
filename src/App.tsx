import { useState } from 'react';
import './App.css'
import Board from './components/board/board.tsx'
import BoardForm from './forms/board-form.tsx'

function App() {
  const initialState = '0,0 north';
  const [boardData, setBoardData] = useState(initialState);

  return (
    <>
      <BoardForm 
          onChange={setBoardData}
      />
      <Board boardData={boardData} />
    </>
  )
}

export default App
