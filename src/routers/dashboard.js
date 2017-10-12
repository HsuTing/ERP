'use strict';

import 'babel-polyfill';
import process from 'process';
import koaRouter from 'koa-better-router';
import React from 'react';
import reactRender from 'cat-middleware/lib/koa-react-render';

import Dashboard from 'components/dashboard/Dashboard';
import pages from 'constants/pages/dashboard';

const ENV = process.env.NODE_ENV === 'production';
const router = koaRouter({prefix: '/dashboard'}).loadMethods();

pages.forEach(({path}) => {
  router.get(path, (ctx, next) => reactRender(
    <Dashboard
      router={{
        isServer: true,
        location: ctx.request.url,
        context: {}
      }}
    />, {
      js: 'dashboard',
      ENV
    }
  )(ctx, next));
});

export default router;
