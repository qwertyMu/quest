/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createCapturedInteraction = /* GraphQL */ `
  mutation CreateCapturedInteraction(
    $input: CreateCapturedInteractionInput!
    $condition: ModelCapturedInteractionConditionInput
  ) {
    createCapturedInteraction(input: $input, condition: $condition) {
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
export const updateCapturedInteraction = /* GraphQL */ `
  mutation UpdateCapturedInteraction(
    $input: UpdateCapturedInteractionInput!
    $condition: ModelCapturedInteractionConditionInput
  ) {
    updateCapturedInteraction(input: $input, condition: $condition) {
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
export const deleteCapturedInteraction = /* GraphQL */ `
  mutation DeleteCapturedInteraction(
    $input: DeleteCapturedInteractionInput!
    $condition: ModelCapturedInteractionConditionInput
  ) {
    deleteCapturedInteraction(input: $input, condition: $condition) {
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
export const createCapturedAttribution = /* GraphQL */ `
  mutation CreateCapturedAttribution(
    $input: CreateCapturedAttributionInput!
    $condition: ModelCapturedAttributionConditionInput
  ) {
    createCapturedAttribution(input: $input, condition: $condition) {
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
export const updateCapturedAttribution = /* GraphQL */ `
  mutation UpdateCapturedAttribution(
    $input: UpdateCapturedAttributionInput!
    $condition: ModelCapturedAttributionConditionInput
  ) {
    updateCapturedAttribution(input: $input, condition: $condition) {
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
export const deleteCapturedAttribution = /* GraphQL */ `
  mutation DeleteCapturedAttribution(
    $input: DeleteCapturedAttributionInput!
    $condition: ModelCapturedAttributionConditionInput
  ) {
    deleteCapturedAttribution(input: $input, condition: $condition) {
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
