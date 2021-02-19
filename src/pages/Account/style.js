import { 
    StyleSheet,
    Dimensions
} from 'react-native'

const windowHeight = Dimensions.get('window').height;
const windoWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    contentView:{
        marginTop:55,
        marginLeft: (windoWidth * 0.1) -15,
        marginRight: (windoWidth * 0.1) -15,
    },
    loginButton:{
        backgroundColor: '#3897f1',
        borderRadius: 5,
        height: 45,
        marginTop: 10,
        marginLeft: 15,
        marginRight: 15,
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
    signOutButton: {
        height: 45,
        marginTop: 10,
        marginLeft: 15,
        marginRight: 15,
    },
    pasBoxText:{
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:20,
        marginBottom:10
    },
    pasText:{
        fontSize: 16,
        fontFamily: 'Roboto-Regular',
        color: '#000',
    }
})
export default styles