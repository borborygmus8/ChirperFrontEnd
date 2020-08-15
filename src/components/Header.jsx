import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div className="row m-0">
                <div className="col p-0">
                    <header className="d-flex bg-primary text-white p-1">
                        <h1 className="col-8">chirper</h1>
                        <ul className="col-4 nav justify-content-end align-items-center">
                            <li className="nav-item">
                                <button className="btn btn-primary" onClick={this.props.onClickList}>chirps</button>
                            </li>
                            <li className="nav-item">
                                <button className="btn btn-light" onClick={this.props.onClickAdd}>add chirp</button>
                            </li>
                        </ul>
                    </header>
                </div>
            </div>
        );
    }
}

export default Header;