import React from 'react'
import { TouchableOpacity, View, Text, StyleSheet, Dimensions } from 'react-native';
import { SearchBar } from 'react-native-elements';
import Ionicons from 'react-native-vector-icons/Ionicons'

const w = Dimensions.get('window').width;

const HeaderProject = ({
    detail,
    leftIcon,
    leftColor,
    headerColor,
    title,
    onPress,
    searchBar,
    searchBarButton,
    onChange,
    onClear,
    textValue,
    submitSearch
}) => {

const { viewStyle, textStyle, leftButtonStyle } = styles

return (
  <View>
    <View style={[viewStyle, {backgroundColor: headerColor }]}>
      {leftIcon &&
          <TouchableOpacity onPress={onPress}>
              <Ionicons name={leftIcon} style={[leftButtonStyle, { paddingLeft: detail ? 10 : 25 }]} color={leftColor} />
          </TouchableOpacity>
      }
      <Text numberOfLines={1} ellipsizeMode="tail" style={[textStyle, { paddingLeft: leftIcon ? 10 : 0 }]}>{title}</Text>
    </View>
    {
      searchBar ? <SearchBar
        placeholder="Type Here..."
        onChangeText={onChange}
        containerStyle={{
          backgroundColor: headerColor
        }}
        inputContainerStyle={{
          backgroundColor: 'white'
        }}
        inputStyle={{color: 'black'}}
        value={textValue}
        onClear={onClear}
      /> : null
    }
    {
      searchBarButton ? 
      <View style={{flexDirection: 'row'}}>
        <SearchBar
          placeholder="Type Here..."
          onChangeText={onChange}
          containerStyle={{
            backgroundColor: headerColor
          }}
          inputContainerStyle={{
            backgroundColor: 'white',
            width: w * 0.8,
            borderColor: headerColor
          }}
          inputStyle={{color: 'black'}}
          value={textValue}
          onClear={onClear}
        /> 
        <TouchableOpacity onPress={submitSearch} style={{...styles.header_submit, backgroundColor: headerColor}}>  
            <Ionicons name='ios-search' style={{fontSize: 30}} color="white" />
        </TouchableOpacity>
      </View>
      : null
    }
  </View>
)
}



const styles = StyleSheet.create({
    viewStyle: {
      flexDirection: 'row',
      justifyContent: 'center',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2},
      shadowOpacity: 0.2,
      elevation: 2,
      position: 'relative',
      height: 90,
    },
    textStyle: {
      color: '#fff',
      fontSize: 28,
      width: w - 40,
      paddingTop: 38,
    },
    leftButtonStyle: {
      paddingTop: 40,
      fontSize: 35
    },
    header: {
      width: w,
      height: 80,
      flexDirection: 'row',
      justifyContent: 'flex-end',
      padding: 10,
      alignItems: 'flex-end',
      paddingTop: 20
    },
    header_submit: {
        width: w * 0.2,
        display: 'flex',
        justifyContent: 'center',
        paddingRight: 10,
        alignItems: 'center',
        borderRadius: 0,
        borderColor: 'black',
        borderWidth: 1,
        borderLeftWidth: 0,
    }
})

export { HeaderProject }