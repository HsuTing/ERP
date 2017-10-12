'use strict';

import getRules from 'utils/getRules';

export default [{
  title: 'Email',
  name: 'email',
  rules: getRules([
    'isEmpty',
    'isNotEmail'
  ])
}, {
  title: 'Password',
  name: 'password',
  rules: getRules([
    'isEmpty',
    ['lengthIsNotOver', 8],
    'notHaveNumber',
    'notHaveLetter'
  ]),
  type: 'password'
}, {
  title: 'Password again',
  name: 'password_again',
  rules: getRules([
    'isEmpty',
    ['lengthIsNotOver', 8],
    'notHaveNumber',
    'notHaveLetter'
  ]),
  type: 'password'
}, {
  title: 'Name',
  name: 'name',
  rules: getRules([
    'isEmpty'
  ])
}];
