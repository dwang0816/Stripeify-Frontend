import React from "react";
import AudioSpectrum from "./AudioSpectrum"
import '../css/iconfont.css'
class SongSpecs extends React.Component {

    state = {
        audioStatus2: 'PAUSED'
    }

    render(){
    return (
        <div>
            <div className="songSpec"> {this.props.track.name} </div>
            <div> 
            {/* <audio src={this.props.track.preview} controls></audio> */}


                    <div className="card">
                    {
                    this.state.audioStatus2 === 'PAUSED' ? (
                        <i onClick={this.play2} className="iconfont icon-play"></i>
                    ) : <i onClick={this.pause2} className="iconfont icon-pause"></i>
                    }<br/>
                    <audio id="audio-element2"
                    // preload="true"
                    src={this.props.track.preview}
                    controls
                    >
                    </audio>
                    <AudioSpectrum
                    height={200}
                    width={300}
                    audioId={'audio-element2'}
                    capColor={'red'}
                    capHeight={2}
                    meterWidth={2}
                    meterCount={512}
                    meterColor={[
                        {stop: 0, color: 'pink'},
                        {stop: 1, color: 'red'}
                    ]}
                    gap={1}
                    />
                    <p>meterCount: 20<br/>gap: 1</p>
                </div>
            </div>
        </div>
    )
    }
}

export default SongSpecs