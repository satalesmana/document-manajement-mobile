import {
    SET_PUBLIC_DOKUMEN,
    ADD_PUBLIC_DOKUMEN,
    RESET_PUBLIC_DOKUMEN
} from '../../actions'

const initialState ={
    publicdokumen:[]
}

const publicDokumenReducer = (state = initialState, action) => {
    let dokumen = []
    let actionFilter = [SET_PUBLIC_DOKUMEN, ADD_PUBLIC_DOKUMEN]
    if(actionFilter.includes(action.type)){
        dokumenFilter = action.publicdokumen.filter(d=>d.latest_version !== null)
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
                    owner : d.latest_version.owner,
                    class_name:d.class_name
                }
        })
    }
    switch(action.type){
        case SET_PUBLIC_DOKUMEN:
            return{
                ...state,
                publicdokumen:dokumen //action.publicdokumen
            }
        case ADD_PUBLIC_DOKUMEN:
            return {
                ...state,
                //publicdokumen: [...state.publicdokumen, ...action.publicdokumen]
                publicdokumen: [...state.publicdokumen, ...dokumen]
            }
        case RESET_PUBLIC_DOKUMEN:
            return{
                ...state,
                publicdokumen:[]
            }
        default:
            return state
    }
}

export default publicDokumenReducer;