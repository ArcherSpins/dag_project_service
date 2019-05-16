import React from 'react';
import { View, Text, Image, Dimensions } from 'react-native';

const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;

export default () => {
    return(
        <View style={{position: 'absolute', width: w, height: h}}>
            <Image 
                source={{uri: 'https://static.collectui.com/shots/2799566/oops-something-went-wrong-large'}}
                style={{width: w, height: h}}
            />
        </View>
    )
}