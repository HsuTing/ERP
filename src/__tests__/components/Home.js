'use strict';

import renderDashboard from './utils/renderDashboard';
import changeLanguage from './utils/changeLanguage';

global.wrapper = renderDashboard('/');

describe('Home', () => {
  changeLanguage('http://localhost:8000/public/i18n/dashboard/zh-tw.json');

  it('# show menu', () => {
    const {wrapper} = global;
    const getDisplay = () => wrapper.find('aside').parents().first().prop('style').display || '';

    expect(getDisplay()).toBe('none');

    wrapper.find('header').find('svg').simulate('click');

    expect(getDisplay()).toBe('');
  });

  it('# Link click', () => {
    global.wrapper.find('Link').first().simulate('click');
  });
});
