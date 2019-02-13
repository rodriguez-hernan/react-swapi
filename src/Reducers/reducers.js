import { SET_FILMS, SET_CHARACTERS, SET_SPACESHIPS } from '../config';


let defaultState = {
    ships: []
}


const reducers = (state = defaultState, action) => {
    switch (action.type){
        case SET_FILMS:
            return {
                ...state,
                examplePropOne: 'newPropOne'
            }
        case SET_CHARACTERS:
            return {
                ...state,
                examplePropTwo: action.payload
            }
        case SET_SPACESHIPS:
        console.log("reducer");
            return {
                ...state,
                ships: action.payload
            }
        default: 
            console.log("default {reducer} " + action.type)
            return state; 
    }
}

export default reducers;