import React, { Component } from 'react';

class Chirp extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-6 border border-light rounded-lg shadow p-0 my-3 mx-auto">
                    <h3 className="bg-primary text-white rounded-lg p-2">{this.props.name}</h3>
                    <p className="p-4">{this.props.text}</p>
                </div>
            </div>
        );
    }
}

export default Chirp;