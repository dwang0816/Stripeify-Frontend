import React from "react";
import Song from "./Song";

class SongContainer extends React.Component {

    viewSongs = () => {
        
    }
    render(){
        return (
            <div>
                <div onClick={() => this.props.viewPlaylist(this.props.playlist)}>{this.props.pickedList}</div>
                {/* <div></div> */}
            </div>
        )
    }

}

export default SongContainer;