
import React from 'react';
import {connect} from 'react-redux';
import {getpokemons} from '../../src/actions/index';
import '../App.css';
import '../animate.css'
import {Animated} from 'react-animated-css';
import Home from './home';
import AutoSuggest from 'react-autosuggest';
import Palette from 'react-palette';
import Modal from 'react-modal';
import { debounce, inRange, isNil, omit } from 'lodash';

import ModalBox from './modal';

let loaded;
// list of monsters that you'd like to autosuggest.


const monsters = (pokemonAll) => [
  this.state.pokemonAll
];

       // Teach Autosuggest how to calculate suggestions for any given input value.
const getSuggestions = value => {
  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;

  return inputLength === 0 ? [] : monsters.filter(poke =>
    poke.name.toLowerCase().slice(0, inputLength) === inputValue
  );
};
// When suggestion is clicked, Autosuggest needs to populate the input
// based on the clicked suggestion. Teach Autosuggest how to calculate the
// input value for every given suggestion.
const getSuggestionValue = suggestion => suggestion.name;

// Use your imagination to render suggestions.
const renderSuggestion = suggestion => (
  <div>
    {suggestion.name}
  </div>
);

class SearchBar extends React.Component {
  

      componentDidMount() {
        this.getAllPokemon();
        var monsters = this.state.pokemonAll;



      }
      getAllPokemon() {
        fetch("https://pokeapi.co/api/v2/pokemon/?limit=151", {
          method: "GET",
          dataType: "json"
        }).then(response => {
          if (response.ok) {
            response.json().then(json => {
              
              console.log("My favourite pokemon is " + json.results[6].name + " btw :)");
              
              
                var obj = JSON.stringify(json.results);

                
                
              this.setState({
                pokemonAll: obj,
                numAll: json.results.length
              });
        
            });
          }
        });


      }







 
 constructor() {
    super();

    // Autosuggest is a controlled component.
    // This means that you need to provide an input value
    // and an onChange handler that updates this value (see below).
    // Suggestions also need to be provided to the Autosuggest,
    // and they are initially empty because the Autosuggest is closed.
    this.state = {
      value: '',
      suggestions: []
    };
  }

  onChange = (event, { newValue }) => {
    this.setState({
      value: newValue
    });
  };

  // Autosuggest will call this function every time you need to update suggestions.
  // You already implemented this logic above, so just use it.
  onSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: getSuggestions(value)
    });
  };

  // Autosuggest will call this function every time you need to clear suggestions.
  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  };

  render() {
    const { value, suggestions } = this.state;

    console.log(monsters);
    // Autosuggest will pass through all these props to the input.
    const inputProps = {
      placeholder: 'Lookup a Pokemon!',
      value,
      onChange: this.onChange
    };

    // Finally, render it!
    return (
      <AutoSuggest
        suggestions={suggestions}
        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
        getSuggestionValue={getSuggestionValue}
        renderSuggestion={renderSuggestion}
        inputProps={inputProps}
      />
    );
  }
}


function mapStateToProps(state) {
    return {
        pokemons: state.pokemons
    }
}

export default connect(mapStateToProps, {getpokemons})(SearchBar);