/** @format */

import { useState } from 'react'
import boxes from './boxes'

function App() {
    const [squares, setSquares] = useState(boxes)

    const squareElements = squares.map(square => <div key={square.id} className="box"></div>)

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
