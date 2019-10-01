import React from "react";
import Song from "./Song";
import SongSpecs from "./SongSpecs";

class SongContainer extends React.Component {
    state = {
        songSpecs: false,
        pickedSong: {}
    }
    viewSong = (obj) => {
        this.setState({
            songSpecs: !this.state.songSpecs,
            pickedSong: obj
        })
    }
    renderTracks = () => {
        if(this.props.pickedPlaylist.tracks !== 0){
            let tracks = this.props.pickedPlaylist.tracks
            // return tracks.map( t => <li>{t.name} - {t.artist}</li>)
            return tracks.map((t => { return <Song key={t.id} track={t} viewSong = {this.viewSong} songSpecs={this.state.songSpecs} /> }))
        }
        else{
            return <li>This playlist has no tracks</li>
        }
    }

    render(){
        return (
            <div>
                <h2>{this.props.pickedPlaylist.title}</h2>
                <p>Created By: {this.props.pickedPlaylist.user.name}</p>
                <ul className="tracks-list">
                    {this.renderTracks()}
                </ul>
                <div>
                    {
                    this.state.songSpecs ? 
                    <SongSpecs track ={this.state.pickedSong} /> 
                    : null
                    }
                </div>
                
            </div>
        )
    }

}

export default SongContainer;