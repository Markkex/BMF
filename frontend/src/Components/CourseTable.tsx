import React, { FC, Fragment, useState } from "react";
import CheckIcon from "@mui/icons-material/Check";
import {
  Modal,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
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
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>N/Ref</TableCell>
              <TableCell>V/Ref</TableCell>
              <TableCell>Proponente</TableCell>
              <TableCell>Contacto</TableCell>
              <TableCell>Morada</TableCell>
              <TableCell>Visita</TableCell>
              <TableCell>Dias em Curso</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {inCourse.map((process: any) => (
              <Fragment>
                <TableRow id={process.id}>
                  <TableCell>{process.processNumber}</TableCell>
                  <TableCell>{process.vRef}</TableCell>
                  <TableCell>{process.clientName}</TableCell>
                  <TableCell>{process.clientContact}</TableCell>
                  <TableCell>{process.address}</TableCell>
                  <TableCell>{dateVisitTrimmed(process.visitDate)}</TableCell>
                  <TableCell>{diferenceDates(process.creationDate)}</TableCell>
                  <TableCell>
                    <CheckIcon onClick={handleOpen} />
                  </TableCell>
                </TableRow>
                <Modal open={open} onClose={handleClose}>
                  <ModalData process={process} setUpdating={setUpdating} />
                </Modal>
              </Fragment>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default CourseTable;
