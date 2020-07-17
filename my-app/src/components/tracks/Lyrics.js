import React, {useState, useEffect} from 'react';
import { useParams} from 'react-router-dom';
import axios from 'axios';

const Lyrics = () => {
    const[ lyricsName, setLyricsName] = useState({lyrics: ''})
    let params = useParams();
    let {id} = useParams();
    console.log(params)

    useEffect( () => { 
        axios
            .get(`https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${id}&apikey`)
            .then( res=> { 
                // console.log(res.data)
                console.log(res.data.message.body.lyrics.lyrics_body)
                setLyricsName({
                    lyrics: res.data.message.body.lyrics.lyrics_body
                });
                
        })
        .catch( err => console.log(err));  
    }, []);
    console.log('the state is', lyricsName)
    return (
        <div className="col-md-10 mx-auto">
            <div className="card mb-4">
                <div className="card-body">
                   
                    <p className="card-text">
                        <strong><i className="fas fa-play"></i>Track</strong>: 
                        <br/>
                        <p style={{ lineHeight:"40px", fontSize: "30px"}}>{lyricsName.lyrics}</p>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Lyrics
