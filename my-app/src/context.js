import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const Context = React.createContext();
// export default class context extends Component
//don't want to send class as default becuase we are exporting consumer

export function ContextController({ children }){
    let initialState = {
        track_list: [],
        heading: ''
    };

const [state, setState] = useState(initialState)

useEffect( () => {

    axios
        .get(`https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/chart.tracks.get?page=1&
        page_size=10&country=us&f_has_lyrics=1&apikey=bec11b6399715971e91e5901a2e7dd9f`
    )
        .then( res => { 
            // console.log('the data is', res.data)
        setState({
            track_list: res.data.message.body.track_list,
            heading: "Top 10 Tracks"
        });
    })
    .catch( err => console.log(err));  
}, []);


return (
    <Context.Provider value={[state]}>{children}</Context.Provider>
);

}