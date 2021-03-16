import React, { useEffect} from 'react'
import { Appbar } from 'react-native-paper';
import styles from './style'
import { Imgpaper } from '../../assets'
import { 
    SafeAreaView, 
    ScrollView, 
    Text, 
    View,
    TouchableOpacity,
    Dimensions,
    StatusBar,
    LayoutAnimation, 
    Platform, 
    UIManager,
    Image
} from 'react-native'
import {
    Icon
} from 'react-native-elements'

const DocumentViewScreen = ({navigation, route}) => {
    const {number, title, id, slug } = route.params;
    const WindowHeight = Dimensions.get("window").height;
    const [expanded, setExpanded] = React.useState(false)
    const metadata = route.params;

    const onBackPage = () =>{
        navigation.goBack()
    }

    if (Platform.OS === 'android') {
        UIManager.setLayoutAnimationEnabledExperimental(true);
    }

    const onToggleExpand=()=>{
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        setExpanded(!expanded)
      }

    useEffect(() => {
       //console.log(id, slug)
    },[]);

    return (
        <SafeAreaView>
            <StatusBar translucent backgroundColor="transparent" barStyle="dark-content"/>

            <Appbar.Header dark={true} style={styles.appbarLight}>
                <Appbar.BackAction onPress={onBackPage} />
                <Appbar.Content 
                    title="Document View"
                    subtitle={"No. "+number}/>
            </Appbar.Header>

            <View style={{
                height:WindowHeight-80,
                paddingBottom:10,
                overflow:'hidden'
            }}>
                <ScrollView>
                    <TouchableOpacity
                        onPress={ onToggleExpand }>
                        <View style={styles.cardInfo}>
                            <View style={styles.blockLeft}>
                                <Text style={styles.textTitile}>Info</Text>
                                <Text 
                                    ellipsizeMode='tail' 
                                    numberOfLines={2}>
                                        {title}
                                </Text>
                            </View>
                            <View style={styles.blockRight}>
                                <Icon
                                    name={expanded ? 'chevron-down' : 'chevron-right' }
                                    type='font-awesome'
                                    color='#7f8c8d'/>
                            </View>
                        </View>
                    </TouchableOpacity>
                    {
                        expanded ? 
                            <View style={styles.expandBox}>
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
                        : null
                    }

                    {/* <Text style={[styles.textTitile,{ paddingLeft:15, marginBottom:10, marginTop:15}]}>Attechment</Text>
                    
                    <TouchableOpacity>
                        <View style={styles.cardInfo}>
                            <View style={styles.blockLeft}>
                                <Text style={styles.textTitile}>file attach.mp4</Text>
                                <Text 
                                    ellipsizeMode='tail' 
                                    numberOfLines={2}>
                                        Description
                                </Text>
                            </View>
                            <View style={styles.blockRight}>
                                <Icon
                                    name='chevron-right'
                                    type='font-awesome'
                                    color='#7f8c8d'/>
                            </View>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <View style={styles.cardInfo}>
                            <View style={styles.blockLeft}>
                                <Text style={styles.textTitile}>file attach other.pdf</Text>
                                <Text 
                                    ellipsizeMode='tail' 
                                    numberOfLines={2}>
                                        Description
                                </Text>
                            </View>
                            <View style={styles.blockRight}>
                                <Icon
                                    name='chevron-right'
                                    type='font-awesome'
                                    color='#7f8c8d'/>
                            </View>
                        </View>
                    </TouchableOpacity> */}

                    <View style={styles.DocumentContainer}>
                        <View style={{
                            shadowColor: "#000",
                            shadowOffset: {
                                width: 0,
                                height: 2,
                            },
                            shadowOpacity: 0.25,
                            shadowRadius: 3.84,
                            elevation: 2,
                            // borderBottomLeftRadius:5,
                            // borderBottomRightRadius:5
                        }}>
                            <Image source={Imgpaper} style={styles.headerContent}/>
                            <View style={{
                                backgroundColor:'white',
                                paddingLeft:10,
                                paddingRight:10,
                                paddingBottom:10,
                                borderBottomLeftRadius:5,
                                borderBottomRightRadius:5
                            }}>
                                <Text>ini display dokumen wit html view</Text>
                                <Text>ini display dokumen wit html view lorem ipsum 
                                    ipsum lorem ipsum  lorem ipsum  lorem ipsum  lorem ipsum 
                                </Text>
                            </View>
                        </View>
                        
                    </View>

                    
                </ScrollView>
            </View>
        </SafeAreaView>
    )
}



export default DocumentViewScreen


