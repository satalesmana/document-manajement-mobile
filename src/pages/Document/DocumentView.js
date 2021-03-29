import React from 'react'
import styles from './style'
import SkeletonPlaceholder from "react-native-skeleton-placeholder"
import HTMLView from 'react-native-htmlview'
import { lang } from '../../translations'
import { Icon } from 'react-native-elements'
import { Picker } from '@react-native-picker/picker'
import { Imgpaper } from '../../assets'
import { useSelector, useDispatch } from 'react-redux'
import { 
    Text, 
    View,
    Dimensions,
    ScrollView,
    Image
} from 'react-native'

const WindowHeight = Dimensions.get("window").height;

const VersionsList = (versions) =>{
    return( versions.map( (x,i) => { 
          return( <Picker.Item label={"Ver. "+x.version} key={i} value={x.version_id}  />)} ));
}

const DocumentViewScreen = ({data, versionSelected, onChangeVersion}) => {
    const [expanded, setExpanded] = React.useState(false)
    const [loading, setLoading] = React.useState(false)

    const onChangeSelectVersion = (v) =>{
        onChangeVersion(v)
    }

    return (
        <View style={{
            height:WindowHeight-80,
            paddingBottom:10,
            overflow:'hidden'
        }}>
            <ScrollView>
                <View style={styles.cardInfoVersion}>
                    {
                        (data.versions.length > 0 ) ? 
                        <View  style={ { marginTop:13}}>
                            <Text style={styles.textTitile}>{lang("lbl_dvd_vers")}</Text>
                        </View>
                        :
                        <View>
                            {
                                <SkeletonPlaceholder >
                                    <SkeletonPlaceholder.Item 
                                        width={150} 
                                        height={25}
                                        marginBottom={15}/>
                                </SkeletonPlaceholder>
                            }
                        </View>
                    }

                    <View>
                        {
                            (data.versions.length <= 0 ) ? 
                                <SkeletonPlaceholder >
                                    <SkeletonPlaceholder.Item 
                                            width={100} 
                                            height={25}
                                            marginBottom={15}/>
                                </SkeletonPlaceholder>
                            :
                            <Picker
                                style={[styles.inputSelect]}
                                selectedValue={versionSelected}
                                onValueChange={(itemValue, itemIndex) => onChangeSelectVersion(itemValue)}>
                                    { VersionsList(data.versions) }
                            </Picker>
                        }
                    </View>
                </View>

                <View style={styles.DocumentContainer}>
                    <View style={{
                        shadowColor: "#000",
                        shadowOffset: {
                            width: 0,
                            height: 2,
                        },
                        shadowOpacity: 0.25,
                        shadowRadius: 5.84,
                        elevation: 8,
                    }}>
                        <Image source={Imgpaper} style={styles.headerContent}/>
                        <View style={styles.bodyContent}>
                            {
                                (data.body =='')?
                                <SkeletonPlaceholder >
                                    <SkeletonPlaceholder.Item 
                                        width={350} 
                                        marginTop={6}
                                        height={15}/>
                                    <SkeletonPlaceholder.Item 
                                        width={300} 
                                        marginTop={6}
                                        height={15}/>
                                    <SkeletonPlaceholder.Item 
                                        width={250} 
                                        marginTop={6}
                                        height={15}/>
                                </SkeletonPlaceholder>
                                :
                                <HTMLView value={ data.body }/>
                            }
                            
                        </View>
                    </View>
                </View>

            </ScrollView>
        </View>
    )
}

export default DocumentViewScreen
