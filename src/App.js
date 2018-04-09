import React, { Component } from 'react';
import './App.css';
import './animate.css'
import logo from './img/pokeball.png'
import bg from './img/hero-background.jpg';
import {Animated} from 'react-animated-css';
import PokemonList from './components/pokemon-list';

class App extends Component {
  render() {

    return (
        <div className="App">
          {this.props.children}
        </div>
    );
  }
}

export default App;
