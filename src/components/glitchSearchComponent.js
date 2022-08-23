import React from "react";
import { request, gql } from "graphql-request";
import { useQuery } from "react-query";

// const endpoint = "https://api.spacex.land/graphql/";
const endpoint = "http://127.0.0.1:8000/api/graphql";


// const QUERY = gql`
//   {
//     launchesPast(limit: 10) {
//       id
//       mission_name
//     }
//   }
// `;

const QUERY = gql`
  {
    nominal(filters: {name: "Batman"}) {
      name
      dateOfBirth
    }
    identifier {
      value
    }
    interaction {
      type
      datetimeEnd
      datetimeStart
      content
      origin {
        value
      }
      target {
        value
      }
    }
  }
`;


export default function GlitchSearchComponent() {
  const { data, isLoading, error } = useQuery("launches", () => {
    return request(endpoint, QUERY);
  });

  if (isLoading) return "Loading...";
  if (error) return <pre>{error.message}</pre>;

  return (
    <div>
      <h1>Results</h1>
      <ul>
        Names
        {data.nominal.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}