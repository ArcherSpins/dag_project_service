import React from 'react';
import { StyleSheet, Text, View,  ScrollView } from 'react-native';
import Header from '../header';

class AppScreen extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <Header title="О приложении" />
        <Text style={styles.h1}>Заголовок</Text>
        <ScrollView>
            <Text style={styles.parag}>
                Аполлон (др.-греч. Ἀπόλλων, лат. Apollo) — в древнегреческой и древнеримской мифологиях
                 златокудрый сребролукий бог света (отсюда его прозвище Феб — «лучезарный», «сияющий»),
                 покровитель искусств, предводитель и покровитель муз, предсказатель будущего,
                бог-врачеватель, покровитель переселенцев, олицетворение мужской красоты. Один из наиболее почитаемых античных богов.
                В период поздней Античности олицетворяет Солнце.
            </Text>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  h1: {
    fontSize: 27,
    textAlign: 'center',
    paddingVertical: 10
  },
  parag: {
    paddingLeft: 10,
    paddingRight: 10,
    fontSize: 20
  }
});


export { AppScreen };