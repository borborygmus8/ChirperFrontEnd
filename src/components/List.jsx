import React, { Component } from 'react';
import Chirp from './Chirp';

class List extends Component {
    constructor(props) {
        super(props);

        this.myChirps = [
            {
                name: "Teia",
                text: "Cough...cough...cough...hairball!"
            },
            {
                name: "Kitty",
                text: "Clean the litterbox or I'll pee on your bed!"
            },
            {
                name: "Buddy",
                text: "I'm out of food. Feed me! Feed me!"
            }
        ];

        if (this.props.newChirps.length > 0) {
            this.props.newChirps.forEach(chirp => {
                this.myChirps.push(chirp);
            });
        }
    
        this.chirps = this.myChirps.reverse().map((chirp, index) => {
            return <li key={index} className="list-group-item"><Chirp name={chirp.name} text={chirp.text} /></li>;
        });

    }

    render() {
        return <ul className="list-group">{this.chirps}</ul>;
    }
}

export default List;