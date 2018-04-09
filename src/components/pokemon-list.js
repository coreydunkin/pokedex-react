import React from 'react';
import PokemonSearch from './search';

import { connect } from 'react-redux';

import { bindActionCreators } from 'redux';

import Pokemon from './pokemon-main';

import { getpokemons } from '../actions/pokemons'

import {Animated} from 'react-animated-css';

import AutoSuggest from 'react-autosuggest';
import SearchBar from './search';

const KEYS_TO_FILTERS = ['monster.name']



class PokemonList extends React.Component {
  


  constructor(props) {
    super(props);

    this.handlePageChange = this.handlePageChange.bind(this);
    this.state = {
      pokemon: []
    };
  }
    



  handlePageChange(page) {
    this.setState({page});
  }

  getPokemon() {
    fetch("https://pokeapi.co/api/v2/pokemon/?limit=151", {
      method: "GET"
    }).then(response => {
      if (response.ok) {
        response.json().then(json => {
          
          console.log("My favourite pokemon is " + json.results[6].name + " btw :)");
          

          this.setState({
            pokemon: json.results,
            num: json.results.length
          });
    
        });
      }
    });


  }

  componenWillMount() {
    this.props.getpokemons(this.props.params.page);
  }

  componentDidMount() {
    this.getPokemon();

    
    const options = { valueNames: [ 'name' ] };

  }



  render() {
    let { pokemon } = this.state;
    let startNum = 1;



   
    pokemon = pokemon.slice(0, 151);
    startNum = 1;

      
    let pokemonList;
    pokemonList = (
      <div id="monsters">
        <SearchBar />
        <ul className="pokemon-container">
          {pokemon.map((monster, index) =>
            <Pokemon number={monster.num} key={monster.name} id={index + startNum} pokemon={monster.name} />
          )}
        </ul>
      </div>
    );
    return <div>
    {pokemonList}
    </div>;
  }
}

function mapStateToProps(pokemon, state) {
  //whatever gets returned will show up as props inside of BookList
  return {
    //pokemon: pokemon
  };
}


function mapDistpachToProps(dispatch) {
 // return bindActionCreators({ pokemon: pokemon }, dispatch);
}

export default connect(mapStateToProps, mapDistpachToProps)(PokemonList);