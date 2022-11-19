/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateCapturedInteraction = /* GraphQL */ `
  subscription OnCreateCapturedInteraction(
    $filter: ModelSubscriptionCapturedInteractionFilterInput
  ) {
    onCreateCapturedInteraction(filter: $filter) {
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
export const onUpdateCapturedInteraction = /* GraphQL */ `
  subscription OnUpdateCapturedInteraction(
    $filter: ModelSubscriptionCapturedInteractionFilterInput
  ) {
    onUpdateCapturedInteraction(filter: $filter) {
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
export const onDeleteCapturedInteraction = /* GraphQL */ `
  subscription OnDeleteCapturedInteraction(
    $filter: ModelSubscriptionCapturedInteractionFilterInput
  ) {
    onDeleteCapturedInteraction(filter: $filter) {
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
export const onCreateCapturedAttribution = /* GraphQL */ `
  subscription OnCreateCapturedAttribution(
    $filter: ModelSubscriptionCapturedAttributionFilterInput
  ) {
    onCreateCapturedAttribution(filter: $filter) {
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
export const onUpdateCapturedAttribution = /* GraphQL */ `
  subscription OnUpdateCapturedAttribution(
    $filter: ModelSubscriptionCapturedAttributionFilterInput
  ) {
    onUpdateCapturedAttribution(filter: $filter) {
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
export const onDeleteCapturedAttribution = /* GraphQL */ `
  subscription OnDeleteCapturedAttribution(
    $filter: ModelSubscriptionCapturedAttributionFilterInput
  ) {
    onDeleteCapturedAttribution(filter: $filter) {
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
