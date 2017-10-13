'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

import Dashboard from 'components/dashboard/Dashboard';

const router = {
  isServer: false,
  basename: '/dashboard/'
};
const i18n = {
  lang, // eslint-disable-line no-undef
  defaultData: langData // eslint-disable-line no-undef
};

(() => {
  ReactDOM.render(
    <Dashboard router={router}
      i18n={i18n}
    />,
    document.getElementById('root')
  );
})();
