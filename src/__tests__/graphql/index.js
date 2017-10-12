'use strict';

import {graphql} from 'graphql';

import schema from 'schemas/schema';

describe('index', () => {
  it('# query index', () => expect(graphql(schema, `
    query {
      index(input: "test") {
        data
      }
    }
  `)).resolves.toMatchObject({
      data: {
        index: {
          data: 'query Index'
        }
      }
    }));

  it('# mutation index', () => expect(graphql(schema, `
    mutation {
      modifyIndex(input: {
        data: "test"
      }) {
        newData {
          data
        }
      }
    }
  `)).resolves.toMatchObject({
      data: {
        modifyIndex: {
          newData: {
            data: 'mutation Index'
          }
        }
      }
    }));
});
