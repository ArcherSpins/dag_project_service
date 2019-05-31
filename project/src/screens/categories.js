import React from 'react';
import { StyleSheet, Text, View, ScrollView, ActivityIndicator } from 'react-native';
import { Header, CategoriesList } from '../ui-elements';


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
                <Header navigate={this.props.navigation.navigate} activeScreen="Personal" />
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
    flex: 1
  },
});


export { CategoriesScreen };