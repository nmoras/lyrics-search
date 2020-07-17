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

    console.log(process.env)
const [state, setState] = useState(initialState)

useEffect( () => {

    axios
        .get(`https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/chart.tracks.get?page=1&
        page_size=10&country=us&f_has_lyrics=1&apikey`
    )
        .then( res => { 
            console.log('the data is', res.data)
        setState({
            track_list: res.data.message.body,
            heading: "Top 10 Tracks"
        });
    })
    .catch( err => console.log(err));  
}, []);



// async function fetchData(){
//     const trackList = await fetch( `https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/chart.tracks.get?chart_name=top&page=1&page_size=10&
//     country=us&f_has_lyrics=1&apikey=bec11b6399715971e91e5901a2e7dd9f` )
//     .then( result=>result.json() )
//     console.log(trackList.message)
// }


return (
    <Context.Provider value={[state, setState]}>{children}</Context.Provider>
);

}