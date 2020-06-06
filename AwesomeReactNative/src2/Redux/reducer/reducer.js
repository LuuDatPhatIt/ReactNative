import {combineReducers} from 'redux';

import numberone from './numberone';
import numbertwo from './numbertwo';

const reducer = combineReducers({
  numberon: numberone,
  numbertw: numbertwo,
});

export default reducer;
