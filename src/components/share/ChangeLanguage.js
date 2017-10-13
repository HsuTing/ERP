'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import radium from 'radium';
import cookie from 'js-cookie';
import {language} from 'cat-components/lib/i18n';

import * as style from './style/changeLanguage';

@language
@radium
export default class ChangeLanguage extends React.Component {
  static propTypes = {
    style: PropTypes.object,
    changeLanguage: PropTypes.func.isRequired
  }

  componentDidMount() {
    if(cookie.get('lang'))
      cookie.set('lang', cookie.get('lang'), {expires: 365});
  }

  shouldComponentUpdate() {
    return false;
  }

  render() {
    const {changeLanguage, ...props} = this.props;

    return (
      <div style={[style.root, props.style]}>
        {[{
          name: 'English',
          changeLanguage: () => {
            cookie.set('lang', 'en-us', {expires: 365});
            changeLanguage('en-us')();
          }
        }, {
          name: '中文',
          changeLanguage: () => {
            cookie.set('lang', 'zh-tw', {expires: 365});
            changeLanguage('zh-tw')();
          }
        }].map(({name, changeLanguage}, textIndex) => ([
          textIndex === 0 ? null : <div style={style.line} />,
          <div key={textIndex}
            style={style.button}
            onClick={changeLanguage}
          >{name}</div>
        ]))}
      </div>
    );
  }
}
