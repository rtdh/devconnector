import isEmpty from '../validation/is-empty'

const initialState = {
    isAuthenticated : false,
    user : {},
    loginUser : {},
    errors : {}
}

export default function(state=initialState,action){
    if(action.type === 'REGISTERED_USER'){
        return {
            ...state,
            user: action.payload
        }
    }

    if(action.type === 'GET_ERRORS'){
        return {
            ...state,
            errors: action.payload
        }
    }

    if(action.type === 'SET_CURRENT_USER'){
        return {
            ...state,
            isAuthenticated: !isEmpty(action.payload),
            loginUser: action.payload
        }
    }

    if(action.type === 'LOGOUT_USER'){
        return {
            ...state,
            isAuthenticated: false,
            loginUser: action.payload
        }
    }

    
    return state;
}


