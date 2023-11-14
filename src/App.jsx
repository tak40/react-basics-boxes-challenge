/** @format */

import { useState } from 'react'
import boxes from './boxes'
import Box from './Box'

function App() {
    const [squares, setSquares] = useState(boxes)

  function toggle(id) {
    setSquares(prevSquares => prevSquares.map(square => 
      square.id === id ? { ...square, on: !square.on } : square
    ))
  }

    const squareElements = squares.map(square => (
        <Box key={square.id} id={square.id} on={square.on} toggle={toggle} />
    ))

    return (
        <main>
            <h1>Scrimba React Basics: Boxes Challenge</h1>
            {squareElements}
        </main>
    )
}

export default App
