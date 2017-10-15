'use strict';

import fetch from 'fetch-everywhere';

import loginPages from 'constants/pages/login';
import dashboardPages from 'constants/pages/dashboard';

describe('pages', () => {
  let server = null;
  beforeAll(() => {
    server = require('./../server').default;
  });

  [].concat(loginPages)
    .concat(dashboardPages.map(({path}) => ({path: `/dashboard${path}`})))
    .forEach(({path}) => {
    it(path, () => expect(
      fetch(`http://localhost:8000${path}`)
        .then(res => res.status)
    ).resolves.toBe(200));
  });

  afterAll(() => {
    server.close();
  });
});
