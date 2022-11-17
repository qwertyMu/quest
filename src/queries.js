import { gql } from "@apollo/client";

export const GET_INTERACTIONS = gql`
query List($pk: String!){
  listInteractions(pk: $pk) {
    items {
      pk
      sk
      case_ref
      exhibit_ref
      device_uid
      file_hash
      organisation
      datetime_added
      datetime
      local_partner
      interaction
      direction
      duration
      status
    } 
  }
}
`;

export const GET_ATTRIBUTIONS = gql`
query List($pk: String!){
  listAttributions(pk: $pk) {
    items {
      pk
      sk
      case_ref
      exhibit_ref
      device_uid
      file_hash
      organisation
      datetime_added
      name
      attribution
    } 
  }
}
`;

export const GET_ATTRIBUTION = gql`
query GetAttributionFileName($pk: String!, $sk: String!){
  getAttribution(pk: $pk, sk: $sk) {
      exhibit
      file_name
  }
}
`;