import { createStore, combineReducers } from 'redux';
import { 
    configReducer,
    accountReducer,
    mydokumenReducer,
    favouriteDokumenReducer,
    publicDokumenReducer,
    relatedDokumenReducer
} from './reducers';

const rootReducer = combineReducers({
    configReducer: configReducer,
    accountReducer:accountReducer,
    mydokumenReducer:mydokumenReducer,
    favouriteDokumenReducer:favouriteDokumenReducer,
    publicDokumenReducer:publicDokumenReducer,
    relatedDokumenReducer:relatedDokumenReducer

})

//const configureStore = () => createStore(rootReducer);

export default rootReducer;
//export default configureStore;