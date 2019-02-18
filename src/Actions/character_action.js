import axios from'axios';
import { CHARACTERS_API, SET_CHARACTERS } from '../config';

// Esta es una funcion pura que toma como parametro un payload que sera enviada al state
export const fetchCharaAction = (data) => (
    {
        type: SET_CHARACTERS,
        payload: data
    }
)

// esta es la funcion con la logica basicamente... 
// se usa el dispatch para enviar por pala funcion pura que esta definida arriba
export function getAllCharacters() {
    return function(dispatch) {
        axios.get(CHARACTERS_API)
          .then(res => {
            const characters = res.data;
            dispatch(fetchCharaAction(characters.results))
        })
    }
}
