import React from 'react';
import { Text, View } from 'react-native';
import { HeaderProject } from '../../ui-elements/header';
import { Layout } from '../../ui-elements/loyout';
import { ImageCard } from '../../ui-elements/cards';
import Spinner from '../../spinner';
import ErrorBoundry from '../../error-boundry';
 

const url = 'https://api.tvmaze.com/search/shows?q=';


export default class Books extends React.Component {
    state = {
        title: 'Books',
        data: [],
        searchText: 'batman',
        loading: true,
        error: false
    }

    componentDidMount = async () => {
        try {
          const response = await fetch(url+this.state.searchText)
          const data = await response.json()
          this.setState({ data: data, loading: false })
        } catch (e) {
            this.setState({ error: true, loading: false })
        }
    }

    onGoBack = (someDataFromChildren) => {
        console.log('someDataFromChildren', someDataFromChildren)
    }

    loadBooks = async (text) => {
        try {
            const response = await fetch(url+text)
            const data = await response.json()
            this.setState({ data: data, loading: false })
          } catch (e) {
            this.setState({ error: true, loading: false })
        }
    }

    onChange = (text) => {
        this.setState({searchText: text, loading: true})
        this.loadBooks(text);
    }

    onClear = () => {
        this.loadBooks('stargate');
    }

    render() {
        const { title, data } = this.state;
        const { navigation } = this.props;
        if(this.state.error) {
            return <ErrorBoundry />
        }
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
                    textValue={this.state.searchText}
                    onClear={this.onClear}
                />
                <Layout>
                    { 
                        this.state.loading ? <Spinner />
                        :
                        data.map(item => (
                        <ImageCard
                            data={item.show}
                            key={item.show.id}
                            onPress={() => navigation.navigate('BOOKS_DETAILS', ({ show: item.show, onGoBack: this.onGoBack}))}
                        />
                    ))}
                </Layout>
            </View>
        )
    }
            
}