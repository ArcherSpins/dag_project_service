import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, TouchableHighlight } from 'react-native';

export default ({ personal, navigate, path = 'Details_screen', path2 }) => {
    return(
        <View style={{width: '100%'}}>
            {
                personal.map((pers, i) => {
                    return(
                        <TouchableHighlight underlayColor="#d4d3d3" key={i} onPress={() => navigate(path, ({ id: pers.id, path2 }))} >
                            <View style={styles.item}>
                                <Image source={{uri: pers.img}}
                                        style={styles.image} />

                                <Text style={styles.text} >{ pers.title }</Text>
                            </View>
                        </TouchableHighlight>
                    )
                })
            }
        </View>
    );
}



const styles = StyleSheet.create({
    item: {
        width: '100%',
        padding: 15,
        flexDirection: 'row',
        alignItems: 'center',
        paddingBottom: 6
    },
    image: {
        width: '27%',
        height: 100,
        borderWidth: 1,
        borderColor: 'black'
    },
    text: {
        paddingVertical: 10,
        display: 'flex',
        alignItems: "center",
        paddingLeft: 15,
        fontSize: 17
    }
})