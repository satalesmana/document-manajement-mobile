import React from 'react'
import styles from './style'
import i18n from 'i18n-js';
import { ScrollView } from 'react-native-gesture-handler'
import { HeaderApp } from '../../components'
import { lang } from '../../translations'
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import { 
    Button, 
    Icon 
} from 'react-native-elements'
import {
    resetAccount
} from '../../actions'
import { 
    SafeAreaView, 
    StatusBar,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    LayoutAnimation
} from 'react-native'

const AccountScreen = ({navigation}) => {
    const dispatch        = useDispatch();
    const [expanded, setExpanded] = React.useState(false)
    const [refreshingBottom, setRefreshingBottom] = React.useState(false)
    const { baseUrl }     = useSelector(state=>state.configReducer);
    const { token }       = useSelector(state=>state.accountReducer);

    axios.defaults.headers.common['Authorization'] = 'Bearer '+token;
    axios.defaults.headers.common['Accept'] = 'application/json';

    const constRedirect = () => {
        
    }

    const onSignoutPress = () => {
        axios.post(baseUrl+"/api/logout")
        .then(r=>{
            dispatch(resetAccount())
            navigation.replace('LoginScreen')
        }).catch(e=>{
            dispatch(resetAccount())
            navigation.replace('LoginScreen')
        }).done(()=>{
            setRefreshingBottom(false);
        })
    }

    const onToggleExpand = () =>{
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        setExpanded(!expanded)
    }

    return (
        <View>
            <SafeAreaView>
                <ScrollView>
                    <StatusBar translucent backgroundColor="transparent" barStyle="dark-light"/>
                    <HeaderApp navigation={navigation} />

                    <View style={styles.contentView}>
                    <TouchableOpacity
                            onPress={ onToggleExpand }>
                            <View style={styles.cardInfo}>
                                    <View style={styles.blockLeft}>
                                        <Text style={styles.textTitile}>
                                            {lang("acn_changepas_header")}
                                        </Text>
                                        <Text 
                                            ellipsizeMode='tail'
                                            style={styles.textSecondary}
                                            numberOfLines={2}>
                                                {lang("acn_changepas_desc")} 
                                        </Text>
                                    </View>
                                <View style={styles.blockRight}>
                                    <Icon
                                        name={expanded ? 'chevron-down' : 'chevron-right' }
                                        type='font-awesome'
                                        color='#7f8c8d'/>
                                </View>
                            </View>
                        </TouchableOpacity>
                        {
                            expanded ? 
                                <View style={{
                                    padding:15,
                                    backgroundColor:'white',
                                    marginBottom:5
                                }}>
                                    <TextInput 
                                        placeholder={lang("acn_hint_oldpas")}
                                        placeholderColor="#c4c3cb" 
                                        style={styles.loginFormTextInput} 
                                        secureTextEntry={true}/>

                                    <TextInput 
                                        placeholder={lang("acn_hint_newpas")}
                                        placeholderColor="#c4c3cb" 
                                        style={styles.loginFormTextInput} 
                                        secureTextEntry={true}/>
                                    <Button
                                        buttonStyle={styles.loginButton}
                                        title={lang("acn_btn_changepas")} /> 
                                </View> 
                            : null
                        }

                        <View style={styles.cardInfo}>
                            <View style={styles.blockLeft}>
                                <Text style={styles.textTitile}>
                                    {lang("acn_lang_header")}
                                </Text>
                                <Text 
                                    ellipsizeMode='tail' 
                                    style={styles.textSecondary}
                                    numberOfLines={2}>
                                        {i18n.locale} -  {lang("acn_lang_desc")}
                                </Text>
                            </View>
                            <View style={styles.blockRight}>
                                <Icon
                                    name={'chevron-right' }
                                    type='font-awesome'
                                    color='#7f8c8d'/>
                            </View>
                        </View>

                        <TouchableOpacity
                            onPress={ onSignoutPress }>
                            <View style={styles.cardInfo}>
                                <View style={styles.blockLeft}>
                                    <Text style={styles.textTitile}>
                                       { lang("acn_header_signout") }
                                    </Text>
                                    <Text 
                                        ellipsizeMode='tail'
                                        style={styles.textSecondary} 
                                        numberOfLines={2}>
                                           {lang("acn_label_signout")}
                                    </Text>
                                </View>
                                <View style={styles.blockRight}>
                                    <Icon
                                        name={'chevron-right' }
                                        type='font-awesome'
                                        color='#7f8c8d'/>
                                </View>
                            </View>
                        </TouchableOpacity>
                    
                    </View>
                </ScrollView>
            </SafeAreaView>
        </View>
    )
}

export default AccountScreen
