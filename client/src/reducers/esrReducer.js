//import isEmpty from '../validation/is-empty'

const initialState = {
    esrteacher : null
}

export default function(state=initialState,action){
    
    if(action.type === 'LOAD_TEACHER'){
        return {
            ...state,
            esrteacher: action.payload
        }
    }
    
    return state;
}


