import React from 'react';
import { View, Text, Dimensions, StyleSheet, TouchableOpacity  } from 'react-native';
import { SearchBar } from 'react-native-elements';
import Icon from 'react-native-vector-icons/AntDesign';

const w = Dimensions.get('window').width;


export default ({
    title,
    button,
    searchBar,
    onChange,
    textValue,
    onClear
}) => {
    return(
        <View style={styles.header}>
            <View style={styles.header_title}>
                <Text style={styles.title}>{title}</Text>
            </View>

            {
              button ?
              <View style={{flexDirection: 'row'}}>
                <SearchBar
                  placeholder="Найти..."
                  onChangeText={onChange}
                  containerStyle={{
                    backgroundColor: "white",
                    width: w - 40,
                  }}
                  inputContainerStyle={{
                    backgroundColor: 'white',
                  }}
                  searchIcon={false}
                  onClear={onClear}
                  inputStyle={{color: 'black', borderColor: "white"}}
                  value={textValue}
                />
                {
                    button ?
                    <TouchableOpacity activeOpacity={1} style={{alignItems: 'center', justifyContent: 'center', borderTopWidth: 1, borderBottomWidth: 1, borderColor: 'black', width: 40}}>
                         <Icon size={25} color="gray" name="search1" />
                     </TouchableOpacity>
                     : null
                }
              </View>

                : <SearchBar
                    placeholder="Найти..."
                    onChangeText={onChange}
                    containerStyle={{
                      backgroundColor: "white",
                      borderColor: "white",
                      width: w,
                      borderWidth: 0
                    }}
                    inputContainerStyle={{
                      backgroundColor: 'white',
                      borderColor: "white",
                      borderWidth: 0
                    }}
                    searchIcon={false}
                    onClear={onClear}
                    inputStyle={{color: 'black'}}
                    value={textValue}
                  />
            }
        </View>
    );
}


const styles = StyleSheet.create({
    header: {
        width: '100%',
        backgroundColor: 'white'
    },
    nav: {
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    textButton:{
        color: 'white',
    },
    title: {
        color: 'white',
        textAlign: 'center',
        fontSize: 25
    },
    header_title: {
        backgroundColor: "#FD4D01",
        width: '100%',
        paddingVertical: 10,
        paddingTop: 30
    }
})