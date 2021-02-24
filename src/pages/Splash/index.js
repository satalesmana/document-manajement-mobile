import React, { useEffect }from 'react'
import { View } from 'react-native';
import { useSelector } from 'react-redux'
import { 
    ImgLogo,
    ImgSplahBg 
} from '../../assets'
import { 
    Image, 
    StyleSheet, 
    StatusBar, 
    SafeAreaView,
    ImageBackground
} from 'react-native'

const SplashScreen = ({ navigation }) => {
    const { baseUrl } = useSelector(state=>state.configReducer)
    const { token } = useSelector(state=>state.accountReducer)
    
    useEffect(() => {
        setTimeout( () => {
            
            if(baseUrl.length == 0){
                navigation.replace('SliderScreen');

            }else if(baseUrl.length > 0 && token ==''){
                navigation.replace('LoginScreen');

            }else if(token !=''){
                navigation.replace('MainScreen');
            }else{
                navigation.replace('SliderScreen');
            }
            
        }, 3000)
    }, [navigation]);

    
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar 
                translucent 
                backgroundColor="transparent" 
                barStyle="dark-light"/>

            <ImageBackground 
                source={ImgSplahBg} 
                style={styles.backround}>
                <View style={styles.backround}>
                    <Image
                        source={ImgLogo}
                        style={styles.logo}/>
                </View>
            </ImageBackground>
        </SafeAreaView>
    )
}

export default SplashScreen

const styles = StyleSheet.create({
    backround:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo:{
        resizeMode: 'center',
        marginBottom: -50,
        width: 200
    },
    container:{
        flex:1,
        backgroundColor:'#0f2e04'
    },
    title:{
        fontFamily:'Open Sans',
        fontSize:22,
        fontWeight:'bold',
        color:'#FFFFFF',
        textAlign:'center'
    },
    text:{
        textAlign:'center',
        color:'#FFFFFF',
    },
})
