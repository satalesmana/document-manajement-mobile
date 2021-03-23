import {
    SET_FAVOURITE_DOKUMEN,
    RESET_FAVOURITE_DOKUMEN,
    ADD_FAVOURITE_DOKUMEN
} from '../../actions'

const initialState ={
    favouritedokumen:[]
}

const favouriteDokumenReducer = (state = initialState, action) => {
    let dokumen = []
    let actionFilter = [SET_FAVOURITE_DOKUMEN, ADD_FAVOURITE_DOKUMEN]
    if(actionFilter.includes(action.type)){
        dokumenFilter = action.favouritedokumen.filter(d=>d.latest_version !== null)
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
        case SET_FAVOURITE_DOKUMEN:
            return{
                ...state,
                favouritedokumen:dokumen//action.favouritedokumen
            }
        case RESET_FAVOURITE_DOKUMEN:
            return{
                ...state,
                favouritedokumen:[]
            }
        case ADD_FAVOURITE_DOKUMEN:
            return {
                ...state,
                //favouritedokumen: [...state.favouritedokumen, ...action.favouritedokumen]
                favouritedokumen: [...state.favouritedokumen, ...dokumen]
            }
        default:
            return state
    }
}

export default favouriteDokumenReducer;