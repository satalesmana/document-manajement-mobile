import { StyleSheet, Dimensions } from 'react-native'
import {
    TEXT_INPUT_HINT,
    TEXT_PRIMARY,
    TEXT_SECONDARY,
    APP_PRIMARY,
} from '../../utils'

const windowHeight = Dimensions.get("window").height;
const windoWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
    appbarLight:{
        backgroundColor:APP_PRIMARY,
        paddingTop:20,
        height:78
    },
    bgLight:{
        backgroundColor:'white'
    },
    cardInfo:{
        marginBottom:5,
        backgroundColor:'#fff',
        paddingLeft:20,
        paddingRight:20,
        paddingTop:10,
        paddingBottom:10,
        flexDirection:'row',
    },
    textTitile:{
        fontSize: 16,
        fontFamily: 'Roboto-Regular',
        color: TEXT_PRIMARY,
        fontWeight:'bold',
    },
    blockLeft:{
        width:'90%'
    },
    blockRight:{
        justifyContent:'center',
        width:'10%'
    },
    DocumentContainer:{
        //padding:15,
        marginTop:15,
        minHeight: windowHeight - 150,
        // paddingLeft:10,
        // paddingRight:10,
        
        //backgroundColor:'#80848a'
    },
    headerContent:{
        width:'100%',
        height:20,
        resizeMode: 'cover',
    },
    containerContent:{
        padding:15,
    },
    containerItem:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:15,
        paddingBottom:10,
        borderBottomWidth:1,
        borderColor:TEXT_PRIMARY
    },
    containerItemData:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:10,
    },
    textLabel:{
        fontWeight:'bold',
        color:TEXT_SECONDARY
    },
    textValue:{
        fontWeight:'bold',
        color:TEXT_PRIMARY
    },
    docScreen:{
        height:windowHeight - 30,
        backgroundColor:'white'
    },
    roudedContainer:{
        minHeight:windowHeight*0.4,
        borderBottomLeftRadius:20,
        borderBottomRightRadius:20,
        
    },
    backround:{
        paddingTop:30,
        paddingLeft:15,
        paddingRight:15, 
        flex: 1,
        resizeMode:"cover",
    },
    arrowBack:{
        marginTop:10,
        marginBottom:20
    },
    containerCenter:{
        flexDirection: 'column',
        justifyContent: 'center',
        //alignItems: 'center',
    },
    textTitle:{
        fontSize:24,
        color:'white',
        fontWeight:'bold'
    },
    textSubTitle:{
        color:'white'
    },
    boxTask:{
        backgroundColor:'#fff',
        marginTop:-60,
        borderRadius:10,
        minHeight:120,
        marginLeft:15,
        marginRight:15, 
        shadowOffset:{
            width:0,
            height:1
        },
        shadowOpacity:0.29,
        shadowRadius:0.29,
        elevation:7,
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom:10
    },
    blockTask:{
        padding:5
    },
    imgAvatar:{
        width: '100%',
        height: 120,
    },
    docOwnerLabel:{
        fontWeight:'bold',
        textAlign:'center',
        color: TEXT_INPUT_HINT
    },
    docOwnerName:{
        marginTop:6,
        color:TEXT_PRIMARY,
        fontWeight:'bold',
        fontSize:16,
    },
    docOwnerSubName:{
        color:TEXT_SECONDARY
    },
    column:{
        flexDirection:'row',
        marginTop:5,
        alignItems:'center'
    },
    containerData:{
        padding:15
    },
    textLabelData:{
        color:TEXT_PRIMARY
    },
    textLabelValue:{
        color:TEXT_PRIMARY,
        fontWeight:'bold',
        fontSize:16
    },
    expandBox:{
        backgroundColor:'white', 
        paddingLeft:20, 
        paddingRight:20,
        paddingBottom:15
    },
    inputSelect:{
        width:windoWidth - 250,
        color:TEXT_PRIMARY,
    },
    cardInfoVersion:{
        marginBottom:5,
        backgroundColor:'#fff',
        paddingLeft:20,
        paddingRight:20,
        paddingTop:10,
        //paddingBottom:10,
        flexDirection:'row',
        justifyContent:'space-between'
    }
})

export default styles