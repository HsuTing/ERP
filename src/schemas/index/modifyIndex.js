'use strict';

import {
  GraphQLNonNull,
  GraphQLString
} from 'graphql';
import {mutationWithClientMutationId} from 'graphql-relay';

import dataType from './dataType';

export default mutationWithClientMutationId({
  name: 'Index',
  description: 'Modify the data of the Index.',
  inputFields: {
    data: {
      description: 'This is the args of the Index.',
      type: new GraphQLNonNull(GraphQLString)
    }
  },
  outputFields: {
    newData: {
      description: 'This is output data of the Index after modifying the Index.',
      type: dataType
    }
  },
  mutateAndGetPayload: (data, ctx) => ({
    newData: {
      data: 'mutation Index'
    }
  })
});
