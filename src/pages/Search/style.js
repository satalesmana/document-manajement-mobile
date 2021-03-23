import { 
    StyleSheet,
    Dimensions
} from 'react-native'
import {
    APP_PRIMARY,
    TEXT_PRIMARY,
    TEXT_SECONDARY,
    TEXT_ERROR
} from '../../utils'

const windowHeight = Dimensions.get('window').height;
const windoWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    appbarLight:{
        backgroundColor: 'white',
        height:78
    },
    container:{
        padding:20
    },
    input:{
        height: 43,
        fontSize: 16,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#eaeaea',
        backgroundColor: '#fafafa',
        paddingLeft: 10,
    },
    magin20:{
        marginTop: 15,
        marginBottom:10
    },
    inputContainerGroup:{
        //borderWidth:1,
        flexDirection:'row',
    },
    inputGroup:{
        width: (windoWidth * 0.7) -10,
        height: 43,
        fontSize: 16,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#eaeaea',
        backgroundColor: '#fafafa',
        paddingLeft: 10,
    },
    blockIcon:{
        borderLeftWidth:2,
        borderLeftColor:'#fafafa',
        backgroundColor:'#eaeaea',
        paddingLeft:9,
        paddingRight:5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    containerScrol:{
        paddingTop:15
    },
    containerSearch:{
        flex:2,
        flexDirection:'row',
        alignItems: 'center',
    },
    toolbar: {
        backgroundColor:APP_PRIMARY,
        flexDirection:'column',
        paddingLeft:20,
        paddingTop:20,
        height:78
    },
    searchSection: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#c7c8c9',
        //marginRight:13,
        borderRadius:15
    },
    searchIcon: {
        paddingLeft:10,
        paddingRight:10
        //padding: 10,
    },
    inputSearch: {
        flex: 1,
        paddingTop: 10,
        paddingRight: 10,
        //paddingBottom: 10,
        paddingLeft: 0,
        //color: '#424242',
        borderRadius:15
    },
    textTitleSearch:{
        color:TEXT_PRIMARY,
        fontWeight:'bold'
    },
    textTitleSearchDanger:{
        color:TEXT_ERROR,
        fontWeight:'bold'
    },
    searchContainer:{
        backgroundColor:'#fff',
        padding:15,
        flex:1
    },
    contanierHeader:{
        flexDirection:'row',
        marginTop:15,
        alignItems:'center',
        justifyContent:'space-between'
    },
    containerHistoryTitle:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:15
    },
    historyList:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:15
    }
})

export default styles