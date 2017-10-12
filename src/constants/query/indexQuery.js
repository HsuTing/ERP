'use strict';

import {graphql} from 'react-relay';

export const variables = {
  input: 'test'
};

export default graphql`
  query indexQuery($input: String!) {
    index(input: $input) {
      data
    }
  }
`;
