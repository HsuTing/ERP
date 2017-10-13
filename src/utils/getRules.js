'use strict';

export const getMessage = (translate, rules) => rules.map(({message, ...rule}) => ({
  ...rule,
  message: (
    typeof message === 'string' ?
      translate.errorMessage[message] :
      message(translate.errorMessage)
  )
}));

export default ruleNames => ruleNames.map(ruleName => {
  const name = ruleName instanceof Array ? ruleName[0] : ruleName;

  return {
    isEmpty: {
      validator: 'isEmpty',
      message: 'empty'
    },

    isNotEmail: {
      validator: 'isEmail',
      not: true,
      message: 'notEmail'
    },

    lengthIsNotOver: {
      validator: value => !(value.length >= ruleName[1]),
      message: message => `${message.lengthIsNotOver}${ruleName[1]}`
    },

    notHaveNumber: {
      validator: value => !(/\d/g).test(value),
      message: 'notHaveNumber'
    },

    notHaveLetter: {
      validator: value => !(/[a-zA-Z]/g).test(value),
      message: 'notHaveLetter'
    }
  }[name];
});
