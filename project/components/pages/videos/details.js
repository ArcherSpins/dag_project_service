import React, { PureComponent } from 'react'
import { View, ScrollView, Text, StyleSheet, Dimensions } from 'react-native'
import { HeaderProject } from '../../ui-elements/header'
import { ImageBigCard } from '../../ui-elements/cards'

const w = Dimensions.get('window').width

export default class DelailsScreen extends PureComponent {
  componentWillUnmount() {
    const { onGoBack } = this.props.navigation.state.params
    onGoBack && onGoBack('Hello from children')
  }

  render() {
    const { show } = this.props.navigation.state.params
    const { image, name, summary} = show
    const { navigation } = this.props
    const data = { image, name }
    const { container, sub, h1, h2 } = styles
    
    return (
      <View style={container}>
        <HeaderProject
          detail
          title={name}
          onPress={() => navigation.goBack()}
          leftIcon='ios-arrow-back'
          headerColor={'#0070c0'}
          leftColor={'white'}
        />
        <ScrollView>
          <View style={sub}>
            <ImageBigCard data={data} />
            <Text style={h1}>{name.toUpperCase()}</Text>
            <Text style={h2}>{summary.replace(/<[^>]+>/g, '')}</Text>
          </View>
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white'
  },
  sub: {
    flex: 1,
    alignItems: 'center',
    marginBottom: 150,
    backgroundColor: 'white'
  },
  cover: {
    width: w,
    height: w * 1.5,
    borderRadius: 10
  },
  h1: {
    fontSize: 30,
    padding: 15,
    textAlign: 'center'
  },
  h2: {
    fontSize: 15,
    textAlign: 'center',
    color: 'grey',
    paddingHorizontal: 15
  }
})