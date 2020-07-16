import React, {useState, useContext} from 'react';
import { Context } from '../../context';

const Search = () => {
    const[state, setState] = useContext(Context)
    const[userInput, setUserInput] = useState( '' ) 
    const[ trackName, setTrackName] = useState('')

    const findTrack = e => {
        e.preventDefault();
        setTrackName(userInput)
    };
    
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
