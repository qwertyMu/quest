/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getAttribution = /* GraphQL */ `
  query GetAttribution($pk: String!, $sk: String!) {
    getAttribution(pk: $pk, sk: $sk) {
      attribution
      case_ref
      datetime_added
      device_uid
      exhibit_ref
      file_hash
      name
      organisation
      pk
      sk
    }
  }
`;
export const getInteraction = /* GraphQL */ `
  query GetInteraction($pk: String!, $sk: String!) {
    getInteraction(pk: $pk, sk: $sk) {
      case_ref
      datetime
      datetime_added
      device_uid
      direction
      duration
      exhibit_ref
      file_hash
      interaction
      local_partner
      organisation
      pk
      sk
      status
    }
  }
`;
export const listAttributions = /* GraphQL */ `
  query ListAttributions($limit: Int, $nextToken: String, $pk: String!) {
    listAttributions(limit: $limit, nextToken: $nextToken, pk: $pk) {
      items {
        attribution
        case_ref
        datetime_added
        device_uid
        exhibit_ref
        file_hash
        name
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
        case_ref
        datetime
        datetime_added
        device_uid
        direction
        duration
        exhibit_ref
        file_hash
        interaction
        local_partner
        organisation
        pk
        sk
        status
      }
      nextToken
    }
  }
`;
