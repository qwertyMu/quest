import React, { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";

import { Box } from "@mui/material";

import { GET_ATTRIBUTIONS, GET_INTERACTIONS } from "../../queries";
import TabbedResults from "../../components_v2/tabbedResults";
import AttributionWordCloud from "../../components/AttributionWordCloud.tsx";
import AttributionsCard from "../../components_v2/attributionsCard";
import InteractionsCard from "../../components_v2/interactionsCard";

import Masonry from '@mui/lab/Masonry';

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
        }}
      >
        <AttributionWordCloud data={attributionsData} />
        <Box
          sx={{
            padding: "0.5em",
            height: "20em",
            display: "flex",
            gap: "0.5em",
            justifyContent: 'center',
            display: 'flex',
            flexWrap: 'wrap',
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
        <Box sx={{
          justifyContent: 'center',
          display: 'flex',
          flexWrap: 'wrap',
          gap: "0.5em",
          padding: "0.5em",
        }}>
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
  const itemData = [
    {
      img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
      title: 'Fern',
    },
    {
      img: 'https://images.unsplash.com/photo-1627308595229-7830a5c91f9f',
      title: 'Snacks',
    },
    {
      img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
      title: 'Mushrooms',
    },
    {
      img: 'https://images.unsplash.com/photo-1529655683826-aba9b3e77383',
      title: 'Tower',
    },
    {
      img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
      title: 'Sea star',
    },
    {
      img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
      title: 'Honey',
    },
    {
      img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
      title: 'Basketball',
    },
    {
      img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
      title: 'Breakfast',
    },
    {
      img: 'https://images.unsplash.com/photo-1627328715728-7bcc1b5db87d',
      title: 'Tree',
    },
    {
      img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
      title: 'Burger',
    },
    {
      img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
      title: 'Camera',
    },
    {
      img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
      title: 'Coffee',
    },
    {
      img: 'https://images.unsplash.com/photo-1627000086207-76eabf23aa2e',
      title: 'Camping Car',
    },
    {
      img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
      title: 'Hats',
    },
    {
      img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
      title: 'Tomato basil',
    },
    {
      img: 'https://images.unsplash.com/photo-1627328561499-a3584d4ee4f7',
      title: 'Mountain',
    },
    {
      img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
      title: 'Bike',
    },
  ];
  return (
    <div
      style={{
        display: "inline-grid",
        inlineSize: "max-content",
        width: "100%",
      }}
    >
      {/* <h2>🚀 Quest has identified the following results against {pk}</h2> */}
      <Box sx={{
        // display: 'flex',
        // alignItems: 'center',
        // justifyContent: 'center'
      }}>
        <ListAttributions pk={pk} />
        <Box sx={{ 
          width: 500, 
          minHeight: 829,
        }}>
          <Masonry columns={3} spacing={2}>
            {itemData.map((item, index) => (
              <div key={index}>
                <div>{index + 1}</div>
                <img
                  src={`${item.img}?w=162&auto=format`}
                  srcSet={`${item.img}?w=162&auto=format&dpr=2 2x`}
                  alt={item.title}
                  loading="lazy"
                  style={{
                    borderBottomLeftRadius: 4,
                    borderBottomRightRadius: 4,
                    display: 'block',
                    width: '100%',
                  }}
                />
              </div>
            ))}
          </Masonry>
        </Box>
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
