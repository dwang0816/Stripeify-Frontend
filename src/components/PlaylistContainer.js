import React from 'react'
import Playlist from './Playlist'
import SongContainer from './SongContainer'
import SearchBar from './SearchBar'

class PlaylistContainer extends React.Component {

    state = {
        showSpecs: false,
        pickedPlaylist: {},
    }

    // populate this with playlist objects
    // componentDidMount(){
    //     fetch("http://localhost:3000/api/v1/playlists")
    //     .then(res => res.json())
    //     .then(json => this.setState({playlistCollection: json}))
    // }

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

    // handleSort = (sortValue) => {
    //     this.setState({
    //         sortTerm: sortValue
    //     })
    // }

    // handleSearch = (e) => {
    //     const searchTerm = e.target.value.toLowerCase()
    //     this.setState({ searchTerm: searchTerm})
    // }
    
    render() {
        let displayedPlaylists = this.props.playlistCollection
        if (this.props.sortTerm === 'Alphabetically') {
            // sort Alphabetically
            displayedPlaylists = displayedPlaylists.sort((a, b) => (a.title > b.title) ? 1 : -1)
        } 
        else if (this.props.sortTerm === 'Tracks') {
            // sort by Tracks
            displayedPlaylists = displayedPlaylists.sort((a, b) => (a.tracks.length > b.tracks.length) ? 1 : -1)
        } 
        else {
            displayedPlaylists = displayedPlaylists.filter(p => p.title.toLowerCase().includes(this.props.searchTerm ))
        }
        // Render the list of playlists
        const allPlaylists = displayedPlaylists.map((playlist =>  { return <Playlist key={playlist.id} playlist={playlist} viewPlaylist={this.viewPlaylist} currentUser={this.props.currentUser}/> }))
        return (
            <div className="container"> 
                {/* <div>sort, filter, search</div> */}
                <div className="list"> 
                    <div>
                        <SearchBar 
                            handleChange={this.props.handleSearch}
                            onSort={this.props.handleSort}
                            searchTerm={this.props.searchTerm}
                            sortValue ={this.props.sortTerm}
                        />
                    </div>
                    <div className="playlist__title"><h2> + Add New Playlist </h2></div>
                    {allPlaylists} 
                </div>
                <div className="spec"> {this.state.showSpecs ? <SongContainer hideSpecs={this.hideSpecs} pickedPlaylist={this.state.pickedPlaylist}/>:null} </div>
            </div>
            
        )
    }
}

export default PlaylistContainer
