import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { 
    StyleSheet, 
    Text, 
    View,
    TouchableOpacity
} from 'react-native'

import {
    Icon,
    Badge
} from 'react-native-elements'

const CardBox = ({data={}}) => {
    const navigation      = useNavigation();
    const onViewDetail = () =>{
        navigation.push('DocumentViewScreen',data)
    }

    return (
        <TouchableOpacity style={styles.cardBoxStyle}
            onPress={onViewDetail}>
            <View style={{
                width:"35%"
            }}>
                <Icon
                    name='file-text-o'
                    type='font-awesome'
                    size={60}/>
            </View>

            <View style={{
                paddingLeft:3,
                paddingRight:12,
                width:"80%",
                alignItems:'baseline'
            }}>
                <Text 
                    ellipsizeMode='tail' 
                    style={{
                        fontSize:12,
                        paddingRight:13
                    }}
                    numberOfLines={2}>
                        {data.title}
                </Text>
                <Badge 
                    status={(data.type==1)? "success":"primary"}
                    value={data.type_name} />
            </View>
        </TouchableOpacity>
    )
}

export default CardBox

const styles = StyleSheet.create({
    cardBoxStyle:{
        width:150,
        borderWidth:1,
        borderColor:'#c4c4c2',
        borderRadius:10,
        marginLeft:10,
        marginTop:15,
        marginBottom:15,
        flexDirection:'row'
    }
})
