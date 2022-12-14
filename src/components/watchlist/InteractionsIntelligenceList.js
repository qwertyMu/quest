import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useState, useEffect } from "react";
import { API } from "aws-amplify";
import { listCapturedInteractions } from "../../graphql/queries";
import moment from "moment";

export default function InteractionsIntelligenceList() {
  const [list, setList] = useState([]);

  // useEffect(() => {
  //   setInterval(() => fetchList(), 1000); //This calls fetchList() every second to give the illusion of async db fetch.
  // }, []);

  useEffect(() => {
    fetchList(); //This calls fetchList() every second to give the illusion of async db fetch.
  }, []);

  async function fetchList() {
    const apiData = await API.graphql({ query: listCapturedInteractions });
    setList(apiData.data.listCapturedInteractions.items);
  }

  const columns = [
    {
      field: "identifier",
      headerName: "Identifier",
      width: 180,
      editable: false,
    },
    {
      field: "nameKnownToMe",
      headerName: "Name (if known)",
      width: 180,
      type: "string",
      editable: true,
    },
    {
      field: "local_partner",
      headerName: "Communication with",
      width: 180,
      type: "string",
      editable: false,
    },
    {
      field: "interaction",
      headerName: "Type of communication",
      width: 180,
      type: "string",
      editable: false,
    },
    {
      field: "status",
      headerName: "Status",
      width: 180,
      type: "string",
      editable: false,
    },
    {
      field: "datetime",
      headerName: "Communicated on",
      width: 180,
      type: "string",
      editable: false,
    },
    {
      field: "direction",
      headerName: "Direction",
      width: 180,
      type: "string",
      editable: false,
    },
    {
      field: "duration",
      headerName: "Duration",
      width: 180,
      type: "string",
      editable: false,
    },
    {
      field: "exhibit_ref",
      headerName: "From exhibit",
      width: 180,
      type: "string",
      editable: false,
    },
    {
      field: "case_ref",
      headerName: "Case Ref",
      width: 180,
      type: "string",
      editable: false,
    },
    {
      field: "file_hash",
      headerName: "File Hash",
      width: 180,
      type: "string",
      editable: false,
    },
    {
      field: "organisation",
      headerName: "Contributed by",
      width: 220,
      type: "string",
      editable: false,
    },
    {
      field: "datetime_added",
      headerName: "Date Added to Intelligence List",
      type: "string",
      width: 280,
      editable: false,
    },
    {
      field: "notes",
      headerName: "Notes",
      type: "string",
      width: 300,
      editable: true,
    },
  ];

  const rows = list.map(
    (
      {
        id,
        identifier,
        nameKnownToMe,
        local_partner,
        interaction,
        status,
        datetime,
        direction,
        duration,
        exhibit_ref,
        case_ref,
        file_hash,
        organisation,
        notes,
        createdAt,
      },
      index
    ) => {
      let DateTimeAddedToList = moment(createdAt).format("MMM Do YY, h:mma");
      return {
        key: index,
        id: id,
        identifier: identifier,
        local_partner: local_partner,
        interaction: interaction,
        status: status,
        datetime: datetime,
        direction: direction,
        duration: duration,
        exhibit_ref: exhibit_ref,
        case_ref: case_ref,
        file_hash: file_hash,
        organisation: organisation,
        nameKnownToMe: nameKnownToMe,
        notes: notes,
        datetime_added: DateTimeAddedToList, //Currently this format does not allow sort by ASC. Date seems fine but time is a bit funny.
      };
    }
  );

  return (
    <div style={{ height: "44em", width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        experimentalFeatures={{ newEditingApi: true }}
        initialState={{
          ...list.initialState,
          // filter: {
          //   filterModel: {
          //     items: [{ columnField: 'quantity', operatorValue: '>', value: 10000 }],
          //   },
          // },
          sorting: {
            sortModel: [{ field: "datetime_added", sort: "desc" }],
          },
        }}
      />
    </div>
  );
}

// const rows = [
//   {
//     id: 1,
//     attributedName: randomTraderName(),
//     nameKnownToMe: randomTraderName(),
//     attributedIdentifier: '0712345678',
//     dateAddedToList: randomUpdatedDate(),
//     notes: '',
//   },
//   {
//     id: 2,
//     attributedName: randomTraderName(),
//     nameKnownToMe: randomTraderName(),
//     attributedIdentifier: '0712345678',
//     dateAddedToList: randomUpdatedDate(),
//     notes: '',
//   },
//   {
//     id: 3,
//     attributedName: randomTraderName(),
//     nameKnownToMe: randomTraderName(),
//     attributedIdentifier: '0712345678',
//     dateAddedToList: randomUpdatedDate(),
//     notes: '',
//   },
//   {
//     id: 4,
//     attributedName: randomTraderName(),
//     nameKnownToMe: randomTraderName(),
//     attributedIdentifier: '0712345678',
//     dateAddedToList: randomUpdatedDate(),
//     notes: '',
//   },
//   {
//     id: 5,
//     attributedName: randomTraderName(),
//     nameKnownToMe: randomTraderName(),
//     attributedIdentifier: '0712345678',
//     dateAddedToList: randomUpdatedDate(),
//     notes: '',
//   },
// ];
