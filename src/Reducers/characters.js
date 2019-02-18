import { SET_CHARACTERS } from '../config';


export default function(state = [], action) {
    //console.log("characters reducer", state, action)
    switch (action.type){
        case SET_CHARACTERS:
        console.log("set characters  case")
            //const payload = {characters: action.payload} 
            return [
                ...action.payload
            ]
        default: 
            console.log("default characters reducer ")
            return state; 
    }
}
