import React from 'react'

class Track extends React.Component {


    render() {
        // console.log(this.props.track)
        return (
            <div>
                <label>
                    {/* checked sets the value */}
                <input type="checkbox" name="tracksToBeAdded" value={this.props.track.id} onChange={this.props.handleCheckbox}/>
                {this.props.track.name} - {this.props.track.artist}
                </label>
            </div>

            
        )
    }
}

export default Track

