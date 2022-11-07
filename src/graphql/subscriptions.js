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
export const onUpdateCapturedInteraction = /* GraphQL */ `
  subscription OnUpdateCapturedInteraction(
    $filter: ModelSubscriptionCapturedInteractionFilterInput
  ) {
    onUpdateCapturedInteraction(filter: $filter) {
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
export const onDeleteCapturedInteraction = /* GraphQL */ `
  subscription OnDeleteCapturedInteraction(
    $filter: ModelSubscriptionCapturedInteractionFilterInput
  ) {
    onDeleteCapturedInteraction(filter: $filter) {
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
export const onCreateCapturedAttribution = /* GraphQL */ `
  subscription OnCreateCapturedAttribution(
    $filter: ModelSubscriptionCapturedAttributionFilterInput
  ) {
    onCreateCapturedAttribution(filter: $filter) {
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
export const onUpdateCapturedAttribution = /* GraphQL */ `
  subscription OnUpdateCapturedAttribution(
    $filter: ModelSubscriptionCapturedAttributionFilterInput
  ) {
    onUpdateCapturedAttribution(filter: $filter) {
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
export const onDeleteCapturedAttribution = /* GraphQL */ `
  subscription OnDeleteCapturedAttribution(
    $filter: ModelSubscriptionCapturedAttributionFilterInput
  ) {
    onDeleteCapturedAttribution(filter: $filter) {
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
