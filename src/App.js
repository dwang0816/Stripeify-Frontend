import React from 'react';
import './App.css';
import PlaylistContainer from './components/PlaylistContainer'
import Navigation from './components/Navigation'

class App extends React.Component{
  state = {
    currentUser : {
      "id": 1,
      "name": "Taryn"
    }
  }


  
  render(){
    return (
      <div className="App">
      <Navigation currentUser={this.state.currentUser}/> 
      <PlaylistContainer currentUser={this.state.currentUser}/>
      {/* <SongContainer/> */}
      </div>
    )
  }
  
}

export default App;
