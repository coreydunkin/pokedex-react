import { GET_pokemons } from '../actions/types';

export default function (state = [], action) {
    switch (action.type) {
        case GET_pokemons:
            return action.payload.data.results;
    }
    return state;
}