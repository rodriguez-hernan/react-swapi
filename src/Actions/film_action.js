import axios from'axios';
import { FILMS_API, SET_FILMS } from '../config';

// Esta es una funcion pura que toma como parametro un payload que sera enviada al state
export const fetchFilmsAction = (data) => (
    {
        type: SET_FILMS,
        payload: data
    }
)

// esta es la funcion con la logica basicamente... 
// se usa el dispatch para enviar por pala funcion pura que esta definida arriba
export function getFilms() {
    return function(dispatch) {
        axios.get(FILMS_API)
          .then(res => {
            const films = res.data;
            dispatch(fetchFilmsAction(films.results))
        })
    }
}
