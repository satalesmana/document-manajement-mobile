import React from 'react'
import { Text, View } from 'react-native'
import styles from './style'
import { Icon } from 'react-native-elements';

const TaskList = ({status}) => {
    const IconStatus = [
        {name:'bullhorn', color:'#05f725', label:'Low'},
        {name:'info-circle', color:'#37C6F7', label:'Medium'},
        {name:'exclamation-triangle', color:'#fac800', label:'Height'},
        {name:'exclamation-triangle', color:'#fa0000', label:'Urgent'}
    ]

    return (
        <View style={styles.containerTask}>
            <View style={styles.blockLeft}>
                <Icon
                    reverse
                    name={IconStatus[status].name}
                    type='font-awesome'
                    iconStyle={{
                        color:IconStatus[status].color
                    }}
                    color='#CAE6FC'
                    size={30}/>
            </View>
            <View style={styles.blockRightTask}>
                <Text 
                    style={styles.textTitle}
                    ellipsizeMode='tail' 
                    numberOfLines={2}>
                        Task Name
                </Text>
                <View style={styles.gridContentTask}>
                    <View style={styles.gridContent}>
                        <Icon
                            name='calendar-times-o'
                            size={13}
                            iconStyle={styles.iconSub}
                            type='font-awesome'/>
                        <Text style={styles.textSub}>20 Agt 2022</Text>
                    </View>
                    <View style={styles.gridContent}>
                        <Icon
                                name='user-circle-o'
                                size={13}
                                iconStyle={styles.iconSub}
                                type='font-awesome'/>
                            <Text 
                                style={styles.textSub}
                                ellipsizeMode='tail' 
                                numberOfLines={1}>
                                    Mr. Mahmudin
                            </Text>
                    </View>

                </View>
                <Text 
                    style={styles.textSubDesc}
                    ellipsizeMode='tail' 
                    numberOfLines={2}>
                        Task Description loremp ipsum loremp ipsum loremp ipsum loremp ipsum loremp ipsum loremp ipsum loremp ipsum 
                </Text>
            </View>
        </View>
    )
}

export default TaskList
