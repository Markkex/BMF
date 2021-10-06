import React, { FC, useState } from "react";
import AdapterDateFns from "@material-ui/lab/AdapterDateFns";
import { LocalizationProvider } from "@material-ui/lab";
import { Button, TextField } from "@mui/material";

const CreateProcess: FC = () => {
  const [initialDate, setInitialDate] = useState<string>();
  const [entity, setEntity] = useState<string>();

  const handleForm = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className='CreateProcess'>
      <h1>Novo Processo</h1>

      <div>
        <TextField
          id='Entity'
          variant='outlined'
          label='Entidade'
          value={entity}
          onChange={(e) => setEntity(e.target.value)}
        />
        
        <LocalizationProvider dateAdapter={AdapterDateFns} />
        <TextField
          id='pickerinput'
          label='Visita'
          value={initialDate}
          onChange={(e) => setInitialDate(e.target.value)}
          type='datetime-local'
          sx={{ width: 250 }}
          InputLabelProps={{
            shrink: true,
          }}
        />
      </div>
      <div>
        <Button type='submit' onClick={handleForm}>
          Criar Novo Processo
        </Button>
      </div>
    </div>
  );
};

export default CreateProcess;
