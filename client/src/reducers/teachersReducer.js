//import isEmpty from '../validation/is-empty'

const initialState = {
    teachers: [],
    mandals: [], 
    schools: [],
    
    teacher: [],
    editTeacher : []
    
}

export default function(state=initialState,action){
    if(action.type === 'LOAD_MANDALS'){
        return {
            ...state,
            mandals: action.payload
        }
    }

    if(action.type === 'LOAD_SCHOOLS'){
        return {
            ...state,
            schools: action.payload
        }
    }

    if(action.type === 'LOAD_TEACHERS'){
        return {
            ...state,
            teachers: action.payload
        }
    }
    if(action.type === 'LOAD_TEACHER'){
        return {
            ...state,
            editTeacher: action.payload
        }
    }
    
    return state;
}


