import React, { Component } from 'react';

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
        axios.get()
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