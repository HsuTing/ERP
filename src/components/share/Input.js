'use strict';

import React from 'react';

import * as style from './style/input';

export const Title = ({isError, title}) => ( // eslint-disable-line react/prop-types
  <h4 style={style.title(isError)}>{title}</h4>
);

export const ErrorMessage = ({isError, error}) => ( // eslint-disable-line react/prop-types
  !isError ?
    null :
    <p style={style.errorMessage}
    >{error.join(', ')}</p>
);
