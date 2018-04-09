import { GET_pokemonS } from '../actions/types';

export default function (state = [], action) {
    switch (action.type) {
        case GET_pokemonS:
            return action.payload.data.results;
    }
    return state;
}