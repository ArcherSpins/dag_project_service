import React from 'react';
import { StyleSheet, Text, View, ScrollView, ActivityIndicator } from 'react-native';
import { CategoriesList } from '../ui-elements';
import Header from '../header';


class CategoriesScreen extends React.Component {

    static navigationOptions = {
        tabBarVisible: false,
    }

    state = {
        categories: [],
        loading: true
    }

    componentDidMount = () => {

        fetch('http://person.lezgikim.ru/api.php?do=get%D0%A1ategories&key=156dfdd335hjkodS')
        .then(res => res.json())
        .then(data => {
            this.setState({categories: data, loading: false})
        })
        .catch(err => console.log(err))
    }


    render() {
        return (
            <View style={styles.container}>

                <Header title="Категории" />
                <ScrollView>
                    {
                        this.state.loading ?
                        <View style={{paddingTop: 20}}>
                            <ActivityIndicator size="large" color='#00a4db' />
                        </View>
                        :
                        <CategoriesList navigate={this.props.navigation.navigate} categories={this.state.categories} />
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


export { CategoriesScreen };