import React from 'react';
import './App.css';
import PlaylistContainer from './components/PlaylistContainer'
import Navigation from './components/Navigation'
import NewPlaylist from './components/NewPlaylist'
// import AudioSpectrum from './components/AudioSpectrum'
import { Switch, Route, withRouter } from 'react-router-dom'




class App extends React.Component{
  state = {
    currentUser : {
      "id": 1,
      "name": "Taryn"
    },
    playlistCollection: [],
    searchTerm: '',
    sortTerm: '',
    trackCollection: [],
    tracksToBeAdded: []
  }

  handleSearch = (e) => {
    const searchTerm = e.target.value.toLowerCase()
    this.setState({ searchTerm: searchTerm})
  }

  handleSort = (sortValue) => {
    this.setState({
        sortTerm: sortValue
    })
  }

  handleCheckbox = (tracksToBeAdded) => {
    this.setState({
      tracksToBeAdded: tracksToBeAdded
    })
  }
  handleNewPlaylist = (e) => {
    let playlistName = e.target.playlistName.value
    let tracksToBeAdded = e.target.tracksToBeAdded
    let arr = [...tracksToBeAdded].filter( t => t.checked).map(t => t.value)

    e.preventDefault()
    let config = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            'title': playlistName,
            'user_id': this.state.currentUser.id,
            'tracks': arr
        })
    }
    e.target.reset()
    fetch('http://localhost:3000/api/v1/playlists/', config)
    .then(resp => resp.json())
    .then(data => {
        this.setState({
            playlistCollection: [
                ...this.state.playlistCollection,
                data
            ]
        })

        
        
    })
    .then( () => this.props.history.push('/') )
  }


  deletePlaylist = (p) => {
    let playlist = p
    let filteredPlaylists = this.state.playlistCollection.filter( p => p.id !== playlist.id)
    fetch(`http://localhost:3000/api/v1/playlists/${p.id}`, { method: 'DELETE', header: {'Content-Type' : 'application/json', 'Accept': 'application/json'}})
    .then(resp => resp.json())
    .then(
      this.setState({
        playlistCollection: filteredPlaylists
      })
    )
  }

  componentDidMount(){
    fetch("http://localhost:3000/api/v1/playlists")
    .then(res => res.json())
    .then(playlist => this.setState({playlistCollection: playlist}))

    fetch("http://localhost:3000/api/v1/tracks")
    .then(res => res.json())
    .then(track => this.setState({trackCollection: track}))

    // fetch(the tracks)
  }

  render(){
    // console.log(this.state.trackCollection)
    return (
      <>
      <div>
      </div>
      <div className="App">
      <Navigation currentUser={this.state.currentUser}/> 
        <Switch>
          <Route path='/' exact render={ () => 
            (<PlaylistContainer 
              currentUser={this.state.currentUser} 
              playlistCollection={this.state.playlistCollection} 
              searchTerm={this.state.searchTerm} 
              sortTerm={this.state.sortTerm} 
              handleSearch={this.handleSearch} 
              handleSort={this.handleSort}
              deletePlaylist={this.deletePlaylist}
            />) 
          }/>
          <Route path="/newplaylist" exact render={() => 
            ( <NewPlaylist currentUser={this.currentUser} handleSubmit={this.handleNewPlaylist} handleCheckbox={this.handleCheckbox} tracksToBeAdded={this.state.tracksToBeAdded} trackCollection={this.state.trackCollection} />)}/>
        </Switch>
        <div className="visualize"></div>
      </div>
      </>
    )
  }
  
}

export default withRouter(App);
