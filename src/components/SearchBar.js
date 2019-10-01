import React from 'react';

const SearchBar = (props) => {
//   console.log(props)
    return (
        <div>

        <strong>Sort by:</strong>
        <label>
            <input type="checkbox" value="Alphabetically" checked={props.sortValue === "Alphabetically"} onChange={(e) => props.onSort(e.target.value)}/>
            Alphabetically
        </label>
        <label>
            <input type="checkbox" value="Tracks" checked={props.sortValue === "Tracks"} onChange={(e) => props.onSort(e.target.value)}/>
            Tracks
        </label>
        <br/>

        <label>
            <strong>Search By Playlist: </strong>
                <input value={props.searchTerm} onChange={props.handleChange} type="search"></input>
        </label>

    
    </div>
    );
}


export default SearchBar;