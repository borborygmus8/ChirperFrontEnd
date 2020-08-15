import React, { Component } from 'react';

class Add extends Component {
    render() {
        return (
            <div className="col-6 border border-light rounded-lg shadow p-0 my-3 mx-auto">
                <h3 className="bg-primary text-white rounded-lg p-2">Add Chirp</h3>
                <form className="p-4">
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" className="form-control mb-4" />
                    <label htmlFor="text">Message</label>
                    <textarea id="text" className="form-control mb-4"></textarea>
                    <button type="submit" className="btn btn-primary" onClick={this.props.onFormSubmit}>Chirp!</button>
                </form>
            </div>
        );
    }
}

export default Add;