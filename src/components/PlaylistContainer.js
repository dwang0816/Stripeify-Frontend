import React from 'react'
import Playlist from './Playlist'
import SongContainer from './SongContainer'

class PlaylistContainer extends React.Component {

    state = {
        playlistCollection: [],
        showSpecs: false,
        pickedPlaylist: {},
    }

    // populate this with playlist objects
    componentDidMount(){
        fetch("http://localhost:3000/api/v1/playlists")
        .then(res => res.json())
        .then(json => this.setState({playlistCollection: json}))
    }

    // fetch the clicked object
    viewPlaylist = (Obj) => {
        this.setState({
            showSpecs: true,
            pickedPlaylist: Obj
        })
    }

    hideSpecs = () => {
        this.setState({
          showSpecs: false
        })
      }


    render() {
    console.log(this.state.pickedPlaylist)
    const allPlaylists = this.state.playlistCollection.map((playlist =>  { return <Playlist key={playlist.id} playlist={playlist} viewPlaylist={this.viewPlaylist} currentUser={this.props.currentUser}/> }))

        return (
            <div className="container"> 
                <div className="list"> 
                    <div className="playlist__title"><h2> + Add New Playlist </h2></div>
                    {allPlaylists} 
                </div>
                <div className="spec"> {this.state.showSpecs ? <SongContainer hideSpecs={this.hideSpecs} pickedPlaylist={this.state.pickedPlaylist}/>:null} </div>
            </div>
            
        )
    }
}

export default PlaylistContainer
