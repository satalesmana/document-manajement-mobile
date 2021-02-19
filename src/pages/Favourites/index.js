import React from 'react'
import { StyleSheet, ScrollView, SafeAreaView, Text, View } from 'react-native'
import { SearchHeader } from '../../components/SearchHeader'
import { CardList } from '../../components/CardList'

const FavouritesScreen = ({navigation}) => {
    let placeHolderSearch = "Search Favourites"

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

export default FavouritesScreen

const styles = StyleSheet.create({
    container:{
        paddingTop:15
    }
})
