import React, {Component} from 'react';
import Main from './src/Controller/Main';

//import react-redux
import {Provider} from 'react-redux';

import store from './src/Redux/store';
export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Main />
      </Provider>
    );
  }
}
