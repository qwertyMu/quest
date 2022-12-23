import { API } from "@aws-amplify/api";
import config from "./aws-exports";

import { listAttributions, listInteractions } from "./queries";

API.configure(config);

export async function searchAttributions(searchTerm) {
  const response = await API.graphql({
    query: listAttributions,
    variables: {
      pk: searchTerm,
    },
  });
  return response;
}

export async function searchInteractions(searchTerm) {
  const response = await API.graphql({
    query: listInteractions,
    variables: {
      pk: searchTerm,
    },
  });
  return response;
}
