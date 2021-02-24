import { 
    StyleSheet,
    Dimensions
} from 'react-native'

const windowHeight = Dimensions.get('window').height;
const windoWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    appbarLight:{
        backgroundColor: 'white',
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
    }
})

export default styles