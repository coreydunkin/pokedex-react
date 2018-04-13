import axios from 'axios';
import { GET_pokemons } from './types';

const ROOT_URL = 'https://pokeapi.co/api/v2/';

const SEARCH_URL = 'https://pokeapi.co/api/v2/pokemon/?limit=151';

export function getpokemons(page) {
    let offset = 20*(page-1);
    let url = `${ROOT_URL}pokemon/?offset=${offset}`;
    let getAll = 'https://pokeapi.co/api/v2/pokemon/?limit=151';
    let requestAll = axios.get(getAll);
    let request = axios.get(url);


    

    return {
        type: GET_pokemons,
        payload: request
    }
}
