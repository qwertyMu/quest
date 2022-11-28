import React, { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";

import { Box } from "@mui/material";

import { GET_ATTRIBUTIONS, GET_INTERACTIONS } from "../../queries";
import TabbedResults from "../../components_v2/tabbedResults";
import AttributionWordCloud from "../../components/AttributionWordCloud.tsx";
import AttributionsCard from "../../components_v2/AttributionsCard";
import InteractionsCard from "../../components_v2/interactionsCard";

const SearchResults = (props) => {
  const { pk } = props;

  const [attributionsData, setAttributionsData] = useState([]);
  const [interactionsData, setInteractionsData] = useState([]);

  function ListAttributions({ pk }) {
    const { loading, error, data } = useQuery(GET_ATTRIBUTIONS, {
      variables: { pk },
    });

    useEffect(() => {
      // save attribution data into state as it changes
      try {
        setAttributionsData(data.listAttributions.items);
      } catch (e) {
        setAttributionsData([]);
      }
    }, [data]);

    if (loading) return <h2>LOADING... </h2>;
    if (error) return `Error! ${error.message}`;

    if (attributionsData.length === 0) return null;

    return (
      <Box
        sx={{
          width: "calc(100vw - 16px)",
          margin: "4px 8px 0 8px",
          padding: "4px 16px",
          borderRadius: "8px",
          border: "2px solid grey",
        }}
      >
        <AttributionWordCloud data={attributionsData} />
        <Box
          sx={{
            padding: "0.5em",
            height: "20em",
            display: "flex",
            gap: "0.5em",
          }}
        >
          {attributionsData.map((attribution, index) => (
            <AttributionsCard data={attribution} key={index} />
          ))}
        </Box>
      </Box>
    );
  }

  function ListInteractions({ pk }) {
    //Aug 2022 - This is a working prototype of the query behavious i'm looking for.
    const { loading, error, data } = useQuery(GET_INTERACTIONS, {
      variables: { pk },
    });

    if (loading) return <h2>LOADING... </h2>;
    if (error) return `Error! ${error.message}`;
    if (data !== undefined) {
      console.log("Interactions Data - " + data);
      setInteractionsData(data.listInteractions.items);
      return (
        <Box
          sx={{
            width: "100%",
            display: "flex",
            gap: "0.5em",
            padding: "0.5em",
            direction: "row-wrap",
          }}
        >
          {interactionsData.map(
            (
              {
                pk,
                sk,
                case_ref,
                exhibit_ref,
                device_uid,
                file_hash,
                organisation,
                datetime_added,
                datetime,
                local_partner,
                interaction,
                direction,
                duration,
                status,
              },
              index
            ) => (
              <InteractionsCard
                key={index}
                Pk={pk}
                Sk={sk}
                CaseRef={case_ref}
                Exhibit={exhibit_ref}
                DeviceUid={device_uid}
                FileHash={file_hash}
                Organisation={organisation}
                DateTimeAdded={datetime_added}
                DateTime={datetime}
                LocalPartner={local_partner}
                Interaction={interaction}
                Direction={direction}
                Duration={duration}
                Status={status}
              />
            )
          )}
        </Box>
      );
    }
  }

  return (
    <div
      style={{
        display: "inline-grid",
        inlineSize: "max-content",
        width: "100%",
      }}
    >
      {/* <h2>🚀 Quest has identified the following results against {pk}</h2> */}
      <Box>
        <ListAttributions pk={pk} />
        <ListInteractions pk={pk} />
      </Box>
      {/* <ShowInteractionsDataGrid pk={pk}/> */}
      {attributionsData !== [] && (
        <TabbedResults
          pk={pk}
          attributionsData={attributionsData}
          interactionsData={interactionsData}
        />
      )}
    </div>
  );
};

export default SearchResults;
