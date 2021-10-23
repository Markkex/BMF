import React, { FC } from "react";
import XLSX from "xlsx";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

interface Props {
  processes: any;
}

const DataTable: FC<Props> = ({ processes }) => {
  const inCourse = processes.filter(function (process: any) {
    return process.isActive === 0;
  });

  const handleExportToExcel = () => {
    const newData = inCourse.map((data: any) => {
      delete data.id;
      delete data.isActive;
      return data;
    });
    const worksheet = XLSX.utils.json_to_sheet(newData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "processes");
    let buff = XLSX.write(workbook, { bookType: "xlsx", type: "buffer" });
    XLSX.write(workbook, { bookType: "xlsx", type: "binary" });
    XLSX.writeFile(workbook, "ProcessosConcluidos.xlsx");
  };

  return (
    <div className="dataTable">
      <div>
        <button onClick={handleExportToExcel}>Exportar</button>
      </div>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>N/Ref</TableCell>
              <TableCell>V/Ref</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {inCourse.map((process: any) => (
              <TableRow id={process.id}>
                <TableCell>{process.processNumber}</TableCell>
                <TableCell>{process.vRef}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default DataTable;
