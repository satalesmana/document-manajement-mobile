import * as React from 'react';
import { Appbar } from 'react-native-paper';
import styles from './style'

import { 
    SafeAreaView, 
    ScrollView, 
    Text, 
    View,
    TouchableOpacity
} from 'react-native'
import {
    Icon
} from 'react-native-elements'

const DocumentViewScreen = ({navigation}) => {
    const onBackPage = () =>{
        navigation.goBack()
    }


    return (
        <SafeAreaView>
            <Appbar.Header dark={false} style={styles.appbarLight}>
                <Appbar.BackAction onPress={onBackPage} />
                <Appbar.Content 
                    title="Document View"
                    subtitle={'DCN./129279/0010/001'}/>
            </Appbar.Header>

            <ScrollView>
                <TouchableOpacity>
                    <View style={styles.cardInfo}>
                        <View style={styles.blockLeft}>
                            <Text style={styles.textTitile}>Info</Text>
                            <Text 
                                ellipsizeMode='tail' 
                                numberOfLines={2}>
                                    Document name is here loremp asd asdf asf asfipsum
                            </Text>
                        </View>
                        <View style={styles.blockRight}>
                            <Icon
                                name='chevron-right'
                                type='font-awesome'
                                color='#7f8c8d'/>
                        </View>
                    </View>
                </TouchableOpacity>

                <View style={styles.pdfContainer}>
                    
                </View>
            </ScrollView>
            
        </SafeAreaView>
    )
}



export default DocumentViewScreen


