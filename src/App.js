import React from 'react';
import './App.css';
import PlaylistContainer from './components/PlaylistContainer'
import Navigation from './components/Navigation'
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom'
class App extends React.Component{
  state = {
    currentUser : {
      "id": 1,
      "name": "Taryn"
    },
    playlistCollection: [],
    searchTerm: '',
    sortTerm: ''
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

  componentDidMount(){
    fetch("http://localhost:3000/api/v1/playlists")
    .then(res => res.json())
    .then(json => this.setState({playlistCollection: json}))
  }
  
  render(){
    return (
      <div className="App">
      <Navigation currentUser={this.state.currentUser}/> 
      <Router>
        <Switch>
          <Route path='/' exact render={ () => 
          ( <PlaylistContainer 
              currentUser={this.state.currentUser} 
              playlistCollection={this.state.playlistCollection} 
              searchTerm={this.state.searchTerm} 
              sortTerm={this.state.sortTerm} 
              handleSearch={this.handleSearch} 
              handleSort={this.handleSort}/>) }/>
          {/* <Route path="/new" component = { NewPlaylist } /> */}
        </Switch>
      </Router>
      </div>
    )
  }
  
}

export default App;
