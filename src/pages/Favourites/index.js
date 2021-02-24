import React, { useEffect} from 'react'
import { StyleSheet, ScrollView, SafeAreaView, Text, View } from 'react-native'
import axios from 'axios'
import { SearchHeader } from '../../components/SearchHeader'
import { CardList } from '../../components/CardList'
import { useSelector, useDispatch } from 'react-redux'
import {
    setFavouriteDocument
} from '../../actions'

const FavouritesScreen = ({navigation}) => {
    let placeHolderSearch = "Search Favourites"
    const dispatch        = useDispatch();
    const {favouritedokumen}= useSelector(state=>state.favouriteDokumenReducer)
    const { baseUrl }     = useSelector(state=>state.configReducer);
    const { token }       = useSelector(state=>state.accountReducer);

    const onLoadData = () => {
        axios.defaults.headers.common['Authorization'] = 'Bearer '+token;
        axios.defaults.headers.common['Accept'] = 'application/json';
        axios.get(baseUrl + '/api/document')
            .then(r=>{
                dispatch(setFavouriteDocument(r.data.data))
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
            <ScrollView style={styles.container}>
                {
                    favouritedokumen.map((item,index)=>(
                        <CardList key={index} data={item}/>
                    ))
                }
            </ScrollView>
        </SafeAreaView>
    )
}

export default FavouritesScreen

const styles = StyleSheet.create({
    container:{
        paddingTop:15
    }
})
