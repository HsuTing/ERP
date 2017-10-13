'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import radium, {StyleRoot} from 'radium';
import {Route} from 'react-router-dom';
import Img from 'cat-components/lib/img';
import Link from 'cat-components/lib/link';
import {language} from 'cat-components/lib/i18n';

import pages from 'constants/pages/dashboard';

import * as style from './style/menu';

@language
@radium
export default class Menu extends React.Component {
  static propTypes = {
    img: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    style: PropTypes.object,
    hide: PropTypes.func,
    translate: PropTypes.object.isRequired
  }

  static defaultProps = {
    hide: () => {}
  }

  shouldComponentUpdate(nextProps) {
    return (
      JSON.stringify(this.props.translate) !== JSON.stringify(nextProps.translate)
    );
  }

  render() {
    const {img, email, hide, translate, ...props} = this.props;

    return (
      <StyleRoot style={[style.root, props.style]}>
        <div style={style.header}>
          <div />

          <div style={style.imgBackground}>
            <Img style={[style.imgBackground, style.img]}
              src={img}
              type='div'
            />
          </div>

          <p style={style.email}
          >{email}</p>
        </div>

        <div style={style.linkRoot}>
          {pages.map(({name, path}, index) => (
            <Route key={index}
              path={path}
              exact
            >
              {({match}) => (
                <Link style={style.link(match)}
                  to={path}
                  onClick={() => hide()}
                >{translate[name]}</Link>
              )}
            </Route>
          ))}
        </div>
      </StyleRoot>
    );
  }
}
