import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';

const w = Dimensions.get('window').width;

const CardImg = ({urls, alt_description}) => {
    const { container, image_card, title } = styles;
    return(
        <View style={container}>
            <Image source={{uri: urls.regular}} style={image_card} />
            <Text style={title}>{alt_description ? alt_description.toUpperCase() : 'Not Image'}</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        width: w * 0.9,
        backgroundColor: 'white',
        borderRadius: 4,
        marginVertical: 20,
    },
    image_card: {
        borderRadius: 4,
        width: w * 0.9,
        height: 300
    },
    title: {
        fontSize: 20,
        textAlign: 'center',
        backgroundColor: 'white',
        color: 'black',
        paddingTop: 10,
    }
})


export { CardImg };