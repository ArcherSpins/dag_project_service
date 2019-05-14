import React from 'react';
import { Text, View, StyleSheet, Dimensions, WebView, Modal, TouchableOpacity, ScrollView } from 'react-native';
import { HeaderProject } from '../../ui-elements/header';
import { CardComponent } from '../../ui-elements/cards';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Spinner from '../../spinner';
import youtube from './api';

const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;

const modalVideo = ({displayModal, selectedVideo}, onCloseModal) => {
    const { id, snippet } = selectedVideo;
    const url = `https://www.youtube.com/embed/${id.videoId}`;
    const { title } = snippet;
    return(
        <Modal
          animationType="fade"
          transparent={true}
          overFullScreen={true}
          visible={displayModal}
          onRequestClose={onCloseModal}
          >
            <View style={styles.container_modal}>
                <View style={styles.modal}>
                    <WebView
                        source={{uri: url}}
                        style={styles.modal}
                    />
                    <Text style={{textAlign: 'center', color: 'white', fontSize: 20, marginTop: 20}}>{title}</Text>
                </View>
                <TouchableOpacity
                    style={{backgroundColor: 'tomato', position: 'absolute', left: w * 0.88, top: h / 5, width: 30, height: 30, borderRadius: 4, alignItems: 'center', justifyContent: 'center'}}
                    onPress={onCloseModal}
                >
                    <Ionicons name="ios-close" size={30} color="white" />
                </TouchableOpacity>
            </View>
        </Modal>
    )
}


export default class Videos extends React.Component {
    state = {
        displayModal: false,
        selectedVideo: {},
        videos: [],
        loadingVideos: true,
        searchText: ''
    }

    componentDidMount = async () => {
        const data = await youtube.get('/search', {
            params: {
                q: 'cars'
            }
        })
        
        this.setState({videos: data.data.items, loadingVideos: false})
    }

    onCloseModal = () => {
        this.setState({displayModal: false})
    }

    onOpenModal = (data) => {
        this.setState({displayModal: true, selectedVideo: data})
    }

    onChangeSearch = (text) => {
        this.setState({searchText: text, loadingVideos: true})
    }

    onSearchVideos = async () => {
        const data = await youtube.get('/search', {
            params: {
                q: this.state.searchText
            }
        })

        this.setState({videos: data.data.items, loadingVideos: false})
    }

    onClear = () => {
        // this.setState({searchText: 'cars'})
        // this.onSearchVideos();
    }

    render() {
        const { navigation } = this.props;

        return(
            <View>
                <HeaderProject 
                    title={'Videos'} 
                    headerColor={'#0070c0'} 
                    onPress={() => navigation.openDrawer()}
                    leftIcon='ios-menu'
                    leftColor={'white'}
                    searchBarButton={true}
                    onChange={this.onChangeSearch}
                    textValue={this.state.searchText}
                    submitSearch={this.onSearchVideos}
                    onClear={this.onClear}
                />
                <ScrollView>
                    <View style={styles.container_content}>
                        {
                            this.state.loadingVideos ? <Spinner />
                            :
                            <CardComponent onOpenModal={this.onOpenModal} videos={this.state.videos} />
                            
                        }
                    </View>
                </ScrollView>
                {
                   this.state.displayModal ? modalVideo(this.state, this.onCloseModal) : null
                }
            </View>
        )
    }
            
}

const styles = StyleSheet.create({
    container_modal: {
        width: w,
        height: h,
        position: 'absolute',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.6)'
    },
    container_content: {
        paddingTop: 20
    },
    modal: {
        height: w * 0.70,
        width: w * 0.9
    }
})