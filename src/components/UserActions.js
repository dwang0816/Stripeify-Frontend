import React from 'react'

const UserActions = (props) => {
    return(
        <nav className="user_actions_navigation">
            <ul>
                <li><button onClick={ () => props.deletePlaylist(props.playlist)}>DELETE ME</button></li>
                <li><button>ADD SONGS</button></li>
            </ul>
        </nav>
    )
}

export default UserActions