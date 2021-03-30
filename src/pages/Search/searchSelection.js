import React from 'react'
import styles from './style'
import { Icon, Button } from 'react-native-elements'
import { CardBox } from '../../components'
import { lang } from '../../translations'
import { useSelector, useDispatch } from 'react-redux'
import { Appbar } from 'react-native-paper'
import { 
    Text, 
    View,
    SafeAreaView,
    TextInput,
    StatusBar,
    ScrollView,
    TouchableOpacity,
} from 'react-native'
import {
    resetActView,
    setActSearch,
    resetActSearch,
    deleteActSearch
} from '../../actions'

const SearchSelectiontScreen = ({navigation, route}) => {
    const dispatch        = useDispatch();
    const { actView, actSearch} = useSelector(state=>state.historyReducer)
    const {documentmode} = route.params
    
    const [searchString,setSearchString] = React.useState('')

    const descHist = actView.sort(function(a,b){
        return b.key - a.key;
    })
    
    const descSearchHist = actSearch.sort(function(a,b){
        return b.key - a.key;
    })

    const onPressBack = () =>{
        navigation.goBack()
    }

    const onClearHistView = () =>{
        dispatch(resetActView())
    }

    const onPresClearAllSearch = () =>{
        dispatch(resetActSearch())
    }

    const onPresSearchBtn = () =>{
        dispatch(setActSearch(searchString))
        navigation.push('SearchResultScreen',{
            keyword: searchString,
            documentmode:documentmode
        })
        setSearchString('')
    }

    const onDeleteItemSearch = (key) => {
        dispatch(deleteActSearch(key))
    }

    const ListSearchHistory = ({data={}}) =>{
        return <View style={styles.historyList}>
                <View style={{ flexDirection:'row', flex:1}}>
                    <Icon
                        name="clock-o"
                        color="#ababab"
                        type="font-awesome"/>
                        <TouchableOpacity  onPress={()=>{
                            navigation.push("SearchResultScreen",{
                                keyword:data.name,
                                documentmode:documentmode
                            })
                        }}>
                            <Text 
                                style={{ paddingLeft:15, width:300 }}
                                ellipsizeMode='tail' 
                                numberOfLines={1}>
                                    {data.name}
                            </Text>

                        </TouchableOpacity>
                    
                </View>

                <View style={{ justifyContent:'center', }}>
                    <Icon
                        name="trash"
                        type="font-awesome"
                        color="#ababab"
                        onPress={()=>onDeleteItemSearch(data.key)}
                        size={15}/>
                </View>
            </View>
    }

    return (
        <SafeAreaView style={styles.searchContainer}>
            <StatusBar translucent backgroundColor="transparent" barStyle="dark-light"/>
            <Appbar.Header dark={true} style={styles.appbarLight}>
                <Appbar.BackAction onPress={onPressBack} />

                    <TextInput
                        style={styles.inputSearch}
                        placeholder={lang("lbl_src_input")}
                        value={searchString}
                        onChangeText={(value) => {
                            setSearchString(value)
                        }}
                        underlineColorAndroid="transparent"/> 
                    <Appbar.Action icon="magnify" onPress={onPresSearchBtn} />
                    
            </Appbar.Header>
            <ScrollView style={{paddingLeft:15, paddingRight:15}}>
                {/* <View style={styles.contanierHeader}>
                    <View style={{ width:40 }}>
                        <Icon
                            name='arrow-left'
                            type='font-awesome'
                            color='#424242'
                            size={20}
                            onPress={onPressBack}/>
                    </View>
                    

                    <View style={styles.searchSection}>
                        <Icon 
                            style={styles.searchIcon} 
                            name='search'
                            type="font-awesome"
                            size={20} 
                            color="#b5b3b3"/>

                        <TextInput
                            style={styles.inputSearch}
                            placeholder={lang("lbl_src_input")}
                            value={searchString}
                            onChangeText={(value) => {
                                setSearchString(value)
                            }}
                            underlineColorAndroid="transparent"/>
                        
                        </View>

                        <Button
                            buttonStyle={{
                                borderRadius:10,
                                marginLeft:5
                                //borderRadius: 20,
                            }}
                            onPress={onPresSearchBtn}
                            title={lang("act_src_btn")} />
                </View> */}
                
                {
                    (typeof(actView)  !== undefined && actView.length > 0) ? 
                        <View style={{ marginTop:15 }}>
                            <View style={styles.containerHistoryTitle}>
                                <Text style={styles.textTitleSearch}>Terakhir dilihat</Text>
                                <TouchableOpacity
                                onPress={onClearHistView}>
                                    <Text style={styles.textTitleSearchDanger}>Hapus Semua</Text>
                                </TouchableOpacity>
                            </View>
                            
                            <ScrollView horizontal={true}>
                                {   
                                    descHist.map((item,index)=>(
                                        <CardBox key={index} data={item}/>
                                    ))
                                }
                            </ScrollView>
                        </View> 
                    : null
                }

                {
                    (typeof(actSearch)  !== undefined && actSearch.length > 0) ? 
                        <View>
                            <View style={styles.containerHistoryTitle}>
                                <Text style={styles.textTitleSearch}>Terakhir dicari</Text>
                                <TouchableOpacity
                                    onPress={onPresClearAllSearch}>
                                    <Text style={styles.textTitleSearchDanger}>Hapus Semua</Text>
                                </TouchableOpacity>
                            </View>
                            {
                                descSearchHist.map((item,index)=>(
                                    <ListSearchHistory key={index} data={item}/>
                                ))
                            }
                        </View>
                    : null
                }
                
            </ScrollView>
        </SafeAreaView>
    )
}

export default SearchSelectiontScreen
