import React from "react";
import Song from "./Song";

class SongContainer extends React.Component {
    renderTracks = () => {
        if(this.props.pickedPlaylist.tracks !== 0){
            let tracks = this.props.pickedPlaylist.tracks
            return tracks.map( t => <li>{t.name} - {t.artist }</li>)
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
            </div>
        )
    }

}

export default SongContainer;