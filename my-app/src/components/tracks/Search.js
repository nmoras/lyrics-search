import React, {useState, useContext} from 'react';
import { Context } from '../../context';

const Search = () => {
    const[state, setState] = useContext(Context)
    const[userInput, setUserInput] = useState( '' ) 
    return (
        <div>
            <form class="form-inline">
                <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
            
        </div>
    )
}

export default Search
