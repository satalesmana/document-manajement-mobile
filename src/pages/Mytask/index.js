import React from 'react'
import { Appbar } from 'react-native-paper';
import { Avatar, Badge } from 'react-native-elements'
import styles from './style'
import { TaskList } from '../../components'
import {
    TouchableOpacity,
    ScrollView, 
    SafeAreaView, 
    View, 
    Text,
    StatusBar
} from 'react-native'

const MytaskScreen = ({navigation}) => {
    const onViewProfile = () =>{
        navigation.navigate('AccountScreen')
    }

    return (
        <SafeAreaView style={styles.bodyLightColor}>
            <StatusBar translucent backgroundColor="transparent" barStyle="dark-content"/>
            <Appbar.Header dark={false} style={styles.appbarLight}>
                <Appbar.Content title="My Task"/>
                <View style={styles.avatarBlock}>
                        <Avatar
                            rounded
                            source={{
                                uri: 'https://randomuser.me/api/portraits/men/41.jpg'
                            }}
                            onPress={onViewProfile}
                            size="small"/>
                        <Badge
                            status="success"
                            containerStyle={styles.avatarBadge} />
                    </View>
            </Appbar.Header>

            <ScrollView>
                <TouchableOpacity>
                    <TaskList status={0}></TaskList>
                </TouchableOpacity>

                <TaskList status={1}></TaskList>
                <TaskList status={2}></TaskList>
                <TaskList status={3}></TaskList>
                <TaskList status={3}></TaskList>
            </ScrollView>
        </SafeAreaView>
    )
}

export default MytaskScreen
