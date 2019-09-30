import React from "react";
const SongSpecs = props => {
    const { track } = props;

    return (
        <div>
            <div className="songSpec"> {track.name} </div>
            <div> 
            <audio src={track.preview} controls></audio>
            </div>
        </div>
    )
}

export default SongSpecs