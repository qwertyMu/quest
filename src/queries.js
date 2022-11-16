import { gql } from "@apollo/client";

export const GET_INTERACTIONS = gql`
query List($pk: String!){
  listInteractions(pk: $pk) {
    items {
      direction
      interaction
      partner
      duration
      datetime
      exhibit
      organisation
      file_name
      datetime_added
    } 
  }
}
`;

export const GET_ATTRIBUTIONS = gql`
query List($pk: String!){
  listAttributions(pk: $pk) {
    items {
      sk
      nominal
      organisation
      attribution
      file_name
      datetime_added
      exhibit
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