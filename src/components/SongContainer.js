import React from "react";
import Song from "./Song";
import SongSpecs from "./SongSpecs";
import UserActions from './UserActions'

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
        console.log(this.props.pickedPlaylist.user.id)
        return (
            <div className="playlist_song__container">
                {this.props.pickedPlaylist.user.id === this.props.currentUser.id 
                    ? <UserActions playlist={this.props.pickedPlaylist} deletePlaylist={this.props.deletePlaylist}/>
                    : null}
                <h2>{this.props.pickedPlaylist.title}</h2>
                <p>Created By: {this.props.pickedPlaylist.user.name}</p>
                <ul className="playlist_song___tracks">
                    {this.renderTracks()}
                </ul>
                <div>
                    {
                    this.state.songSpecs 
                    ? <SongSpecs track ={this.state.pickedSong} /> 
                    : null
                    }
                </div>
                
            </div>
        )
    }

}

export default SongContainer;