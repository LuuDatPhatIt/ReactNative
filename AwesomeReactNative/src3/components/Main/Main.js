import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Cart from './Shop/Cart/Cart';
import Contact from './Shop/Contact/Contact';
import Home from './Shop/Home/Home';
import Search from './Shop/Search/Search';
const Tab = createBottomTabNavigator();
export class Main extends Component {
  render() {
    return (
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Cart" component={Cart} />
        <Tab.Screen name="Search" component={Search} />
        <Tab.Screen name="Contact" component={Contact} />
      </Tab.Navigator>
    );
  }
}

export default Main;
