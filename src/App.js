import React from 'react';
import './App.css';
import PlaylistContainer from './components/PlaylistContainer'
import Navigation from './components/Navigation'
import NewPlaylist from './components/NewPlaylist'
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom'
class App extends React.Component{
  state = {
    currentUser : {
      "id": 1,
      "name": "Taryn"
    },
    playlistCollection: [],
    searchTerm: '',
    sortTerm: '',
    redirect: false
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
            ],
            redirect: true
        })
        // history.push(`/`)
    })
  }

  componentDidMount(){
    fetch("http://localhost:3000/api/v1/playlists")
    .then(res => res.json())
    .then(json => this.setState({playlistCollection: json}))
  }

  componentDidUpdate(){
    return <Route path='/' render={() => (this.state.redirect ? <Redirect to='/'/> : null )}/>
  }
  
  render(){
    return (
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
              handleSort={this.handleSort}/>) }/>
          <Route path="/newplaylist" exact render={() => 
            ( <NewPlaylist currentUser={this.currentUser} handleSubmit={this.handleNewPlaylist} {...this.props}/>) }/>
        </Switch>
      </div>
    )
  }
  
}

export default App;
