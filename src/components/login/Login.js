'use strict';

import React from 'react';
import radium, {StyleRoot} from 'radium';
import {Switch, Route} from 'react-router-dom';
import Wrapper from 'cat-components/lib/wrapper';
import Icon from 'cat-components/lib/icon';
import I18n from 'cat-components/lib/i18n';

import Normalize from 'componentsShare/Normalize';
import ChangeLanguage from 'componentsShare/ChangeLanguage';
import pages from 'constants/pages/login';

import Form from './Form';
import * as style from './style/login';

@radium
class Login extends React.Component {
  render() {
    return (
      <StyleRoot style={style.root}>
        <div />

        <div style={style.content}>
          <div style={style.iconRoot}>
            <Icon />
          </div>

          <Switch>
            {pages.map(({path, type}, pageIndex) => (
              <Route key={pageIndex}
                path={path}
                component={() => [
                  <Form key='form'
                    type={type}
                  />,
                  <ChangeLanguage key='change-language'
                    style={style.changeLanguage}
                  />
                ]}
                exact
              />
            ))}
          </Switch>
        </div>

        <div />
      </StyleRoot>
    );
  }
}

/* eslint-disable react/display-name, react/prop-types */
export default ({radiumConfig, redux, router, i18n}) => (
  <Wrapper radiumConfig={radiumConfig}
    redux={redux}
    router={router}
    modules={{
      redux: require('redux'),
      reactRedux: require('react-redux'),
      reactRouterDom: require('react-router-dom')
    }}
  >
    <div>
      <Normalize />

      <I18n {...i18n}
        basename={`${
          process.env.NODE_ENV === 'test' ? 'http://localhost:8000' : /* istanbul ignore next */ ''
        }/public/i18n/login/`}
      >
        <Login />
      </I18n>
    </div>
  </Wrapper>
);
/* eslint-enable react/display-name, react/prop-types */
