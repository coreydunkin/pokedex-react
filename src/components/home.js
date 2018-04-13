import React from 'react';
import {connect} from 'react-redux';
import {getpokemons} from '../../src/actions/index';
import {Link} from 'react-router';

import logo from '../img/pokeball.png'
import bg from '../img/hero-background.jpg';
import {Animated} from 'react-animated-css';
import SearchBar from './search';
import Palette from 'react-palette';
import Modal from 'react-modal';


import ModalBox from './modal';

let loaded;

class Home extends React.Component {
    componentWillMount() {
        this.props.getpokemons(this.props.params.page);
       
    }

    componentWillReceiveProps(props) {
        if (Number(this.props.params.page) !== Number(props.params.page)) {
            props.getpokemons(props.params.page);
            loaded = false;
        } else {
            loaded = true;
        }
    }





    renderpokemon(pokemon) {
        
  
   
        
        

        const {num} = pokemon.url;
        var pokeName = pokemon.name;
        var pokeUrl = pokemon.url;
        var pokeNum = pokemon.url.replace('https://pokeapi.co/api/v2/pokemon/', '');
        var pokeNum = pokeNum.replace('/', '');
        console.log("Pokemon " + pokeNum + " loaded");
        return (
        <Palette image={process.env.PUBLIC_URL + `/img/${pokeNum}.png`}>
         {palette => (
          <li num={pokeNum} key={pokemon.name} className={'pokemon-single-container col-md-3 col-sm-6 '}>
            
            <div className="list-group-item" style={{ backgroundColor: palette.lightVibrant }}>

              <ModalBox pokeNum={pokeNum} pokeName={pokeName} pokeUrl={pokeUrl} />

              <Animated animationIn="fadeInDown" isVisible={true}> 
              <img
                className="sprites"
                src={process.env.PUBLIC_URL + `/img/${pokeNum}.png`}
              />
              </Animated>
              <br />
              <p style={{ color: palette.darkVibrant }}>#{pokeNum}: <span style={{ color: palette.darkMuted }}>{pokemon.name}</span></p>
              <span className="info">View info</span>
            </div>

          </li>  
         )}
        </Palette>
           
        )
    }



    render(pokemonAll, numAll) {



        const {pokemons} = this.props;

        const {page} = this.props.params;
        const baseUrl = process.env.PUBLIC_URL;
        console.log(pokemons.url);

        return (
          <div>
            <Animated animationIn="fadeInDown" isVisible={true}>
              
            <header className="App-header clearfix">
              <div className="header-container">

              <div className="col-md-6  col-sm-12">
                <Animated animationIn="bounceInDown" isVisible={true}>
                    <img src={logo} className="App-logo header" alt="logo" />
                </Animated>  
                <h1 className="App-title">Coreys <br className="hidden-xs hidden-sm" />Pokedex</h1>

              </div>
             
                <div className="col-md-4 col-md-offset-2 col-sm-12">
             
                <SearchBar  />
                    <div className="row btnRow">
                        <div className="col-xs-6 col-sm-6 col-md-6 text-xs-left">
                            <Link
                                to={baseUrl + "/pokemon/" + (Number(page) - 1)}
                                disabled={page === '1'}
                                className={page === '1' ? "btn col-md-12 col-sm-12 col-xs-12 disabled" : "btn col-md-12 col-xs-12 col-sm-12"}
                            >Back
                            </Link>
                        </div>
                        <div className="col-xs-6 col-sm-6 col-md-6 text-xs-right">
                            <Link
                                to={baseUrl + "/pokemon/" + (Number(page) + 1)}
                                disabled={page === '8'}
                                className={page === '8' ? "btn col-md-12 col-sm-12 col-xs-12 disabled" : "btn col-md-12 col-xs-12 col-sm-12"}
                            >Next
                            </Link>
                        </div>
                    </div>
                </div>
                </div>                    
            </header>
            </Animated>   
              

            
            

            <div className="row">
                <div className="col-xs-12 col-md-12 offset-md-12 text-xs-center">



                    <ul className="list-group">
                        {loaded ? pokemons.map(this.renderpokemon) : <div className="loader"><Animated animationIn="tada" animationOut="fadeOutDown" isVisible={true}><img src={logo} className="App-logo" alt="logo"></img></Animated></div> }
                    </ul>
                </div>
            </div>

            
           </div> 
        )
    }
}

function mapStateToProps(state) {
    return {
        pokemons: state.pokemons
    }
}

export default connect(mapStateToProps, {getpokemons})(Home);