import { StyleSheet, Dimensions } from 'react-native'

const styles = StyleSheet.create({
    appbarLight:{
        backgroundColor:'white'
    },
    cardInfo:{
        marginTop:15,
        marginBottom:15,
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
        color: '#000',
        fontWeight:'bold'
    },
    blockLeft:{
        width:'90%'
    },
    blockRight:{
        justifyContent:'center',
        width:'10%'
    },
    pdfContainer:{
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 25,
    },
})

export default styles