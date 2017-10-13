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
  router.get(path, (ctx, next) => {
    const lang = ctx.cookies.get('lang') || 'en-us';
    const langData = require(`./../../public/i18n/login/${lang}.json`);
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
      <Login redux={redux}
        router={router}
        i18n={i18n}
      />, {
        js: 'login',
        ENV,
        lang,
        langData: JSON.stringify(langData)
      }
    )(ctx, next);
  });
});

export default router;
