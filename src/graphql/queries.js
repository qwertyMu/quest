/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getCapturedInteraction = /* GraphQL */ `
  query GetCapturedInteraction($id: ID!) {
    getCapturedInteraction(id: $id) {
      id
      key
      identifier
      local_partner
      datetime
      datetime_added
      direction
      duration
      exhibit_ref
      case_ref
      file_hash
      device_uid
      interaction
      organisation
      nameKnownToMe
      notes
      status
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
        local_partner
        datetime
        datetime_added
        direction
        duration
        exhibit_ref
        case_ref
        file_hash
        device_uid
        interaction
        organisation
        nameKnownToMe
        notes
        status
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
      identifier
      name
      nameKnownToMe
      organisation
      attribution
      file_hash
      datetime_added
      exhibit_ref
      case_ref
      device_uid
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
        identifier
        name
        nameKnownToMe
        organisation
        attribution
        file_hash
        datetime_added
        exhibit_ref
        case_ref
        device_uid
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
