import React, { useEffect} from 'react'
import { ScrollView, SafeAreaView, StyleSheet, Text} from 'react-native'
import { SearchHeader } from '../../components/SearchHeader'
import { CardList } from '../../components/CardList'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios'
import {
    setMyDocument
} from '../../actions'

const HomeScreen = ({navigation}) => {
    let placeHolderSearch = "Search Mydocument"
    const dispatch        = useDispatch();
    const {mydokumen}     = useSelector(state=>state.mydokumenReducer)
    const { baseUrl }     = useSelector(state=>state.configReducer);
    const { token }       = useSelector(state=>state.accountReducer);

    const onLoadData = () => {
        axios.defaults.headers.common['Authorization'] = 'Bearer '+token;
        axios.defaults.headers.common['Accept'] = 'application/json';
        axios.get(baseUrl + '/api/document')
            .then(r=>{
                dispatch(setMyDocument(r.data.data))
            }).catch(e=>{
                console.log(e)
            })
    }

    useEffect(() => {
        onLoadData()
    },[]);

    return (
        <SafeAreaView>
            <SearchHeader  placeHolder={placeHolderSearch} navigation={navigation}></SearchHeader>
            <ScrollView 
                style={styles.container}>
                {
                    mydokumen.map((item,index)=>(
                        <CardList key={index} data={item}/>
                    ))
                }
            </ScrollView>
            
        </SafeAreaView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container:{
        paddingTop:15
    }
})
