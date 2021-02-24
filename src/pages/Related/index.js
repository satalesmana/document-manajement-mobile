import React, { useEffect} from 'react'
import { ScrollView, SafeAreaView, StyleSheet, Dimensions, Text, View } from 'react-native'
import { SearchHeader } from '../../components/SearchHeader'
import { CardList } from '../../components/CardList'
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios'
import {
    setRelatedDocument
} from '../../actions'


const RelatedScreen = ({navigation}) => {
    let placeHolderSearch = "Search Document Related"
    const dispatch        = useDispatch();
    const {relatedDokumen} = useSelector(state=>state.relatedDokumenReducer)
    const { baseUrl }     = useSelector(state=>state.configReducer);
    const { token }       = useSelector(state=>state.accountReducer);

    const onLoadData = () => {
        axios.defaults.headers.common['Authorization'] = 'Bearer '+token;
        axios.defaults.headers.common['Accept'] = 'application/json';
        axios.get(baseUrl + '/api/document')
            .then(r=>{
                dispatch(setRelatedDocument(r.data.data))
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
                    relatedDokumen.map((item,index)=>(
                        <CardList key={index} data={item}/>
                    ))
                }
            </ScrollView>
            
        </SafeAreaView>
    )
}

export default RelatedScreen

const styles = StyleSheet.create({
    container:{
        paddingTop:15
    }
})
