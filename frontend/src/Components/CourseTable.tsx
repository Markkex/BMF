import { Box, Modal } from "@mui/material";
import React, { FC, useState } from "react";
import TableData from "./TableData";

interface Props {
  setProcesses: (val: any) => void;
  processes: Array<any>;
}
const CourseTable: FC<Props> = ({ processes, setProcesses }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
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
          <TableData key={process.processNumber} process={process} handleOpen={handleOpen} />
        ))}
      </table>

      <Modal open={open} onClose={handleClose}>
        <Box></Box>
      </Modal>
    </div>
  );
};

export default CourseTable;
