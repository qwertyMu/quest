/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createAttribution = /* GraphQL */ `
  mutation CreateAttribution(
    $attribution: AttributionTypes
    $exhibit: String
    $file_name: String
    $nominal: String
    $organisation: String
    $pk: String!
  ) {
    createAttribution(
      attribution: $attribution
      exhibit: $exhibit
      file_name: $file_name
      nominal: $nominal
      organisation: $organisation
      pk: $pk
    ) {
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
export const createInteraction = /* GraphQL */ `
  mutation CreateInteraction(
    $datetime: AWSDateTime
    $direction: DirectionTypes
    $duration: AWSTime
    $exhibit: String
    $file_name: String
    $interaction: InteractionTypes
    $organisation: String
    $partner: String
    $pk: String!
  ) {
    createInteraction(
      datetime: $datetime
      direction: $direction
      duration: $duration
      exhibit: $exhibit
      file_name: $file_name
      interaction: $interaction
      organisation: $organisation
      partner: $partner
      pk: $pk
    ) {
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
export const deleteAttribution = /* GraphQL */ `
  mutation DeleteAttribution($pk: String!, $sk: String!) {
    deleteAttribution(pk: $pk, sk: $sk) {
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
export const deleteInteraction = /* GraphQL */ `
  mutation DeleteInteraction($pk: String!, $sk: String!) {
    deleteInteraction(pk: $pk, sk: $sk) {
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
