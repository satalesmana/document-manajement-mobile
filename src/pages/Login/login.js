import React from 'react'
import styles from './style'
import { Button } from 'react-native-elements'
import { LogoVertical } from '../../components'
import { useSelector, useDispatch } from 'react-redux'
import { setAccount } from '../../actions'
import { lang } from '../../translations'
import { TEXT_INPUT_HINT } from '../../utils'
import axios from 'axios'
import { 
    Keyboard, 
    View, 
    TextInput, 
    TouchableWithoutFeedback,
    KeyboardAvoidingView,
    Text,
    Platform,
    StatusBar,
    SafeAreaView
} from 'react-native'


const LoginScreen = ({ navigation }) => {
    const [username, setUsername] = React.useState('');
    const [password, setPasswrod] = React.useState('');
    const [ermsg, setErmsg]       = React.useState({});
    const [loading, onsetLoading] = React.useState(false);
    const dispatch                = useDispatch();
    const { baseUrl }             = useSelector(state=>state.configReducer);

    const onLoginPress = () => {
        onsetLoading(true)
        axios.post(baseUrl+'/api/token',{
            email:username, 
            password:password,
            device_name:  Platform.OS
        }).then(r=>{
            onsetLoading(false)
            setErmsg({})
            dispatch(setAccount(r.data))
            navigation.replace( 'MainScreen')
        })
        .catch(e=>{
            onsetLoading(false)
            setErmsg(e.response.data.errors)
        });
    }

    return (
        <SafeAreaView style={styles.containerView}>
            <StatusBar translucent backgroundColor="transparent" barStyle="dark-content"/>
        
            <KeyboardAvoidingView style={styles.containerView} behavior="padding">
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={styles.loginScreenContainer}>
                        <View style={styles.loginFormView}>
                            <View style={styles.logoImage}>
                                <LogoVertical />
                            </View>
                            {/* <Text>{baseUrl}</Text> */}
                            <TextInput 
                                placeholder="Email" 
                                placeholderColor= {TEXT_INPUT_HINT}
                                value={username}
                                onChangeText= {value =>setUsername(value)} 
                                style={ ermsg.email ? styles.loginFormTextInputError : styles.loginFormTextInput} />
                            { ermsg.email ? <Text style={styles.TextErr}>{ ermsg.email[0] }</Text>: null }

                            <TextInput 
                                placeholder="Password" 
                                placeholderColor={TEXT_INPUT_HINT} 
                                value={password}
                                onChangeText= {value =>setPasswrod(value)} 
                                style={ ermsg.password ? styles.loginFormTextInputError : styles.loginFormTextInput}
                                secureTextEntry={true}/>
                            { ermsg.password ? <Text style={styles.TextErr}>{ ermsg.password[0] }</Text>: null }
                            
                            <Button
                                buttonStyle={styles.loginButton}
                                loading={loading}
                                onPress={ onLoginPress }
                                title={lang("lbl_lgs_loginbtn")} />
                            
                            <Button buttonStyle={styles.configButton} 
                            onPress={()=>navigation.push("SetupScreen")}
                            title={lang("lbl_lgs_configurebtn")}/>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}



export default LoginScreen
