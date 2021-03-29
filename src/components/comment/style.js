import { StyleSheet, Dimensions } from 'react-native';

const windowHeight = Dimensions.get('window').height;
const windoWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    containerComment:{
        flexDirection:'row',
        marginTop:10,
        marginRight:30,
    },
    containerCommentRight:{
        flexDirection:'row',
        marginTop:10,
        marginLeft:50,
        justifyContent:'flex-end'
    },
    titleComment:{
        paddingLeft:8,
        marginBottom:3,
        color:'#128643',
        fontWeight:'bold',
        fontSize:16
    },
    titleCommentRight:{
        paddingRight:8,
        marginBottom:3,
        color:'#128643',
        fontWeight:'bold',
        fontSize:16,
        textAlign:'right'
    },
    bounceCommentLeft:{
        borderWidth:1,
        marginLeft:10,
        marginRight:15,
        padding:8,
        backgroundColor:'#deffd1',
        borderTopRightRadius:20,
        borderBottomRightRadius:20,
        borderBottomLeftRadius:20,
        borderColor:'#33b500'
    },
    bouceCommentRight:{
        borderWidth:1,
        marginLeft:10,
        marginRight:8,
        padding:8,
        backgroundColor:'#c7f8ff',
        borderTopLeftRadius:20,
        borderBottomRightRadius:20,
        borderBottomLeftRadius:20,
        borderColor:'#91f1ff'
    },dateCommentLeft:{
        textAlign:'right',
        marginRight:20,
        color:'#969696',
        fontStyle:'italic',
    },
    dateCommentRight:{
        paddingLeft:8,
        textAlign:'left',
        color:'#969696',
        fontStyle:'italic'
    }
})

export default styles