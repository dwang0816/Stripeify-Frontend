import React from 'react'

class Playlist extends React.Component {

    // state = {
    //     showInfo: false
    // };
    


    
    
    render() {

        
        return (
            <div>
                <div onClick={() => this.props.viewPlaylist(this.props.playlist)}>{this.props.playlist.name}</div>
                {/* <div></div> */}
            </div>

            
        )
    }
}

export default Playlist
