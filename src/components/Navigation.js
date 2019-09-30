import React from 'react'

const Navigation = (props) => {
    return(
        <nav style={{textAlign: "center", background: "#7FDEFF"}}><b>Current User: {props.currentUser.name}</b></nav>
    )
}

export default Navigation