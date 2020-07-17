import React from 'react';
import { useParams} from 'react-router-dom';


const Lyrics = () => {
    const params = useParams();
    console.log(params)

    useEffect
    return (
        <div>
            <h1>Lyrics page</h1>
            <p>here goes the lyrics</p>
        </div>
    )
}

export default Lyrics
