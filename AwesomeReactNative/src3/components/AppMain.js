import React, {Component} from 'react';
import {Text, View} from 'react-native';

import Main from './Main/Main';
import Authentication from './Authentication/Authentication';
import OrderHistory from './OrderHistory/OrderHistory';
import ChangeInfo from './ChangeInfo/ChangeInfo';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
export class AppMain extends Component {
  render() {
    return (
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="Home">
          <Drawer.Screen name="Main" component={Main} />
          <Drawer.Screen name="Authentication" component={Authentication} />
          <Drawer.Screen name="OrderHistory" component={OrderHistory} />
          <Drawer.Screen name="ChangeInfo" component={ChangeInfo} />
        </Drawer.Navigator>
      </NavigationContainer>
    );
  }
}

export default AppMain;
