import React from 'react'
import Votes from './Votes'

class Playlist extends React.Component {

    state = {
        votes: this.props.playlist.votes,
        upvotes: this.props.playlist.votes.filter( v => v.upvote ),
        downvotes: this.props.playlist.votes.filter( v => !v.upvote ),
        uservotes: this.props.playlist.votes.filter( v => v.user_id === this.props.currentUser.id)[0]
    }
    
    addVote = (type) => {
        console.log("adding a vote", type)
    }

    removeVote = (type) => {
        console.log("removing vote", type)
    }

    renderInfo = () => {
        if (this.props.playlist){
            return(<><h2>{this.props.playlist.title}</h2>
            <p>Created by: {this.props.playlist.user.name}</p>
            <p>{this.props.playlist.tracks.length} tracks</p></>)
        }
    }

    render() {
        return (

            <div className="playlist__title" onClick={() => this.props.viewPlaylist(this.props.playlist)}>
                {this.renderInfo()}
                <Votes votes={this.state} callback={this.state.uservotes ? this.removeVote : this.addVote}/>
            </div>

            
        )
    }
}

export default Playlist
