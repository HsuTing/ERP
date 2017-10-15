'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import radium from 'radium';
import {language} from 'cat-components/lib/i18n';

import ChangeLanguage from 'componentsShare/ChangeLanguage';

import * as style from './style/home';

@language
@radium
export default class Home extends React.Component {
  static propTypes = {
    translate: PropTypes.object.isRequired
  }

  render() {
    const {translate} = this.props;

    return (
      <div>
        <h4 style={style.title}
        >{translate.changeLanguage}</h4>

        <ChangeLanguage />
      </div>
    );
  }
}
