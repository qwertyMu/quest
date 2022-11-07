import React, { useState, useEffect } from "react";
import { useQuery } from '@apollo/client';
import PropTypes from "prop-types";
import { GET_ATTRIBUTIONS, GET_INTERACTIONS } from "../queries";
import ShowInteractionsDataGrid from "./showInteractionsDataGrid";
import TabbedResults from "./tabbedResults";
import ListAttributions from "./listAttributions";
import ListInteractions from "./listInteractions";
import GetAttributionsData from "./getAttributionsData";

const ShowResults = props => {

  const { pk } = props;


  const [attributionsData, setAttributionsData] = useState([])
  // const [interactionsData, setInteractionsData] = useState([])


  // function GetInteractionsData({ pk }){
  //   const { loading, error, data } = useQuery(GET_INTERACTIONS, {
  //     variables: { pk },
  //   });
  //   if ( loading ) return <h2>LOADING... </h2>;
  //   if ( error ) return `Error! ${error}`;
  //   if ( data !== undefined){
  //     setInteractionsData(data.listInteractions.items);
  //   }
  // }


  // function ListAttributions({ pk }) {
  //   const { loading, error, data } = useQuery(GET_ATTRIBUTIONS, {
  //       variables: { pk },
  //   });
  //   if ( loading ) return <h2>LOADING... </h2>;
  //   if ( error ) return `Error! ${error}`;
  //   if ( data !== undefined){
  //     setAttributionsData(data.listAttributions.items);
  //     return <div>
  //     {attributionsData.map(({ sk, nominal, organisation, attribution, file_name, datetime_added, exhibit }, index) => (
  //       <AttributionsCard 
  //         key={index}
  //         Sk={sk}
  //         Nominal={nominal}
  //         Organisation={organisation}
  //         Attribution={attribution}
  //         FileName={file_name}
  //         FoundInsidePhone={file_name.match(/[0-9]+/g)}
  //         DateTimeAdded={datetime_added}
  //         Exhibit={exhibit}
  //         Pk ={pk}
  //       />
  //       ))}
  //     </div>
  //   }
  // }

  // function ListInteractions({ pk }) { //Aug 2022 - This is a working prototype of the query behavious i'm looking for. 
  //   const { loading, error, data } = useQuery(GET_INTERACTIONS, {
  //     variables: { pk },
  //   });
    

  //   if ( loading ) return <h2>LOADING... </h2>;
  //   if ( error ) return `Error! ${error}`;
  //   if ( data !== undefined){
  //     console.log("Interactions Data - " + data );
  //     setInteractionsData(data.listInteractions.items)
  //     return <div>
  //         {interactionsData.map(({ direction, interaction, partner, duration, datetime, exhibit, organisation, file_name, datetime_added }, index) => (
  //             <InteractionsCard 
  //                 key={index}
  //                 Interaction={interaction}
  //                 Direction={direction}
  //                 Partner={partner}
  //                 Duration={duration}
  //                 DateTime={datetime}
  //                 Exhibit={exhibit}
  //                 Organisation={organisation}
  //                 FileName={file_name}
  //                 DateTimeAdded={datetime_added}
  //                 Pk={pk}
  //             />
  //         ))}
  //     </div>
  //   }
  // }

  // useEffect(() => {
    // GetAttributionsData(pk);
    // GetInteractionsData(pk);
  // }, []);

 
  setAttributionsData(<GetAttributionsData pk={pk} />)
  
  return (
    <div style={{display: "inline-grid", inlineSize: "max-content", width: "100%"}}>
      {/* <h2>🚀 Quest has identified the following results against {pk}</h2> */}
      <center>
        <ListAttributions pk={pk} attributionsData={attributionsData} />
        {/* <ListInteractions pk={pk} interactionsData={interactionsData}/> */}
      </center>
      <br/>
      <br />
      {/* <ShowInteractionsDataGrid pk={pk}/> */}
      {/* {attributionsData &&
      // Sep 14th 20:42 -  No idea whats going on with this... The ListAttributions components above work fine
        <TabbedResults pk={pk} attributionsData={attributionsData} interactionsData={interactionsData} />
        //https://stackoverflow.com/questions/73737395/passing-state-array-to-child-components-in-react
      } */}
      <br />
      <br />
    </div>
  );

}

ShowResults.propTypes = {
  pk: PropTypes.string
};

export default ShowResults