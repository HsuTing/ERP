'use strict';

import getRules from 'utils/getRules';

export default [{
  name: 'email',
  rules: getRules([
    'isEmpty',
    'isNotEmail'
  ])
}, {
  name: 'password',
  rules: getRules([
    'isEmpty',
    ['lengthIsNotOver', 8],
    'notHaveNumber',
    'notHaveLetter'
  ]),
  type: 'password'
}, {
  name: 'password_again',
  rules: getRules([
    'isEmpty',
    ['lengthIsNotOver', 8],
    'notHaveNumber',
    'notHaveLetter'
  ]),
  type: 'password'
}, {
  name: 'name',
  rules: getRules([
    'isEmpty'
  ])
}];
