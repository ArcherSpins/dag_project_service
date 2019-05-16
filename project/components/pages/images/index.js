import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { HeaderProject } from '../../ui-elements/header';
import { CardImg } from '../../ui-elements/cards';
import Spinner from '../../spinner';
import axios from 'axios';


const KEY = '22b0f9c159f07aad8326a8a2a5de7372a5359375e488015ff74f14830bb2e3b2';


export default class Images extends React.Component {

    state = {
        searchText: '',
        title: 'Images',
        loading: true,
        images: [],
        error: false
    }


    componentDidMount = () => {
       axios.get('https://api.unsplash.com/search/photos', {
            params: {
                query: 'cars'
            },
            headers: {
                Authorization: `Client-ID ${KEY}`
            }
        }).then(response => {
            this.setState({images: response.data.results, loading: false});
        }).catch(err => this.setState({error: true}));
    }

    onChange = async (text) => {
        this.setState({loading: true, searchText: text});
        axios.get('https://api.unsplash.com/search/photos', {
            params: {
                query: text
            },
            headers: {
                Authorization: `Client-ID ${KEY}`
            }
        }).then(response => {
            this.setState({images: response.data.results, loading: false});
        }).catch(err => this.setState({error: true}));
    }

    onClear = () => {
        this.onChange('cars')
    }

    render() {
        const { searchText, title } = this.state;
        const { navigation } = this.props;

        return(
            <View>
                <HeaderProject 
                    title={title} 
                    headerColor={'#0070c0'}      
                    onPress={() => navigation.openDrawer()}
                    leftIcon='ios-menu'
                    leftColor={'white'}
                    searchBar={true}
                    onChange={this.onChange}
                    textValue={searchText}
                    onClear={this.onClear}
                />
                <ScrollView>
                    <View style={styles.container}>
                        {
                            this.state.loading ? <Spinner /> 
                            :
                            this.state.images.map((obj, i) => (<CardImg key={i} {...obj} />))
                        }
                    </View>
                </ScrollView>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingBottom: 160,
        paddingTop: 20,
        flexWrap: 'wrap',
    }
})