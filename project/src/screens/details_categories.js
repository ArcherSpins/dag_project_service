import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions, ScrollView, TouchableOpacity, ActivityIndicator } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { ListPersonal } from '../ui-elements';

const w = Dimensions.get('window').width;

export default class ScreenDetails extends React.Component {

    static navigationOptions = {
        tabBarVisible: false
    }

    state = {
        data: {},
        play: false,
        loading: true
    }

    componentDidMount = () => {
        const url = 'http://person.lezgikim.ru/api.php?do=getPostList&key=156dfdd335hjkodS&CatID=';
        const { id } = this.props.navigation.state.params;
        fetch(url+id)
        .then(res => res.json())
        .then(data => {
            this.setState({data, loading: false});
        })
        .catch(err => console.log(err))
    }

    render() {
        const { data, play } = this.state;
        const url = data.img ? data.img : 'https://doc.louisiana.gov/assets/camaleon_cms/image-not-found-4a963b95bf081c3ea02923dceaeb3f8085e1a654fc54840aac61a57a60903fef.png';
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity style={{marginTop: 20, paddingLeft: 20, width: 200, flexDirection: 'row', alignItems: 'center'}} onPress={() => this.props.navigation.navigate('Categories_screen')}>
                        <Ionicons name="ios-arrow-back" color="white" size={30} style={{marginTop: 2}} />
                        <Text style={{color: 'white', marginLeft: 10, minWidth: 130, fontSize: 23, alignSelf: 'center'}}>назад</Text>
                    </TouchableOpacity>
                </View>
                {
                    this.state.loading ?
                    <View style={{paddingTop: 20}}>
                        <ActivityIndicator size="large" color='#00a4db' />
                    </View>
                    :
                    data.length > 0
                    ?
                    <ScrollView>
                        <View style={{paddingBottom: 20}}>
                            <ListPersonal personal={data} navigate={this.props.navigation.navigate} path="full_details_categories" path2 = 'Details_categories' />
                        </View>
                    </ScrollView>
                    :
                    <Text style={styles.message}>Ничего не найдено</Text>
                }
            </View>
        )
    }
}



const styles = StyleSheet.create({
    header: {
        height: 80,
        width: '100%',
        backgroundColor: '#117ac7',
        display: 'flex',
        justifyContent: 'center'
    },
    message: {
        marginTop: 20,
        fontSize: 20,
        textAlign: 'center',
        width: '100%'
    },
    container: {
        flex: 1,
        backgroundColor: '#f4f4f4'
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
    h1: {
        fontSize: 27,
        textAlign: 'center',
        padding: 15
    }
})