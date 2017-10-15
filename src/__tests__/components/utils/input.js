'use strict';

import timer from './timer';

export default () => {
  it('# check input length', () => {
    expect(global.wrapper.find('Input').length !== 0).toBe(true);
  });

  it('# change input', () => {
    const {wrapper} = global;

    wrapper.find('Input').forEach(async input => {
      expect(input.prop('value')).toBe('');

      input.simulate('change', {
        target: {
          value: 'test'
        }
      });

      input.simulate('keypress');
      input.simulate('keypress', {
        key: 'Enter'
      });

      await timer(10);

      expect(input.prop('value')).toBe('test');
    });
  });
};
