
import React from 'react'
import styles from './style'
import { Appbar } from 'react-native-paper'
import { Picker } from '@react-native-picker/picker'
import { useSelector } from 'react-redux'
import { AvatarDefault } from '../../assets'
import { lang } from '../../translations'
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

const SearchHeader = ({placeHolder, navigation, onSetSortData, documentmode}) => { 
    
    const { user } = useSelector(state=>state.accountReducer)
    const avatarUser = (user.profile_photo_url) ? {uri:user.profile_photo_url} : AvatarDefault
    const [selectedValue, setSelectedValue] = React.useState("title|asc");

    const onIconSearchPress = () =>{ navigation.navigate("SearchSelectiontScreen", {documentmode:documentmode}) }

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
                            source={avatarUser}
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
                        {/* <Picker.Item label={lang("acs_sort_asc_effdate")} value="effective_date|asc" />
                        <Picker.Item label={lang("acs_sort_dsc_effdate")} value="effective_date|desc" /> */}
                        {/* <Picker.Item label={lang("acs_sort_asc_docnum")}  value="number|asc" />
                        <Picker.Item label={lang("acs_sort_dsc_docnum")} value="number|desc" /> */}
                        <Picker.Item label={lang("acs_sort_asc_docname")} value="title|asc" />
                        <Picker.Item label={lang("acs_sort_dsc_docname")} value="title|desc" />
                </Picker>
                
            </Appbar.Header>
            
        </View>
        
    )
}

export default SearchHeader
