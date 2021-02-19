import React from 'react'
import styles from './style'
import { Picker } from '@react-native-picker/picker'
import { Button } from 'react-native-elements'
import { LogoVertical } from '../../components'
import { 
    Keyboard, 
    View, 
    TextInput, 
    TouchableWithoutFeedback,
    KeyboardAvoidingView,
} from 'react-native'


const LoginScreen = ({ navigation }) => {
    const [selectedValue, setSelectedValue] = React.useState("")

    const onLoginPress = () => {
        navigation.reset({
            index: 0,
            routes: [{ name: 'MainScreen' }],
        })
    }

    return (
        <KeyboardAvoidingView style={styles.containerView} behavior="padding">
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.loginScreenContainer}>
                    <View style={styles.loginFormView}>
                        <View style={styles.logoImage}>
                            <LogoVertical />
                        </View>
                        <View style={styles.inputGroup}>
                            <Picker
                                style={styles.inputSelect}
                                selectedValue={selectedValue}
                                mode={'dropdown'}
                                onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}>
                                    <Picker.Item label="Http" value="http://" />
                                    <Picker.Item label="Https" value="https://" />
                            </Picker>
                            <TextInput 
                                placeholder="example.com" 
                                placeholderColor="#c4c3cb" 
                                style={styles.input} />
                        </View>
                        <TextInput 
                            placeholder="Username" 
                            placeholderColor="#c4c3cb" 
                            style={styles.loginFormTextInput} />

                        <TextInput 
                            placeholder="Password" 
                            placeholderColor="#c4c3cb" 
                            style={styles.loginFormTextInput} 
                            secureTextEntry={true}/>
                        
                            <Button
                                buttonStyle={styles.loginButton}
                                onPress={onLoginPress }
                                title="Sign In" />                    
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    )
}



export default LoginScreen
