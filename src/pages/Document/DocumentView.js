import React, { useEffect} from 'react'
import { Appbar } from 'react-native-paper';
import styles from './style'

import { 
    SafeAreaView, 
    ScrollView, 
    Text, 
    View,
    TouchableOpacity,
    Dimensions,
    StatusBar
} from 'react-native'
import {
    Icon
} from 'react-native-elements'

const DocumentViewScreen = ({navigation, route}) => {
    const {number, title, id, slug } = route.params;
    const WindowHeight = Dimensions.get("window").height;

    const onBackPage = () =>{
        navigation.goBack()
    }



    useEffect(() => {
       //console.log(id, slug)
    },[]);

    return (
        <SafeAreaView>
            <StatusBar translucent backgroundColor="transparent" barStyle="dark-content"/>

            <Appbar.Header dark={false} style={styles.appbarLight}>
                <Appbar.BackAction onPress={onBackPage} />
                <Appbar.Content 
                    title="Document View"
                    subtitle={"No. "+number}/>
            </Appbar.Header>

            <View style={{
                height:WindowHeight-80,
                paddingBottom:10,
                overflow:'hidden'
            }}>
                <ScrollView>
                    <TouchableOpacity
                        onPress={()=>{
                            navigation.push("DocumentMetaScreen",route.params)
                        }}>
                        <View style={styles.cardInfo}>
                            <View style={styles.blockLeft}>
                                <Text style={styles.textTitile}>Info</Text>
                                <Text 
                                    ellipsizeMode='tail' 
                                    numberOfLines={2}>
                                        {title}
                                </Text>
                            </View>
                            <View style={styles.blockRight}>
                                <Icon
                                    name='chevron-right'
                                    type='font-awesome'
                                    color='#7f8c8d'/>
                            </View>
                        </View>
                    </TouchableOpacity>
                    
                    <Text style={[styles.textTitile,{ paddingLeft:15, marginBottom:10, marginTop:15}]}>Attechment</Text>

                    <TouchableOpacity>
                        <View style={styles.cardInfo}>
                            <View style={styles.blockLeft}>
                                <Text style={styles.textTitile}>file attach.mp4</Text>
                                <Text 
                                    ellipsizeMode='tail' 
                                    numberOfLines={2}>
                                        Description
                                </Text>
                            </View>
                            <View style={styles.blockRight}>
                                <Icon
                                    name='chevron-right'
                                    type='font-awesome'
                                    color='#7f8c8d'/>
                            </View>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <View style={styles.cardInfo}>
                            <View style={styles.blockLeft}>
                                <Text style={styles.textTitile}>file attach other.pdf</Text>
                                <Text 
                                    ellipsizeMode='tail' 
                                    numberOfLines={2}>
                                        Description
                                </Text>
                            </View>
                            <View style={styles.blockRight}>
                                <Icon
                                    name='chevron-right'
                                    type='font-awesome'
                                    color='#7f8c8d'/>
                            </View>
                        </View>
                    </TouchableOpacity>

                    <View style={styles.DocumentContainer}>
                        <Text>ini display dokumen wit html view</Text>
                        <Text>ini display dokumen wit html view lorem ipsum 
                            ipsum lorem ipsum  lorem ipsum  lorem ipsum  lorem ipsum 
                        </Text>
                    </View>

                    
                </ScrollView>
            </View>
        </SafeAreaView>
    )
}



export default DocumentViewScreen


