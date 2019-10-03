import React from 'react'

const Navigation = (props) => {
    return(
        <nav><b>Current User: {props.currentUser.name}</b></nav>
    )
}

export default Navigation