import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 

const AddItem = ({title, addItem}) => {
    
    const [text, setText] = useState('')

    const handleChange = (textValue) => setText(textValue)

    return (
        <View>
            <TextInput placeholder="Add Item..." style={styles.input} onChangeText={handleChange} />
            <TouchableOpacity style={styles.btn} onPress={()=>addItem(text)}>
            <Text style={styles.btnText}> 
            <AntDesign name="plussquare" size={24} color="green" />Add New Word</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    input: {
        height: 60,
        padding: 8,
        fontSize: 16,
    },
    btn: {
        backgroundColor: '#222',
        padding: 9,
        margin: 5,
    },

    btnText: {
        color: 'orange',
        fontSize: 20,
        textAlign: 'center',
    }
});

export default AddItem;