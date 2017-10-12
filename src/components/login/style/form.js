'use strict';

import radium from 'radium';

export const root = {
  animation: 'x 0.5s ease-in-out',
  animationName: radium.keyframes({
    '0%': {
      opacity: '0',
      transform: 'translate(-100%, 0)',
      overflow: 'hidde'
    },

    '100%': {
      opacity: '1',
      transfrom: 'translate(0, 0)'
    }
  })
};

export const inputRoot = {
  margin: '10px 0px'
};

export const buttonRoot = {
  textAlign: 'center'
};

export const link = {
  padding: '5px 10px',
  fontSize: '12px'
};
