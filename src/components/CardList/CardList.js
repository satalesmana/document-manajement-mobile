import React from 'react'
import {
    View,
    Text,
    TouchableOpacity
} from 'react-native'
import styles from './style'
import {
    PictuteDemo
} from '../../assets'
import { Icon, Badge } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native';

const CardList = ({data={}}) => {
    const navigation = useNavigation();

    const onViewDocument = () =>{
        navigation.navigate('DocumentViewScreen')
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={onViewDocument}>
                <View style={styles.boxIcon}>
                    <Icon
                        name='file-text-o'
                        type='font-awesome'
                        iconStyle = {styles.iconDoc}
                        size={60}/>
                </View>
            </TouchableOpacity>
            <View style={styles.blockRight}>
                <View style={styles.gridContent}>
                    <Badge 
                        badgeStyle={styles.badges}
                        status="success" // primary, error
                        value={
                            <Text style={styles.badgeText}> {data.type_name} </Text>
                        } />

                    <Text 
                        style={styles.textNumber}
                        ellipsizeMode='tail' 
                        numberOfLines={1}>
                            {data.number}
                    </Text>
                </View>

                <TouchableOpacity
                 onPress={onViewDocument}>
                    <Text 
                        style={styles.textTitle}
                        ellipsizeMode='tail' 
                        numberOfLines={2}>
                            {data.title}
                    </Text>
                </TouchableOpacity>
                
                <View style={styles.gridContent}>
                    <View style={styles.gridContent}>
                        <Icon
                            name='files-o'
                            size={13}
                            iconStyle={styles.iconSub}
                            type='font-awesome'/>
                        <Text style={styles.textSub}>Ver. {data.version}</Text>
                    </View>
                    <View style={styles.gridContent}>
                        <Icon
                                name='building-o'
                                size={13}
                                iconStyle={styles.iconSub}
                                type='font-awesome'/>
                            <Text 
                                style={styles.textSub}
                                ellipsizeMode='tail' 
                                numberOfLines={1}>
                                    Owner. 
                                    { (data.owner) ?
                                        data.owner.name : ''
                                    }
                            </Text>
                    </View>
                </View>
                <Text 
                    style={styles.textCategory}
                    ellipsizeMode='tail' 
                    numberOfLines={1}>
                        {(data.categories) ? data.categories.join(', ') : ''}
                </Text>
            </View>
            
        </View>
    )
}

export default CardList
