import React, { FC } from "react";
import AdapterDateFns from "@material-ui/lab/AdapterDateFns";
import { LocalizationProvider } from "@material-ui/lab";
import { TextField } from "@mui/material";

const CreateProcess: FC = () => {
  return (
    <div className="CreateProcess">
      <h1>Novo Processo</h1>

      <div>
        <LocalizationProvider dateAdapter={AdapterDateFns} />
        <TextField
          id="pickerinput"
          label="Visita"
          type="datetime-local"
          sx={{ width: 250 }}
          InputLabelProps={{
            shrink: true,
          }}
        />
      </div>
    </div>
  );
};

export default CreateProcess;
