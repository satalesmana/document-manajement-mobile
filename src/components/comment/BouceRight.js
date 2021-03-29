import React from 'react'
import styles from './style'
import { AvatarDefault } from '../../assets'
import { format } from "date-fns";
import { 
    Text, 
    View 
} from 'react-native'
import { Avatar } from 'react-native-elements'

const BounceRightComment = ({data}) => {
    const regex = /(<([^>]+)>)/ig;

    const avatarUser = (data.user.profile_photo_path) ? {uri:data.user.profile_photo_path} : AvatarDefault

    return (
        <View style={styles.containerCommentRight}>
            <View>
                <Text 
                    style={styles.titleCommentRight}>
                        {(data.user.name)?data.user.name:''}
                </Text>
                <View style={styles.bouceCommentRight}>
                    <Text>
                        {data.body.replace(regex,'')}
                    </Text>
                </View>
                <Text 
                    style={styles.dateCommentRight}>
                        {format(new Date(data.created_at), "MMMM do, yyyy H:mm a")}
                </Text>
            </View>
            <Avatar
                rounded
                size={45}
                source={avatarUser}/>                    
        </View>
    )
}

export default BounceRightComment
