import React from 'react';
import * as RNLocalize from 'react-native-localize';
import i18n from 'i18n-js';
import memoize from 'lodash.memoize';
import { I18nManager } from 'react-native';
import { useSelector } from 'react-redux'

const allowLang = ["en","id"];

const translationGetters = {
    en: () => require("./en.json"),
    id: () => require("./id.json")
};

const lang = memoize(
    (key, config) => i18n.t(key, config),
    (key, config) => (config ? key + JSON.stringify(config) : key)
);
  
const setI18nConfig = () => {
    const { Mylanguage }    = useSelector(state=>state.configReducer);

    const fallback = { languageTag: Mylanguage, isRTL: false };
    const { languageTag, isRTL } = RNLocalize.findBestAvailableLanguage(Object.keys(translationGetters)) || fallback;
    
    lang.cache.clear();

    I18nManager.forceRTL(isRTL);
    if(allowLang.includes(languageTag)){
        i18n.translations = { [languageTag]: translationGetters[languageTag]() };
        i18n.locale = languageTag;
    }else{
        i18n.translations = { [Mylanguage]: translationGetters[Mylanguage]() };
        i18n.locale = Mylanguage;
    }
    
};

export {
    lang,
    setI18nConfig
}