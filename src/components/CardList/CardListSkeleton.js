import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import SkeletonPlaceholder from "react-native-skeleton-placeholder";

const CardListSkeleton = () => {
    return (
        <View style={{
            padding: 8,
            margin:10,
            backgroundColor: 'white',
            flexDirection: 'row',
            borderRadius: 5,
            shadowColor: '#000',
        }}>
            <SkeletonPlaceholder>
                <SkeletonPlaceholder.Item flexDirection="row" alignItems="center">
                    <SkeletonPlaceholder.Item 
                        width={60} 
                        height={60} 
                        borderRadius={4} />
                    <SkeletonPlaceholder.Item 
                        marginLeft={20}>
                        <View style={{
                            flexDirection: 'row',
                        }}>
                            <SkeletonPlaceholder.Item 
                                width={40} 
                                height={15} 
                                borderRadius={4} />
                            <SkeletonPlaceholder.Item 
                                width={150} 
                                marginLeft={10}
                                height={15} 
                                borderRadius={4} />
                        </View>
                        
                        <SkeletonPlaceholder.Item
                            marginTop={6}
                            width={230}
                            height={20}
                            borderRadius={4}
                        />
                         <View style={{
                            flexDirection: 'row',
                            marginTop:6
                            }}>
                            <SkeletonPlaceholder.Item 
                                width={110} 
                                height={10} 
                                borderRadius={4} />
                            <SkeletonPlaceholder.Item 
                                width={110} 
                                marginLeft={10}
                                height={10} 
                                borderRadius={4} />
                        </View>
                    </SkeletonPlaceholder.Item>
                </SkeletonPlaceholder.Item>
            </SkeletonPlaceholder>
        </View>
    )
}

export default CardListSkeleton

const styles = StyleSheet.create({})
