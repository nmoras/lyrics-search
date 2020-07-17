import React, {useState, useContext, useEffect} from 'react';
import { Context } from '../../context';
import axios from 'axios';


const Search = () => {
    const[state, setState] = useContext(Context)
    const[userInput, setUserInput] = useState( '' ) 
    const[ trackName, setTrackName] = useState('')

    // console.log('the user input is', userInput)
    useEffect( () => {
        axios
            .get(`https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.search?q_track=${trackName}&
            page_size=10&country=us&f_has_lyrics=1&apikey=${process.env.REACT_APP_MM_KEY
            }`
        )
            .then( res=> { 
            setState({
                track_list: res.data.message.body.track_list,
                heading: "Top 10 Tracks"
            });
        })
        .catch( err => console.log(err));  
    }, [trackName]);

    // console.log(state)
    const findTrack = e => {
        e.preventDefault();
        setTrackName(userInput)
    };
    // console.log('track name', trackName)
    return (
        <div >
            <form>
                <div className="input-group">
                    <input 
                        type="text" 
                        class="form-control" 
                        placeholder="Song Title..."
                        onChange={ e => setUserInput(e.target.value)}
                    />
                    <div className="input-group-append">
                        <button 
                            className="btn btn-outline-primary" 
                            type="button"
                            onClick = {findTrack}>
                            Search
                        </button>
                    </div>
                </div>
            </form>  
            
        </div>
    )
}

export default Search
