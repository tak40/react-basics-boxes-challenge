/** @format */

import React from 'react'

function Box(props) {
    const styles = {
        backgroundColor: props.on ? 'var(--color-light)' : 'var(--color-dark)',
    }

    const boxClass = `box ${props.on ? 'flipped' : ''}`

    return (
        <div
            className={boxClass}
            style={styles}
            onClick={() => props.toggle(props.id)}
        ></div>
    )
}

export default Box
