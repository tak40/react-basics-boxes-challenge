/** @format */

import { useState } from 'react'
import boxes from './boxes'
import Box from './Box'

function App() {
    const [squares, setSquares] = useState(boxes)

  const squareElements = squares.map(square => <Box key={square.id} on={square.on} />)

    // const squareElements = squares.map(function(square) {
    //   return <div key={square.id} className='box'></div>
    // })

    return (
        <main>
            <h1>Scrimba React Basics: Boxes Challenge</h1>
            {squareElements}
        </main>
    )
}

export default App
