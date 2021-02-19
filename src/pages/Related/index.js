import React from 'react'
import { ScrollView, SafeAreaView, StyleSheet, Dimensions, Text, View } from 'react-native'
import { SearchHeader } from '../../components/SearchHeader'
import { CardList } from '../../components/CardList'

const RelatedScreen = ({navigation}) => {
    let placeHolderSearch = "Search Document Related"

    return (
        <SafeAreaView>
            <SearchHeader  placeHolder={placeHolderSearch} navigation={navigation}></SearchHeader>
            <ScrollView style={styles.container}>
                <CardList></CardList>
                <CardList></CardList>
                <CardList></CardList>
                <CardList></CardList>
                <CardList></CardList>
                <CardList></CardList>
                <CardList></CardList>
                <CardList></CardList>
                <CardList></CardList>
                <CardList></CardList>
                <CardList></CardList>
                <CardList></CardList>
                <CardList></CardList>
                <CardList></CardList>
                <CardList></CardList>
                <CardList></CardList>
                <CardList></CardList>
                <CardList></CardList>
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
