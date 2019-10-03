import React from 'react'

const UserActions = (props) => {
    return(
        <nav className="user_actions_navigation">
            <button onClick={ () => props.deletePlaylist(props.playlist)}>DELETE ME</button>
        </nav>
    )
}

export default UserActions