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
            <div> 
            {/* <audio src={this.props.track.preview} controls></audio> */}

                    {/* <header name = "Access-Control-Allow-Origin" value = "*" />  */}
                    <div className="card">
                    {/* {
                        this.state.audioStatus2 === 'PAUSED' ? (
                        <i onClick={this.play2} className="iconfont icon-play"></i>
                        ) : <i onClick={this.pause2} className="iconfont icon-pause"></i>
                    }<br/> */}
                    <audio id="audio-element2"
                    // preload="true"
                    src={this.props.track.preview}
                    controls
                    crossOrigin="anonymous"
                    >
                    </audio>

                    {/* <p>meterCount: 20<br/>gap: 1</p> */}
                    </div>
                    <div>
                    <AudioSpectrum
                    
                    height={200}
                    width={920}
                    audioId={'audio-element2'}
                    capColor={'purple'}
                    capHeight={2}
                    meterWidth={2}
                    meterCount={512}
                    meterColor={[
                        {stop: 0, color: 'red'},
                        {stop: 1, color: 'orange'},
                        // {stop: 2, color: 'yellow'},
                        // {stop: 3, color: 'green'},
                        // {stop: 4, color: 'blue'},
                        // {stop: 5, color: 'purple'},
                    ]}
                    gap={1}
                    />
                    </div>
                    <h3><strong className="songSpec"> {this.props.track.name} </strong></h3>
            </div>
        </div>
    )
    }
}

export default SongSpecs