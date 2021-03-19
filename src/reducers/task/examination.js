import {
    SET_EXAM
} from '../../actions'

const initialState ={
    exam:{}
}


const examReducer = (state = initialState, action) =>{
    switch(action.type){
        case SET_EXAM:
            return{
                ...state,
                exam:action.exam
            }
        default:
            return state
    }
        
}

export default examReducer