import {
    SET_RELATED_DOKUMEN,
    RESET_RELATED_DOKUMEN,
    ADD_RELATED_DOKUMEN
} from '../../actions'

const initialState ={
    relatedDokumen:[]
}

const relatedDokumenReducer = (state = initialState, action) => {
    let dokumen = []
    let actionFilter = [SET_RELATED_DOKUMEN, ADD_RELATED_DOKUMEN]
    if(actionFilter.includes(action.type)){
        dokumenFilter = action.relatedDokumen.filter(d=>d.latest_version !== null)
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
        case SET_RELATED_DOKUMEN:
            return{
                ...state,
                relatedDokumen:dokumen
            }
        case RESET_RELATED_DOKUMEN:
            return{
                ...state,
                relatedDokumen:[]
            }
        case ADD_RELATED_DOKUMEN:
            return{
                ...state,
                relatedDokumen: [...state.relatedDokumen, ...dokumen]
            }
        default:
            return state
    }
}

export default relatedDokumenReducer;