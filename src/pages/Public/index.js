import React, { useEffect} from 'react'
import { ScrollView, SafeAreaView, StyleSheet, Dimensions, Text, View } from 'react-native'
import { SearchHeader } from '../../components/SearchHeader'
import { CardList } from '../../components/CardList'
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios'
import {
    setPublicDocument
} from '../../actions'

const PublicScreen = ({navigation}) => {
    let placeHolderSearch = "Search Document Publick"
    const dispatch        = useDispatch();
    const {publicdokumen} = useSelector(state=>state.publicDokumenReducer)
    const { baseUrl }     = useSelector(state=>state.configReducer);
    const { token }       = useSelector(state=>state.accountReducer);

    const onLoadData = () => {
        axios.defaults.headers.common['Authorization'] = 'Bearer '+token;
        axios.defaults.headers.common['Accept'] = 'application/json';
        axios.get(baseUrl + '/api/document')
            .then(r=>{
                dispatch(setPublicDocument(r.data.data))
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
                    publicdokumen.map((item,index)=>(
                        <CardList key={index} data={item}/>
                    ))
                }
            </ScrollView>
            
        </SafeAreaView>
    )
}

export default PublicScreen

const styles = StyleSheet.create({
    container:{
        paddingTop:15
    }
})
