
import React from 'react'
import styles from './style'
import { Appbar } from 'react-native-paper'
import { Picker } from '@react-native-picker/picker'
import { useSelector } from 'react-redux'
import { 
    TEXT_SECONDARY
} from '../../utils'
import {
    View,
    Text,
    TouchableOpacity
} from 'react-native'
import { 
    Icon, 
    Badge, 
    Avatar 
} from 'react-native-elements'

const SearchHeader = ({placeHolder, navigation, onSetSortData}) => { 
    const { user } = useSelector(state=>state.accountReducer)
    const avatarUser = (user.profile_photo_url) ? user.profile_photo_url : 'https://randomuser.me/api/portraits/men/41.jpg'
    const [selectedValue, setSelectedValue] = React.useState("title|asc");

    const onIconSearchPress = () =>{ navigation.navigate("SearchSelectiontScreen") }

    const onViewProfile = () =>{ navigation.navigate("AccountScreen") }

    const onSortData = (value) =>{
        onSetSortData(value)
        setSelectedValue(value)
    }

    return (
        <View>  
            <Appbar.Header style={styles.toolbar}>
                <View style={styles.container}>
                    <TouchableOpacity 
                        style={styles.searchColor }
                        onPress={ onIconSearchPress } >
                        <Icon
                            name='search'
                            type='font-awesome'
                            iconStyle={styles.iconSearch}
                            onPress={ onIconSearchPress } />
                        <Text style={styles.btnText}>{placeHolder}</Text>
                    </TouchableOpacity>
                    <View style={styles.avatarBlock}>
                        <Avatar
                            rounded
                            source={{
                                uri: avatarUser
                            }}
                            onPress={onViewProfile}
                            size="small"/>
                        <Badge
                            status="success"
                            containerStyle={styles.avatarBadge} />
                    </View>
                </View>
            </Appbar.Header>
            <Appbar.Header style={styles.toolbarSub}>
                
                <Icon
                    name='sort-amount-desc'
                    type='font-awesome'
                    color={TEXT_SECONDARY} />
                <Picker
                    style={styles.inputSelect}
                    selectedValue={selectedValue}
                    onValueChange={(itemValue, itemIndex) => onSortData(itemValue)}>
                        <Picker.Item label="Effective Date (ASC)" value="effective_date|asc" />
                        <Picker.Item label="Effective Date (DESC)" value="effective_date|desc" />
                        <Picker.Item label="Document Number (ASC)" value="number|asc" />
                        <Picker.Item label="Document Number (DESC)" value="number|desc" />
                        <Picker.Item label="Document Name (ASC)" value="title|asc" />
                        <Picker.Item label="Document Name (DESC)" value="title|desc" />
                </Picker>
                
            </Appbar.Header>
            
        </View>
        
    )
}

export default SearchHeader
