import React, {Component} from 'react';
import './List.css';

class HobbyList extends React.Component {
    render() {
        const liStyle = {fontSize: '1.5em'}
        const hobbies = ['sleeping', 'eating', 'eating again']
        return ( 
            <ul>
                {hobbies.map((h, i) => {
                    return <li key={i} style={liStyle}>{h}</li>
                })}
            </ul>
        );
    }
}

export default HobbyList;