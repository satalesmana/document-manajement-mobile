import React from 'react'
import styles from './style'
import {
    headerBg2,
    IconArrowLeft
} from '../../assets'
import { 
    StyleSheet, 
    Text, 
    View,
    SafeAreaView,
    ScrollView,
    StatusBar,
    ImageBackground,
    TouchableOpacity,
    Image,
} from 'react-native'
import {
    TEXT_INPUT_HINT,
    TEXT_PRIMARY,
    TEXT_SECONDARY
} from '../../utils'

import { Icon } from 'react-native-elements'


const DocumentMetaScreen = ({navigation, route}) => {
    const metadata = route.params;
    const onBackPage = () =>{
        navigation.goBack()
    }


    return (
        <SafeAreaView style={{backgroundColor:'white'}}>
            <ScrollView>
                <StatusBar translucent backgroundColor="transparent" barStyle="dark-light"/>
                <View style={styles.roudedContainer}>
                    <ImageBackground 
                        source={headerBg2} 
                        style={styles.backround}
                        imageStyle={styles.roudedContainer}>
                            <TouchableOpacity onPress={onBackPage}>
                                <IconArrowLeft style={styles.arrowBack}/>
                            </TouchableOpacity>

                            <View style={styles.containerCenter}>
                                <Text style={styles.textTitle}>{metadata.title}</Text>
                                <Text style={styles.textSubTitle}>No. {metadata.number}</Text>
                            </View>
                    </ImageBackground>
                </View>
                <View style={styles.boxTask}>
                    <View style={[styles.blockTask,{width:'40%'}]}>
                        <Image 
                            style={styles.imgAvatar}
                            resizeMode='cover'
                            source={
                                { uri: metadata.owner.profile_photo_url}
                            } />
                    </View>

                    <View style={[styles.blockTask,{width:'60%'}]}>
                        <Text style={styles.docOwnerLabel}>DOCUMENT OWNER</Text>
                        <Text style={styles.docOwnerName}> {metadata.owner.name} </Text>
                        <View style={styles.column}>
                            <Icon 
                                name='envelope-o'
                                type='font-awesome'
                                color={TEXT_PRIMARY}
                                size={12}/>
                            <Text style={styles.docOwnerSubName}> {metadata.owner.email}</Text>
                        </View>

                        <View style={styles.column}>
                            <Icon 
                                name='building-o'
                                type='font-awesome'
                                color={TEXT_PRIMARY}
                                size={12}/>
                            <Text style={styles.docOwnerSubName}> {metadata.owner.position}</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.containerData}>
                    <View style={styles.containerItem}>
                        <Text style={styles.textLabel}>DESCRIPTION</Text>
                        <Text style={styles.textLabel}>VALUE</Text>
                    </View>

                    <View style={styles.containerItemData}>
                        <Text style={styles.textLabelData}>Number</Text>
                        <Text style={styles.textLabelValue}>{metadata.number}</Text>
                    </View>

                    <View style={styles.containerItemData}>
                        <Text style={styles.textLabelData}>Type</Text>
                        <Text style={styles.textLabelValue}>{metadata.type_name}</Text>
                    </View>

                    <View style={styles.containerItemData}>
                        <Text style={styles.textLabelData}>Version</Text>
                        <Text style={styles.textLabelValue}>{metadata.version}</Text>
                    </View>

                    <View style={styles.containerItemData}>
                        <Text style={styles.textLabelData}>Effective Date</Text>
                        <Text style={styles.textLabelValue}>{metadata.effective_date}</Text>
                    </View>

                    <View style={styles.containerItemData}>
                        <Text style={styles.textLabelData}>Expired Date</Text>
                        <Text style={styles.textLabelValue}>{metadata.expired_date}</Text>
                    </View>

                    <View style={styles.containerItemData}>
                        <Text style={styles.textLabelData}>Tags</Text>
                        <Text style={styles.textLabelValue}>
                            {(metadata.tags) ? metadata.tags.join(', ') : ''}
                        </Text>
                    </View>

                    <View style={styles.containerItemData}>
                        <Text style={styles.textLabelData}>Categories</Text>
                        <Text style={styles.textLabelValue}>
                            {(metadata.categories) ? metadata.categories.join(', ') : ''}
                        </Text>
                    </View>

                    <View style={styles.containerItemData}>
                        <Text style={styles.textLabelData}>Last Update</Text>
                        <Text style={styles.textLabelValue}>{metadata.last_update}</Text>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default DocumentMetaScreen
