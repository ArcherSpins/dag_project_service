import React from 'react';
import { View, Text, Platform } from 'react-native';
import { HeaderProject } from '../../ui-elements/header';
import Spinner from '../../spinner';
import { Audio } from 'expo';
import { MusicCard } from '../../ui-elements/cards';
import musicsApi from './music';


// const SoundPlayer = require('react-native-sound');
// let sound = null;


export default class Musics extends React.Component {

    state = {
        musics: [],
        play: false
    }


    stopMusic = async () => {
        this.setState({play: false})
        await this.playObject.stopAsync();
    }

    playMusic = async (url) => {

        if(this.state.play) {
            this.stopMusic();

            return;
        } else {
            this.playObject = new Audio.Sound();

            switch(url) {
                case './musics/natan_-_nalivay.mp3':
                    await this.playObject.loadAsync(require('./musics/natan_-_nalivay.mp3'));
                    await this.playObject.playAsync();
                    this.setState({play: true})
                    break;
                case './musics/hans-zimmer_-_time.mp3':
                    await this.playObject.loadAsync(require('./musics/hans-zimmer_-_time.mp3'));
                    await this.playObject.playAsync();
                    this.setState({play: true})
                    break;
                case './musics/hans-zimmer-james-newton-howard_-_a-dark-knight.mp3':
                    await this.playObject.loadAsync(require('./musics/hans-zimmer-james-newton-howard_-_a-dark-knight.mp3'));
                    await this.playObject.playAsync();
                    this.setState({play: true})
                    break;
                case './musics/eminem_-_lose-yourself-from-8-mile-soundtrack.mp3':
                    await this.playObject.loadAsync(require('./musics/eminem_-_lose-yourself-from-8-mile-soundtrack.mp3'));
                    await this.playObject.playAsync();
                    this.setState({play: true})
                    break;
                default: return;
            }
        }
        
        
        // await Audio.Sound.createAsync(require('./musics/natan_-_nalivay.mp3'), { shouldPlaye: true });
        // uri'url music'
    }

    componentDidMount = async () => {
        this.setState({ musics: musicsApi });
    }

    state = {
        searchText: '',
        loadingMusics: false,
        musics: []
    }

    onClear() {

    }

    onSearchMusics() {

    }

    onChangeSearch = (text) => {
        this.setState({searchText: text})
    }

    render() {
        const { navigation } = this.props;
        return(
            <View>
                <HeaderProject 
                    title={'Musics'} 
                    headerColor={'#0070c0'} 
                    onPress={() => navigation.openDrawer()}
                    leftIcon='ios-menu'
                    leftColor={'white'}
                    // searchBarButton={true}
                    onChange={this.onChangeSearch}
                    textValue={this.state.searchText}
                    submitSearch={this.onSearchMusics}
                    onClear={this.onClear}
                />
                <MusicCard musics={this.state.musics} onPlay={this.playMusic} />
            </View>
        )
    }
}