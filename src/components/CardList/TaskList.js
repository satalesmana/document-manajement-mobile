import React from 'react'
import { Text, View } from 'react-native'
import styles from './style'
import { Icon } from 'react-native-elements';

const TaskList = ({data}) => {
    const IconStatus = [
        {name:'bullhorn', color:'#05f725', label:'Low'},
        {name:'info-circle', color:'#37C6F7', label:'Medium'},
        {name:'exclamation-triangle', color:'#fac800', label:'Height'},
        {name:'exclamation-triangle', color:'#fa0000', label:'Urgent'}
    ]

    return (
        <View style={styles.containerTask}>
            <View style={[styles.blockLeft, { justifyContent:'center', alignItems:'center'}]}>
                <Icon
                    reverse
                    name={IconStatus[data.priority].name}
                    type='font-awesome'
                    iconStyle={{
                        color:IconStatus[data.priority].color
                    }}
                    color='#CAE6FC'
                    size={30}/>
            </View>
            <View style={styles.blockRightTask}>
                <Text 
                    style={styles.textTitle}
                    ellipsizeMode='tail' 
                    numberOfLines={1}>
                        {data.title}
                </Text>
                <View style={styles.gridContentTask}>
                    <View style={styles.gridContent}>
                        <Icon
                            name='calendar-times-o'
                            size={13}
                            iconStyle={styles.iconSub}
                            type='font-awesome'/>
                        <Text style={styles.textSub}>
                            {data.due_date}
                        </Text>
                    </View>
                    <View style={styles.gridContent}>
                        <Icon
                                name='info-circle'
                                size={13}
                                iconStyle={styles.iconSub}
                                type='font-awesome'/>
                            <Text 
                                style={styles.textSub}
                                ellipsizeMode='tail' 
                                numberOfLines={1}>
                                    {data.type_name}
                            </Text>
                    </View>

                </View>
                <Text 
                    style={styles.textSubDesc}
                    ellipsizeMode='tail' 
                    numberOfLines={2}>
                        {data.description}
                </Text>
            </View>
        </View>
    )
}

export default TaskList
