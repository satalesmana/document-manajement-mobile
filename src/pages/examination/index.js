import React,  { useEffect} from 'react'
import styles from './style'
import {lang} from '../../translations'
import axios from 'axios'
import { Imgpaper } from '../../assets' 
import { useSelector, useDispatch } from 'react-redux'
import SkeletonPlaceholder from "react-native-skeleton-placeholder";
import AwesomeAlert from 'react-native-awesome-alerts'
import { 
    Text,
    View,
    SafeAreaView,
    StatusBar,
    ScrollView,
    Image,
    BackHandler
} from 'react-native'
import{
    Appbar,
    ProgressBar, 
    Colors,
} from 'react-native-paper'
import { 
    CheckBox,
    Button
} from 'react-native-elements'

import {
    setExamp,
    deleteTask
} from '../../actions'

const ExaminationScreen = ({navigation,route}) => {
    const taskParam       = route.params
    let timerLeft       = taskParam.duration * 60
    var displayTimer;
    const [timerDisplay, setTimerDisplay] = React.useState(timerLeft)
    const [loading, setLoading] = React.useState(false)
    const [quizIndex, setQuizIndex] = React.useState(0)
    const [maxQuestion, setMaxQuestion] = React.useState(0)
    const { baseUrl }     = useSelector(state=>state.configReducer);
    const { token }       = useSelector(state=>state.accountReducer);
    const { exam }        = useSelector(state=>state.examReducer)
    const dispatch        = useDispatch()
    const [loadTask, setLoadTask] = React.useState(false)
    const [randQuizzes, setRandQuizzes] = React.useState([])
    const [userAnswer, setUserAnswer] = React.useState([])
    const [selectedAnsw, setSelectedAnsw] = React.useState(null)
    const [myprogres, setMyprogres] = React.useState(0.0)
    const [showalert, setShowalert] = React.useState(false)
    const [alertmessages, setAllertmessages] = React.useState('');

    axios.defaults.headers.common['Authorization'] = 'Bearer '+token;
    axios.defaults.headers.common['Accept'] = 'application/json';
    
    // var range = (start, end) => [...Array(end - start + 1)].map((_, i) => start + i);
    // var shuffle = (array) => {
    //     return array.sort(() => Math.random() - 0.5);
    // }

    const onLoadExamdata = () =>{
        setLoadTask(true)
        axios.get(baseUrl + "/api/task/exam/"+taskParam.id)
            .then(r=>{
                dispatch(setExamp(r.data))
                setRandQuizzes(r.data.quizzes)
                // let lengthQuiz = r.data.quizzes.length -1;
                // let arQuizList = range(0,lengthQuiz)
                // let rndQuizList= shuffle(arQuizList)
                // let UserQuizzes = []
                
                // //set random of quiz
                // for(let i=0; i <= lengthQuiz; i++){
                //     UserQuizzes.push(r.data.quizzes[rndQuizList[i]])
                // }

            }).catch(e=>{
                console.log(e)
            }).done(()=>{
                setLoadTask(false)
            })
    }

    const onSubmitAnswer = (quizIndex, answerIndex) =>{
        axios.post(baseUrl+'/api/task/submitExam/'+taskParam.id,{
            index:quizIndex,
            answer:answerIndex
        })
        .then(r=>{
            let progres = (quizIndex +1) / (randQuizzes.length)
            setMyprogres(progres)
        })
        
    }

    const onPresFinishQuiz = () =>{
        onSubmitAnswer(quizIndex, selectedAnsw)
        setAllertmessages(lang("acs_exam_dlgfinish"))
        setShowalert(true)
    }

    const onTimeisup = () =>{
        if(selectedAnsw != null)
            onSubmitAnswer(quizIndex, selectedAnsw)

        setAllertmessages(lang("acs_exam_dlgtimeup"))
        setShowalert(true)
    }

    const onConfirmdialog = () =>{
        setShowalert(false)
        axios.post(baseUrl+'/api/task/finishExam/'+taskParam.id)
        .then(r=>{
            dispatch(deleteTask(taskParam.id))
            navigation.navigate('MainScreen', { screen: 'MyTask' });
        })
        
    }

    const onPressNextQuiz = () =>{
        setSelectedAnsw(null)
        setQuizIndex(quizIndex +1)
        for(let i=0; i<= (quizIndex +1); i++){
            if((quizIndex+1) == i){
                setSelectedAnsw(userAnswer[i])
                onSubmitAnswer(quizIndex, selectedAnsw)
            }
        }

    }

    const onPressPrevQuiz = () =>{
        setSelectedAnsw(null)
        setQuizIndex(quizIndex - 1)
        for(let i=0; i<= (quizIndex +1); i++){
            if((quizIndex-1) == i)
                setSelectedAnsw(userAnswer[i])
        }

        let progres = (quizIndex) / (randQuizzes.length)
        setMyprogres(progres)
    }
    
    const onSetAnswer = (index) =>{
        setSelectedAnsw(index)
        let answerList = userAnswer;
        answerList[quizIndex]= index
        
        setUserAnswer(answerList)
    }
    
    const onBackAction = () => {
        //console.log(typeof(displayTimer))
        if(!loadTask){
            //if(typeof(displayTimer))
            clearInterval(displayTimer)
        }
    }

    const attachmentList = () =>{
        let attach = randQuizzes[quizIndex].attachments
        return( attach.map( (item,i) => { 
            return(<Image key={i} source={{uri:item}} 
                style={styles.imageAttachment}/>)
            } 
        ));
    }

    useEffect(() => {
        onLoadExamdata()

        const unsubscribe = navigation.addListener('blur', () => {
            clearInterval(displayTimer);
        });

        if(!loadTask){
            displayTimer = setInterval(()=>{
                if(timerLeft <= 1){
                    onTimeisup()
                    clearInterval(displayTimer);
                }
                timerLeft -= 1
    
                setTimerDisplay(timerLeft)
            }, 1000)
        }

        BackHandler.addEventListener("hardwareBackPress",onBackAction);
        return unsubscribe;

    },[navigation]);

    
    return (
        <SafeAreaView>
            <StatusBar translucent backgroundColor="transparent" barStyle="dark-light"/>
            <Appbar.Header style={styles.appbarLight}>
                <Appbar.Content title={lang("acs_exam_title")}/>
            </Appbar.Header>
            <ScrollView style={{marginBottom:90}}>
                <View style={styles.container}>
                    
                    <View style={styles.headerContainerSub}>
                        {
                            (loadTask) ? 
                                <SkeletonPlaceholder>
                                    <SkeletonPlaceholder.Item 
                                        width={80} 
                                        height={15} />
                                </SkeletonPlaceholder>
                            :
                            <Text style={styles.timerText}>Time left {timerDisplay} second</Text>
                        }
                            
                        {
                            (loadTask) ? 
                                <SkeletonPlaceholder>
                                    <SkeletonPlaceholder.Item 
                                        width={60} 
                                        height={15} />
                                </SkeletonPlaceholder>
                            : 
                                <Text style={styles.progresText}> {quizIndex + 1} / {randQuizzes.length} </Text>
                        
                        }
                    </View>
                    {
                        (!loadTask) ? 
                            <ProgressBar marginTop={6} progress={myprogres} color={Colors.blue800} />
                        : null
                    }
                </View>

                <View style={{marginTop:15}}>
                    <Image source={Imgpaper} style={styles.headerContentPaper}/>
                    <View style={styles.containerContent}>
                        <View style={{paddingLeft:15, paddingRight:15,}}>
                            <Text>{lang("acs_exam_question")}:</Text>
                            {
                                (loadTask) ? 
                                <SkeletonPlaceholder>
                                    <SkeletonPlaceholder.Item 
                                        width={350} 
                                        marginTop={6}
                                        height={15} />

                                    <SkeletonPlaceholder.Item 
                                        width={300}
                                        marginTop={6}
                                        height={15} />

                                    <SkeletonPlaceholder.Item 
                                        width={250}
                                        marginTop={6}
                                        height={15} />
                                </SkeletonPlaceholder> 
                                :
                                <View>
                                    {
                                        (randQuizzes.length > 0)?
                                            <Text>
                                                { randQuizzes[quizIndex].question}
                                            </Text>
                                        : null
                                    }
                                    
                                </View>
                            }
                            
                            {
                                (!loadTask) ?
                                    (randQuizzes.length > 0)?
                                        (randQuizzes[quizIndex].attachments.length > 0)?
                                            <View>
                                                { attachmentList() }
                                            </View>
                                        : null
                                    :null
                                :null
                            }

                            <Text style={{marginTop:15}}>{lang("acs_exam_answer")}:</Text>
                        </View>

                        {
                            (loadTask) ? 
                                <View style={{paddingLeft:10, paddingRight:10}}>
                                    <SkeletonPlaceholder>
                                        <SkeletonPlaceholder.Item 
                                            width={350} 
                                            marginTop={8}
                                            height={30} />
                                        <SkeletonPlaceholder.Item 
                                            width={350} 
                                            marginTop={8}
                                            height={30} />
                                        <SkeletonPlaceholder.Item 
                                            width={350} 
                                            marginTop={8}
                                            height={30} />
                                        <SkeletonPlaceholder.Item 
                                            width={350} 
                                            marginTop={8}
                                            height={30} />
                                    </SkeletonPlaceholder>
                                </View> 
                                : 
                                <View>
                                    {
                                        (randQuizzes.length > 0)? 
                                            randQuizzes[quizIndex].choices.map((item,index)=>(
                                                <CheckBox
                                                    key={index}
                                                    title={item}
                                                    //checked={(userAnswer[quizIndex] === index)?true:false}
                                                    checked={(selectedAnsw == index)?true:false}
                                                    onPress={()=>onSetAnswer(index)}
                                                    checkedIcon='dot-circle-o'
                                                    uncheckedIcon='circle-o'/>
                                            ))
                                        : null
                                    }
                                    
                                </View>
                        }
                        
                    </View>
                </View>

                <View style={styles.actionContainer}>
                    {(quizIndex == 0)? 
                        <Button
                            buttonStyle={styles.primaryBtn}
                            loading={loading}
                            disabled={(selectedAnsw !=null)?false:true}
                            onPress={ onPressNextQuiz }
                            title={lang("acs_exam_btnnext")} />
                        : null
                    }

                    {(quizIndex > 0)? 
                            <View style={styles.actionContainerGroup}>
                                <Button
                                    buttonStyle={styles.primaryBtnGroupLeft}
                                    loading={loading}
                                    onPress={ onPressPrevQuiz }
                                    title={ lang("acs_exam_btnprev") } />
                                {
                                    (quizIndex+1 == randQuizzes.length) ?
                                        <Button
                                            buttonStyle={styles.primaryBtnGroupRight}
                                            loading={loading}
                                            disabled={(selectedAnsw !=null)?false:true}
                                            onPress={ onPresFinishQuiz }
                                            title={lang("acs_exam_btnfinish")} />
                                    : 
                                        <Button
                                            buttonStyle={styles.primaryBtnGroupRight}
                                            loading={loading}
                                            disabled={(selectedAnsw !=null)?false:true}
                                            onPress={ onPressNextQuiz }
                                            title={lang("acs_exam_btnnext")} />
                                }
                                
                            </View>
                        :null
                    }
                    
                </View>

                <AwesomeAlert
                    show={showalert}
                    showProgress={false}
                    title={ lang("acs_taskd_info") }
                    message={alertmessages}
                    closeOnTouchOutside={false}
                    closeOnHardwareBackPress={ false }
                    
                    showConfirmButton={true}
                    confirmText="OK"
                    onConfirmPressed={onConfirmdialog}/>
                
            </ScrollView>
        </SafeAreaView>
    )
}

export default ExaminationScreen


