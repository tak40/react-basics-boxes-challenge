/** @format */

import { useState } from 'react'
import boxes from './boxes'

function App(props) {
    const [squares, setSquares] = useState(boxes)

    const squareElements = squares.map(square => {
        const styles = {
            backgroundColor: square.id % 2 === 0 ? 'red' : 'white',
        }

        return <div key={square.id} className="box" style={styles}></div>
    })

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
