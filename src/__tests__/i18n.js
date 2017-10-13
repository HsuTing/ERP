'use strict';

import path from 'path';

const getData = name => require(path.resolve(__dirname, './../../public/i18n', `${name}.json`));

describe('i18n', () => {
  it('# login', () => {
    expect(Object.keys(getData('login/en-us')))
      .toMatchObject(Object.keys(getData('login/zh-tw')));
  });
});
