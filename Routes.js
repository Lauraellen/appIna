import 'react-native-gesture-handler';
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import {createDrawerNavigator} from 'react-navigation-drawer';
import React, { Component } from 'react';
import App from "./App";
import Reset from "./Reset";
import New from "./New";
import Dashboard from "./Dashboard";
import CustomSidebarMenu from './CustomSideBarMenu';
import { 
  View,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native";
import Aulas from './Aulas';


const Routes = createStackNavigator({
  First: {
    screen: App,
    navigationOptions: ({ navigation }) => ({
      title: '',
      headerStyle: {
        backgroundColor: '#FF9800',
      },
      headerTintColor: '#fff',
      headerTitleAlign: 'center',
    }),
  
  },
  Reset: {
    screen: Reset,
    navigationOptions: ({ navigation }) => ({
      title: 'Esqueci minha senha',
      headerStyle: {
        backgroundColor: '#FF9800',
      },
      headerTintColor: '#fff',
      headerTitleAlign: 'center',
    }),
  },

  New: {
    screen: New,
    navigationOptions: ({ navigation }) => ({
      title: 'Criar Conta',
      headerStyle: {
        backgroundColor: '#FF9800',
      },
      headerTintColor: '#fff',
      headerTitleAlign: 'left',
    }),
  },

  Dashboard: {
    screen: Dashboard,
    navigationOptions: ({ navigation }) => ({
      title: 'InaHelp',
      headerStyle: {
        backgroundColor: '#FF9800',
        
      },
      headerTintColor: '#fff',
      
    }),
  },

  Aulas: {
    screen: Aulas,
    navigationOptions: ({ navigation }) => ({
      title: 'Ofereça Aulas!',
      headerStyle: {
        backgroundColor: '#FF9800',
        
      },
      headerTintColor: '#fff',
      
    }),
  },
});

export default createAppContainer(Routes);