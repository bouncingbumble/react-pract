import React, {Component} from 'react';
import './Pet.css';
import HobbyList from './List';

class Pet extends Component {
    render() {
        return (
            <div className="card">
                <h2 className="name">Clifford</h2>
                <img src="https://vignette.wikia.nocookie.net/animated-video-games-muscular/images/8/85/Clifford.jpg/revision/latest/scale-to-width-down/230?cb=20170219230418" alt="clifford"></img>
                <h5 style={{fontSize: '2em', margin: '2px'}}> Hobbies</h5>
                <HobbyList />
            </div>
        )
    }
}

export default Pet;