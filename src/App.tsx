import { useState } from 'react';
import Box from '@mui/material/Box';

import Board from './components/board/board.component.tsx';
import BoardForm from './forms/board/board.form.tsx';

export default function App() {
const initialState = '0,0 north';
const [boardData, setBoardData] = useState(initialState);
  return (
    <Box
      sx={{
        p: 2,
        display: 'flex',
        flexDirection: {
          xs: 'column',
          md: 'row',
        },
        alignItems: 'center',
        justifyContent: 'center',
        gap: 3,
        mx: 'auto',
      }}
    >
      <BoardForm
        onChange={setBoardData}
      />
      <Board
        boardData={boardData}
      />
    </Box>
  );
}