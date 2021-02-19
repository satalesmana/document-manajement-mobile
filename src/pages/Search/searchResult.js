import React from 'react'
import { Appbar } from 'react-native-paper'
import styles from './style'
import { CardList } from '../../components'
import { 
    SafeAreaView,
    ScrollView,
    Text, 
    View 
} from 'react-native'

const SearchResultScreen = ({navigation}) => {
    const onBackPage = () =>{
        navigation.goBack()
    }

    return (
        <SafeAreaView>
            <Appbar.Header dark={false} style={styles.appbarLight}>
                <Appbar.BackAction onPress={onBackPage} />
                <Appbar.Content title="Document"/>
            </Appbar.Header>
            <ScrollView style={styles.containerScrol}>
                <CardList></CardList>
            </ScrollView>
        </SafeAreaView>
    )
}

export default SearchResultScreen
