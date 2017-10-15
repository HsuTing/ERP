'use strict';

import React from 'react';
import {mount} from 'enzyme';

import Login from 'components/login/Login';
import redux from 'constants/redux/login';

import changeLanguage from './utils/changeLanguage';
import input from './utils/input';

const router = {
  isServer: true,
  location: '/register/',
  context: {}
};
const i18n = {
  lang: 'en-us',
  defaultData: require('./../../../public/i18n/login/en-us.json')
};

global.wrapper = mount(
  <Login redux={redux}
    router={router}
    i18n={i18n}
  />
);

describe('Login', () => {
  changeLanguage('http://localhost:8000/public/i18n/login/zh-tw.json');
  input();

  it('# submit', () => {
    const {wrapper} = global;

    wrapper.find('Button').simulate('click');
  });
});
