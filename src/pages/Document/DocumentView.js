import React, { useEffect} from 'react'
import { Appbar } from 'react-native-paper';
import styles from './style'
import axios from 'axios'
import HTMLView from 'react-native-htmlview'
import SkeletonPlaceholder from "react-native-skeleton-placeholder";
import { useSelector, useDispatch } from 'react-redux'
import { Imgpaper } from '../../assets'
import { Picker } from '@react-native-picker/picker'
import { lang } from '../../translations'
import { Icon } from 'react-native-elements'
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

const DocumentViewScreen = ({navigation, route}) => {
    const {number, title, id, slug } = route.params;
    const WindowHeight = Dimensions.get("window").height;
    const { baseUrl }  = useSelector(state=>state.configReducer);
    const { token }    = useSelector(state=>state.accountReducer);
    const [expanded, setExpanded] = React.useState(false)
    const [selectedVersion, setSelectedVersion] = React.useState(0)
    const [docVersion, setDocVersion] = React.useState([])
    const [loading, setLoading] = React.useState(false)
    const [documentView, setDocumentView] = React.useState({
        title:'',
        number:'',
        type:'',
        version:'',
        effective_date:'',
        expired_date:'',
        lastupdate:'',
        tags:[],
        categories:[],
        body:''
    })
    const metadata = route.params;
    
    axios.defaults.headers.common['Authorization'] = 'Bearer '+token;
    axios.defaults.headers.common['Accept'] = 'application/json';

    const onLoadDocument = () =>{
        setLoading(true)
        axios.get(baseUrl + '/api/document/'+ id)
        .then(r=>{
            let versions = []
            r.data.versions.map(v=>{
                versions.push({
                    version: v.version,
                    version_id: v.id
                })
            })

            let tmpDocumentView={
                title: r.data.title,
                number: r.data.latest_version.number,
                type:r.data.type,
                type_name:r.data.type_name,
                version:r.data.latest_version.version,
                effective_date:r.data.latest_version.effective_date,
                expired_date:r.data.latest_version.expired_date,
                last_update:r.data.last_update,
                tags:r.data.tags,
                categories:r.data.categories,
                body:r.data.latest_version.body,
            }

            setDocumentView(tmpDocumentView)
            setSelectedVersion(r.data.latest_version.version)
            setDocVersion(versions)
            setLoading(false)
        })
        .done(()=>{
            setLoading(false)
        })
    }

    const countryList = () =>{
        return( docVersion.map( (x,i) => { 
              return( <Picker.Item label={"Ver. "+x.version} key={i} value={x.version_id}  />)} ));
    }

    const documentMetaData = () =>{
        return (
            <View style={styles.expandBox}>
                <View style={styles.containerItem}>
                    <Text style={styles.textLabel}>{lang("lbl_dvd_des")}</Text>
                    <Text style={styles.textLabel}>{lang("lbl_dvd_val")}</Text>
                </View>

                <View style={styles.containerItemData}>
                    <Text style={styles.textLabelData}>{lang("lbl_dvd_numb")}</Text>
                    <Text style={styles.textLabelValue}>{documentView.number}</Text>
                </View>

                <View style={styles.containerItemData}>
                    <Text style={styles.textLabelData}>{lang("lbl_dvd_type")}</Text>
                    <Text style={styles.textLabelValue}>{documentView.type_name}</Text>
                </View>

                <View style={styles.containerItemData}>
                    <Text style={styles.textLabelData}>{lang("lbl_dvd_vers")}</Text>
                    <Text style={styles.textLabelValue}>{documentView.version}</Text>
                </View>

                <View style={styles.containerItemData}>
                    <Text style={styles.textLabelData}>{lang("lbl_dvd_effdate")}</Text>
                    <Text style={styles.textLabelValue}>{documentView.effective_date}</Text>
                </View>

                <View style={styles.containerItemData}>
                    <Text style={styles.textLabelData}>{lang("lbl_dvd_expired")}</Text>
                    <Text style={styles.textLabelValue}>{documentView.expired_date}</Text>
                </View>

                <View style={styles.containerItemData}>
                    <Text style={styles.textLabelData}>{lang("lbl_dvd_tags")}</Text>
                    <Text style={styles.textLabelValue}>
                        {(documentView.tags) ? documentView.tags.join(', ') : ''}
                    </Text>
                </View>

                <View style={styles.containerItemData}>
                    <Text style={styles.textLabelData}>{lang("lbl_dvd_kategori")}</Text>
                    <Text style={styles.textLabelValue}>
                        {(documentView.categories) ? documentView.categories.join(', ') : ''}
                    </Text>
                </View>

                <View style={styles.containerItemData}>
                    <Text style={styles.textLabelData}>{lang("lbl_dvd_lstupdate")}</Text>
                    <Text style={styles.textLabelValue}>{documentView.last_update}</Text>
                </View>
            </View> 
        )
    }

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
    
    const onChangeSelectVersion = (itemValue) =>{
        setExpanded(false)
        setSelectedVersion(itemValue)
        setLoading(true)
        axios.get(baseUrl + '/api/documentVersion/'+ itemValue)
            .then(r=>{
                setDocumentView({
                    title: documentView.title,
                    number: documentView.number,
                    type: documentView.type,
                    type_name:documentView.type_name,
                    version:r.data.version,
                    effective_date:r.data.effective_date,
                    expired_date:r.data.expired_date,
                    last_update:r.data.last_update,
                    tags:documentView.tags,
                    categories: documentView.categories,
                    body:r.data.body,
                })
                setLoading(false)
            }).done(()=>{
                setLoading(false)
            })
    }

    useEffect(() => {
        onLoadDocument()
    },[]);

    return (
        <SafeAreaView>
            <StatusBar translucent backgroundColor="transparent" barStyle="dark-content"/>

            <Appbar.Header dark={true} style={styles.appbarLight}>
                <Appbar.BackAction onPress={onBackPage} />
                {/* <Appbar.Content title={lang("lbl_dvd_title")} subtitle={"No. "+number}/> */}
                <Appbar.Content title={lang("lbl_dvd_title")}/>
            </Appbar.Header>

            <View style={{
                height:WindowHeight-80,
                paddingBottom:10,
                overflow:'hidden'
            }}>
                <ScrollView>
                    <View style={styles.cardInfoVersion}>
                        {
                            (!loading) ? 
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
                                (loading) ? 
                                    <SkeletonPlaceholder >
                                        <SkeletonPlaceholder.Item 
                                             width={100} 
                                             height={25}
                                             marginBottom={15}/>
                                    </SkeletonPlaceholder>
                                :
                                <Picker
                                    style={[styles.inputSelect]}
                                    selectedValue={selectedVersion}
                                    onValueChange={(itemValue, itemIndex) => onChangeSelectVersion(itemValue)}>
                                        {countryList()}
                                </Picker>
                            }
                            
                        </View>
                    </View>
                    
                    {
                        (loading) ? 
                        <View style={styles.cardInfo}>
                            <SkeletonPlaceholder >
                                <SkeletonPlaceholder.Item 
                                    width={230} 
                                    marginTop={6}
                                    height={15}/>
                                <SkeletonPlaceholder.Item 
                                    width={200} 
                                    marginTop={6}
                                    height={15}/>
                            </SkeletonPlaceholder>
                        </View>
                        :
                        <TouchableOpacity
                            onPress={ onToggleExpand }>
                            <View style={styles.cardInfo}>
                                <View style={styles.blockLeft}>
                                    <Text style={styles.textTitile}>{lang("lbl_dvd_info")}</Text>
                                    <Text 
                                        ellipsizeMode='tail' 
                                        numberOfLines={2}>
                                            {documentView.title}
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
                    }

                    
                    {
                        expanded ? 
                            documentMetaData()
                        : null
                    }

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
                            //borderBottomLeftRadius:0.1,
                            //borderBottomRightRadius:0.1
                        }}>
                            <Image source={Imgpaper} style={styles.headerContent}/>
                            <View style={styles.bodyContent}>
                                {
                                    (loading)?
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
                                    <HTMLView value={ documentView.body }/>
                                }
                                
                            </View>
                        </View>
                        
                    </View>

                    
                </ScrollView>
            </View>
        </SafeAreaView>
    )
}



export default DocumentViewScreen


