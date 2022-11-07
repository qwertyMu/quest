/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getCapturedInteraction = /* GraphQL */ `
  query GetCapturedInteraction($id: ID!) {
    getCapturedInteraction(id: $id) {
      id
      key
      identifier
      partner
      datetime
      datetime_added
      direction
      duration
      exhibit
      file_name
      interaction
      organisation
      nameKnownToMe
      notes
      createdAt
      updatedAt
    }
  }
`;
export const listCapturedInteractions = /* GraphQL */ `
  query ListCapturedInteractions(
    $filter: ModelCapturedInteractionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCapturedInteractions(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        key
        identifier
        partner
        datetime
        datetime_added
        direction
        duration
        exhibit
        file_name
        interaction
        organisation
        nameKnownToMe
        notes
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getCapturedAttribution = /* GraphQL */ `
  query GetCapturedAttribution($id: ID!) {
    getCapturedAttribution(id: $id) {
      id
      key
      nominal
      organisation
      attribution
      file_name
      datetime_added
      exhibit
      createdAt
      updatedAt
    }
  }
`;
export const listCapturedAttributions = /* GraphQL */ `
  query ListCapturedAttributions(
    $filter: ModelCapturedAttributionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCapturedAttributions(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        key
        nominal
        organisation
        attribution
        file_name
        datetime_added
        exhibit
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
