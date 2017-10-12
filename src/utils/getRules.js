'use strict';

export default ruleNames => ruleNames.map(ruleName => {
  const name = ruleName instanceof Array ? ruleName[0] : ruleName;

  return {
    isEmpty: {
      validator: 'isEmpty',
      message: '不能空白'
    },

    isNotEmail: {
      validator: 'isEmail',
      not: true,
      message: '非信箱格式'
    },

    lengthIsNotOver: {
      validator: value => !(value.length >= ruleName[1]),
      message: `密碼必須長度超過${ruleName[1]}`
    },

    notHaveNumber: {
      validator: value => !(/\d/g).test(value),
      message: '密碼必須至少有一數字'
    },

    notHaveLetter: {
      validator: value => !(/[a-zA-Z]/g).test(value),
      message: '密碼必須至少有一字母'
    }
  }[name];
});
