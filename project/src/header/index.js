import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

//FD4D01

export default ({ title }) => {
    return(
        <View style={styles.header}>
            <Text style={styles.title}>{title}</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    header: {
        backgroundColor: "#117ac7",
        width: '100%',
        paddingVertical: 10,
        paddingTop: 40
    },
    title: {
        color: 'white',
        textAlign: 'center',
        fontSize: 25
    }
})