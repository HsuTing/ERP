'use strict';

import React from 'react';
import {QueryRenderer} from 'react-relay';

import environment from 'utils/environment';
import indexQuery, {variables as indexVariables} from 'constants/query/indexQuery';

/* eslint-disable react/display-name */
export default () => (
  <QueryRenderer environment={environment}
    query={indexQuery}
    variables={indexVariables}
    render={({error, props}) => {
      /* istanbul ignore next */
      if(error)
        return <div>{error.message}</div>;
      else if(props)
        return <div>{JSON.stringify(props)}</div>;
      /* istanbul ignore next */
      return <div>Loading</div>;
    }}
  />
);
/* eslint-enable react/display-name */
