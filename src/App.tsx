import './App.css'

const DIRECTION = {
  NORTH: 0,
  SOUTH: 180,
  EAST: 90,
  WEST: 270,
}

function App() {
  const x = 3;
  const y = 4;
  const rotateDirection: 'North' | 'South' | 'East' | 'West' = 'South';
  const direction = rotateDirection.toLocaleLowerCase();
  let degrees = 0;
  const maxXCoordinates = 5;
  const maxYCoordinates = 5;

  if(direction === 'North'.toLocaleLowerCase()) {
    degrees = DIRECTION.NORTH;
  } else if(direction === 'East'.toLocaleLowerCase()) {
    degrees = DIRECTION.EAST;
  } else if(direction === 'South'.toLocaleLowerCase()) {
    degrees = DIRECTION.SOUTH;
  } else if(direction === 'West'.toLocaleLowerCase()) {
    degrees = DIRECTION.WEST;
  }

  const markerStyle = {
    transform: `rotate(${degrees}deg)`,
  };

  return (
    <>
      <section id="center">
        Table Top
        <tbody>
           {Array(maxYCoordinates).fill(1).map((el, iY) =>
              <tr>
                {Array(maxXCoordinates).fill(1).map((elX, iX) =>
                  <td>
                    { (y == iY && x == iX)  ? 
                      <div style={markerStyle}>^</div> : <span>X</span> }
                  </td>
                )}
              </tr>
            )}
        </tbody>
      </section>
    </>
  )
}

export default App
