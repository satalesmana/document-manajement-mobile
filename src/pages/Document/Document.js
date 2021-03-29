import React , { useEffect} from 'react'
import styles from './style'
import axios from 'axios'
import DocumentView from './DocumentView'
import DocumentComment from './DocumentComment'
import DocumentMetaScreen from './DocumentMeta'
import { lang } from '../../translations'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Appbar } from 'react-native-paper';
import { useSelector, useDispatch } from 'react-redux'
import {
  SafeAreaView,
  StatusBar,
  Text,
  View
} from 'react-native'


const TopTab = createMaterialTopTabNavigator();

const  HomeScreen = ()=> {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
  );
}

const DocumentScreen = ({navigation, route}) => {
  const { id, class_name } = route.params;
  
  const { baseUrl }  = useSelector(state=>state.configReducer)
  const { token, user }    = useSelector(state=>state.accountReducer)
  const [loading, setLoading] = React.useState(false)
  const [isFavourite, setIsFavourite] = React.useState(false)
  const [selectedVersion, setSelectedVersion ] = React.useState(0)
  const [document, setDocument] = React.useState({
    id: (route.params.id)?route.params.id:'',
    title:'',
    number:'',
    type:'',
    version:'',
    versions:[],
    effective_date:'',
    expired_date:'',
    lastupdate:'',
    tags:[],
    categories:[],
    body:'',
    class_name:(route.params.class_name)?route.params.class_name:''
  })

  let versionsTmp = []

  axios.defaults.headers.common['Authorization'] = 'Bearer '+token;
  axios.defaults.headers.common['Accept'] = 'application/json';

  const onBackPage = () =>{
    navigation.goBack()
  }

  const onSetFavourites = () =>{
    setIsFavourite(!isFavourite)
    axios.post(baseUrl+"/api/document/favourite/"+id)
    .catch((err)=>{
        console.log("onSetFavourites",err)
    })
  }

  const onChangeSelectedVersion = (version) =>{
    setSelectedVersion(version)
    axios.get(baseUrl + '/api/documentVersion/'+ version)
    .then(r=>{
        let tmpDocumentView={
            id: r.data.id,
            title: r.data.title,
            number: r.data.number,
            type:document.type,
            type_name:document.type_name,
            version:r.data.version,
            versions:document.versions,
            effective_date:r.data.effective_date,
            expired_date:r.data.expired_date,
            last_update:document.last_update,
            tags:document.tags,
            categories:document.categories,
            body:r.data.body,
            class_name: class_name
        }

        setDocument(tmpDocumentView)

    })
    .catch((err)=>{
        console.log(err)
    })
    .done(()=>{
        setLoading(false)
    })
  }

  const onLoadDocument =  async () =>{
    
    await axios.get(baseUrl + '/api/document/versions/'+id,{ params:{ columns:['version','id'] } })
    .then(res=>{
        res.data.map(v=>{
            versionsTmp.push({
                version: v.version,
                version_id: v.id
            })
        })
    })
    .catch(er=>{
        console.log("onLoadDocument docversion",er)
    })

    axios.get(baseUrl + '/api/document/'+ id)
    .then(r=>{
        let tmpDocumentView={
            id: r.data.id,
            title: r.data.title,
            number: r.data.latest_version.number,
            type:r.data.type,
            type_name:r.data.type_name,
            version:r.data.latest_version.version,
            versions:versionsTmp,
            effective_date:r.data.latest_version.effective_date,
            expired_date:r.data.latest_version.expired_date,
            last_update:r.data.last_update,
            tags:r.data.tags,
            categories:r.data.categories,
            body:r.data.latest_version.body,
            class_name:r.data.class_name
        }
        setDocument(tmpDocumentView)

        setIsFavourite(r.data.favourites.includes(user.id))


        setSelectedVersion(r.data.latest_version.version)
    })
    .catch((err)=>{
        console.log(err)
    })
    .done(()=>{
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
          <Appbar.Content title={lang("lbl_dvd_title")}/>
          {
              (!loading)?
                  <Appbar.Action 
                      color={(isFavourite)?"#f56342" : "#ffffff"}  
                      icon="heart"
                      onPress={()=>onSetFavourites()}/>
              :null
          }
          
      </Appbar.Header>
      <View style={styles.containerTab}>
        <TopTab.Navigator>
            <TopTab.Screen name="DocumentView"
                options={{ tabBarLabel: lang("acm_tab_doc") }}>
                  {() => <DocumentView 
                            onChangeVersion={onChangeSelectedVersion}
                            data={document} 
                            versionSelected={selectedVersion} 
                            />}
            </TopTab.Screen>
            <TopTab.Screen name="DocumentMeta" options={{ tabBarLabel:lang("acm_tab_meta") }}>
                  {props => <DocumentMetaScreen data={document} {...props} />}
            </TopTab.Screen>
            <TopTab.Screen name="DocumentComment" options={{ tabBarLabel: lang("acm_tab_comment") }}>
                  {props => <DocumentComment {...props} data={document} />}
            </TopTab.Screen>
            
        </TopTab.Navigator>
      </View>
    </SafeAreaView>
  )
}

export default DocumentScreen
