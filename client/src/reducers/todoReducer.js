//import isEmpty from '../validation/is-empty'

const initialState = {
    todos : [],
    completed : false
}

export default function(state=initialState,action){
    if(action.type === 'GET_TODOS'){
        return {
            ...state,
            todos: action.payload
        }
    }

    if(action.type === 'TODO_COMPLETED'){
        
        return {
            ...state,
            completed: action.payload
        }
    }
    return state;
}


