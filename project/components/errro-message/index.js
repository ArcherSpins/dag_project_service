import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;

export default ({text}) => {
    return(
        <View style={styles.message_container}>
            <Text style={styles.text_message}>{text}</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    message_container: {
        width: w,
        height: 300,
        padding: 20,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text_message: {
        color: 'black',
        fontSize: 20,
        textAlign: 'center'
    }
})