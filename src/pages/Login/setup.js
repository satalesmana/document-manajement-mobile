import React from 'react'
import styles from './style'
import { RadioButton } from 'react-native-paper';
import { Button } from 'react-native-elements'
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios'
import AwesomeAlert from 'react-native-awesome-alerts'
import {
    APP_PRIMARY
} from '../../utils'
import { 
    TouchableWithoutFeedback,
    KeyboardAvoidingView,
    Text, 
    View,
    Keyboard, 
    TextInput,
    ScrollView,
    StatusBar,
    SafeAreaView
} from 'react-native'
import { 
    setForm, 
    clearConfigForm ,
    setBaseUrl
} from '../../actions'


const SetupScreen = ({navigation}) => {
    const { formModel } = useSelector(state=>state.configReducer)
    const dispatch = useDispatch();
    const [showalert, onsetShowalert] = React.useState(false);
    const [loading, onsetLoading] = React.useState(false);
    const [alertmessages, onsetAllertmessages] = React.useState('');
  
    const onCancel = () =>{
        dispatch(clearConfigForm())
        onsetLoading(false)
    }

    const onInputChange = (value, inputType) =>{
        dispatch(setForm(inputType,value))
    }


    const onSubmit = () =>{
        onsetLoading(true)
        
        dispatch(setBaseUrl(formModel))

        let prot_number = parseInt(formModel.port)
        let port        = isNaN(prot_number)  ? '':':' + formModel.port
        let url         = formModel.protokol+'://'+ formModel.domain + port
        
        axios.get(url)
            .then(r=>{
                navigation.replace( 'LoginScreen')
            })
            .catch(e =>{
                onsetAllertmessages(e.toString())
                onsetShowalert(true)
            })
            .done(d=>{
                onsetLoading(false)
            });
    }

    
    
    return (
        <ScrollView style={styles.containerView} >
            <StatusBar translucent backgroundColor="transparent" barStyle="dark-content"/>
            <SafeAreaView>
            <KeyboardAvoidingView 
                style={styles.containerView} 
                behavior="padding">
                    
                    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                        <View style={styles.containerCenter}>
                            <Text style={styles.headeing}>App Setup </Text>
                            <Text>Protokol : </Text>
                            <View style={styles.radioGroup}>
                                <View style={styles.radioItem}>
                                    <RadioButton
                                        value="http"
                                        status={ formModel.protokol === 'http' ? 'checked' : 'unchecked' }
                                        onPress={() =>onInputChange('http','protokol')} />
                                    <Text style={styles.labelRadio}>Http</Text>
                                </View>
                                <View style={styles.radioItem}>
                                    <RadioButton
                                        value="https"
                                        status={ formModel.protokol === 'https' ? 'checked' : 'unchecked' }
                                        onPress={ () => onInputChange('https','protokol')} />
                                        <Text style={styles.labelRadio}>Https</Text>
                                </View>
                            </View>
                            
                            <Text>Domain Name : </Text>
                            <TextInput 
                                placeholder="example.com" 
                                placeholderColor="#c4c3cb" 
                                value={formModel.domain}
                                onChangeText= {value =>onInputChange(value,'domain')}
                                style={styles.loginFormTextInput} />

                            <Text>Port : </Text>
                            <TextInput 
                                placeholder="8080" 
                                value={formModel.port}
                                placeholderColor="#c4c3cb" 
                                onChangeText= {value =>onInputChange(value,'port')}
                                style={styles.loginFormTextInput} />

                            <Button
                                buttonStyle={styles.loginButton}
                                onPress={onSubmit }
                                loading={loading}
                                title="Setup" />  
                            
                            <Button
                                buttonStyle={styles.cancelButton}
                                onPress={ onCancel }
                                title="Cancel" />  
                        </View>
                    </TouchableWithoutFeedback>

                    <AwesomeAlert
                        show={showalert}
                        showProgress={false}
                        title={ "Info"}
                        message={alertmessages}
                        closeOnTouchOutside={false}
                        closeOnHardwareBackPress={ false }
                        showConfirmButton={true}
                        confirmText="OK"
                        onConfirmPressed={()=>onsetShowalert(false)}/>
                    
            </KeyboardAvoidingView>
            </SafeAreaView>
        </ScrollView>
    )
}

export default SetupScreen

