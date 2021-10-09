import React, { FC } from "react";
import TableData from "./TableData";

interface Props {
  setProcess: (val: any) => void;
  process: any;
}
const CourseTable: FC<Props> = ({ process, setProcess }) => {
  return (
    <div className="coursetable">
      <table>
        <tr>
          <th>N/Ref</th>
          <th>V/Ref</th>
          <th>Proponente</th>
          <th>Contacto</th>
          <th>Morada</th>
          <th>Visita</th>
        </tr>
        <tr>
            <TableData />
        </tr>
      </table>
    </div>
  );
};

export default CourseTable;
