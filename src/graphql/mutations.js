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
export const deleteAttribution = /* GraphQL */ `
  mutation DeleteAttribution($pk: String!, $sk: String!) {
    deleteAttribution(pk: $pk, sk: $sk) {
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
export const deleteInteraction = /* GraphQL */ `
  mutation DeleteInteraction($pk: String!, $sk: String!) {
    deleteInteraction(pk: $pk, sk: $sk) {
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
export const createTodo = /* GraphQL */ `
  mutation CreateTodo(
    $input: CreateTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    createTodo(input: $input, condition: $condition) {
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
export const updateTodo = /* GraphQL */ `
  mutation UpdateTodo(
    $input: UpdateTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    updateTodo(input: $input, condition: $condition) {
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
export const deleteTodo = /* GraphQL */ `
  mutation DeleteTodo(
    $input: DeleteTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    deleteTodo(input: $input, condition: $condition) {
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
