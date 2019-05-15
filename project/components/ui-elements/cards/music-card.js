
import React from 'react'
import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'

const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;

const MusicCard = ({ musics, onPlay }) => {
    return(
        <View>
            {
                musics.map((obj, i) => {
                    const { play } = obj;
                    const icon = play ? 'ios-pause' : 'ios-play';
                    return(
                        <View style={styles.subtitleView} key={i}>
                            <View style={{ width: w / 4, height: 80, position: 'relative' }}>
                                <TouchableOpacity onPress={() => onPlay(obj)}>
                                    <Image
                                        source={{uri: obj.image}} style={{ width: w / 4, height: 80 }} />
                                    <View style={styles.buttonPlay}>
                                            <Ionicons name={icon} style={{fontSize: 35}} color="black" />
                                    </View>
                                </TouchableOpacity>
                            </View>
                            <View style={[styles.content, styles.border]}>
                                <View style={styles.content}>
                                    <View style={styles.header}>
                                        <Text style={styles.title}>{obj.title}</Text>
                                        <Text style={styles.rating}>{obj.time}</Text>
                                    </View>
                                </View>
                                <View style={styles.description}>
                                    <Text>{obj.description}</Text>
                                </View>
                            </View>
                        </View>
                    )
                })
            }
        </View>
    )
}

const styles = StyleSheet.create({
    subtitleView: {
        flexDirection: 'row',
        paddingLeft: 10,
        paddingTop: 5,
        height: w * 0.63,
        height: 90
    },
    header: {
        flexDirection: 'row',
        width: w / 1.5,
        justifyContent: 'space-between',
        overflow: 'hidden',
        alignItems: 'center',
        paddingTop: 10
    },  
    title: {
        fontSize: 20,
        overflow: 'hidden',
        maxWidth: w / 2,
        height: 30
    },
    description: {
        color: 'gray',
        height: 38,
        overflow: 'hidden',
        marginLeft: 10,
    },
    border: {
        borderBottomColor: '#c5c5c5',
        borderBottomWidth: 1,
        height: 80,
    },
    rating: {
        color: 'blue',
        fontSize: 18
    },
    container_modal: {
        width: w,
        height: h,
        backgroundColor: 'rgba(0,0,0,0.4)'
    },  
    content: {
        paddingLeft: 10,
        paddingRight: 10,
        width: w / 1.2,
        flexDirection: 'column'
    },
    buttonPlay: {
        width: 50, 
        height: 50, 
        backgroundColor: 'white', 
        borderRadius: 50, 
        position: 'absolute', 
        left: 50, 
        marginLeft: -25,
        top: 40,
        marginTop: -25,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
})


export { MusicCard }