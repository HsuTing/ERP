'use strict';

import React from 'react';
import {mount} from 'enzyme';

import Dashboard from 'components/dashboard/Dashboard';

export default location => {
  const router = {
    isServer: true,
    location,
    context: {}
  };
  const i18n = {
    lang: 'en-us',
    defaultData: require('./../../../../public/i18n/dashboard/en-us.json')
  };

  return mount(
    <Dashboard router={router}
      i18n={i18n}
    />
  );
};
