import React from 'react';
import { Link } from 'react-router-dom'
import Track from './Track'

export default class NewPlaylist extends React.Component {


    // state = {
    //     trackCollection: [],
    //     tracksToBeAdded: []
    // }

    // componentDidMount(){
    //     fetch("http://localhost:3000/api/v1/tracks")
    //     .then(res => res.json())
    //     .then(json => this.setState({trackCollection: json}))
    // }


    render(){
        const allTracks = this.props.trackCollection
        const tracks = allTracks.map(t => {
            return <Track key={t.id} track={t} tracksToBeAdded={this.props.tracksToBeAdded} handleCheckbox={this.props.handleCheckbox}/>
        })
        // console.log(tracks)
        return(
            <main className="newplaylist__container">
                <Link to="/"> ← Back Home</Link>
                <form onSubmit={(e) => this.props.handleSubmit(e)} className="newplaylist__form">
                    <label htmlFor="playlistName">Playlist Name</label>
                    <input type="text" name="playlistName" id="playlistName"/>
                    <ul>
                        {tracks}
                    </ul>
                    <input type="submit" value="Submit"/>
                </form>
            </main>
            )
    }
}