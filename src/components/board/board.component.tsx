import { useEffect, useRef, useState } from 'react';

import Box from '@mui/material/Box';

import { DEGREES } from '../../constants/board.constant';
import Cell from './cell/cell.component';
import { BoardUtilities } from '../../utlities/board.utility';

interface BoardProps {
  boardData: string;
}

export default function Board({
  boardData,
}: BoardProps) {
  const { x, y, direction } = BoardUtilities.parseBoardInput(boardData);

  const cardinal = direction?.toLowerCase() as keyof typeof DEGREES;
  const prevCardinal = useRef(cardinal);
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    if (prevCardinal.current !== cardinal) {
      setShouldAnimate(true);

      const timeout = setTimeout(() => {
        setShouldAnimate(false);
      }, 300);

      prevCardinal.current = cardinal;

      return () => clearTimeout(timeout);
    }
  }, [cardinal]);

  const maxYAxes = 5; // Can be made dynamic if needed, but for now it's fixed at 5
  const maxXAxes = 5; // Can be made dynamic if needed, but for now it's fixed at 5

  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: `repeat(${maxXAxes}, 1fr)`,
        gap: 0,
        width: 'fit-content',
        border: '1px solid #ccc',
      }}
    >
      {Array(maxYAxes)
        .fill(null)
        .flatMap((_, iY) =>
          Array(maxXAxes)
            .fill(null)
            .map((_, iX) => {
              const isMarked =
                y === iY && x === iX;

              return (
                <Cell
                  key={`${iY}-${iX}`}
                  shouldAnimate={shouldAnimate}
                  isMarked={isMarked}
                  transform={
                    isMarked
                      ? `rotate(${DEGREES[cardinal]}deg)`
                      : 'rotate(0deg)'
                  }
                />
              );
            })
        )}
    </Box>
  );
}