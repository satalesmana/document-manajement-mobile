import { 
    StyleSheet,
    Dimensions
} from 'react-native'
import { 
    BTN_PRIMARY,
    TEXT_PRIMARY,
    TEXT_SECONDARY,
    TEXT_ERROR
} from '../../utils'

const windowHeight = Dimensions.get('window').height;
const windoWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    containerView: {
        flex: 1,
    },
    container:{
        marginRight:15,
        marginLeft:15
    },
    imageBg: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
    },
    loginScreenContainer: {
        flex: 1,
        marginLeft:15,
        marginRight:15,
    },
    logoText: {
        fontSize: 40,
        fontWeight: "800",
        marginTop: 150,
        marginBottom: 30,
        textAlign: 'center',
    },
    loginFormView: {
        flex: 1
    },
    loginFormTextInput: {
        height: 43,
        fontSize: 14,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#eaeaea',
        backgroundColor: '#fafafa',
        paddingLeft: 10,
        marginTop: 5,
        marginBottom: 5,
    },
    loginFormTextInputError: {
        height: 43,
        fontSize: 14,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: TEXT_ERROR,
        backgroundColor: '#fafafa',
        paddingLeft: 10,
        marginTop: 5,
        marginBottom: 5,
    },
    loginButton: {
        borderRadius: 20,
        height: 45,
        marginTop: 10,
        backgroundColor: BTN_PRIMARY
    },
    configButton: {
        borderRadius: 20,
        height: 45,
        marginTop: 10,
        backgroundColor: TEXT_SECONDARY
    },
    cancelButton: {
        borderRadius: 20,
        height: 45,
        marginTop: 10,
        backgroundColor: TEXT_SECONDARY
    },
    logoImage: {
        justifyContent: 'center',
        marginTop: 150,
        alignItems: 'center',
    },
    inputGroup:{
        flexDirection:'row',
        borderWidth:1,
        borderBottomRightRadius:5,
        borderTopRightRadius:4,
        borderColor: '#eaeaea',
    },
    input:{
        height: 43,
        fontSize: 16,
        width: (windoWidth * 0.7) -25 ,
        backgroundColor: '#fafafa',
    },
    inputSelect:{
        borderWidth:1,
        width:100,
        height: 43,
        fontSize: 16,
        borderRadius: 5,
        borderColor: '#eaeaea',
        backgroundColor: '#fafafa'
    },
    containerCenter:{
        flex:1,
        justifyContent: 'center',
        padding:25,
    },
    headeing:{
        fontSize:24,
        alignSelf:'center',
        fontWeight:'bold',
        marginBottom:30,
        color:TEXT_PRIMARY
    },
    radioGroup:{
        flexDirection:'row',
        justifyContent:'flex-start'
    },
    radioItem:{
        flexDirection:'row',
        paddingLeft:15
    },
    labelRadio:{
        alignSelf:'center'
    },
    TextErr:{
        color: TEXT_ERROR,
        fontSize:11,
        fontStyle:'italic',
        marginBottom:5
    }
})

export default styles