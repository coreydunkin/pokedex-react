import { combineReducers } from 'redux';
import pokemonsReducer from './pokemons-reducer';

const rootReducer = combineReducers({
  pokemons: pokemonsReducer
});

export default rootReducer;
