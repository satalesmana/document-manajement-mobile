import React, { useEffect } from 'react'
import AppIntroSlider from 'react-native-app-intro-slider'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ImageSlider from '../../components/ImageSlider'
import {
    APP_PRIMARY,
    APP_SECONDARY,
    TEXT_PRIMARY,
    TEXT_SECONDARY,
    TEXT_LIGHT,
    FONT_FAMILY_PRIMARY
} from '../../utils'
import { 
    StyleSheet, 
    Text, 
    View, 
    StatusBar, 
    SafeAreaView, 
    Dimensions 
} from 'react-native'

const slides = [
    {
        key: 'slide_one',
        title: 'What is PowerDoc?',
        text: 'loremp ipsum loremp ipsum loremp ipsum loremp ipsum loremp ipsum',
        backgroundColor: '#59b2ab',
    },
    {
        key: 'slide_two',
        title: 'What they can do?',
        text: 'loremp ipsum loremp ipsum loremp ipsum loremp ipsum loremp ipsum',
        backgroundColor: '#59b2ab',
    }
];

const windowWidth = Dimensions.get('window').width;

const SliderScreen = ({ navigation }) => {

    renderNextButton = () => {
        return (
            <View style={styles.btnArea}>
                <View style={styles.btnStyle}>
                    <Text style={styles.btnText}>Next</Text>
                </View>
            </View>
        )
    }

    renderDoneButton = () =>{
        return (
            <View style={styles.btnArea}>
                <View style={styles.btnStyle}>
                    <Text style={styles.btnText}>Finish</Text>
                </View>
            </View>
        )
    }

    renderItem = ({ item }) =>(
        <View style={styles.slide}>
            <ImageSlider style={styles.avatarImage} title={item.key}></ImageSlider>
            <View style={styles.slideText}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.text}>{item.text}</Text>
            </View>
        </View>
    )

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar translucent backgroundColor="transparent" barStyle="dark-content"/>
            
            <AppIntroSlider
                data={slides}
                activeDotStyle={styles.activeDotStyle}
                dotStyle={styles.dotStyle} 
                bottomButton
                renderItem={renderItem}
                renderNextButton={renderNextButton}
                renderDoneButton={renderDoneButton}
                onDone={() => navigation.replace('SetupScreen')}
                />
        </SafeAreaView>
    )
}

export default SliderScreen 

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white'
    },
    slide:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',  
    },
    avatarImage:{
        width:30,
        height:30
    },
    activeDotStyle:{
        backgroundColor:APP_PRIMARY
    },
    dotStyle:{
        backgroundColor:APP_SECONDARY
    },
    title:{
        fontFamily:FONT_FAMILY_PRIMARY,
        fontSize:22,
        fontWeight:'bold',
        color:TEXT_PRIMARY,
        textAlign:'center'
    },
    slideText:{
        width:windowWidth * 0.8,
        alignContent:'center'
    },
    text:{
        textAlign:'center',
        color:TEXT_SECONDARY
    },
    btnStyle:{
        borderRadius:30,
        width: windowWidth * 0.6,
        height: 40,
        backgroundColor: APP_PRIMARY,
        justifyContent: 'center',
        alignItems: 'center',
    },
    btnText:{
        color:TEXT_LIGHT,
    },
    btnArea:{
        width: windowWidth*0.9,
        justifyContent: 'center',
        alignItems: 'center',
    }
})
