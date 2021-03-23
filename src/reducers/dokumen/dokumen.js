import {
    SET_MYDOKUMEN,
    RESET_MYDOKUMEN,
    ADD_MYDOKUMEN
} from '../../actions'

const initialState ={
    mydokumen:[]
}

const mydokumenReducer = (state = initialState, action) => {
    let dokumen = []
    let actionFilter = [SET_MYDOKUMEN, ADD_MYDOKUMEN]
    if(actionFilter.includes(action.type)){
        dokumenFilter = action.myDocument.filter(d=>d.latest_version !== null)
        dokumen = dokumenFilter.map(d=>{
                return{
                    id:d.id,
                    slug:d.slug,
                    type : d.type,
                    type_name : d.type_name,
                    title : d.title,
                    categories : d.categories,
                    number : d.latest_version.number,
                    latest_version_id : d.latest_version.id,
                    latest_version_slug : d.latest_version.slug,
                    version: d.latest_version.version,
                    version:d.latest_version.version,
                    owner : d.latest_version.owner
                }
        })
    }

    switch(action.type){
        case SET_MYDOKUMEN:
            return{
                ...state,
                mydokumen:dokumen
            }
        case RESET_MYDOKUMEN:
            return {
                ...state,
                mydokumen:[]
            }
        case ADD_MYDOKUMEN:
            return{
                ...state,
                mydokumen: [...state.mydokumen, ...dokumen]
            }
        default:
            return state
    }
}

export default mydokumenReducer;