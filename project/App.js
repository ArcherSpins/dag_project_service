
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator, createAppContainer, createStackNavigator } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { PersonalScreen, AppScreen, CategoriesScreen, DetailsPersonals, DetailsCategories } from './src';

export default createAppContainer(createBottomTabNavigator(
  {
    Personal:
        createStackNavigator(
        {
          Personal_screen: {
            screen: PersonalScreen
          },
          Details_screen: {
            screen: DetailsPersonals
          }
        },
        {
          initialRouteName: 'Personal_screen',
          headerMode: 'none',
        }),
    Categories:
        createStackNavigator(
        {
          Categories_screen: {
            screen: CategoriesScreen
          },
          Details_categories: {
            screen: DetailsCategories
          },
          full_details_categories: {
            screen: DetailsPersonals
          }
        },
        {
          initialRouteName: 'Categories_screen',
          headerMode: 'none',
        }),
    AppScreen: AppScreen
  },
  {
    navigationOptions: ({ navigation }) => ({
        tabBarLabel: '',
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let IconComponent = Ionicons;
        let iconName;
        if (routeName === 'Personal') {
          iconName = 'ios-play';
        } else if (routeName === 'Categories') {
          iconName = 'ios-arrow-back';
        } else if (routeName === 'AppScreen') {
          iconName = 'ios-arrow-back';
        }

        // You can return any component that you like here!
        return <IconComponent name={iconName} size={25} color='white' />;
      },
    }),
    tabBarOptions: {
        activeBackgroundColor: '#cc3916',
        inactiveBackgroundColor: '#FD4D01'
    }
  }
));