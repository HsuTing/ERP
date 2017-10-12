'use strict';

import {combineReducers} from 'redux';
import {createLogger} from 'redux-logger';
import {formReducer} from 'cat-components/lib/input-redux';

const middleware = (
  process.env.NODE_ENV === 'production' ?
    {} : {
      enhancer: createLogger({collapsed: true})
    }
);

export default {
  reducer: combineReducers(formReducer),
  ...middleware
};
