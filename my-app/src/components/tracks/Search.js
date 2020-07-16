import React, {useState, useContext} from 'react';
import { Context } from '../../context';

const Search = () => {
    const[state, setState] = useContext(Context)
    const[userInput, setUserInput] = useState( '' ) 
    return (
        <div >
            <form>
                <div className="input-group">
                    <input type="text" class="form-control" placeholder="Search Lyrics"/>
                    <div className="input-group-append">
                        <button className="btn btn-outline-primary" type="button">Search</button>
                    </div>
                </div>
            </form>  
            
        </div>
    )
}

export default Search
