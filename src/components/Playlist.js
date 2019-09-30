import React from 'react'
import Votes from './Votes'

class Playlist extends React.Component {

    state = {
        votes: this.props.playlist.votes,
        uservotes: {}
    }
    
    addVote = (type) => {
        console.log("adding a vote", type)
        /// MAKE POST REQUEST
    }

    removeVote = (type) => {
        if (type === this.state.uservotes.upvote){
            console.log("removing vote", type)
            /// MAKE A DELETE
        }
        else{
            let config = {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    'upvote': type
                })
            }

            fetch(`http://localhost:3000/api/v1/votes/${this.state.uservotes.id}`, config)
            .then(resp => resp.json())
            .then(data => {
                let allvotes = this.state.votes.filter( v => !(v.id === data.id))
                this.setState({
                    votes: [
                        ...allvotes,
                        data
                    ],
                    uservotes: data
                })
            })
            
            console.log("patching this vote", type)
            /// MAKE A PATCH REQUEST
        }
    }

    renderInfo = () => {
        if (this.props.playlist){
            return(<><h2>{this.props.playlist.title}</h2>
            <p>Created by: {this.props.playlist.user.name}</p>
            <p>{this.props.playlist.tracks.length} tracks</p></>)
        }
    }

    componentDidMount(){
        this.setState({
            uservotes: this.state.votes.filter(v => v.user_id === this.props.currentUser.id)[0]
        })
    }
    render() {
        let upvotes = this.state.votes.filter(v => v.upvote)
        let downvotes = this.state.votes.filter(v => !v.upvote)
        
        return (
            <div className="playlist__title" onClick={() => this.props.viewPlaylist(this.props.playlist)}>
                {this.renderInfo()}
                <Votes votes={this.state} upvotes={upvotes} downvotes={downvotes} callback={!!this.state.uservotes ? this.removeVote : this.addVote}/>
            </div>

            
        )
    }
}

export default Playlist
