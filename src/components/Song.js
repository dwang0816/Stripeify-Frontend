import React from "react";
const Song = props => {
    const { track } = props;

    return (
        <div>
            <li onClick={() => props.viewSong(track)}>{track.name} - {track.artist}</li>
            {/* <div className="songSpec"> {props.songSpecs ? :null} </div> */}
        </div>
    )
}

export default Song