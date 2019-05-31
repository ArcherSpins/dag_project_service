
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator, createAppContainer, createStackNavigator } from 'react-navigation';

import { PersonalScreen, AppScreen, CategoriesScreen, DetailsCategories } from './src';

export default createAppContainer(createBottomTabNavigator(
  {
    Personal: PersonalScreen,
    Categories:
    createStackNavigator(
    {
      Categories_screen: {
        screen: CategoriesScreen
      },
      Details_screen: {
        screen: DetailsCategories
      }
    },
    {
      initialRouteName: 'Categories_screen',
      headerMode: 'none',
    }),
    AppScreen: AppScreen
  },
  {
    tabBarOptions: {
        showLabel: false,
        tabBarVisible: false,
        style: {
            height: 0,
            width: 0
        }
    },
  }
));