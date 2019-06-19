import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions, ScrollView, TouchableOpacity, ActivityIndicator } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Audio } from 'expo';

const w = Dimensions.get('window').width;

export default class ScreenPersonals extends React.Component {

    static navigationOptions = {
        tabBarVisible: false,
    }

    state = {
        data: {},
        play: false,
        srcMus: '',
        playOld: false,
        loading: true
    }

    componentDidMount = () => {
        const url = 'http://person.lezgikim.ru/api.php?do=getPostById&key=156dfdd335hjkodS&PostID=';
        const { id } = this.props.navigation.state.params;
        fetch(url+id)
        .then(res => res.json())
        .then(data => {
            this.setState({data, loading: false});
        })
        .catch(err => console.log(err))
    }

    componentWillUnmount = () => {
        this.stopMusic();
    }

    stopMusic = async () => {
        this.setState({
            play: false
        });
        if(this.state.playOld)
            this.playObject.pauseAsync();

        else
            await this.playObject.stopAsync();
    }

    playMusic = async () => {
        if(this.state.play) {
            await this.stopMusic();
            return;
        }

        if(this.state.data.audio_files) {
            if(!this.state.playOld) {
                this.playObject = new Audio.Sound();
                await this.playObject.loadAsync({uri: this.state.data.audio_files[0].url});
                await this.playObject.playAsync();
            }
            else {
                //replayAsync
                await this.playObject.playAsync();
            }
            this.setState({play: true, playOld: true});
        }

    }

    render() {
        const { data, play } = this.state;
        const { path2 = 'Personal_screen' } = this.props.navigation.state.params;
        const icon = play ? 'ios-pause' : 'ios-play';
        const url = data.img ? data.img : 'https://doc.louisiana.gov/assets/camaleon_cms/image-not-found-4a963b95bf081c3ea02923dceaeb3f8085e1a654fc54840aac61a57a60903fef.png';
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity style={{marginTop: 20, paddingLeft: 20, width: 200, flexDirection: 'row', alignItems: 'center'}} onPress={() => this.props.navigation.navigate(path2)}>
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
                    <ScrollView>
                        <View style={{paddingBottom: 20, paddingTop: 30}}>
                            <View style={styles.container_image}>
                                <Image source={{uri: url}} style={styles.image} />
                            </View>
                            <Text style={styles.h1}>{ data.title }</Text>
                            <View>
                                {
                                    data.audio_files ?
                                     <View style={{width: '100%', display: 'flex', alignItems: 'center', marginTop: 20}}>
                                        <TouchableOpacity onPress={() => this.playMusic()} style={styles.audio_button}>
                                            <Ionicons name={icon} style={{fontSize: 42}} color="white" />
                                        </TouchableOpacity>
                                     </View>
                                    : null
                                }
                            </View>
                            <Text style={styles.content}>{ data.content }</Text>
                        </View>
                    </ScrollView>
                }
            </View>
        )
    }
}



const styles = StyleSheet.create({
    header: {
        width: '100%',
        backgroundColor: '#117ac7',
        display: 'flex',
        justifyContent: 'center',
        paddingTop: 20,
        paddingBottom: 10
    },
    title_music: {
        textAlign: 'center',
        paddingLeft: 30,
        paddingRight: 30,
        fontSize: 20
    },
    container: {
        flex: 1,
        backgroundColor: '#f4f4f4'
    },
    content: {
        paddingLeft: 20,
        paddingRight: 20,
        fontSize: 18
    },
    audio_button: {
        width: 70,
        height: 70,
        borderRadius: 50,
        display: 'flex',
        justifyContent: 'center',
        paddingLeft: 6,
        alignItems: 'center',
        backgroundColor: '#117ac7'
    },
    image: {
        width: w*0.6,
        height: w*0.6
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