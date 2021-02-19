import { 
    StyleSheet,
    Dimensions
} from 'react-native'
import { 
    APP_PRIMARY 
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
    loginButton: {
        borderRadius: 20,
        height: 45,
        marginTop: 10,
        backgroundColor: APP_PRIMARY
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
        // marginLeft: 15,
        // marginRight: 15,
    },
    input:{
        height: 43,
        fontSize: 16,
        width:windoWidth * 0.7,
        backgroundColor: '#fafafa',
        paddingLeft: 10
    },
    inputSelect:{
        borderWidth:1,
        width:80,
        height: 43,
        fontSize: 16,
        borderRadius: 5,
        borderColor: '#eaeaea',
        backgroundColor: '#fafafa'
    }
})

export default styles