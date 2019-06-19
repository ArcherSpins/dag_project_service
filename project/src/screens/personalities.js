import React from 'react';
import { StyleSheet, Text, View, ScrollView, ActivityIndicator } from 'react-native';
import { Header, ListPersonal } from '../ui-elements';

const defaultData = {
    "personals": [
        {
          "title": "СУЛЕЙМАН СТАЛЬСКИЙ",
          "id": 8,
          "img": "http://person.lezgikim.ru/wp-content/uploads/2019/05/main.jpg"
        },
         {
           "title": "Мухаммад Ярагский",
           "id": 5,
           "img": "http://person.lezgikim.ru/wp-content/uploads/2019/05/9138-300x236.jpg"
         }
    ]
}


class PersonalScreen extends React.Component {

    static navigationOptions = {
        title: 'Welcome',
        tabBarLabel: 'Home!',
      };

    state = {
        searchText: '',
        personal: [],
        oldPersonal: [],
        loading: true
    }

    componentDidMount = async () => {
        fetch('http://person.lezgikim.ru/api.php?do=getPostList&key=156dfdd335hjkodS')
        .then(res => res.json())
        .then(data => {
            this.setState({oldPersonal: data, personal: data, loading: false})
         })
         .catch(err => console.log(err))
    }

    updateLocal = (data) => {
         fetch('http://10.0.2.2:3000/personals', {
            method: 'PUT',
            headers: {
                  'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(response => {
            fetch('http://10.0.2.2:3000/personals')
            .then(res => res.json())
            .then(dataPers => {
                if(dataPers.length > 0) {
                    this.setState({oldPersonal: dataPers, personal: dataPers, loading: false})
                }
                else this.setState({oldPersonal: defaultData, personal: defaultData, loading: false})
            })
        })
     }

    onChangeSearch = (text) => {
        if(text === '') {
            this.setState({personal: this.state.oldPersonal, searchText: text});
        } else {
            const newArray = this.state.personal.filter(pers => pers.title.toUpperCase().indexOf(text.toUpperCase()) !== -1);
            this.setState({personal: newArray, searchText: text});
        }
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
                <Header title="личности" button={true}
                    searchBar={true} textValue={this.state.searchText} onChange={this.onChangeSearch} submitSearch={this.submitSearch} onClear={this.onClear} />
                <ScrollView style={{backgroundColor: '#efefef'}}>
                    {
                        this.state.loading ?
                        <View style={{paddingTop: 20}}>
                            <ActivityIndicator size="large" color='#00a4db' />
                        </View>
                        :
                        <ListPersonal navigate={this.props.navigation.navigate} personal={this.state.personal} />
                    }
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4'
  },
});


export { PersonalScreen };