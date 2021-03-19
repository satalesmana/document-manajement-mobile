import React, { useEffect} from 'react'
import { SearchHeader } from '../../components/SearchHeader'
import { CardList, CardListSkeleton } from '../../components/CardList'
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios'
import { lang } from '../../translations'
import {
    setRelatedDocument,
    addRelatedDocument,
    resetRelatedDocument
} from '../../actions'
import { 
    ScrollView, 
    SafeAreaView, 
    StyleSheet, 
    Dimensions, 
    Text,
    View,
    RefreshControl,
    StatusBar
} from 'react-native'


const RelatedScreen = ({navigation}) => {
    let placeHolderSearch = lang("lbl_serc_rel")
    const WindowHeight    = Dimensions.get('window').height;
    const dispatch        = useDispatch();
    const {relatedDokumen} = useSelector(state=>state.relatedDokumenReducer)
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

    axios.defaults.headers.common['Authorization'] = 'Bearer '+token;
    axios.defaults.headers.common['Accept'] = 'application/json';

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

    const onLoadData = (params) => {
        setRefreshing(true)
        axios.get(baseUrl + '/api/document',{params:params})
            .then(r=>{
                setRefreshing(false)
                dispatch(setRelatedDocument(r.data.data))

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
        dispatch(resetRelatedDocument())

        let sorby = sortData.split('|')
        
        onResetParams()
        setSortField(sorby[0])
        setSortDirection(sorby[1])
        params.sort_field = sorby[0]
        params.sort_direction  = sorby[1]

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

    const onRefreshData = () =>{
        onResetParams()
        onLoadData(params)
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

                dispatch(addRelatedDocument(r.data.data))
                
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
                            (typeof(relatedDokumen)  !== undefined ) ? 
                                relatedDokumen.map((item,index)=>(
                                    <CardList key={index} data={item}/>
                                ))
                            : null
                        : null
                        
                    }

                    { (refreshingBottom) ? <CardListSkeleton/> : null }
                    { (refreshingBottom) ? <CardListSkeleton/> : null }
                    <View style={{margin:15}}/>
                </ScrollView>
            </View>
        </View>
    )
}

export default RelatedScreen

const styles = StyleSheet.create({
    container:{
        paddingTop:15
    }
})
