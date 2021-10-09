import React, { FC } from "react";
import { DataGrid, GridColDef, GridRowsProp } from "@mui/x-data-grid";

interface Props {
  process: any;
}

const DataTable: FC<Props> = ({ process }) => {
  const rows: GridRowsProp = [{ id: "011354987", NProc: "123456789" }];
  const columns: GridColDef[] = [
    { field: "NProc", headerName: "N/Proc", width: 150 },
  ];

  return (
    <div className='gridboard'>
      <DataGrid columns={columns} rows={rows} />
    </div>
  );
};

export default DataTable;
