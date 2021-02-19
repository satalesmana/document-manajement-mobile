import React from 'react'
import styles from './style'
import { 
    SafeAreaView,
    ScrollView,
    Text, 
    View,
    Button,
    TextInput
} from 'react-native'
import {Picker} from '@react-native-picker/picker'
import { Appbar } from 'react-native-paper';
import { Avatar, Badge, Icon } from 'react-native-elements'
import DateTimePicker from '@react-native-community/datetimepicker';

const SearchSelectiontScreen = ({navigation}) => {
    const [text, setText] = React.useState('');
    const [selectedValue, setSelectedValue] = React.useState("");
    const [show, setShow] = React.useState(false);
    const [date, setDate] = React.useState(new Date(1598051730000));


    const onBackPage = () =>{
        navigation.goBack()
    }

    const showDatepicker = () => {
        setShow(true);
    }

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
            setDate(currentDate);
    }

    const onSearchPress = () => {
        navigation.navigate('SearchResultScreen')
    }

    return (
        <SafeAreaView>
            <Appbar.Header dark={false} style={styles.appbarLight}>
                <Appbar.BackAction onPress={onBackPage} />
                <Appbar.Content title="Selection Form"/>
            </Appbar.Header>

            <ScrollView style={styles.container}>

                <TextInput 
                    placeholder="Document Name"
                    value={text}
                    style={styles.input}
                    onChangeText={text => setText(text)}/>

                <Text style={styles.magin20}>Departments</Text>
                <Picker
                    style={styles.input}
                    selectedValue={selectedValue}
                    onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}>
                        <Picker.Item label="Finance" value="Finance" />
                        <Picker.Item label="JavaScript" value="js" />
                </Picker>

                
                <Text style={styles.magin20}>Effective Date</Text>
                <View style={styles.inputContainerGroup}>
                    <TextInput 
                        placeholder="Effective Date"
                        editable = {false}
                        value={date.toString()}
                        style={styles.inputGroup}
                        onChangeText={text => setText(text)}/>
                    <Icon
                        containerStyle={styles.blockIcon}
                        name='calendar'
                        type='font-awesome'
                        color='#643d91'
                        onPress={showDatepicker} />
                    <Icon
                        containerStyle={styles.blockIcon}
                        name='minus-circle'
                        type='font-awesome'
                        color='#e65a5a'/>
                </View>

                <Text style={styles.magin20}>Experied Date</Text>
                <View style={styles.inputContainerGroup}>
                    <TextInput 
                        placeholder="Experied Date"
                        editable = {false}
                        value={date.toString()}
                        style={styles.inputGroup}
                        onChangeText={text => setText(text)}/>
                    <Icon
                        containerStyle={styles.blockIcon}
                        name='calendar'
                        type='font-awesome'
                        color='#643d91'
                        onPress={showDatepicker} />
                    <Icon
                        containerStyle={styles.blockIcon}
                        name='minus-circle'
                        type='font-awesome'
                        color='#e65a5a'/>
                </View>

                <View style={styles.magin20}>
                    <Button
                        onPress={onSearchPress }
                        title="Start Search" /> 
                </View>
                
                {show && (
                    <DateTimePicker
                        testID="dateTimePicker"
                        value={date}
                        mode={'date'}
                        is24Hour={true}
                        display="default"
                        onChange={onChange}/>
                )}

                </ScrollView>
        </SafeAreaView>
    )
}

export default SearchSelectiontScreen
