import React, { useEffect} from 'react'
import { SearchHeader } from '../../components/SearchHeader'
import { CardList, CardListSkeleton } from '../../components/CardList'
import axios from 'axios'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useSelector, useDispatch } from 'react-redux'
import { lang } from '../../translations'
import { 
    ScrollView, 
    SafeAreaView, 
    StyleSheet, 
    RefreshControl,
    View,
    Dimensions,
    Text,
    StatusBar
} from 'react-native'
import {
    setMyDocument,
    resetMydokumen,
    addMydokumen
} from '../../actions'

const HomeScreen = ({navigation}) => {
    const WindowHeight = Dimensions.get('window').height;

    let placeHolderSearch = lang('lbl_serc_home')
    const dispatch        = useDispatch();
    const {mydokumen}     = useSelector(state=>state.mydokumenReducer)
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

    const setSortData = (sortData) => {
        dispatch(resetMydokumen())
        let sorby = sortData.split('|')
        setSortField(sorby[0])
        setSortDirection(sorby[1])
        setPage(0)
        setFrom(0)
        setTo(0)
        setTotal(0)

        onLoadData(
            0,
            0,
            0,
            0,
            sorby[0], 
            sorby[1]
        )
    }

    const onRefreshData = () =>{
        onLoadData( 0, 0, 0, 0,
            sortField,
            sortDirection
        )
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
                total:totalSort,
                per_page: perpage,
                sort_field: sort,
                sort_direction: direction
            }}
        ).then(r=>{
            setRefreshing(false);
            dispatch(setMyDocument(r.data.data))

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
                    total:total,
                    per_page: perpage,
                    sort_field: sortField,
                    sort_direction: sortDirection
                }}
            ).then(r=>{
                setRefreshingBottom(false);

                dispatch(addMydokumen(r.data.data))
                
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

    useEffect(() => {
        onLoadData()
    },[]);

    return (
        <View>
            <StatusBar translucent backgroundColor="transparent" barStyle="dark-light"/>
            <SearchHeader  
                placeHolder={placeHolderSearch} 
                navigation={navigation}
                onSetSortData={setSortData}/>

            <View style={{
                height:WindowHeight - 177,
                paddingBottom:10,
                overflow:'hidden'
            }}>
                

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
                            (typeof(mydokumen)  !== undefined ) ? 
                                mydokumen.map((item,index)=>(
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

export default HomeScreen

const styles = StyleSheet.create({
    container:{
        paddingTop:15
    }
})
