import axios from'axios';
import { STARSHIPS_API, SET_SPACESHIPS } from '../config';

// Esta es una funcion pura que toma como parametro un payload que sera enviada al state
export const setShipsAction = (data) => (
    {
        type: SET_SPACESHIPS,
        payload: data
    }
)

// esta es la funcion con la logica basicamente... 
// se usa el dispatch para enviar por pala funcion pura que esta definida arriba
export function getJedis() {
    return function(dispatch) {
        axios.get(STARSHIPS_API)
          .then(res => {
            const ships = res.data;
            //console.log(ships);
            dispatch(setShipsAction(ships.results));
        })
    }
}
