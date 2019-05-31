import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

const w = Dimensions.get('window').width;

export default class ScreenDetails extends React.Component {

    static navigationOptions = {
        tabBarVisible: false,
    }

    state = {
        data: {}
    }

    componentDidMount = () => {
        const url = 'http://person.lezgikim.ru/api.php?do=getPostById&key=156dfdd335hjkodS&PostID=';
        const { id } = this.props.navigation.state.params;
        fetch(url+id)
        .then(res => res.json())
        .then(data => this.setState({data}))
        .catch(err => console.log(err))
    }

    render() {
        const { data } = this.state;
        const url = data.img ? data.img : 'https://doc.louisiana.gov/assets/camaleon_cms/image-not-found-4a963b95bf081c3ea02923dceaeb3f8085e1a654fc54840aac61a57a60903fef.png';
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity style={{marginTop: 20, paddingLeft: 20, width: 60}} onPress={() => this.props.navigation.navigate('Categories_screen')}>
                        <Icon name="arrowleft" size={30} color="white" />
                    </TouchableOpacity>
                </View>
                <ScrollView>
                    <View style={{paddingBottom: 20}}>
                        <Text style={styles.h1}>{ data.title }</Text>
                        <View style={styles.container_image}>
                            <Image source={{uri: url}} style={styles.image} />
                        </View>
                        <Text style={styles.content}>{ data.content }</Text>
                    </View>
                </ScrollView>
            </View>
        )
    }
}



const styles = StyleSheet.create({
    header: {
        height: 80,
        width: '100%',
        backgroundColor: '#00a4db',
        display: 'flex',
        justifyContent: 'center'
    },
    container: {
        flex: 1
    },
    content: {
        paddingLeft: 20,
        paddingRight: 20,
        marginTop: 10,
        fontSize: 20
    },
    image: {
        width: w*0.8,
        height: w*0.9
    },
    container_image: {
        width: '100%',
        display: 'flex',
        alignItems: 'center'
    },
    h1: {
        fontSize: 27,
        textAlign: 'center',
        padding: 15
    }
})