import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Login from './src/pages/Login';
import configCard from './src/pages/configCard'
import Home from './src/pages/Home'
import payScreen from './src/pages/payScreen'

const Navigator = createSwitchNavigator({
  Login: {
    screen: Login
  },
  payScreen: {
    screen: payScreen
  },
  Home: {
    screen: Home
  },
  configCard: {
    screen: configCard
  },

}
)
export default createAppContainer(Navigator);
