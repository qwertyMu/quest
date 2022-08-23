/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getAttribution = /* GraphQL */ `
  query GetAttribution($pk: String!, $sk: String!) {
    getAttribution(pk: $pk, sk: $sk) {
      attribution
      datetime_added
      exhibit
      file_name
      nominal
      organisation
      pk
      sk
    }
  }
`;
export const getInteraction = /* GraphQL */ `
  query GetInteraction($pk: String!, $sk: String!) {
    getInteraction(pk: $pk, sk: $sk) {
      datetime
      datetime_added
      direction
      duration
      exhibit
      file_name
      interaction
      organisation
      partner
      pk
      sk
    }
  }
`;
export const listAttributions = /* GraphQL */ `
  query ListAttributions($limit: Int, $nextToken: String, $pk: String!) {
    listAttributions(limit: $limit, nextToken: $nextToken, pk: $pk) {
      items {
        attribution
        datetime_added
        exhibit
        file_name
        nominal
        organisation
        pk
        sk
      }
      nextToken
    }
  }
`;
export const listInteractions = /* GraphQL */ `
  query ListInteractions($limit: Int, $nextToken: String, $pk: String!) {
    listInteractions(limit: $limit, nextToken: $nextToken, pk: $pk) {
      items {
        datetime
        datetime_added
        direction
        duration
        exhibit
        file_name
        interaction
        organisation
        partner
        pk
        sk
      }
      nextToken
    }
  }
`;
export const getTodo = /* GraphQL */ `
  query GetTodo($id: ID!) {
    getTodo(id: $id) {
      id
      attributedName
      attributedIdentifier
      dateAddedToList
      nameKnownToMe
      notes
      createdAt
      updatedAt
    }
  }
`;
export const listTodos = /* GraphQL */ `
  query ListTodos(
    $filter: ModelTodoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTodos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        attributedName
        attributedIdentifier
        dateAddedToList
        nameKnownToMe
        notes
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
