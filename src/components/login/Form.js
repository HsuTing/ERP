'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import radium from 'radium';
import Button from 'cat-components/lib/button';
import Link from 'cat-components/lib/link';
import Input, {inputConnect} from 'cat-components/lib/input-redux';

import {Title, ErrorMessage} from 'componentsShare/Input';
import * as inputStyle from 'componentsShare/style/input';
import fields from 'constants/fields/login';
import inputEnter from 'utils/inputEnter';

import * as style from './style/form';

@inputConnect('login')()
@radium
export default class Field extends React.Component {
  static propTypes = {
    type: PropTypes.string.isRequired,
    form: PropTypes.object.isRequired,
    inputDispatch: PropTypes.func.isRequired,
    submitDispatch: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
  }

  render() {
    const {type, form, inputDispatch} = this.props;
    const realFields = [...fields].slice(0, type === 'login' ? 2 : fields.length);

    return (
      <div style={style.root}>
        {realFields.map(({title, name, rules, type}, index) => {
          const {value, isError, error} = form[name] || {};

          return (
            <div key={index}
              style={style.inputRoot}
            >
              <Title title={title}
                isError={isError}
              />

              <Input style={inputStyle.input(isError)}
                type={type || 'text'}
                rules={[...rules].concat(name !== 'password_again' ? [] : [{
                  validator: value => value !== (form.password || {value: ''}).value,
                  message: '密碼必須相同'
                }])}
                value={value || ''}
                onChange={data => inputDispatch(name, data)}
                onKeyDown={inputEnter(this.submit)}
              />

              <ErrorMessage isError={isError}
                error={error}
              />
            </div>
          );
        })}

        <div style={style.buttonRoot}>
          <Button onClick={this.submit}
          >submit</Button>

          <br />

          <Link style={style.link}
            to={type === 'login' ? '/register/' : '/'}
          >{type === 'login' ? 'register' : 'cancel'}</Link>
        </div>
      </div>
    );
  }

  submit() {
    const {submitDispatch} = this.props;

    submitDispatch(data => {
      alert(JSON.stringify(data, null, 2));
    });
  }
}
