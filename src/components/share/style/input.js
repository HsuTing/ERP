'use stirct';

import red from 'cat-components/lib/color/red';
import grey from 'cat-components/lib/color/grey';
import black from 'cat-components/lib/color/black';

export const title = isError => ({
  margin: '5px 0px',
  color: isError ? red : black
});

export const input = isError => ({
  border: `0.5px solid ${isError ? red : grey}`
});

export const errorMessage = {
  margin: '5px 0px',
  fontSize: '12px',
  lineHeight: '18px',
  color: red
};
