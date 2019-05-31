import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default ({ personal }) => {
    return(
        <View style={{width: '100%'}}>
            {
                personal.map((pers, i) => {
                    return(
                        <View key={pers.id} style={styles.item}>
                            <Image source={{uri: pers.img}}
                                    style={styles.image} />
                            <Text style={styles.text} >{ pers.title }</Text>
                        </View>
                    )
                })
            }
        </View>
    );
}



const styles = StyleSheet.create({
    item: {
        width: '100%',
        borderBottomWidth: 1,
        borderColor: 'black',
        flexDirection: 'row'
    },
    image: {
        width: '25%',
        height: 80
    },
    text: {
        paddingVertical: 10,
        display: 'flex',
        alignItems: "center",
        paddingLeft: 10,
        fontSize: 17
    }
})