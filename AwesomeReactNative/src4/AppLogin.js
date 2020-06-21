import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

// import login
import Login from './login/Login';
import SuccessLogin from './login/SuccessLogin';

const Stack = createStackNavigator();

export class AppLogin extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="SuccessLogin" component={SuccessLogin} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default AppLogin;
