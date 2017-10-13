'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

import Login from 'components/login/Login';
import redux from 'constants/redux/login';

const router = {
  isServer: false
};
const i18n = {
  lang, // eslint-disable-line no-undef
  defaultData: langData // eslint-disable-line no-undef
};

(() => {
  ReactDOM.render(
    <Login redux={redux}
      router={router}
      i18n={i18n}
    />,
    document.getElementById('root')
  );
})();
