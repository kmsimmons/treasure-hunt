import React, { Component } from 'react';
import './App.css';
import Board from './Board';


class App extends Component {
    render(){


        return (
    <div className="App">
        <h1>Treasure Hunt</h1>
        <button onClick = {this.startGame}>Start Game</button>
        <Board
            setTreasure = {this.setTreasure} />

    </div>
  )}
}

export default App;
