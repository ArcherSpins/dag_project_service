import React from 'react'
import { Image, View, StyleSheet, Dimensions } from 'react-native'
const w = Dimensions.get('window').width;

const ImageBigCard = ({ data }) => {
  const { container, sub, cover } = styles
  const { image } = data
  const img = image === null ? 'https://fcrmedia.ie/wp-content/themes/fcr/assets/images/default.jpg' : `https${image.medium.slice(4)}`
  return (
    <View style={container}>
      <View style={sub}>
        <Image style={cover} source={{ uri: img}} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20
  },
  sub: {
    shadowColor: '#000',
    borderRadius: 10,
    backgroundColor: 'white',
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 5},
    shadowOpacity: 0.4
  },
  cover: {
    borderRadius: 10,
    width: w / 1.67,
    height: w * 0.9
  }
})

export { ImageBigCard }