import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import {
  randomCreatedDate,
  randomTraderName,
  randomUpdatedDate,
} from '@mui/x-data-grid-generator';

export default function IntelligenceList() {
  return (
    <div style={{ height: 450, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        experimentalFeatures={{ newEditingApi: true }}
      />
    </div>
  );
}

const columns = [
  { field: 'attributedName', headerName: 'Name attributed', width: 180, editable: false },
  { field: 'attributedIdentifier', headerName: 'Identifier attributed To', width: 220, type: 'string', editable: false },
  {
    field: 'dateAddedToList',
    headerName: 'Date Added to Intelligence List',
    type: 'dateTime',
    width: 280,
    editable: false,
  },
  { field: 'nameKnownToMe', headerName: 'Other name (if known)', width: 180, type: 'string', editable: true },
  {
    field: 'notes',
    headerName: 'Notes',
    type: 'string',
    width: 300,
    editable: true,
  },
];

const rows = [
  {
    id: 1,
    attributedName: randomTraderName(),
    nameKnownToMe: randomTraderName(),
    attributedIdentifier: '0712345678',
    dateAddedToList: randomUpdatedDate(),
    notes: '',
  },
  {
    id: 2,
    attributedName: randomTraderName(),
    nameKnownToMe: randomTraderName(),
    attributedIdentifier: '0712345678',
    dateAddedToList: randomUpdatedDate(),
    notes: '',
  },
  {
    id: 3,
    attributedName: randomTraderName(),
    nameKnownToMe: randomTraderName(),
    attributedIdentifier: '0712345678',
    dateAddedToList: randomUpdatedDate(),
    notes: '',
  },
  {
    id: 4,
    attributedName: randomTraderName(),
    nameKnownToMe: randomTraderName(),
    attributedIdentifier: '0712345678',
    dateAddedToList: randomUpdatedDate(),
    notes: '',
  },
  {
    id: 5,
    attributedName: randomTraderName(),
    nameKnownToMe: randomTraderName(),
    attributedIdentifier: '0712345678',
    dateAddedToList: randomUpdatedDate(),
    notes: '',
  },
];
