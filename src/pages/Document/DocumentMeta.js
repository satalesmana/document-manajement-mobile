import React from 'react'
import styles from './style'
import { lang } from '../../translations'
import {  
    Text, 
    View,
    ScrollView,
    TouchableOpacity,
    Dimensions
} from 'react-native'

import { Icon } from 'react-native-elements'

const WindowHeight = Dimensions.get("window").height;

const DocumentMetaScreen = ({data}) => {

    return (
        <View style={{
            height:WindowHeight-120,
            paddingBottom:10,
            overflow:'hidden'
        }}>
            <ScrollView>
                <TouchableOpacity>
                    <View style={styles.containerItemData}>
                        <Icon
                            name='key'
                            type='font-awesome'
                            size={18}
                            color='#a6a6a6'/>

                        <View style={styles.containerRow}>
                            <View style={styles.marginContainer}>
                                <Text style={styles.textLabelData}>{lang("lbl_dvd_numb")}</Text>
                                <Text style={styles.textLabelValue}>{data.number}</Text>
                            </View>

                            <Icon
                                size={15}
                                name={'chevron-right'}
                                type='font-awesome'
                                color='#dbdbdb'/>
                        </View>
                    </View>
                </TouchableOpacity>
                
                <TouchableOpacity>
                    <View style={styles.containerItemData}>
                        <Icon
                            name='file-text'
                            size={18}
                            type='font-awesome'
                            color='#a6a6a6'/>

                        <View style={styles.containerRow}>
                            <View style={styles.marginContainer}>
                                <Text style={styles.textLabelData}>{lang("lbl_dvd_type")}</Text>
                                <Text style={styles.textLabelValue}>{data.type_name}</Text>
                            </View>

                            <Icon
                                size={15}
                                name={'chevron-right'}
                                type='font-awesome'
                                color='#dbdbdb'/>
                        </View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity>
                    <View style={styles.containerItemData}>
                        <Icon
                            name='files-o'
                            size={18}
                            type='font-awesome'
                            color='#a6a6a6'/>

                        <View style={styles.containerRow}>
                            <View style={styles.marginContainer}>
                                <Text style={styles.textLabelData}>{lang("lbl_dvd_vers")}</Text>
                                <Text style={styles.textLabelValue}>{data.version}</Text>
                            </View>

                            <Icon
                                size={15}
                                name={'chevron-right'}
                                type='font-awesome'
                                color='#dbdbdb'/>
                        </View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity>
                    <View style={styles.containerItemData}>
                        <Icon
                            name='calendar'
                            size={18}
                            type='font-awesome'
                            color='#a6a6a6'/>

                        <View style={styles.containerRow}>
                            <View style={styles.marginContainer}>
                                <Text style={styles.textLabelData}>{lang("lbl_dvd_effdate")}</Text>
                                <Text style={styles.textLabelValue}>{data.effective_date}</Text>
                            </View>

                            <Icon
                                size={15}
                                name={'chevron-right'}
                                type='font-awesome'
                                color='#dbdbdb'/>
                        </View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity>
                    <View style={styles.containerItemData}>
                        <Icon
                            name='calendar'
                            size={18}
                            type='font-awesome'
                            color='#a6a6a6'/>

                        <View style={styles.containerRow}>
                            <View style={styles.marginContainer}>
                                <Text style={styles.textLabelData}>{lang("lbl_dvd_expired")}</Text>
                                <Text style={styles.textLabelValue}>{data.expired_date}</Text>
                            </View>

                            <Icon
                                size={15}
                                name={'chevron-right'}
                                type='font-awesome'
                                color='#dbdbdb'/>
                        </View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity>
                    <View style={styles.containerItemData}>
                        <Icon
                            name='tags'
                            size={18}
                            type='font-awesome'
                            color='#a6a6a6'/>

                        <View style={styles.containerRow}>
                            <View style={styles.marginContainer}>
                                <Text style={styles.textLabelData}>{lang("lbl_dvd_tags")}</Text>
                                <Text style={styles.textLabelValue}>{(data.tags) ? data.tags.join(', ') : ''}</Text>
                            </View>

                            <Icon
                                size={15}
                                name={'chevron-right'}
                                type='font-awesome'
                                color='#dbdbdb'/>
                        </View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity>
                    <View style={styles.containerItemData}>
                        <Icon
                            name='list'
                            size={18}
                            type='font-awesome'
                            color='#a6a6a6'/>

                        <View style={styles.containerRow}>
                            <View style={styles.marginContainer}>
                                <Text style={styles.textLabelData}>{lang("lbl_dvd_kategori")}</Text>
                                <Text style={styles.textLabelValue}>{(data.categories) ? data.categories.join(', ') : ''}</Text>
                            </View>

                            <Icon
                                size={15}
                                name={'chevron-right'}
                                type='font-awesome'
                                color='#dbdbdb'/>
                        </View>
                    </View>
                </TouchableOpacity>

                {/* <TouchableOpacity>
                    <View style={styles.containerItemData}>
                        <Icon
                            name='calendar'
                            type='font-awesome'
                            color='#a6a6a6'/>

                        <View style={styles.containerRow}>
                            <View style={styles.marginContainer}>
                                <Text style={styles.textLabelData}>{lang("lbl_dvd_lstupdate")}</Text>
                                <Text style={styles.textLabelValue}>{data.last_update}</Text>
                            </View>

                            <Icon
                                size={15}
                                name={'chevron-right'}
                                type='font-awesome'
                                color='#dbdbdb'/>
                        </View>
                    </View>
                </TouchableOpacity> */}

                <View style={{height:20}}></View>

            </ScrollView>
        </View>
    )
}

export default DocumentMetaScreen
