import React, { useEffect} from 'react'
import axios from 'axios'
import { SearchHeader } from '../../components/SearchHeader'
import { CardList, CardListSkeleton } from '../../components/CardList'
import { useSelector, useDispatch } from 'react-redux'
import {
    setFavouriteDocument,
    addFavouritekumen,
    resetFavouriteDokumen
} from '../../actions'
import { 
    StyleSheet, 
    ScrollView, 
    SafeAreaView, 
    Text, 
    View,
    Dimensions,
    RefreshControl,
    StatusBar
} from 'react-native'

const FavouritesScreen = ({navigation}) => {
    const WindowHeight = Dimensions.get('window').height;
    let placeHolderSearch = "Search Favourites"
    const dispatch        = useDispatch();
    const {favouritedokumen}= useSelector(state=>state.favouriteDokumenReducer)
    const { baseUrl }     = useSelector(state=>state.configReducer);
    const { token }       = useSelector(state=>state.accountReducer);
    
    const [refreshing, setRefreshing] = React.useState(false);
    const [page, setPage] = React.useState(1);
    const [from, setFrom] = React.useState(0);
    const [to, setTo] = React.useState(0);
    const [total, setTotal] = React.useState(0);
    const [perpage, setPerpage] = React.useState(15);
    const [sortField, setSortField] = React.useState('title');
    const [sortDirection, setSortDirection] = React.useState('asc')
    const [scrolTohrottle, setScrolTohrottle] = React.useState(15)
    const [refreshingBottom, setRefreshingBottom] = React.useState(false)

    let params = {
        current_page: page,
        page: page,
        from: from,
        to:to,
        total:total,
        per_page: perpage,
        sort_field: sortField,
        sort_direction: sortDirection
    }

    axios.defaults.headers.common['Authorization'] = 'Bearer '+token;
    axios.defaults.headers.common['Accept'] = 'application/json';

    const onLoadData = (params) => {
        setRefreshing(true)
        
        axios.get(baseUrl + '/api/document',{params:params})
            .then(r=>{
                dispatch(setFavouriteDocument(r.data.data))
                setRefreshing(false)

                setPage(r.data.meta.current_page)
                setFrom(r.data.meta.from)
                setTo(r.data.meta.to)
                setTotal(r.data.meta.total)
                setPerpage(r.data.meta.per_page)    
            }).catch(e=>{
                console.log(e)
            }).done(d=>{
                setRefreshing(false)
            })
    }

    const onSetSortData = (sortData) => {
        dispatch(resetFavouriteDokumen())

        let sorby = sortData.split('|')
        
        onResetParams()
        setSortField(sorby[0])
        setSortDirection(sorby[1])
        params.sort_field = sorby[0]
        params.sort_direction  = sorby[1]

        onLoadData(params)
    }

    const onRefreshData = () =>{
        onResetParams()
        onLoadData(params)
    }

    const onResetParams = () =>{
        setPage(0)
        setFrom(0)
        setTo(0)
        setTotal(0)

        params.page = 0
        params.from = 0
        params.to = 0
        params.total = 0
    }

    const onScrollEndOfList = () =>{
        if(to < total){
            setRefreshingBottom(true);
            setScrolTohrottle( parseInt(scrolTohrottle) + parseInt(perpage))
            
            let nextPage = parseInt(page) + 1
            params.page = nextPage

            axios.get(baseUrl + '/api/document',{params:params})
            .then(r=>{
                setRefreshingBottom(false);

                dispatch(addFavouritekumen(r.data.data))
                
                setPage(r.data.meta.current_page)
                setFrom(r.data.meta.from)
                setTo(r.data.meta.to)
                setTotal(r.data.meta.total)
                setPerpage(r.data.meta.per_page)
                                
            }).catch(e=>{
                setRefreshingBottom(false);
            }).done(d=>{
                setRefreshingBottom(false);
            })
        }
    }
    

    useEffect(() => {
        onLoadData()
    },[]);


    return (
        <View>
            <StatusBar translucent backgroundColor="transparent" barStyle="dark-light"/>
            <SearchHeader  
                placeHolder={placeHolderSearch} 
                navigation={navigation}
                onSetSortData={onSetSortData}>
            </SearchHeader>            
            
            <View style={{
                height:WindowHeight - 177,
                paddingBottom:10,
                overflow:'hidden' }}>

                <ScrollView 
                    style={styles.container}
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
                            (typeof(favouritedokumen)  !== undefined ) ? 
                                favouritedokumen.map((item,index)=>(
                                    <CardList key={index} data={item}/>
                                ))
                            : null
                        : null
                        
                    }

                    { (refreshingBottom) ? <CardListSkeleton/> : null }
                    { (refreshingBottom) ? <CardListSkeleton/> : null }
                    
                </ScrollView>
            </View>
        </View>
    )
}

export default FavouritesScreen

const styles = StyleSheet.create({
    container:{
        paddingTop:15
    }
})
