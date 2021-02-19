
import React from 'react'
import styles from './style'
import { Appbar } from 'react-native-paper'
import { Picker } from '@react-native-picker/picker'
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

const SearchHeader = ({placeHolder, navigation}) => { 
    const [selectedValue, setSelectedValue] = React.useState("Http");
    const onIconSearchPress = () =>{
        navigation.navigate("SearchSelectiontScreen")
    }

    const onViewProfile = () =>{
        navigation.navigate("AccountScreen")
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
                                uri: 'https://randomuser.me/api/portraits/men/41.jpg'
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
                    onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}>
                        <Picker.Item label="Effective Date (ASC)" value="http://" />
                        <Picker.Item label="Effective Date (DSC)" value="https://" />
                        <Picker.Item label="Document Number (ASC)" value="https://" />
                        <Picker.Item label="Document Number (DSC)" value="https://" />
                </Picker>
                
            </Appbar.Header>
            
        </View>
        
    )
}

export default SearchHeader
