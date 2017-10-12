'use strict';

import React from 'react';
import {mount} from 'enzyme';
import relayData from 'cat-middleware/lib/koa-relay-data';

import Index from 'components/Index';
import indexQuery, {variables as indexVariables} from 'constants/query/indexQuery';
import {fetchStore} from 'utils/environment';

describe('Index', () => {
  beforeAll(async () => {
    const server = require('./../../server').default;
    const ctx = {};

    await relayData('http://localhost:8000/graphql/', indexQuery, indexVariables)(ctx, () => {});

    server.close();
    fetchStore.add = ctx.graphql_data;
    global.wrapper = mount(<Index />);
  });

  it('run', async () => {
    expect(global.wrapper.containsAnyMatchingElements([
      <div>{JSON.stringify({index: {data: 'query Index'}})}</div> // eslint-disable-line react/jsx-key
    ])).toBe(true);
  });
});
