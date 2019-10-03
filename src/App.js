import React from 'react';
import './App.scss';
import PlaylistContainer from './components/PlaylistContainer'
import Navigation from './components/Navigation'
import NewPlaylist from './components/NewPlaylist'
// import AudioSpectrum from './components/AudioSpectrum'
import { BrowserRouter as Router, Switch, Route, withRouter } from 'react-router-dom'




class App extends React.Component{
  state = {
    currentUser : {
      "id": 1,
      "name": "Taryn"
    },
    playlistCollection: [],
    searchTerm: '',
    sortTerm: '',
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

  handleNewPlaylist = (e) => {
    let playlistName = e.target.playlistName.value
    e.preventDefault()
    let config = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            'title': playlistName,
            'user_id': this.state.currentUser.id 
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
    .then(json => this.setState({playlistCollection: json}))


  }







  render(){


    return (
      <>

      <div>
      </div>
      <div className="App">
      <Navigation currentUser={this.state.currentUser}/> 
        <Switch>
          <Route path='/' exact render={ () => 
          ( <PlaylistContainer 
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
            ( <NewPlaylist currentUser={this.currentUser} handleSubmit={this.handleNewPlaylist}/>)}/>
        </Switch>
        <div className="visualize"></div>
      </div>
      </>
    )
  }
  
}

export default withRouter(App);
