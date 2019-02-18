import { SET_FILMS } from '../config';

export default function(state = [], action) {
    switch (action.type){
        case SET_FILMS:
            return [
                ...action.payload
            ]
        default:
            return state; 
    }
}
