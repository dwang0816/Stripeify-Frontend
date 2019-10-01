import React from 'react'
import Votes from './Votes'

class Playlist extends React.Component {

    state = {
        votes: this.props.playlist.votes,
        uservotes: null
    }
    
    addVote = (type) => {
        let config = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Acceept': 'application/json'
            },
            body: JSON.stringify({
                upvote: type,
                playlist_id: this.props.playlist.id,
                user_id: this.props.currentUser.id
            })
        }
        fetch('http://localhost:3000/api/v1/votes', config)
        .then(resp => resp.json())
        .then(data => {
            this.setState({
                votes: [
                    ...this.state.votes,
                    data
                ],
                uservotes: data
            })
        })
    }

    removeVote = (type) => {
        if (type === this.state.uservotes.upvote){
            let config = {
                method: 'DELETE'
            }
            fetch(`http://localhost:3000/api/v1/votes/${this.state.uservotes.id}`, config)
                .then(resp => resp.json())
                .then(data => {
                    this.setState({
                        votes: this.state.votes.filter(v => !(v.id === this.state.uservotes.id)),
                        uservotes: null
                    })
                })
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
