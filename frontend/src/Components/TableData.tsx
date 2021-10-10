import React, { FC, useState } from "react";
import LaunchIcon from "@mui/icons-material/Launch";
import { Modal } from "@mui/material";
import { Box } from "@mui/system";
interface Process {
  process: any;
  handleOpen: () => void
}

const TableData: FC<Process> = ({ process, handleOpen }) => {


  const dateNow = new Date();
  const dateCreation = new Date(`${process.creationDate}`);
  const visitDate = new Date(process.visitDate);
  const diffTime = Math.abs(dateNow.valueOf() - dateCreation.valueOf());
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  const dateVisit = visitDate.toLocaleDateString();
  return (
    <tbody>
      <tr>
        <td>{process.processNumber}</td>
        <td>{process.vRef}</td>
        <td>{process.clientName}</td>
        <td>{process.clientContact}</td>
        <td>{process.address}</td>
        <td>{dateVisit}</td>
        <td>{diffDays}</td>
        <td>
          <LaunchIcon onClick={handleOpen}/>
        </td>
      </tr>
      
    </tbody>
  );
};

export default TableData;
