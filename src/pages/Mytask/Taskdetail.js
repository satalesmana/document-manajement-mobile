import React, { useEffect} from 'react'
import styles from './style'
import { lang } from '../../translations'
import HTMLView from 'react-native-htmlview'
import axios from 'axios'
import AwesomeAlert from 'react-native-awesome-alerts'
import { useSelector, useDispatch } from 'react-redux'
import { 
    SafeAreaView,
    StatusBar,
    Text, 
    Animated,
    Dimensions,
    Platform,
    ScrollView,
    StyleSheet,
    TouchableOpacity,
    View,
    ImageBackground,
    Image
} from 'react-native'
import {
    IconArrowLeft,
    headerBg2,
    Imgpaper
} from '../../assets'
import { 
    Button,
    CheckBox
} from 'react-native-elements'
import {
    deleteTask
} from '../../actions'

const HEADER_EXPANDED_HEIGHT = 250;
const HEADER_COLLAPSED_HEIGHT = 70;
const HEADER_EXPANDED_HEIGHT_MARBOT = 70;
const SCREEN_WIDTH = Dimensions.get('window').width;

const TaskdetailScreen = ({navigation, route}) => {
    const task            = route.params;
    const dispatch        = useDispatch();
    const { token }       = useSelector(state=>state.accountReducer);
    const { baseUrl }     = useSelector(state=>state.configReducer);
    const [cheked, setChecked] = React.useState(false)
    const [loading, setLoading] = React.useState(false)
    const [showalert, onsetShowalert] = React.useState(false);
    const [alertmessages, onsetAllertmessages] = React.useState('');
    const state  = { scrollY: new Animated.Value(0) }
    const [isExamdialog, setExamdialog] = React.useState(false)

    axios.defaults.headers.common['Authorization'] = 'Bearer '+token;
    axios.defaults.headers.common['Accept'] = 'application/json';
    
    const headerMarbot = state.scrollY.interpolate({
        inputRange: [0, (-30) + 30],
        outputRange: [-50, 0],
        extrapolate: 'clamp'
    });

    const headerHeight = state.scrollY.interpolate({
        inputRange: [0, HEADER_EXPANDED_HEIGHT-HEADER_COLLAPSED_HEIGHT],
        outputRange: [HEADER_EXPANDED_HEIGHT, HEADER_COLLAPSED_HEIGHT],
        extrapolate: 'clamp'
    });
    
    const headerTitleOpacity = state.scrollY.interpolate({
        inputRange: [0, HEADER_EXPANDED_HEIGHT-HEADER_COLLAPSED_HEIGHT],
        outputRange: [0, 1],
        extrapolate: 'clamp'
    });

    const heroTitleOpacity = state.scrollY.interpolate({
        inputRange: [0, HEADER_EXPANDED_HEIGHT-HEADER_COLLAPSED_HEIGHT],
        outputRange: [1, 0],
        extrapolate: 'clamp'
    });

    const onBackPage = () =>{
        navigation.goBack()
    }

    const onSubmitAttestation = (task) =>{
        setLoading(true)
        setExamdialog(false)

        axios.post(baseUrl+'/api/task/attest/'+ task.id)
        .then(r=>{
            setLoading(false)
            onsetAllertmessages(r.data.message)
            dispatch(deleteTask(task.id))
            onsetShowalert(true)
        })
        .catch(e=>{
            let error = e.response.data
            setLoading(false)
            onsetAllertmessages(error.message)
            onsetShowalert(true)
        })
        .done(()=>{
            setLoading(false)
        })
    }

    const onStartExamination = (task) =>{
        onsetShowalert(true)
        setExamdialog(true)
        let info = lang("acs_taskd_examinfo")
                    .replace("__EXAM_MAXDURATION__", task.document.exam_max_duration)
        onsetAllertmessages(info)
    }

    const onConfirmdialog = () =>{
        onsetShowalert(false)
        if(isExamdialog){
            navigation.push("ExaminationScreen")
        }else
            navigation.goBack()
    }

    return (
        <SafeAreaView style={styles.bodyLightColor}>
            <StatusBar translucent backgroundColor="transparent" barStyle="dark-content"/>

            <Animated.View style={{ height : headerHeight, marginBottom:headerMarbot,}}>
                <ImageBackground source={headerBg2} style={{flex:1}}>
                    <Animated.View style={styles.animatedHeroContainer}>
                        <TouchableOpacity onPress={onBackPage}>
                            <IconArrowLeft style={styles.arrowBack}/>
                        </TouchableOpacity>
                        
                        <Animated.Text  
                            style={[styles.animatedHeroExpandText, {
                                width: SCREEN_WIDTH - 70,
                                opacity: headerTitleOpacity,
                            }]}
                            ellipsizeMode='tail' 
                            numberOfLines={1}>
                                {task.title}
                                
                        </Animated.Text>
                    </Animated.View>
            
                    <Animated.Text style={[styles.animatedHero,{opacity: heroTitleOpacity}]}>
                            {task.title}
                    </Animated.Text>
                </ImageBackground>
            </Animated.View>

            <ScrollView
                onScroll={
                    Animated.event(
                    [{ nativeEvent: {
                            contentOffset: {
                                y: state.scrollY
                            }
                        }
                    }],
                    {useNativeDriver: false}
                  )}
                scrollEventThrottle={16}>
                
                <View style={styles.containerContent}>
                    <Image source={Imgpaper} style={styles.headerContent}/>
                    <View style={styles.containerData}>
                        <Text style={styles.textTitle}>
                            {lang("acs_taskd_desc")}
                        </Text>
                        <Text style={styles.contentDescription}>
                            {task.description}
                        </Text>

                        <View style={styles.horizontalLine}/>

                        <View style={styles.constainerItem}>
                            <Text style={styles.textLabel}>{lang("acs_taskd_priority")}</Text>
                            <Text style={styles.textValue}>{task.priority_label}</Text>
                        </View>

                        <View style={styles.constainerItem}>
                            <Text style={styles.textLabel}>{lang("acs_taskd_duedate")}</Text>
                            <Text style={styles.textValue}>{task.due_date}</Text>
                        </View>

                        <View style={styles.constainerItem}>
                            <Text style={styles.textLabel}>{lang("acs_taskd_type")}</Text>
                            <Text style={styles.textValue}>{task.type_name}</Text>
                        </View>
                        
                        <View style={styles.horizontalLine}/>

                        {
                            (typeof(task.document.latest_version)  !== undefined && task.document.latest_version != null) ? 
                                <View>
                                    <Text style={styles.textTitle}>
                                        { lang("acs_taskd_documentlbl") }
                                    </Text>
                                    <HTMLView value={ task.document.latest_version.body }/>
                                </View>
                            : null
                        }
                        
                    </View>
                </View>

                <View style={styles.actionContainer}>
                    { (task.type != 3) ?
                        <CheckBox
                            title={lang("acs_taskd_cbkattestation")}
                            onPress={()=>{ setChecked(!cheked) }}
                            checked={cheked}/>
                        : null
                    }
                    
                    { (task.type == 3) ?
                        <Button
                            buttonStyle={styles.btnPrimary}
                            onPress={()=>{ onStartExamination(task) }}
                            title={lang("acs_taskd_btnexam")} />
                        : 
                        <View>
                            
                            <Button
                                buttonStyle={styles.btnPrimary}
                                loading={loading}
                                disabled={!cheked}
                                onPress={()=>onSubmitAttestation(task)}
                                title={lang("acs_taskd_btnattestation")} />
                        </View>
                    }
                </View>
            </ScrollView>

            <AwesomeAlert
                show={showalert}
                showProgress={false}
                title={ lang("acs_taskd_info") }
                message={alertmessages}
                closeOnTouchOutside={false}
                closeOnHardwareBackPress={ false }
                
                showConfirmButton={true}
                confirmText="OK"
                onConfirmPressed={onConfirmdialog}
                
                showCancelButton={(isExamdialog) ? true : false}
                cancelText={lang("acs_taskd_btncancel")}
                onCancelPressed={()=>{onsetShowalert(false)}}/>
        </SafeAreaView>
    )
}

export default TaskdetailScreen

