
import React from 'react'
import { View, Text, Image, StyleSheet, Dimensions, WebView, TouchableWithoutFeedback  } from 'react-native'

const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;

const CardComponent = ({onOpenModal, videos}) => {
    return(
        <View>
            {
                videos.map((obj, i) => (
                    <View style={styles.subtitleView} key={i}>
                        <View style={{ width: w / 4, height: 80 }}>
                            <TouchableWithoutFeedback onPress={() => onOpenModal(obj)}>
                                <Image
                                    source={{uri: obj.snippet.thumbnails.medium.url}} style={{ width: w / 4, height: 80 }} />
                            </TouchableWithoutFeedback>
                        </View>
                        <TouchableWithoutFeedback onPress={() => onOpenModal(obj)}>
                            <View style={[styles.content, styles.border]}>
                                <View style={styles.content}>
                                        <View style={styles.header}>
                                            <Text style={styles.title}>{obj.snippet.title}</Text>
                                            <Text>rating: <Text style={styles.rating}>5</Text></Text>
                                        </View>
                                </View>
                                <View style={styles.description}>
                                    <Text>{obj.snippet.description}</Text>
                                </View>
                            </View>
                        </TouchableWithoutFeedback>
                    </View>
                ))
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
        marginBottom: 5,
        overflow: 'hidden',
        alignItems: 'center',
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
        overflow: 'hidden'
    },
    border: {
        borderBottomColor: '#c5c5c5',
        borderBottomWidth: 1,
        height: 80,
    },
    rating: {
        color: 'violet',
        fontSize: 20
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
    }
})


export { CardComponent }