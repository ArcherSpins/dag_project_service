import React from 'react';
import { StyleSheet, Text, View, ScrollView, ActivityIndicator, } from 'react-native';
import { Header, ListPersonal } from '../ui-elements';

const personalApi = [
    {
        name: 'Magomed',
        lastName: 'Megomedov',
        fullName: 'Magomed Magomedov',
        id: 1
    },
    {
        name: 'Shamil',
        lastName: 'Megomedov',
        fullName: 'Shamil Magomedov',
        id: 2
    },
    {
        name: 'Emran',
        lastName: 'Megomedov',
        fullName: 'Emran Magomedov',
        id: 3
    },
    {
        name: 'Ahmed',
        lastName: 'Megomedov',
        fullName: 'Ahmed Magomedov',
        id: 4
    }
]



class PersonalScreen extends React.Component {



    state = {
        searchText: '',
        personal: [],
        loading: true
    }

    componentDidMount = () => {
        fetch('http://person.lezgikim.ru/api.php?do=getPostList&key=156dfdd335hjkodS')
        .then(res => res.json())
        .then(data => {
            this.setState({personal: data, loading: false});
        })
        .catch(err => console.log(err))
    }

    onChangeSearch = (text) => {
        const newArray = this.state.personal.filter(pers => pers.title.toUpperCase().indexOf(text.toUpperCase()) !== -1);
        this.setState({personal: newArray, searchText: text});
    }


    onClear = () => {
        fetch('http://person.lezgikim.ru/api.php?do=getPostList&key=156dfdd335hjkodS')
                 .then(res => res.json())
                 .then(data => {
                     this.setState({personal: data, loading: false});
                 })
                 .catch(err => console.log(err))
    }

    render() {

        return (
            <View style={styles.container}>
                <Header navigate={this.props.navigation.navigate} activeScreen="Personal"
                    searchBar={true} textValue={this.state.searchText} onChange={this.onChangeSearch} submitSearch={this.submitSearch} onClear={this.onClear} />
                <ScrollView>
                    {
                        this.state.loading ?
                        <View style={{paddingTop: 20}}>
                            <ActivityIndicator size="large" color='#00a4db' />
                        </View>
                        :
                        <ListPersonal personal={this.state.personal} />
                    }
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});


export { PersonalScreen };