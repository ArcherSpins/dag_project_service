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
        const { musics } = this.state;
        const newMusics = musics.map(music => {
            return {
                ...music,
                play: false
            }
        });
        // element.play = false;
        this.setState({
            play: false,
            musics: newMusics
        })
        await this.playObject.stopAsync();
    }

    playMusic = async (obj) => {
        const { url, id } = obj;
        const element = this.state.musics.find(el => el.id === id);
        const idx = this.state.musics.findIndex(el => el.id === id);

        if(this.state.play) {
            await this.stopMusic();
            return;
        } 

        this.playObject = new Audio.Sound();
            const { musics } = this.state;

            switch(url) {
                case './musics/natan_-_nalivay.mp3':
                    await this.playObject.loadAsync(require('./musics/natan_-_nalivay.mp3'));
                    await this.playObject.playAsync();
                    element.play = true;
                    this.setState({
                        play: true,
                        musics: [
                            ...musics.slice(0, idx),
                            element,
                            ...musics.slice(idx + 1)
                        ]
                    })
                    break;
                case './musics/hans-zimmer_-_time.mp3':
                    await this.playObject.loadAsync(require('./musics/hans-zimmer_-_time.mp3'));
                    await this.playObject.playAsync();
                    element.play = true;
                    this.setState({
                        play: true,
                        musics: [
                            ...musics.slice(0, idx),
                            element,
                            ...musics.slice(idx + 1)
                        ]
                    })
                    break;
                case './musics/hans-zimmer-james-newton-howard_-_a-dark-knight.mp3':
                    await this.playObject.loadAsync(require('./musics/hans-zimmer-james-newton-howard_-_a-dark-knight.mp3'));
                    await this.playObject.playAsync();
                    element.play = true;
                    this.setState({
                        play: true,
                        musics: [
                            ...musics.slice(0, idx),
                            element,
                            ...musics.slice(idx + 1)
                        ]
                    })
                    break;
                case './musics/eminem_-_lose-yourself-from-8-mile-soundtrack.mp3':
                    await this.playObject.loadAsync(require('./musics/eminem_-_lose-yourself-from-8-mile-soundtrack.mp3'));
                    await this.playObject.playAsync();
                    element.play = true;
                    this.setState({
                        play: true,
                        musics: [
                            ...musics.slice(0, idx),
                            element,
                            ...musics.slice(idx + 1)
                        ]
                    })
                    break;
                case './musics/skylar-grey_-_words.mp3':
                    await this.playObject.loadAsync(require('./musics/skylar-grey_-_words.mp3'));
                    await this.playObject.playAsync();
                    element.play = true;
                    this.setState({
                        play: true,
                        musics: [
                            ...musics.slice(0, idx),
                            element,
                            ...musics.slice(idx + 1)
                        ]
                    })
                    break;
                default: return;
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

    onSearchMusics(text) {
        let newArray = [];
        for(let i in musicsApi) {
            if(musicsApi[i].title.toUpperCase().indexOf(text.toUpperCase()) !== -1) {
                newArray.push(musicsApi[i]);
            }
        }

        this.setState({musics: newArray, loadingMusics: false})
    }

    onChangeSearch = (text) => {
        this.setState({searchText: text, loadingMusics: true})
        this.onSearchMusics(text);
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
                    searchBar={true}
                    onChange={this.onChangeSearch}
                    textValue={this.state.searchText}
                    onClear={this.onClear}
                />
                {
                    this.state.loadingMusics ? <Spinner />
                    :
                    <MusicCard musics={this.state.musics} onPlay={this.playMusic} />
                }
            </View>
        )
    }
}