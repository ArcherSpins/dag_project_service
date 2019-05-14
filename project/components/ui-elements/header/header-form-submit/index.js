import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';

const w = Dimensions.get('window').width;


const HeaderSubmit = ({textButton = 'submit', colorBg = '#0070c0', color = 'white', colorButton = '#0095ff', onPress = () => {}}) => {
    const { header, header_submit } = styles;
    const styleHeader = { ...header, backgroundColor: colorBg };
    return(
        <View style={styleHeader}>
            <TouchableOpacity onPress={onPress} style={{...header_submit, backgroundColor: colorButton}}>
                <Text style={{color: color}}>{textButton}</Text>
            </TouchableOpacity>
        </View>
    )
}



const styles = StyleSheet.create({
    header: {
        width: w,
        height: 80,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        padding: 10,
        alignItems: 'flex-end',
        paddingTop: 20
    },
    header_submit: {
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 4,
    }
});

export { HeaderSubmit };