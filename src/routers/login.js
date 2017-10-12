'use strict';

import 'babel-polyfill';
import process from 'process';
import koaRouter from 'koa-better-router';
import React from 'react';
import reactRender from 'cat-middleware/lib/koa-react-render';

import Login from 'components/login/Login';
import pages from 'constants/pages/login';
import redux from 'constants/redux/login';

const ENV = process.env.NODE_ENV === 'production';
const router = koaRouter().loadMethods();

pages.forEach(({path}) => {
  router.get(path, (ctx, next) => reactRender(
    <Login redux={redux}
      router={{
        isServer: true,
        location: ctx.request.url,
        context: {}
      }}
    />, {
      js: 'login',
      ENV
    }
  )(ctx, next));
});

export default router;
