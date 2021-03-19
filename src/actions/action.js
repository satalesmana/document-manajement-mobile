import {
    SET_FORM,
    RESET_CONFIG,
    SET_BASEURL,
    SET_ACCOUNT,
    RESET_ACCOUNT,
    SET_MYDOKUMEN,
    RESET_MYDOKUMEN,
    ADD_MYDOKUMEN,
    SET_LANGUAGE,

    SET_FAVOURITE_DOKUMEN,
    RESET_FAVOURITE_DOKUMEN,
    ADD_FAVOURITE_DOKUMEN,

    SET_PUBLIC_DOKUMEN,
    RESET_PUBLIC_DOKUMEN,
    ADD_PUBLIC_DOKUMEN,

    SET_RELATED_DOKUMEN,
    RESET_RELATED_DOKUMEN,
    ADD_RELATED_DOKUMEN,

    SET_ACT_VIEW,
    RESET_ACT_VIEW,

    SET_ACT_SEARCH,
    RESET_ACT_SEARCH,
    DELETE_ACT_SEARCH,

    SET_TASK,
    ADD_TASK,
    DELETE_TASK,

    SET_EXAM,
    EDIT_EXAM
} from './types'

export const setForm = (inputType, value) =>{
    return {
        type:SET_FORM,
        inputType:inputType,
        inputValue:value
    }
}

export const clearConfigForm = () =>{ return { type:RESET_CONFIG } }
export const setBaseUrl = (formModel) =>{ return { type:SET_BASEURL, formModel } }
export const setAccount = (accountData) =>{ return { type:SET_ACCOUNT, accountData } }
export const resetAccount = () => {return { type:RESET_ACCOUNT}}
export const setLanguage = (Mylanguage) =>{ return { type:SET_LANGUAGE, Mylanguage } }

export const setMyDocument = (myDocument) => { return { type:SET_MYDOKUMEN, myDocument }}
export const resetMydokumen = () => { return { type: RESET_MYDOKUMEN}}
export const addMydokumen = (myDocument) => { return {type:ADD_MYDOKUMEN, myDocument } }

export const setFavouriteDocument = (favouritedokumen) => { return { type:SET_FAVOURITE_DOKUMEN, favouritedokumen }}
export const addFavouritekumen = (favouritedokumen) => { return { type:ADD_FAVOURITE_DOKUMEN, favouritedokumen }}
export const resetFavouriteDokumen = () => { return { type:RESET_FAVOURITE_DOKUMEN } }

export const setPublicDocument = (publicdokumen) =>  { return { type:SET_PUBLIC_DOKUMEN, publicdokumen }}
export const resetPublicDocument = () => { return { type:RESET_PUBLIC_DOKUMEN}}
export const addPublicDocument = (publicdokumen) =>  { return { type:ADD_PUBLIC_DOKUMEN, publicdokumen }}

export const setRelatedDocument = (relatedDokumen) => { return { type:SET_RELATED_DOKUMEN, relatedDokumen }}
export const addRelatedDocument = (relatedDokumen) => { return { type:ADD_RELATED_DOKUMEN, relatedDokumen }}
export const resetRelatedDocument = () => { return { type:RESET_RELATED_DOKUMEN }}

export const setActView = (actView)=> {return {type:SET_ACT_VIEW, actView}}
export const resetActView = ()=> {return {type:RESET_ACT_VIEW}}
export const setActSearch = (actSearch) => {return { type:SET_ACT_SEARCH, data:actSearch}}
export const resetActSearch = () => {return { type:RESET_ACT_SEARCH}}
export const deleteActSearch = (key) => {return { type:DELETE_ACT_SEARCH, key: key}}

export const setTask = (task) => { return { type:SET_TASK, task} }
export const addTask = (task) => { return { type:ADD_TASK, task }}
export const deleteTask = (key) => { return { type:DELETE_TASK, key:key } }

export const setExamp = (exam) =>{ return {type:SET_EXAM, exam}}
export const editExamp = (exam) =>{ return {type:EDIT_EXAM, exam}}