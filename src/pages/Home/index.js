import React from 'react'
import { ScrollView, SafeAreaView, StyleSheet} from 'react-native'
import { SearchHeader } from '../../components/SearchHeader'
import { CardList } from '../../components/CardList'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const HomeScreen = ({navigation}) => {
    let placeHolderSearch = "Search Mydocument"

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

export default HomeScreen

const styles = StyleSheet.create({
    container:{
        paddingTop:15
    }
})
