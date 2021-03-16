import React, { useEffect} from 'react'
import { Appbar } from 'react-native-paper';
import { Avatar, Badge } from 'react-native-elements'
import styles from './style'
import { TaskList, TaskListSkeleton } from '../../components'
import { AvatarDefault } from '../../assets'
import axios from 'axios'
import { lang } from '../../translations'
import { useSelector, useDispatch } from 'react-redux'
import {
    TouchableOpacity,
    ScrollView, 
    SafeAreaView, 
    View, 
    Text,
    StatusBar,
    RefreshControl
} from 'react-native'
import {
    setTask,
    addTask
} from '../../actions'

const MytaskScreen = ({navigation}) => {
    const dispatch        = useDispatch();
    const { user }        = useSelector(state=>state.accountReducer)
    const { baseUrl }     = useSelector(state=>state.configReducer);
    const { token }       = useSelector(state=>state.accountReducer);
    const { task }        = useSelector(state=>state.taskReducer);

    const avatarUser = (user.profile_photo_url) ? {uri:user.profile_photo_url} : AvatarDefault
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
    const taskAllowed = [2,3]
    axios.defaults.headers.common['Authorization'] = 'Bearer '+token;
    axios.defaults.headers.common['Accept'] = 'application/json';

    const onViewProfile = () =>{
        navigation.navigate('AccountScreen')
    }

    let params = {
        current_page: page,
        page: page,
        from: from,
        to:to,
        type:taskAllowed,
        status:[1],
        total:total,
        per_page: perpage,
        sort_field: sortField,
        sort_direction: sortDirection
    }

    const onLoadData = (params) =>{
        setRefreshing(true)
        axios.get(baseUrl + '/api/task',{params:params})
            .then(r=>{

                //let mobileTask = r.data.data.filter(d=>taskAllowed.includes(d.type))

                dispatch(setTask(r.data.data))
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

    const onScrollEndOfList = () =>{
        if(to < total){
            setRefreshingBottom(true);
            setScrolTohrottle( parseInt(scrolTohrottle) + parseInt(perpage))
            
            let nextPage = parseInt(page) + 1
            params.page = nextPage

            axios.get(baseUrl + '/api/task',{params:params})
            .then(r=>{
                setRefreshingBottom(false);

                //let mobileTask = r.data.data.filter(d=>taskAllowed.includes(d.type))

                dispatch(addTask( r.data.data))
                
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

    const onShowDetail = (data) =>{
        navigation.push('TaskdetailScreen',data)
    }

    useEffect(() => {
        onLoadData(params)
    },[]);


    return (
        <SafeAreaView style={styles.bodyLightColor}>

            <StatusBar translucent backgroundColor="transparent" barStyle="dark-content"/>
            
            <Appbar.Header style={styles.toolbar}>
                <View style={styles.toolbarContainer}>
                    <Appbar.Content title={ lang("acs_task_title") } />
                    <View style={styles.avatarBlock}>
                        <Avatar
                            rounded
                            source={avatarUser}
                            onPress={onViewProfile}
                            size="small"/>
                        <Badge
                            status="success"
                            containerStyle={styles.avatarBadge} />
                    </View>
                </View>
            </Appbar.Header>

            <ScrollView
                scrollEventThrottle={scrolTohrottle}
                onMomentumScrollEnd={onScrollEndOfList}
                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={onRefreshData}/>
                }>

                { (refreshing) ? <TaskListSkeleton/> : null }
                { (refreshing) ? <TaskListSkeleton/> : null }
                { (refreshing) ? <TaskListSkeleton/> : null }

                {
                    (!refreshing) ? 
                        (typeof(task)  !== undefined ) ? 
                            task.map((item,index)=>(
                                <TouchableOpacity 
                                    onPress={()=>onShowDetail(item)}
                                    key={index}>
                                    <TaskList data={item}></TaskList>
                                </TouchableOpacity>
                            ))
                        : null
                    : null
                }
                
                { (refreshingBottom) ? <TaskListSkeleton/> : null }
                { (refreshingBottom) ? <TaskListSkeleton/> : null }

            </ScrollView>
        </SafeAreaView>
    )
}

export default MytaskScreen