import React from "react";
import { useQuery, gql } from "@apollo/client";
import PropTypes from "prop-types";
import { GET_ATTRIBUTIONS } from "../queries";
import AttributesCard from "./_attributesCard";
import ShowAttributionsDataGrid from "./_showAttributionsDataGrid";

const ShowAttributions = (props) => {
  const { pk } = props;

  function ListAttributions({ pk }) {
    //Aug 2022 - This is a working prototype of the query behavious i'm looking for.
    const { loading, error, data } = useQuery(GET_ATTRIBUTIONS, {
      variables: { pk },
    });

    if (loading) return <h2>LOADING... </h2>;
    if (error) return `Error! ${error}`;
    if (data !== undefined) {
      console.log(data);
      return (
        <div>
          {data.listAttributions.items.map(
            (
              {
                nominal,
                organisation,
                attribution,
                file_name,
                datetime_added,
                exhibit,
              },
              index
            ) => (
              <AttributesCard
                key={index}
                Id={nominal}
                Nominal={nominal}
                Organisation={organisation}
                Attribution={attribution}
                FileName={file_name}
                DateTimeAdded={datetime_added}
                Exhibit={exhibit}
                Pk={pk}
              />
            )
          )}
        </div>
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
      <h2>
        🚀 Quest has ATTRIBUTED the following identifiers to <b>{pk}</b>
      </h2>
      <ListAttributions pk={pk} />
      <br />
      <br />
      <ShowAttributionsDataGrid pk={pk} />
      <br />
      <br />
    </div>
  );
};

ShowAttributions.propTypes = {
  pk: PropTypes.string,
};

export default ShowAttributions;
