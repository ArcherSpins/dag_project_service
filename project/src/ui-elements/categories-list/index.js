import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';



const iconsArray = [
    'accessibility', 'domain',
    'public', 'people', 'create',
    'photo-camera', 'business', 'directions-boat'
]


export default ({ categories, navigate }) => {


    return(
        <View style={{width: '100%'}}>
            {
                categories.map((obj, i) => {
                    return(
                        <TouchableOpacity key={obj.id} onPress={() => navigate('Details_categories', ({ id: obj.id }))}>
                            <View style={styles.item}>
                                <Icon name={iconsArray[i]} size={28} color="black" />
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
        flexDirection: 'row',
        paddingLeft: 10,
        alignItems: 'center'
    },
    text: {
        paddingVertical: 15,
        display: 'flex',
        alignItems: "center",
        fontSize: 17,
        paddingLeft: 10,
    }
})