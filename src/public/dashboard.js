'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

import Dashboard from 'components/dashboard/Dashboard';

const router = {
  isServer: false,
  basename: '/dashboard/'
};

(() => {
  ReactDOM.render(
    <Dashboard router={router} />,
    document.getElementById('root')
  );
})();
