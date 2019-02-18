import { SET_SPACESHIPS } from '../config';


export default function(state = [], action) {
    //console.log("spaceship reducer", state, action)
    switch (action.type){
        case SET_SPACESHIPS:
        //console.log("set spaceship  case")
            return [
                ...action.payload
            ]
        default: 
            //console.log("default spaceship reducer ")
            return state; 
    }
}
