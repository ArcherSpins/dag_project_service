import React from 'react';
import { View, Text, Dimensions, StyleSheet, TouchableOpacity  } from 'react-native';
import { SearchBar } from 'react-native-elements';

const w = Dimensions.get('window').width;


export default ({
    activeScreen,
    searchBar,
    onChange,
    textValue,
    onClear,
    navigate
}) => {
    return(
        <View style={styles.header}>
            <View style={styles.nav}>
                <TouchableOpacity style={styles.buttons} onPress={() => navigate('Personal')}>
                    <Text style={styles.textButton} >Личности</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttons} onPress={() => navigate('Categories')}>
                    <Text style={styles.textButton}>Категории</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttons} onPress={() => navigate('AppScreen')}>
                    <Text style={styles.textButton}>О приложении</Text>
                </TouchableOpacity>
            </View>

            {
              searchBar ? <SearchBar
                  placeholder="Найти..."
                  onChangeText={onChange}
                  containerStyle={{
                    backgroundColor: '#00a4db'
                  }}
                  inputContainerStyle={{
                    backgroundColor: 'white',
                    borderColor: '#00a4db'
                  }}
                  onClear={onClear}
                  inputStyle={{color: 'black'}}
                  value={textValue}
                />
                : null
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
    },
    buttons: {
        width: w/3,
        height: 70,
        borderColor: 'gray',
        borderWidth: 0.5,
        borderTopWidth: 0,
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingBottom: 10,
        backgroundColor: '#00a4db',
        
    },
    textButton:{
        color: 'white',
    }
})