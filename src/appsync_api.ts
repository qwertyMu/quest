/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export enum AttributionTypes {
  CONTACT = "CONTACT",
  INHERENT = "INHERENT",
  PHONENUMBER = "PHONENUMBER",
}


export type Attribution = {
  __typename: "Attribution",
  attribution?: string | null,
  case_ref?: string | null,
  datetime_added?: string | null,
  device_uid?: string | null,
  exhibit_ref?: string | null,
  file_hash?: string | null,
  name?: string | null,
  organisation?: string | null,
  pk: string,
  sk: string,
};

export enum DirectionTypes {
  IN = "IN",
  NONE = "NONE",
  OUT = "OUT",
}


export enum InteractionTypes {
  EMAIL = "EMAIL",
  MESSAGE = "MESSAGE",
  PHONECALL = "PHONECALL",
  SMS = "SMS",
  WHATSAPP = "WHATSAPP",
}


export type Interaction = {
  __typename: "Interaction",
  case_ref?: string | null,
  datetime?: string | null,
  datetime_added?: string | null,
  device_uid?: string | null,
  direction?: string | null,
  duration?: string | null,
  exhibit_ref?: string | null,
  file_hash?: string | null,
  interaction?: string | null,
  local_partner?: string | null,
  organisation?: string | null,
  pk: string,
  sk: string,
  status?: string | null,
};

export type AttributionConnection = {
  __typename: "AttributionConnection",
  items?:  Array<Attribution | null > | null,
  nextToken?: string | null,
};

export type InteractionConnection = {
  __typename: "InteractionConnection",
  items?:  Array<Interaction | null > | null,
  nextToken?: string | null,
};

export type CreateAttributionMutationVariables = {
  attribution?: AttributionTypes | null,
  exhibit?: string | null,
  file_name?: string | null,
  nominal?: string | null,
  organisation?: string | null,
  pk: string,
};

export type CreateAttributionMutation = {
  createAttribution?:  {
    __typename: "Attribution",
    attribution?: string | null,
    case_ref?: string | null,
    datetime_added?: string | null,
    device_uid?: string | null,
    exhibit_ref?: string | null,
    file_hash?: string | null,
    name?: string | null,
    organisation?: string | null,
    pk: string,
    sk: string,
  } | null,
};

export type CreateInteractionMutationVariables = {
  datetime?: string | null,
  direction?: DirectionTypes | null,
  duration?: string | null,
  exhibit?: string | null,
  file_name?: string | null,
  interaction?: InteractionTypes | null,
  organisation?: string | null,
  partner?: string | null,
  pk: string,
};

export type CreateInteractionMutation = {
  createInteraction?:  {
    __typename: "Interaction",
    case_ref?: string | null,
    datetime?: string | null,
    datetime_added?: string | null,
    device_uid?: string | null,
    direction?: string | null,
    duration?: string | null,
    exhibit_ref?: string | null,
    file_hash?: string | null,
    interaction?: string | null,
    local_partner?: string | null,
    organisation?: string | null,
    pk: string,
    sk: string,
    status?: string | null,
  } | null,
};

export type DeleteAttributionMutationVariables = {
  pk: string,
  sk: string,
};

export type DeleteAttributionMutation = {
  deleteAttribution?:  {
    __typename: "Attribution",
    attribution?: string | null,
    case_ref?: string | null,
    datetime_added?: string | null,
    device_uid?: string | null,
    exhibit_ref?: string | null,
    file_hash?: string | null,
    name?: string | null,
    organisation?: string | null,
    pk: string,
    sk: string,
  } | null,
};

export type DeleteInteractionMutationVariables = {
  pk: string,
  sk: string,
};

export type DeleteInteractionMutation = {
  deleteInteraction?:  {
    __typename: "Interaction",
    case_ref?: string | null,
    datetime?: string | null,
    datetime_added?: string | null,
    device_uid?: string | null,
    direction?: string | null,
    duration?: string | null,
    exhibit_ref?: string | null,
    file_hash?: string | null,
    interaction?: string | null,
    local_partner?: string | null,
    organisation?: string | null,
    pk: string,
    sk: string,
    status?: string | null,
  } | null,
};

export type GetAttributionQueryVariables = {
  pk: string,
  sk: string,
};

export type GetAttributionQuery = {
  getAttribution?:  {
    __typename: "Attribution",
    attribution?: string | null,
    case_ref?: string | null,
    datetime_added?: string | null,
    device_uid?: string | null,
    exhibit_ref?: string | null,
    file_hash?: string | null,
    name?: string | null,
    organisation?: string | null,
    pk: string,
    sk: string,
  } | null,
};

export type GetInteractionQueryVariables = {
  pk: string,
  sk: string,
};

export type GetInteractionQuery = {
  getInteraction?:  {
    __typename: "Interaction",
    case_ref?: string | null,
    datetime?: string | null,
    datetime_added?: string | null,
    device_uid?: string | null,
    direction?: string | null,
    duration?: string | null,
    exhibit_ref?: string | null,
    file_hash?: string | null,
    interaction?: string | null,
    local_partner?: string | null,
    organisation?: string | null,
    pk: string,
    sk: string,
    status?: string | null,
  } | null,
};

export type ListAttributionsQueryVariables = {
  limit?: number | null,
  nextToken?: string | null,
  pk: string,
};

export type ListAttributionsQuery = {
  listAttributions?:  {
    __typename: "AttributionConnection",
    items?:  Array< {
      __typename: "Attribution",
      attribution?: string | null,
      case_ref?: string | null,
      datetime_added?: string | null,
      device_uid?: string | null,
      exhibit_ref?: string | null,
      file_hash?: string | null,
      name?: string | null,
      organisation?: string | null,
      pk: string,
      sk: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type ListInteractionsQueryVariables = {
  limit?: number | null,
  nextToken?: string | null,
  pk: string,
};

export type ListInteractionsQuery = {
  listInteractions?:  {
    __typename: "InteractionConnection",
    items?:  Array< {
      __typename: "Interaction",
      case_ref?: string | null,
      datetime?: string | null,
      datetime_added?: string | null,
      device_uid?: string | null,
      direction?: string | null,
      duration?: string | null,
      exhibit_ref?: string | null,
      file_hash?: string | null,
      interaction?: string | null,
      local_partner?: string | null,
      organisation?: string | null,
      pk: string,
      sk: string,
      status?: string | null,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};
