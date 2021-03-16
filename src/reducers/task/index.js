import {
    SET_TASK,
    ADD_TASK,
    DELETE_TASK
} from '../../actions'

const initialState ={
    task:[]
}

const taskReducer = (state = initialState, action) =>{
    switch(action.type){
        case SET_TASK:
            return{
                ...state,
                task: action.task
            }
        case ADD_TASK:
            return{
                ...state,
                task: [...state.task, ...action.task]
            }
        case DELETE_TASK:
            return {
                ...state,
                task : state.task.filter(a=> a.id !== action.key)
            }
        default:
            return state
    }
}

export default taskReducer