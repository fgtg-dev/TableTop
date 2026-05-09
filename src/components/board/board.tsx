import { DEGREES } from '../../constants/board.constants';
import type { Direction } from '../../types/direction.types';

interface BoardProps{
    boardData: string;
}

export default function Board( { boardData }: BoardProps) {
    const { x, y, direction } = parseBoardInput(boardData);
    const cardinal = direction?.toLocaleUpperCase() as keyof typeof DEGREES;
    const maxXCoordinates = 5;
    const maxYCoordinates = 5;
    const markerStyle = {
        transform: `rotate(${DEGREES[cardinal]}deg)`,
    };

    return (
            <table id="center">
                <caption>Table Top</caption>
                <tbody>
                {Array(maxYCoordinates).fill(1).map((el, iY) =>
                    <tr key={iY}>
                        {Array(maxXCoordinates).fill(1).map((elX, iX) =>
                        <td key={iX}>
                            { (y == iY && x == iX)  ? 
                            <div style={markerStyle}>^</div> : <span>X</span> }
                        </td>
                        )}
                    </tr>
                    )}
                </tbody>
            </table>
    );
}



type BoardPosition = {
  x: number;
  y: number;
  direction: Direction;
};

function parseBoardInput(
  input: string
): BoardPosition {
  const [coordinates, direction] =
    input.split(" ");

  const [x, y] = coordinates
    .split(",")
    .map(Number);

  return {
    x,
    y,
    direction:
      direction as Direction,
  };
}