
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator, createAppContainer, createStackNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/SimpleLineIcons';

import { PersonalScreen, AppScreen, CategoriesScreen, DetailsPersonals, DetailsCategories } from './src';



const Personal = createStackNavigator(
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
 });

Personal.navigationOptions = {
  tabBarIcon: ({ focused, horizontal, tintColor }) => {
      return <Icon name='people' size={28} color='white' />;
  }
};

const Categories = createStackNavigator(
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
});


Categories.navigationOptions = {
  tabBarIcon: ({ focused, horizontal, tintColor }) => {
      return <Icon name='list' size={28} color='white' />;
  }
};

AppScreen.navigationOptions = {
  tabBarIcon: ({ focused, horizontal, tintColor }) => {
      return <Icon name='info' size={28} color='white' />;
  }
};


export default createAppContainer(createBottomTabNavigator(
  {
    Personal: Personal,
    Categories: Categories,
    AppScreen: AppScreen
  },
  {
    tabBarOptions: {
        activeBackgroundColor: '#02518b',
        inactiveBackgroundColor: '#117ac7',
        showIcon: true,
        showLabel: false,
    }
  }
));