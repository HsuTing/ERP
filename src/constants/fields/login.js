'use strict';

import getRules from 'utils/getRules';

export default [{
  name: 'email',
  rules: getRules([
    'isEmpty',
    'isNotEmail'
  ])
}, {
  type: 'password',
  name: 'password',
  rules: getRules([
    'isEmpty',
    ['lengthIsNotOver', 8],
    'notHaveNumber',
    'notHaveLetter'
  ])
}, {
  name: 'name',
  rules: getRules([
    'isEmpty'
  ])
}];
