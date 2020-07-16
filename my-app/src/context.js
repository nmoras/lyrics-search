import React, { Component } from 'react';
import axios from 'axios';

const Context = React.createContext();
// export default class context extends Component
//don't want to send class as default becuase we are exporting consumer
export class Provider extends Component {
    state = {
        track_list: [

        ],
        heading: 'Top 10 Tracks'
    }

    componentDidMount() {
        axios.get(`https://api.musixmatch.com/ws/1.1/chart.tracks.get?chart_name=top&page=1&
        page_size=10&country=us&f_has_lyrics=1&apikey=${process.env.REACT_APP_MM_KEY}`)
            .then( res=> {
                console.log(res.data);
                this.setState({track_list: res.data.message.body});
            })
            .catch( err => console.log(err));
    }
    render() {
        return (
           <Context.Provider value={this.state}>
               {/* expression */}
                {this.props.children}
           </Context.Provider>
        )
    }
}

export const Consumer = Context.Consumer