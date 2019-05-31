import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default ({ categories, navigate }) => {
    return(
        <View style={{width: '100%'}}>
            {
                categories.map((obj, i) => {
                    return(
                        <TouchableOpacity key={obj.id} onPress={() => navigate('Details_screen', ({ id: obj.id }))} >
                            <View style={styles.item}>
                                <Text style={styles.text} >{ obj.name }</Text>
                            </View>
                        </TouchableOpacity>
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
    text: {
        paddingVertical: 15,
        display: 'flex',
        alignItems: "center",
        fontSize: 17,
        paddingLeft: 10,
    }
})