import React, { useEffect}  from 'react'
import { Appbar } from 'react-native-paper'
import styles from './style'
import { CardList, CardListSkeleton } from '../../components'
import axios from 'axios'
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

    const { keyword } = route.params;
    const [refreshing, setRefreshing] = React.useState(false);
    const [searchData, setSearchData] = React.useState([]);
    const [page, setPage] = React.useState(1);
    const [from, setFrom] = React.useState(0);
    const [to, setTo] = React.useState(0);
    const [total, setTotal] = React.useState(0);
    const [perpage, setPerpage] = React.useState(15);
    const [sortField, setSortField] = React.useState('title');
    const [sortDirection, setSortDirection] = React.useState('asc')
    const [scrolTohrottle, setScrolTohrottle] = React.useState(15)
    const [refreshingBottom, setRefreshingBottom] = React.useState(false)

    const onBackPage = () =>{
        navigation.goBack()
    }

    const onLoadData = (
        pageSort = page,
        fromSort = from,
        toSort  = to,
        totalSort = total,
        sort = sortField,
        direction=sortDirection
    ) => {
        setRefreshing(true);
        axios.get(baseUrl + '/api/document',
            {params:{
                current_page: pageSort,
                page: pageSort,
                from: fromSort,
                to:toSort,
                keyword:keyword,
                total:totalSort,
                per_page: perpage,
                sort_field: sort,
                sort_direction: direction
            }}
        ).then(r=>{
            setRefreshing(false);

            setSearchData(r.data.data)
            
            setPage(r.data.meta.current_page)
            setFrom(r.data.meta.from)
            setTo(r.data.meta.to)
            setTotal(r.data.meta.total)
            setPerpage(r.data.meta.per_page)

        }).catch(e=>{
            setRefreshing(false);
        })
    }


    const onScrollEndOfList = () => {
        if(to < total){
            setRefreshingBottom(true);
            setScrolTohrottle( parseInt(scrolTohrottle) + parseInt(perpage))
            
            let nextPage = parseInt(page) + 1
            
            axios.get(baseUrl + '/api/document',
                {params:{
                    current_page: page,
                    page: nextPage,
                    from: from,
                    to:to,
                    keyword:keyword,
                    total:total,
                    per_page: perpage,
                    sort_field: sortField,
                    sort_direction: sortDirection
                }}
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
        onLoadData( 0, 0, 0, 0,
            sortField,
            sortDirection
        )
    }

    useEffect(() => {
        onLoadData()
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
            </View>
        </SafeAreaView>
    )
}

export default SearchResultScreen
