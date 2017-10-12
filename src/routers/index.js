'use strict';

import 'babel-polyfill';
import process from 'process';
import koaRouter from 'koa-better-router';
import React from 'react';
import reactRender from 'cat-middleware/lib/koa-react-render';
import relayData from 'cat-middleware/lib/koa-relay-data';

import Index from 'components/Index';
import {link, fetchStore} from 'utils/environment';
import indexQuery, {variables as indexVariables} from 'constants/query/indexQuery';

const ENV = process.env.NODE_ENV === 'production';
const router = koaRouter().loadMethods();

router.get('/',
  relayData(link, indexQuery, indexVariables),
  (ctx, next) => {
    fetchStore.add = ctx.graphql_data;
    return next();
  },
  ((ctx, next) => reactRender(
    <Index />, {
      ...(ctx.graphql_data ? {data: JSON.stringify(ctx.graphql_data)} : {}),
      js: 'index',
      records: ctx.records,
      ENV
    }
  )(ctx, next))
);

export default router;
