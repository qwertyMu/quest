import React from "react";
import { useQuery, gql } from "@apollo/client";
import PropTypes from "prop-types";
import { GET_INTERACTIONS } from "../queries";
import ShowInteractionsDataGrid from "./search/results/InteractionsDataGrid";
import InteractionsCard from "./_interactionsCard";

const ShowInteractions = (props) => {
  const { pk } = props;

  function ListInteractions({ pk }) {
    //Aug 2022 - This is a working prototype of the query behavious i'm looking for.
    const { loading, error, data } = useQuery(GET_INTERACTIONS, {
      variables: { pk },
    });

    if (loading) return <h2>LOADING... </h2>;
    if (error) return `Error! ${error}`;
    if (data !== undefined) {
      console.log(data);
    }
    return (
      <div>
        {data.listInteractions.items.map(
          (
            {
              direction,
              interaction,
              partner,
              duration,
              datetime,
              exhibit,
              organisation,
              file_name,
              datetime_added,
            },
            index
          ) => (
            <InteractionsCard
              key={index}
              Id={interaction}
              Interaction={interaction}
              Direction={direction}
              Partner={partner}
              Duration={duration}
              DateTime={datetime}
              Exhibit={exhibit}
              Organisation={organisation}
              FileName={file_name}
              DateTimeAdded={datetime_added}
              Pk={pk}
            />
          )
        )}
      </div>
    );
  }

  return (
    <div
      style={{
        display: "inline-grid",
        inlineSize: "max-content",
        width: "100%",
      }}
    >
      <h2>🚀 Quest has identified the following INTERACTIONS with {pk}</h2>
      <ListInteractions pk={pk} />
      <br />
      <br />
      <ShowInteractionsDataGrid pk={pk} />
      <br />
      <br />
    </div>
  );
};

ShowInteractions.propTypes = {
  pk: PropTypes.string,
};

export default ShowInteractions;
