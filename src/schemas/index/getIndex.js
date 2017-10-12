'use strict';

import {
  GraphQLNonNull,
  GraphQLString
} from 'graphql';

import dataType from './dataType';

export default {
  description: 'Get the data of the Index.',
  type: dataType,
  args: {
    input: {
      description: 'This is the args of the Index.',
      type: new GraphQLNonNull(GraphQLString)
    }
  },
  resolve: () => ({data: 'query Index'})
};
