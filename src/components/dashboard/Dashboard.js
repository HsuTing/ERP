'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import radium, {StyleRoot} from 'radium';
import {Switch, Route, withRouter} from 'react-router-dom';
import MenuIcon from 'react-icons/lib/md/menu';
import Wrapper from 'cat-components/lib/wrapper';
import Bundle, {load} from 'cat-components/lib/bundle';
import Sidebar, {sidebarBuilder} from 'cat-components/lib/sidebar';
import I18n, {language} from 'cat-components/lib/i18n';

import Normalize from 'componentsShare/Normalize';
import pages from 'constants/pages/dashboard';

import Menu from './Menu';
import * as style from './style/dashboard';

@withRouter
@sidebarBuilder
@language
@radium
class Dashboard extends React.Component {
  static propTypes = {
    img: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    sidebar: PropTypes.func.isRequired,
    location: PropTypes.object.isRequired,
    translate: PropTypes.object.isRequired
  }

  constructor(props) {
    super(props);
    this.chooseComponent = this.chooseComponent.bind(this);
  }

  shouldComponentUpdate(nextProps) {
    return (
      JSON.stringify(this.props.location) !== JSON.stringify(nextProps.location) ||
      JSON.stringify(this.props.translate) !== JSON.stringify(nextProps.translate)
    );
  }

  render() {
    const {img, email, sidebar, translate} = this.props;

    return (
      <StyleRoot style={style.root}>
        <Menu img={img}
          email={email}
          style={style.menu}
        />

        <div>
          <Switch>
            {pages.map(({name, path}, index) => (
              <Route key={index}
                path={path}
                exact
                component={() => (
                  <div>
                    <header style={style.header}>
                      <StyleRoot style={style.menuIconRoot}>
                        <MenuIcon style={style.menuIcon}
                          onClick={() => sidebar()}
                        />
                      </StyleRoot>

                      {translate[name]}
                    </header>

                    <div style={style.content}>
                      {this.chooseComponent(name)}
                    </div>
                  </div>
                )}
              />
            ))}
          </Switch>
        </div>
      </StyleRoot>
    );
  }

  chooseComponent(name) {
    let loadFunction = null;

    switch(name) {
      case 'home':
        /* istanbul ignore next */
        loadFunction = process.env.NODE_ENV === 'production' && process.env.TYPE === 'client' ?
          require('bundle-loader?lazy&name=home!./../Home') :
          load(require('./../Home'));
        break;

      /* istanbul ignore next */
      default:
        throw new Error(`"${name}" is not defined.`);
    }

    return (
      <Bundle load={loadFunction}>
        {Component => (
          <Component />
        )}
      </Bundle>
    );
  }
}

/* eslint-disable react/display-name, react/prop-types */
export default ({radiumConfig, router, i18n}) => (
  <Wrapper radiumConfig={radiumConfig}
    router={router}
    modules={{
      reactRouterDom: require('react-router-dom')
    }}
  >
    <I18n {...i18n}
      basename='/public/i18n/dashboard/'
    >
      <div>
        <Normalize />

        <Sidebar menu={({hide}) => (
          <div>
            <Menu email='hsuting0106@gmail.com'
              img='https://hsuting.github.io/public/img/icon.svg'
              hide={hide}
            />
          </div>
        )}
        >
          <Dashboard email='hsuting0106@gmail.com'
            img='https://hsuting.github.io/public/img/icon.svg'
          />
        </Sidebar>
      </div>
    </I18n>
  </Wrapper>
);
/* eslint-enable react/display-name, react/prop-types */
