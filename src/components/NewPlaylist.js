import React from 'react';
import { Link } from 'react-router-dom'

export default class NewPlaylist extends React.Component {


    state = {
        trackCollection: []
    }

    // componentDidMount(){
    //     fetch("http://localhost:3000/api/v1/tracks")
    //     .then(res => res.json())
    //     .then(json => this.setState({trackCollection: json}))
    // }


    render(){
        let tracks = [...this.state.trackCollection]
        tracks.map(t => {
            // console.log(t.name)
            return <li>{t.name}</li>
        })
        console.log(tracks)
        return(
            <main>
                <Link to="/"> ← Back Home</Link>
                <form onSubmit={(e) => this.props.handleSubmit(e)}>
                    <label htmlFor="playlistName">Playlist Name</label>
                    <input type="text" name="playlistName" id="playlistName"/>
                    <input type="submit" value="Submit"/>
                    <ul>
                        {tracks}
                    </ul>
                </form>
            </main>
            )
    }
}