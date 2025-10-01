import React, { useMemo, useState } from 'react';
import Card from 'react-bootstrap/Card';
import { AgGridReact } from 'ag-grid-react';

import { getLivePositionColumnDefs, getLivePositionRowData } from '../data/livePositionData';

const DataTable = () => {
  const columnDefs = useMemo(() => getLivePositionColumnDefs(), []);
  const [rowData] = useState(() => getLivePositionRowData());

  return (
    <Card bg="dark" text="light" className="shadow-lg">
      <Card.Header className="fs-5">Current Positions</Card.Header>
      <Card.Body>
        <div className="ag-theme-alpine-dark" style={{ height: 400, width: '100%' }}>
          <AgGridReact
            columnDefs={columnDefs}
            rowData={rowData}
            domLayout="autoHeight"
            animateRows
          />
        </div>
      </Card.Body>
    </Card>
  );
};

export default DataTable;
