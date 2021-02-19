import { 
    StyleSheet,
    Dimensions
} from 'react-native';
import {
    TEXT_SECONDARY,
    APP_PRIMARY,
    APP_SECONDARY,
    FONT_FAMILY_PRIMARY,
    TEXT_LIGHT
} from '../../utils'
const WindwoWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
    container:{
        flex:2,
        flexDirection:'row',
        alignItems: 'center',
    },
    toolbar: {
        backgroundColor:APP_PRIMARY,
        flexDirection:'column',
        paddingLeft:20,
    },
    toolbarSub:{
        backgroundColor: 'white',
        flexDirection:'row',
        paddingLeft:20,
        height:45,
    },
    searchbar:{
        flexDirection: 'row',
        height: 50,
        alignItems: 'center'
    },
    inputFilter:{
        position:'absolute',
    },
    btnText:{
        fontSize: 16,
        fontFamily: FONT_FAMILY_PRIMARY,
        color: TEXT_LIGHT,
        paddingHorizontal:20
    },
    iconSearch:{
        color: TEXT_LIGHT,
    },
    searchColor:{
        backgroundColor:APP_SECONDARY,
        flex:2,
        flexDirection:'row',
        borderRadius:5,
        padding:5,
    },
    avatarBadge:{ 
        position: 'absolute', 
        top: -0.1, 
        right: -0.1 
    },
    avatarBlock:{
        marginLeft:15,
        marginRight:15
    },
    inputSelect:{
        width:WindwoWidth - 60,
        color:TEXT_SECONDARY
    }
})

export default styles;