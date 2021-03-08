import React from 'react'
import Router  from './router'
import { StyleSheet, Text, View,  } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux'
//import configureStore from './Store'
import rootReducer from './Store'
import AsyncStorage from '@react-native-community/async-storage';
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore, persistReducer } from 'redux-persist'
import { createStore } from 'redux';

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist:['configReducer','accountReducer','historyReducer']
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store =  createStore(persistedReducer);

const persistor = persistStore(store)

const App = () => {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <NavigationContainer>
                    <Router />
                </NavigationContainer>
            </PersistGate>
        </Provider>
    );
}

export default App

const styles = StyleSheet.create({})
