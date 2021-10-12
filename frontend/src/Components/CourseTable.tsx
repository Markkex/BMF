import { Box, Modal } from "@mui/material";
import React, { FC, useState } from "react";
import LaunchIcon from "@mui/icons-material/Launch";
interface Props {
  setProcesses: (val: any) => void;
  processes: Array<any>;
}
const CourseTable: FC<Props> = ({ processes, setProcesses }) => {
  const diferenceDates = (value: any) => {
    const dateNow = new Date();
    const dateCreation = new Date(`${value}`);

    const diffTime = Math.abs(dateNow.valueOf() - dateCreation.valueOf());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  const dateVisitTrimmed = (value: any) => {
    const visitDate = new Date(value);
    const dateVisit = visitDate.toLocaleDateString();
    return dateVisit;
  };
  return (
    <div className='coursetable'>
      <table>
        <thead>
          <tr>
            <th>N/Ref</th>
            <th>V/Ref</th>
            <th>Proponente</th>
            <th>Contacto</th>
            <th>Morada</th>
            <th>Visita</th>
            <th>Dias em Curso</th>
          </tr>
        </thead>
        {processes.map((process: any) => (
          <tbody>
            <tr>
              <td>{process.processNumber}</td>
              <td>{process.vRef}</td>
              <td>{process.clientName}</td>
              <td>{process.clientContact}</td>
              <td>{process.address}</td>
              <td>{dateVisitTrimmed(process.visitDate)}</td>
              <td>{diferenceDates(process.creationDate)}</td>
              <td>
                <LaunchIcon />
              </td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
};

export default CourseTable;
