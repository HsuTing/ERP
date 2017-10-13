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
  router.get(path, (ctx, next) => {
    const lang = ctx.cookies.get('lang') || 'en-us';
    const langData = require(`./../../public/i18n/dashboard/${lang}.json`);
    const router = {
      isServer: true,
      location: ctx.request.url,
      context: {}
    };
    const i18n = {
      lang,
      defaultData: langData
    };

    return reactRender(
      <Dashboard router={router}
        i18n={i18n}
      />, {
        js: 'dashboard',
        ENV,
        lang,
        langData: JSON.stringify(langData)
      }
    )(ctx, next);
  });
});

export default router;
