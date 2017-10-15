'use strict';

import 'fetch-everywhere';

export default url => {
  it('# change language', async () => {
    const server = require('./../../../server').default;
    const {wrapper} = global;

    expect(wrapper.find('ChangeLanguage').children().children().last().text()).toBe('中文');
    wrapper.find('ChangeLanguage').children().children().last().simulate('click');

    await fetch(url);
    server.close();

    expect(wrapper.find('ChangeLanguage').children().children().first().text()).toBe('English');
    wrapper.find('ChangeLanguage').children().children().first().simulate('click');

    expect(wrapper.find('ChangeLanguage').children().children().last().text()).toBe('中文');
    wrapper.find('ChangeLanguage').children().children().last().simulate('click');
  });
};
