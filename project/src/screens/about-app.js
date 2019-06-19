import React from 'react';
import { StyleSheet, Text, View,  ScrollView, Image, Dimensions } from 'react-native';
import Header from '../header';

class AppScreen extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <Header title="о приложении" />
        <View style={styles.content}>
            <Image source={require('../icons/icon.png')} style={styles.image} />
            <Text style={{fontSize: 18, paddingVertical: 4}}>Приложение разработано</Text>
            <Text style={{fontSize: 18, paddingVertical: 4, color: '#117ac7'}}>KaspSoft Ltd</Text>
            <Text style={{fontSize: 18, paddingVertical: 8, marginTop: 25}}>Дизайнер: Simvoliuss</Text>
            <Text style={{fontSize: 18, paddingVertical: 4}}>Заказчик: Эмран</Text>
        </View>
        <View>
            <Text style={{textAlign: 'center', fontSize: 20, paddingVertical: 20}}>2019 г.</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4'
  },
  h1: {
    fontSize: 27,
    textAlign: 'center',
    paddingVertical: 10
  },
  image: {
    width: Dimensions.get('window').width / 5 - 15,
    height: Dimensions.get('window').width / 5 - 15,
    marginBottom: 5
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
});


export { AppScreen };