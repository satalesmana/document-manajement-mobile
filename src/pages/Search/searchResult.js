import React, { useEffect}  from 'react'
import { Appbar } from 'react-native-paper'
import styles from './style'
import axios from 'axios'
import AwesomeAlert from 'react-native-awesome-alerts'
import { lang } from '../../translations'
import { CardList, CardListSkeleton } from '../../components'
import { useSelector, useDispatch } from 'react-redux'
import { 
    SafeAreaView,
    ScrollView,
    RefreshControl,
    Text, 
    View,
    Dimensions,
    StatusBar
} from 'react-native'

const SearchResultScreen = ({navigation, route}) => {
    const WindowHeight    = Dimensions.get('window').height;
    const { baseUrl }     = useSelector(state=>state.configReducer);
    const { token }       = useSelector(state=>state.accountReducer);

    axios.defaults.headers.common['Authorization'] = 'Bearer '+token;
    axios.defaults.headers.common['Accept'] = 'application/json';

    const { keyword, documentmode } = route.params;
    const [refreshing, setRefreshing] = React.useState(false);
    const [searchData, setSearchData] = React.useState([]);
    //console.log(documentmode)
    const [page, setPage] = React.useState(1);
    const [from, setFrom] = React.useState(0);
    const [to, setTo] = React.useState(0);
    const [total, setTotal] = React.useState(0);
    const [perpage, setPerpage] = React.useState(15);
    const [sortField, setSortField] = React.useState('title');
    const [sortDirection, setSortDirection] = React.useState('asc')
    const [scrolTohrottle, setScrolTohrottle] = React.useState(15)
    const [refreshingBottom, setRefreshingBottom] = React.useState(false)
    const [showalert, setShowalert] = React.useState(false)
    const [alertmessages, setAlertmessages] = React.useState("")

    const onBackPage = () =>{
        navigation.goBack()
    }

    let FilterParams = {
        current_page: page,
        page: page,
        from: from,
        to:to,
        keyword:keyword,
        public:true,
        total:total,
        per_page: perpage,
        sort_field: sortField,
        sort_direction: sortDirection
    }

    const onLoadData = (FilterParams) => {
        setRefreshing(true);
        onSetDocumentMode()
        axios.get(baseUrl + '/api/document',
            {params:FilterParams}
        ).then(r=>{
            setRefreshing(false);

            setSearchData(r.data.data)
            
            setPage(r.data.meta.current_page)
            setFrom(r.data.meta.from)
            setTo(r.data.meta.to)
            setTotal(r.data.meta.total)
            setPerpage(r.data.meta.per_page)

        }).catch(e=>{
            console.log(e)
            setAlertmessages(e.toString())
            setShowalert(true)
            setRefreshing(false);
        })
    }


    const onScrollEndOfList = () => {
        if(to < total){
            setRefreshingBottom(true);
            setScrolTohrottle( parseInt(scrolTohrottle) + parseInt(perpage))
            onSetDocumentMode()

            FilterParams.page = parseInt(page) + 1
            
            axios.get(baseUrl + '/api/document',
                {params:FilterParams}
            ).then(r=>{
                setRefreshingBottom(false);

                setSearchData([...searchData ,...r.data.data])
                
                setPage(r.data.meta.current_page)
                setFrom(r.data.meta.from)
                setTo(r.data.meta.to)
                setTotal(r.data.meta.total)
                setPerpage(r.data.meta.per_page)
                
            }).catch(e=>{
                setRefreshingBottom(false);
            }).done(d=>{
                setRefreshingBottom(false)
            })
        }
    }

    const onRefreshData = () =>{
        setSearchData([])
        onLoadData(FilterParams)
    }

    const onSetDocumentMode = () =>{
        switch(documentmode){
            case 'public':
                FilterParams.public = true
            case 'favourite':
                FilterParams.favourite = true
            case 'related':
                FilterParams.related = true
            default:
                FilterParams.mine = true
        }
    }

    useEffect(() => {
        onLoadData(FilterParams)
    },[]);

    return (
        <SafeAreaView>
            <StatusBar translucent backgroundColor="transparent" barStyle="dark-content"/>
            <Appbar.Header dark={false} style={styles.appbarLight}>
                <Appbar.BackAction onPress={onBackPage} />
                <Appbar.Content title="Search Document" subtitle={keyword}/>
            </Appbar.Header>
            <View style={{
                height:WindowHeight - 60,
                paddingBottom:10,
                overflow:'hidden'
            }}>
                <ScrollView 
                    style={styles.containerScrol}
                    scrollEventThrottle={scrolTohrottle}
                    onMomentumScrollEnd={onScrollEndOfList}
                    refreshControl={
                        <RefreshControl
                            refreshing={refreshing}
                            onRefresh={onRefreshData}/>
                    }>
                        { (refreshing) ? <CardListSkeleton/> : null }
                        { (refreshing) ? <CardListSkeleton/> : null }
                        { (refreshing) ? <CardListSkeleton/> : null }

                        {
                            (!refreshing) ? 
                                searchData.map((item,index)=>(
                                    <CardList key={index} data={item}/>
                                )) 
                            : null
                        }
                        { (refreshingBottom) ? <CardListSkeleton/> : null }
                        { (refreshingBottom) ? <CardListSkeleton/> : null }
                    
                        <Text> </Text>
                </ScrollView>

                <AwesomeAlert
                    show={showalert}
                    showProgress={false}
                    title={ lang("acs_taskd_info") }
                    message={alertmessages}
                    closeOnTouchOutside={false}
                    closeOnHardwareBackPress={ false }
                    showConfirmButton={true}
                    confirmText="OK"
                    onConfirmPressed={()=>{ setShowalert(false) }}/>

            </View>
        </SafeAreaView>
    )
}

export default SearchResultScreen
