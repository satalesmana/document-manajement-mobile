import {
    SET_ACT_VIEW,
    SET_ACT_SEARCH,
    RESET_ACT_SEARCH,
    DELETE_ACT_SEARCH,
    RESET_ACT_VIEW
} from '../../actions'

const initialState={
    actView:[],
    actSearch:[]
}

const historyReducer = (state = initialState, action) => {
    
    switch(action.type){
        case SET_ACT_VIEW:
            let index = state.actView.length + 1
            
            let itemState = state.actView.filter((item) => item.id !== action.actView.id)
            let actView = itemState.concat({
                key: index,
                id:action.actView.id,
                title: action.actView.title,
                type_name: action.actView.type_name,
                type: action.actView.type,


                slug:action.actView.slug,
                categories : action.actView.categories,
                number : action.actView.number,
                latest_version_id : action.actView.latest_version_id,
                version: action.actView.version,
                class_name:action.actView.class_name

            })

            return {
                ...state,
                actView: actView
            }
        case RESET_ACT_VIEW:
            return{
                ...state,
                actView:[]
            }
        case SET_ACT_SEARCH:
            let indexSearch = state.actSearch.length + 1

            return {
                ...state,
                actSearch: state.actSearch.concat({
                    key: indexSearch,
                    name: action.data
                })
            }
        case RESET_ACT_SEARCH:
            return {
                ...state,
                actSearch: []
            }
        case DELETE_ACT_SEARCH:
            return {
                ...state,
                actSearch: state.actSearch.filter(d=> d.key !== action.key)
            }
        default:
            return state
    }
}

export default historyReducer;
