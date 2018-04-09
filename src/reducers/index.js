import { combineReducers } from 'redux';
import pokemonsReducer from './pokemans-reducer';

const rootReducer = combineReducers({
  pokemons: pokemonsReducer
});

export default rootReducer;
