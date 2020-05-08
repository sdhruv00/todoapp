import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList, TouchableOpacity} from 'react-native';

export default function Header() { 
    return(
        <View style = {styles.header}>
            <Text style={styles.title}> My To-Do's</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header:  {
        height: 80, 
        paddingTop: 38, 
        backgroundColor: 'skyblue'
    },

    title: {
        textAlign: "center",
        color: '#fff',
        fontSize: 20,  
        fontWeight: 'bold'
    }
})