import React, { useEffect } from 'react'
import styles from './style'
import axios from 'axios'
import { lang } from '../../translations'
import { useSelector, useDispatch } from 'react-redux'
import { 
    BounceLeftComment,
    BounceRightComment
} from '../../components'
import { 
    Button,
} from 'react-native-elements';
import { 
    View,
    ScrollView,
    TextInput,
    RefreshControl
} from 'react-native'


const DocumentComment = ({data}) => {
    const { baseUrl }  = useSelector(state=>state.configReducer)
    const { token, user }    = useSelector(state=>state.accountReducer)
    const [ comments, setComments ] = React.useState([])
    const [ userComment, setUserComment] = React.useState("")
    const [refreshing, setRefreshing] = React.useState(false);

    axios.defaults.headers.common['Authorization'] = 'Bearer '+token;
    axios.defaults.headers.common['Accept'] = 'application/json';

    const onCommnetsLoad = () =>{
        setRefreshing(true)
        axios.get(baseUrl + '/api/comment',{
            params: {
                commentable_type:data.class_name,
                commentable_id:data.id,
            }
        }).then(r=>{
            setComments(r.data)
        }).catch(err=>{
            console.log("onCommnetsLoad",err)
        }).done(()=>{
            setRefreshing(false)
        })
    }

    const onSubmitComment = () =>{
        axios.post(baseUrl +"/api/comment",{
            commentable_type:data.class_name,
            commentable_id:data.id,
            body:userComment
        }).then(r=>{
            setUserComment("")
            onCommnetsLoad()
        }).catch(err=>{
            console.log("onSubmitComment",err)
        })
    }

    useEffect(() => {
        onCommnetsLoad()
    }, [])
    
    return (
        <View style={styles.commentContainer}>
            <ScrollView 
                style={styles.commentList}
                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={onCommnetsLoad}/>
                }>
                {
                    (comments.length > 0)?
                        comments.map((item,index)=>(
                            (user.id != item.user_id)?
                                <BounceLeftComment data={item} key={index}/>
                            :
                                <BounceRightComment data={item} key={index}/>
                        ))
                    :null
                }
                <View style={{height:50}}></View>
            </ScrollView>
            
            <View style={styles.boxCommentInput}>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.textInput}
                        multiline = {true}
                        value={userComment}
                        onChangeText={text=>setUserComment(text)}
                        placeholder={lang("acm_input_comment")}
                        underlineColorAndroid="transparent"/>
                </View>

                <Button
                    buttonStyle={styles.buttonComment}
                    onPress={onSubmitComment}
                    title={lang("acm_btn_comment")} />
            </View>
        </View>
        
    )
}

export default DocumentComment
