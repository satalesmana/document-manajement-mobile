import React from 'react'
import { 
    SafeAreaView, 
    StatusBar,
    Text,
    View,
    TextInput,
    Button
} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { HeaderApp } from '../../components'
import styles from './style'

const AccountScreen = ({navigation}) => {
    const onSignoutPress = () => {
        navigation.navigate('LoginScreen')
    }

    return (
        <View>
            <SafeAreaView>
                <ScrollView>
                    <StatusBar translucent backgroundColor="transparent" barStyle="dark-light"/>
                    <HeaderApp navigation={navigation} />
                    <View style={styles.contentView}>
                        <Button
                            //buttonStyle={styles.signOutButton}
                            color="#aa26de"
                            title="Sign Out" 
                            onPress={onSignoutPress}/> 

                        <View style={styles.pasBoxText}>
                            <Text style={styles.pasText}>Change Passwrod</Text>
                        </View>
                        <TextInput 
                            placeholder="Old Password" 
                            placeholderColor="#c4c3cb" 
                            style={styles.loginFormTextInput} 
                            secureTextEntry={true}/>

                        <TextInput 
                            placeholder="New Password" 
                            placeholderColor="#c4c3cb" 
                            style={styles.loginFormTextInput} 
                            secureTextEntry={true}/>
                        <Button
                            //buttonStyle={styles.loginButton}
                            title="Change Password" />   
                    
                    </View>
                </ScrollView>
            </SafeAreaView>
        </View>
    )
}

export default AccountScreen
