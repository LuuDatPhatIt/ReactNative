import React, {Component} from 'react';
import {Text, View} from 'react-native';

import Main from './Main/Main';
import Authentication from './Authentication/Authentication';
import OrderHistory from './OrderHistory/OrderHistory';
import ChangeInfo from './ChangeInfo/ChangeInfo';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();
export class AppMain extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Main" component={Main} />
          <Stack.Screen name="Authentication" component={Authentication} />
          <Stack.Screen name="OrderHistory" component={OrderHistory} />
          <Stack.Screen name="ChangeInfo" component={ChangeInfo} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default AppMain;
