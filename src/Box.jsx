/** @format */

import React from 'react'

function Box(props) {

    const [on, setOn] = React.useState(props.on)

    const styles = {
        backgroundColor: on ? '#222222' : 'transparent',
    }

    function toggle() {
        setOn(prevOn => !prevOn)
    }

    return (
        <div className="box" style={styles} onClick={toggle} ></div>
    )
}

export default Box
