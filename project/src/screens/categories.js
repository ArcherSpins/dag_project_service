import React from 'react';
import { StyleSheet, Text, View, ScrollView, ActivityIndicator, Animated, Easing, Dimensions } from 'react-native';
import { CategoriesList } from '../ui-elements';
import Header from '../header';


class CategoriesScreen extends React.Component {

    static navigationOptions = {
        tabBarVisible: false,
    }

    state = {
        categories: [],
        sellAnim: new Animated.Value(0),
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

    componentWillMount() {
        Animated.sequence([
            Animated.timing(this.state.sellAnim, {
                toValue: 1,
                duration: 1000,
                easing: Easing.easeOutCubic
            })
        ]).start(() => {

        })
    }


    render() {
        return (
            <View style={styles.container}>

                <Header title="категории" />
                <ScrollView>
                    {
                        this.state.loading ?
                        <View style={{paddingTop: 20}}>
                            <ActivityIndicator size="large" color='#00a4db' />
                        </View>
                        :
                        <Animated.View
                            style={{
                                opacity: this.state.sellAnim,
                                left: this.state.sellAnim.interpolate({
                                    inputRange: [0,1],
                                    outputRange: [-Dimensions.get('window').width, 0]
                                })
                            }}
                        >
                            <CategoriesList navigate={this.props.navigation.navigate} categories={this.state.categories} />
                        </Animated.View>
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