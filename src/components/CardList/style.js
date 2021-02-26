import { StyleSheet, Dimensions } from 'react-native';

export const FULL_HEIGHT = Dimensions.get('window').height;
export const FULL_WIDTH = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container: {
        padding: 8,
        margin:10,
        backgroundColor: 'white',
        flexDirection: 'row',
        borderRadius: 5,
        shadowColor: '#000',
    },
    containerTask:{
        margin:10,
        shadowColor: '#000',
        backgroundColor: '#EAF4FE',
        height:90,
        borderRadius:50,
        paddingLeft:4,
        paddingRight:15,
        flexDirection: 'row',
    },
    boxIcon :{
        marginTop:-20,
        shadowColor:'#000',
        borderRadius: 3,
        borderColor:'#000',
        width:70,
        height:70,
        paddingTop:5,
    },
    boxBgPrimary:{
        backgroundColor:'#517fa4'
    },
    boxBgSecondary:{
        backgroundColor:'#2b9955'
    },
    iconDoc:{
        color:'#fff',
    },
    textNumber:{
        fontSize: 12,
        fontFamily: 'Roboto-Regular',
        fontWeight:'bold'
    },
    textTitle:{
        fontSize: 14,
        marginTop:5,
        marginBottom:5,
        fontFamily: 'Roboto-Regular',
        fontWeight:'bold',
        color:'#517fa4',
    },
    blockRight:{
        paddingLeft:10,
        width:FULL_WIDTH * 0.70
    },
    badges:{
        padding:5,
        marginRight:5,
    },
    badgeText:{
        fontStyle:'italic',
        color:'#fff'
    },
    gridContent:{
        flex:2,
        flexDirection: 'row',
    },
    gridContentTask:{
        flexDirection: 'row',
    },
    textSub:{
        fontSize: 12,
        fontFamily: 'Roboto-Regular',
    },
    iconSub:{
        color:'#517fa4',
        marginRight:5
    },
    textCategory:{
        fontFamily: 'Roboto-Regular',
        fontStyle:'italic',
        fontSize: 12,
        color:'#517fa4',
    },
    blockLeft:{
        width:'23%',
        //borderWidth:1
    },
    blockRightTask:{
        width:'77%',
        //borderWidth:1
    },
    textSubDesc:{
        fontSize: 12,
        fontFamily: 'Roboto-Regular'
    }
})

export default styles;