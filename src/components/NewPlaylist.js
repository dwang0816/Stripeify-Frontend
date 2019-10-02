import React from 'react';
import { Link } from 'react-router-dom'

export default class NewPlaylist extends React.Component {
    render(){
        return(
            <main>
                <Link to="/"> ← Back Home</Link>
                <form onSubmit={(e) => this.props.handleSubmit(e)}>
                    <label htmlFor="playlistName">Playlist Name</label>
                    <input type="text" name="playlistName" id="playlistName"/>
                    <input type="submit" value="Submit"/>
                </form>
            </main>
            )
    }
}