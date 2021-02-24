import {
    SET_FORM,
    RESET_CONFIG,
    SET_BASEURL,
    SET_ACCOUNT,
    SET_MYDOKUMEN,
    SET_FAVOURITE_DOKUMEN,
    SET_PUBLIC_DOKUMEN,
    SET_RELATED_DOKUMEN
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

export const setMyDocument = (myDocument) => { return { type:SET_MYDOKUMEN, myDocument }}

export const setFavouriteDocument = (favouritedokumen) => { return { type:SET_FAVOURITE_DOKUMEN, favouritedokumen }}

export const setPublicDocument = (publicdokumen) =>  { return { type:SET_PUBLIC_DOKUMEN, publicdokumen }}

export const setRelatedDocument = (relatedDokumen) => { return { type:SET_RELATED_DOKUMEN, relatedDokumen }}