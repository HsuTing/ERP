'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

import Login from 'components/login/Login';
import redux from 'constants/redux/login';

const router = {
  isServer: false
};

(() => {
  ReactDOM.render(
    <Login redux={redux}
      router={router}
    />,
    document.getElementById('root')
  );
})();
