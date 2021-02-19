import React from 'react'
import styles from './style'
import { 
    ImgHeaderBg, 
    IconArrowLeft,
    ImgSplahBg 
} from '../../assets'
import { Avatar, Icon } from 'react-native-elements';
import { 
    ImageBackground,
    Text, 
    View,
    TouchableOpacity
} from 'react-native'


const HeaderApp = ({navigation}) => {
    const onBackArrow = () =>{
        navigation.goBack()
    }

    return (
        <View style={styles.roudedContainer}>
            <ImageBackground 
                source={ImgHeaderBg} 
                style={styles.backround}
                imageStyle={styles.roudedContainer}>
                <TouchableOpacity onPress={onBackArrow}>
                    <IconArrowLeft style={styles.arrowBack}/>
                </TouchableOpacity>
                <View style={styles.containerCenter}>
                        <Avatar
                            containerStyle={styles.avatarProfile}
                            rounded
                            source={{
                                uri:'https://randomuser.me/api/portraits/men/41.jpg',
                            }}
                            size={75}/>
                        <Text style={styles.title}>Sata Lesmana</Text>
                        <Text style={styles.description}>lesmana@lamsolusi.com</Text>
                </View>
            </ImageBackground>
            <View style={styles.boxTask}>
                <View style={styles.blockTask}>
                    <Icon
                        name='bell'
                        type='font-awesome'
                        color='#f50'/>
                    <Text style={styles.textInfo}>Open</Text>
                    <Text style={styles.textData}>20 Task</Text>
                </View>
                <View style={styles.blockTask}>
                    <Icon
                        name='list-alt'
                        type='font-awesome'
                        color='#42f54b'/>
                    <Text style={styles.textInfo}>Close</Text>
                    <Text style={styles.textData}>20 Task</Text>
                </View>
                <View style={styles.blockTask}>
                    <Icon
                        name='folder-open'
                        type='font-awesome'
                        color='#0081DF'/>
                    <Text style={styles.textInfo}>All</Text>
                    <Text style={styles.textData}>40 Task</Text>
                </View>
            </View>
        </View>
    )
}

export default HeaderApp