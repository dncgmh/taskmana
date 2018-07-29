import React, { Component } from 'react';
import './App.css';
import Table from './components/Table';


class App extends Component {
    render() {        
        return (
            <div className="container">
                <h1 className="center">To-do List</h1>
                <div className="row col-12">
                    <div className="col-12 part2">
                        <Table />
                    </div>
                </div>
            </div>
        )
    }
}

export default App;
