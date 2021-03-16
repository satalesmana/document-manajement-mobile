import { StyleSheet, Dimensions } from 'react-native';

const windowHeight = Dimensions.get('window').height;
const windoWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    backround:{
        //height:windowHeight*0.29,
        paddingTop:30,
        paddingLeft:15,
        paddingRight:15,
        //marginTop:-35   
        flex: 1,
        resizeMode:"cover",
        justifyContent: "center",
    },
    title:{
        fontFamily:'Open Sans',
        fontSize:20,
        fontWeight:'bold',
        color:'#FFFFFF',
    },
    description:{
        fontFamily:'Open Sans',
        fontSize:14,
        color:'#FFFFFF',
    },
    grid:{
        flex: 2, 
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',

    },
    gridLeft:{
        width:windoWidth * 0.5,
    },
    gridRight:{
       width:windoWidth * 0.2,
    },
    arrowBack:{
        marginTop:10,
        marginBottom:20
    },
    avatarProfile:{
        marginTop:-30,
        marginLeft:10,
        borderWidth:5,
        borderColor:'#fff'
    },
    roudedContainer:{
        minHeight:windowHeight*0.4,
        borderBottomLeftRadius:10,
        borderBottomRightRadius:10,
    },
    containerCenter:{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    boxTask:{
        backgroundColor:'#fff',
        borderRadius:10,
        minHeight:70,
        marginLeft: (windoWidth * 0.1) -15,
        marginRight: (windoWidth * 0.1) -15,
        marginBottom:-30,
        backgroundColor:'white',
        shadowOffset:{
            width:0,
            height:1
        },
        shadowOpacity:0.29,
        shadowRadius:0.29,
        elevation:7,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    blockTask:{
        width:'30%',
        //borderWidth:1,
        alignItems: 'center',
    },
    textInfo:{
        color:'#7f8c8d',
        fontSize:12
    },
    textData:{
        fontSize: 16,
        fontFamily: 'Roboto-Regular',
        color: '#000',
    }
})

export default styles;