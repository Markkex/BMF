import React, { FC, Fragment, useState } from "react";
import CheckIcon from "@mui/icons-material/Check";
import { updateDoc, doc } from "firebase/firestore";
import { db } from "../firebase";
import { Modal } from "@mui/material";
import ModalData from "./ModalData";
interface Props {
  setUpdating: (any: any) => void;
  processes: any;
}
const CourseTable: FC<Props> = ({ setUpdating, processes }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const inCourse = processes.filter(function (process: any) {
    return process.isActive === 1;
  });

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
    <div className="coursetable">
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
        <tbody>
          {inCourse.map((process: any) => (
            <Fragment>
              <tr key={process.id}>
                <td>{process.processNumber}</td>
                <td>{process.vRef}</td>
                <td>{process.clientName}</td>
                <td>{process.clientContact}</td>
                <td>{process.address}</td>
                <td>{dateVisitTrimmed(process.visitDate)}</td>
                <td>{diferenceDates(process.creationDate)}</td>
                <td>
                  <CheckIcon onClick={handleOpen} />
                </td>
              </tr>
              <Modal open={open} onClose={handleClose}>
                <ModalData process={process} setUpdating={setUpdating} />
              </Modal>
            </Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CourseTable;
