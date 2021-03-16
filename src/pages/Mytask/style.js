import {
    APP_PRIMARY,
    TEXT_PRIMARY
} from '../../utils'
import { 
    StyleSheet,
    Dimensions
} from 'react-native'

const styles = StyleSheet.create({
    appbarLight:{
        backgroundColor: 'white',
        paddingTop:20,
        height:78
    },
    bodyLightColor:{
        //backgroundColor: 'white',
        flex:1
    },
    avatarBlock:{
        marginLeft:15,
        marginRight:15
    },
    avatarBadge:{
        position: 'absolute', 
        top: -0.1, 
        right: -0.1 
    },
    toolbar: {
        backgroundColor:APP_PRIMARY,
        flexDirection:'column',
        paddingLeft:20,
        paddingTop:20,
        height:78
    },
    toolbarContainer:{
        flexDirection:'row', 
        paddingTop:15
    },
    animatedHeroContainer:{
        marginLeft:15, 
        marginTop: 35, 
        flexDirection:'row',
    },
    animatedHeroExpandText:{
        fontWeight:'bold',
        marginLeft:15,
        fontSize:17,
        color:'white',
        height:30,
    },
    animatedHero:{
        textAlign: 'center', 
        fontSize: 25, 
        color: 'black', 
        position: 'absolute', 
        bottom: 16, 
        marginLeft:15,
        marginRight:15,
        paddingBottom:30,
        color:'white',
    },
    containerContent:{
        marginLeft:15,
        marginRight:15,
        marginTop:15,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
        borderBottomRightRadius:10,
        borderBottomLeftRadius:10
    },
    headerContent:{
        width:'100%',
        height:20,
        resizeMode: 'cover',
    },
    horizontalLine:{
        marginTop:15, 
        marginBottom:15,  
        height: 1, 
        width: '100%', 
        borderRadius: 1, 
        borderWidth: 1, 
        borderColor: 'red', 
        borderStyle: 'dashed', 
        zIndex: 0
    },
    constainerItem:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingBottom:10,
    },
    containerData:{
        padding:15,
        backgroundColor:'white',
        borderBottomRightRadius:10,
        borderBottomLeftRadius:10,
    },
    textTitle:{
        textAlign:'center',
        fontSize:16,
        fontWeight:'bold'
    },
    textLabel:{

    },
    textValue:{
        color:TEXT_PRIMARY,
        fontWeight:'bold'
    },
    actionContainer:{
        marginLeft:30,
        marginRight:30,
        marginTop:15,
        minHeight:400
    },
    btnPrimary:{
        borderRadius: 20,
        height: 45,
        marginTop: 10,
        backgroundColor: 'blue'
    },
    contentDescription:{
        textAlign:'justify',
        fontFamily:'Roboto-Regular'
    }
})

export default styles;
