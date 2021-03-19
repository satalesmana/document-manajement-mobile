import{
    APP_PRIMARY,
    APP_SECONDARY,
    TEXT_LIGHT,
    TEXT_PRIMARY,
    TEXT_ERROR,
    TEXT_SECONDARY,
    BTN_PRIMARY,
    BTN_SENDONDARY,
    BTN_INFO
} from '../../utils'
import {
    StyleSheet,
    Dimensions
} from 'react-native'

const WINDOWIDTH = Dimensions.get("window").width;

const styles = StyleSheet.create({
    appbarLight:{
        backgroundColor:APP_PRIMARY,
        paddingTop:20,
        height:78
    },
    container:{
        padding:15,
        marginTop:15,
        backgroundColor:'white'
    },
    containerContent:{
        // paddingLeft:15,
        // paddingRight:15,
        paddingBottom:15,
        backgroundColor:'white'
    },
    headerContainerSub:{
        flexDirection:'row',
        justifyContent:'space-between'
    },
    headerContentPaper:{
        width:'100%',
        height:20,
        resizeMode: 'cover',
    },
    primaryBtn:{
        borderRadius: 20,
        height: 45,
        marginTop: 10,
        backgroundColor: BTN_INFO
    },
    primaryBtnGroupLeft:{
        borderRadius: 20,
        height: 45,
        width:"80%",
        backgroundColor: BTN_SENDONDARY
    },
    primaryBtnGroupRight:{
        borderRadius: 20,
        height: 45,
        width:(WINDOWIDTH - 100) / 2,
        backgroundColor: BTN_INFO
    },
    actionContainer:{
        paddingLeft:15, 
        paddingRight:15,
    },
    actionContainerGroup:{
        marginTop: 10,
        flexDirection:'row',
        justifyContent:'space-between',
        flex:2,
    },
    timerText:{
        fontWeight:'bold',
        color:TEXT_PRIMARY,
    },
    progresText:{
        fontWeight:'bold',
        color:TEXT_ERROR,
    }
})

export default styles