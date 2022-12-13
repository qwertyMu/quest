import React, { useEffect } from "react";
import { useQuery } from "@apollo/client";

import { Box } from "@mui/material";

import { GET_ATTRIBUTIONS } from "../../../queries";
import resultsState from "../../../datastore/resultsStore";
import AttributionsCard from "./AttributionsCard";

type AttributionListProps = {
  searchTerm: String;
};

export default function AttributionsList(props: AttributionListProps) {
  const [attributions, setAttributions] = resultsState((s) => [
    s.attributions,
    s.setAttributions,
  ]);

  const { loading, error, data } = useQuery(GET_ATTRIBUTIONS, {
    variables: { pk: props.searchTerm },
  });

  // save attribution data into state as it changes
  useEffect(() => {
    try {
      setAttributions(data.listAttributions.items);
    } catch (e) {
      setAttributions([]);
    }
  }, [data, setAttributions]);

  if (loading) return <h2>LOADING... </h2>;
  if (error) return `Error! ${error.message}`;

  if (attributions.length === 0) return null;

  return (
    <Box
      sx={{
        width: "calc(100vw - 16px)",
        margin: "4px 8px 0 8px",
        padding: "4px 16px",
        // borderRadius: "8px",
      }}
    >
      {/*<AttributionWordCloud data={attributions} />*/}
      <Box
        sx={{
          padding: "0.5em",
          display: "flex",
          gap: "0.5em",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        {attributions.map((attribution, index) => (
          <AttributionsCard data={attribution} key={index} />
        ))}
      </Box>
    </Box>
  );
}
