import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomNavigator } from '../components/';
import { 
    HomeScreen,
    AccountScreen,
    SplashScreen, 
    SliderScreen,
    LoginScreen,
    FavouritesScreen,
    PublicScreen,
    RelatedScreen,
    MytaskScreen,
    DocumentViewScreen,
    SearchSelectiontScreen,
    SearchResultScreen
 } from '../pages';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const MainScreen = () => {
    return (
        <Tab.Navigator tabBar={props => <BottomNavigator {...props} />}>
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Favourites" component={FavouritesScreen} />
            <Tab.Screen name="Public" component={PublicScreen} />
            <Tab.Screen name="Related" component={RelatedScreen} />
            <Tab.Screen name="My Task" component={MytaskScreen} />
        </Tab.Navigator>
    )
}

const Router = () => {
    return (
        <Stack.Navigator initialRouteName="MainScreen">
            <Stack.Screen name="MainScreen" component={MainScreen}  options={{ headerShown:false }}/>
            <Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown:false }}/>
            <Stack.Screen name="SliderScreen" component={SliderScreen} options={{ headerShown:false }}/>
            <Stack.Screen name="LoginScreen" component={LoginScreen} options={{headerShown:false}} />
            <Stack.Screen name="AccountScreen" component={AccountScreen} options={{headerShown:false}} />
            <Stack.Screen name="DocumentViewScreen" component={DocumentViewScreen} options={{headerShown:false}}/>
            <Stack.Screen name="SearchSelectiontScreen" component={SearchSelectiontScreen} options={{headerShown:false}}/>
            <Stack.Screen name="SearchResultScreen" component={SearchResultScreen} options={{headerShown:false}}/>
        </Stack.Navigator>
    )
}

export default Router

const styles = StyleSheet.create({})
