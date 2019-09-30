import React from 'react'

class Playlist extends React.Component {

    // state = {
    //     showInfo: false
    // };
    
    renderInfo = () => {
        if (this.props.playlist){
            return(<><h2>{this.props.playlist.title}</h2>
            <p>Created by: {this.props.playlist.user.name}</p>
            <p>{this.props.playlist.tracks.length} tracks</p></>)
        }
    }
    
    renderVotes = () => {
        let votes = this.props.playlist.votes.length
        let upvotes = this.props.playlist.votes.filter( vote => vote.upvote).length
        // Working on this now
    }
    
    render() {

        
        return (

            <div className="playlist__title" onClick={() => this.props.viewPlaylist(this.props.playlist)}>
                {this.renderInfo()}
            <div className="votes__list">
                {this.renderVotes()}
            </div>
            </div>

            
        )
    }
}

export default Playlist
