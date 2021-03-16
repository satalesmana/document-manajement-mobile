import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import SkeletonPlaceholder from "react-native-skeleton-placeholder";
import styles from './style'

const TaskListSkeleton = () => {
    return (
        <View style={styles.containerTaskSklton}>
            <View style={[styles.blockLeft, { justifyContent:'center', alignItems:'center'}]}>
                <SkeletonPlaceholder>
                    <SkeletonPlaceholder.Item 
                        width={70} 
                        height={70} 
                        borderRadius={50} />
                </SkeletonPlaceholder>
            </View>

            <View style={[styles.blockRightTask, { paddingTop:10}]}>
                <SkeletonPlaceholder>
                    <SkeletonPlaceholder.Item 
                        width={200} 
                        height={20} 
                        borderRadius={4} />
                    <View style={{ marginTop:6, flexDirection:'row'}}>
                        <SkeletonPlaceholder.Item 
                            width={100} 
                            height={15} 
                            borderRadius={4} />
                        <SkeletonPlaceholder.Item 
                            width={100} 
                            marginLeft={30}
                            height={15} 
                            borderRadius={4} />
                    </View>
                    <SkeletonPlaceholder.Item 
                        width={230} 
                        marginTop={6}
                        height={15} 
                        borderRadius={4} />
                </SkeletonPlaceholder>
            </View>
        </View>
    )
}

export default TaskListSkeleton
