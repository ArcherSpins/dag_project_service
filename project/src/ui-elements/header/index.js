import React from 'react';
import { View, Text, Dimensions, StyleSheet, TouchableOpacity, TextInput  } from 'react-native';
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

                <TextInput onChangeText={onChange} value={textValue} placeholder="Поиск..." style={{width: w - 40, paddingVertical: 10, paddingLeft: 20}} placeholderTextColor="black" />
                {
                    button ?
                    <TouchableOpacity activeOpacity={1} style={{alignItems: 'center', justifyContent: 'center', width: 40}}>
                         <Icon size={23} color="black" name="search1" />
                     </TouchableOpacity>
                     : null
                }
              </View>

                : <SearchBar
                    placeholder="Поиск..."
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
                    inputStyle={{color: 'black', borderWidth: 0}}
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
        backgroundColor: "#117ac7",
        width: '100%',
        paddingVertical: 10,
        paddingTop: 40
    }
})