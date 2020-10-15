import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 

const ListItem = ({item, deleteItem})  => {
  return (
    <TouchableOpacity style={styles.listItem}>
        <View style={styles.listItemView}>
            <Text style={styles.listItemText}>{item.text}</Text>
                <AntDesign name="delete" size={24} color="red" onPress={()=>deleteItem(item.id)}/>
        </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
    listItem: {
        padding: 15,
        backgroundColor: '#929292',
        borderBottomWidth: 1,
        borderColor: '#eee',
    },
    listItemView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    listItemText: {
        fontSize: 18,
    },
})

export default ListItem;