import React, { useState, useEffect } from "react";
import { useQuery } from '@apollo/client';
import PropTypes from "prop-types";
import { GET_ATTRIBUTIONS, GET_INTERACTIONS } from "../queries";
import ShowInteractionsDataGrid from "./showInteractionsDataGrid";
import TabbedResults from "./tabbedResults";
import ListAttributions from "./listAttributions";
import ListInteractions from "./listInteractions";
import GetAttributionsData from "./getAttributionsData";
import AttributionsCard from "./attributionsCard";
import InteractionsCard from "./interactionsCard";

const ShowResults = props => {

  const { pk } = props;


  const [attributionsData, setAttributionsData] = useState([])
  const [interactionsData, setInteractionsData] = useState([])

  function ListAttributions({ pk }) {
    const { loading, error, data } = useQuery(GET_ATTRIBUTIONS, {
        variables: { pk },
    });
    if ( loading ) return <h2>LOADING... </h2>;
    if ( error ) return `Error! ${error.message}`;
    if ( data !== undefined){
      setAttributionsData(data.listAttributions.items);
      return <div>
      {attributionsData.map(({ pk, sk, case_ref, exhibit_ref, device_uid, file_hash, organisation, datetime_added, name, attribution }, index) => (
        <AttributionsCard 
          key={index}
          Pk ={pk}
          Sk={sk}
          CaseRef={case_ref}
          Exhibit={exhibit_ref}
          DeviceUid={device_uid}
          FileHash={file_hash}
          Organisation={organisation}
          DateTimeAdded={datetime_added}
          Nominal={name}
          Attribution={attribution}
          FoundInsidePhone={file_hash.match(/[0-9]+/g)}
        />
        ))}
      </div>
    }
  }

  function ListInteractions({ pk }) { //Aug 2022 - This is a working prototype of the query behavious i'm looking for. 
    const { loading, error, data } = useQuery(GET_INTERACTIONS, {
      variables: { pk },
    });
    

    if ( loading ) return <h2>LOADING... </h2>;
    if ( error ) return `Error! ${error.message}`;
    if ( data !== undefined){
      console.log("Interactions Data - " + data );
      setInteractionsData(data.listInteractions.items)
      return <div>
          {interactionsData.map(({ pk, sk, case_ref, exhibit_ref, device_uid, file_hash, organisation, datetime_added, datetime, local_partner, interaction, direction, duration, status }, index) => (
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
          ))}
      </div>
    }
  }

  return (
    <div style={{display: "inline-grid", inlineSize: "max-content", width: "100%"}}>
      {/* <h2>🚀 Quest has identified the following results against {pk}</h2> */}
      <center>
        <ListAttributions pk={pk}/>
        <ListInteractions pk={pk}/>
      </center>
      <br/>
      <br />
      {/* <ShowInteractionsDataGrid pk={pk}/> */}
      {attributionsData !== [] &&
        <TabbedResults pk={pk} attributionsData={attributionsData} interactionsData={interactionsData} />
      }
      <br />
      <br />
    </div>
  );

}

ShowResults.propTypes = {
  pk: PropTypes.string
};

export default ShowResults