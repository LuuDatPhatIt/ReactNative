import React, {Component} from 'react';


//import react-redux
  // import {Provider} from 'react-redux';

//import store ( chưa rút gọn)
  // import store from './src/Redux/store';
  // import Main from './src/Controller/Main';

//import store (rút gọn)
  // import store from './src2/Redux/store';
  // import Main from './src2/Controller/Main';

//import App bán hàng
  // import AppMain from './src3/components/AppMain';

//import App login
import AppLogin from './src4/AppLogin';

export default class App extends Component {
  render() {
    return (
      // <Provider store={store}>
      //   <Main />
      // </Provider>
      <AppLogin />
    );
  }
}
