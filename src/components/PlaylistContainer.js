import React from 'react'
import Playlist from './Playlist'
import SongContainer from './SongContainer'
import SearchBar from './SearchBar'
import { Link } from 'react-router-dom'

class PlaylistContainer extends React.Component {

    state = {
        showSpecs: false,
        pickedPlaylist: {},
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

    deletePlaylist = (playlist) => {
        this.setState({
            showSpecs: false,
            pickedPlaylist: {}
        })
        this.props.deletePlaylist(playlist)
    }

    
    render() {
        let displayedPlaylists = this.props.playlistCollection
        if (this.props.sortTerm === 'Alphabetically') {
            // sort Alphabetically
            displayedPlaylists = displayedPlaylists.sort((a, b) => (a.title > b.title) ? 1 : -1)
        } 
        else if (this.props.sortTerm === 'Tracks') {
            // sort by Tracks
            displayedPlaylists = displayedPlaylists.sort((a, b) => (a.tracks.length < b.tracks.length) ? 1 : -1)
        } 
        if (this.props.searchTerm !== '') {
            displayedPlaylists = displayedPlaylists.filter(p => p.title.toLowerCase().includes(this.props.searchTerm ))
        }
        // Render the list of playlists
        const allPlaylists = displayedPlaylists.map((playlist =>  { return <Playlist key={playlist.id} playlist={playlist} viewPlaylist={this.viewPlaylist} currentUser={this.props.currentUser}/> }))
        return (
            <div className="container"> 
                <div className="list"> 
                    <div>
                        <SearchBar 
                            handleChange={this.props.handleSearch}
                            onSort={this.props.handleSort}
                            searchTerm={this.props.searchTerm}
                            sortValue ={this.props.sortTerm}
                        />
                    </div>
                    <Link to="/newplaylist"> <div className="playlist__title playlist__new"><h2> + Add New Playlist </h2></div> </Link>
                    {allPlaylists} 
                </div>
                <div className="spec"> {this.state.showSpecs ? <SongContainer hideSpecs={this.hideSpecs} pickedPlaylist={this.state.pickedPlaylist} currentUser={this.props.currentUser} deletePlaylist={this.deletePlaylist}/>:null} </div>
            </div>
            
        )
    }
}

export default PlaylistContainer
