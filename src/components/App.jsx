import React, { Component } from 'react';
import Header from './Header';
import List from './List';
import Add from './Add';

class App extends Component {
    constructor(props) {
        super(props);
        
        this.state = { 
            display: 'list'
         };
    
        this.newChirps = [];
    
        this.handleClickList = this.handleClickList.bind(this);
        this.handleClickAdd = this.handleClickAdd.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }
    
    handleClickList() {
        this.setState({ display: 'list' });
    }
    
    handleClickAdd() {
        this.setState({ display: 'add' });
    }

    handleFormSubmit(e) {
        e.preventDefault();
        const newName = document.getElementById('name').value;
        const newText = document.getElementById('text').value;
        if (newName !== '' && newText !== '') {
            this.newChirps.push({
                name: newName,
                text: newText
            });
        }
        this.setState({ display: 'list' }); 
    }

    render() {
        if (this.state.display === 'list') {
            return (
                <div className="container-fluid p-0">
                    <Header onClickList={this.handleClickList} onClickAdd={this.handleClickAdd} />
                    <List newChirps={this.newChirps} />
                </div>
            );
        }
        if (this.state.display === 'add') {
            return (
                <div className="container-fluid p-0">
                    <Header onClickList={this.handleClickList} onClickAdd={this.handleClickAdd} />
                    <Add onFormSubmit={this.handleFormSubmit} />
                </div>
            );
        }
    }
}

export default App;