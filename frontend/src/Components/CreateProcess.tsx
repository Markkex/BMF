import React, { FC, useState } from "react";
import AdapterDateFns from "@material-ui/lab/AdapterDateFns";
import { DateTimePicker, LocalizationProvider } from "@material-ui/lab";
import { Button, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase";

interface Props {
  setUpdating: (any: any) => void;
}

const CreateProcess: FC<Props> = ({ setUpdating }) => {
  const [creationDate, setCreationDate] = useState<Date | string>(new Date());
  const [visitDate, setVisitDate] = useState<Date | string>(new Date());

  const [entity, setEntity] = useState<string>();
  const [appraiser, setAppraiser] = useState<string>();
  const [processNumber, setProcessNumber] = useState<string>();
  const [vRef, setVRef] = useState<string>();
  const [interiorVisit, setInteriorVisit] = useState<string | number>("yes");
  const [houseType, setHouseType] = useState<string | number>(1);
  const [address, setAddress] = useState<string>();
  const [district, setDistrict] = useState<string>();
  const [county, setCounty] = useState<string>();
  const [parish, setParish] = useState<string>();
  const [bank, setBank] = useState<string>();
  const [clientName, setClientName] = useState<string>();
  const [clientContact, setClientContact] = useState<string>();
  const [latitude, setLatitude] = useState<string>();
  const [longitude, setLongitude] = useState<string>();
  const [distance, setDistance] = useState<string>();
  const createProcess = async () => {
    const processCollectionRef = collection(db, "processes");
    await addDoc(processCollectionRef, {
      creationDate: creationDate.toString(),
      visitDate: visitDate.toString(),
      entity: entity,
      appraiser: appraiser,
      processNumber: processNumber,
      vRef: vRef,
      interiorVisit: interiorVisit,
      houseType: houseType,
      address: address,
      district: district,
      county: county,
      parish: parish,
      bank: bank,
      clientName: clientName,
      clientContact: clientContact,
      latitude: latitude,
      longitude: longitude,
      distance: distance,
      isActive: 1
    });
    setUpdating(true);
    setUpdating(false);
  };

  const handleForm = (e: React.FormEvent) => {
    e.preventDefault();
    createProcess();
  };

  const handlePickerVisit = (value: any) => {
    setVisitDate(value);
  };

  const handlePickerCreation = (value: any) => {
    setCreationDate(value);
  };

  return (
    <div className='createprocess'>
      <h1>Novo Processo</h1>
      <div className='printimage'>
        <img
          src='https://www.bmf.pt/wp-content/uploads/2018/06/cropped-BMF-e1528127361864.jpg'
          alt='logo'
          width='150px'
          height='75px'
        />
      </div>
      <form className='processForm' onSubmit={handleForm}>
        <div className='datesdetails'>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DateTimePicker
              label='Criação'
              onChange={handlePickerCreation}
              value={creationDate}
              renderInput={(params: any) => <TextField {...params} />}
            />
            <DateTimePicker
              label='Visita'
              onChange={handlePickerVisit}
              value={visitDate}
              renderInput={(params: any) => <TextField {...params} />}
            />
          </LocalizationProvider>
        </div>
        <div className='processdetails'>
          <TextField
            id='processNumber'
            variant='outlined'
            label='N/Ref'
            onChange={(e) => setProcessNumber(e.target.value)}
          />
          <TextField
            id='VRef'
            variant='outlined'
            label='V/Ref'
            onChange={(e) => setVRef(e.target.value)}
          />
          <TextField
            id='entity'
            variant='outlined'
            label='Entidade'
            onChange={(e) => setEntity(e.target.value)}
          />
          <TextField
            id='appraiser'
            variant='outlined'
            label='Avaliador'
            onChange={(e) => setAppraiser(e.target.value)}
          />
        </div>
        <div className='housedetails'>
          <InputLabel id='interiorVisit'>Visita pelo Interior</InputLabel>
          <Select
            labelId='interiorVisitlabel'
            id='interiorVisit'
            value={interiorVisit}
            label='Visita pelo interior'
            onChange={(e) => setInteriorVisit(e.target.value)}
          >
            <MenuItem value={"sim"}>Sim</MenuItem>
            <MenuItem value={"nao"}>Não</MenuItem>
          </Select>
          <InputLabel id='HouseType'>Tipo de Imóvel</InputLabel>
          <Select
            labelId='HouseType'
            id='HouseType'
            value={houseType}
            label='Tipo de Imóvel'
            onChange={(e) => setHouseType(e.target.value)}
          >
            <MenuItem value={"Apartamento"}>Apartamento</MenuItem>
            <MenuItem value={"Moradia"}>Moradia</MenuItem>
            <MenuItem value={"Comércio"}>Comércio</MenuItem>
            <MenuItem value={"Serviços"}>Serviços</MenuItem>
            <MenuItem value={"Escritório"}>Escritório</MenuItem>
            <MenuItem value={"Armazém"}>Armazém</MenuItem>
            <MenuItem value={"Arrecadação"}>Arrecadação</MenuItem>
            <MenuItem value={"Estac. / Garagem"}>Estac. / Garagem</MenuItem>
            <MenuItem value={"Terreno Urbano"}>Terreno Urbano</MenuItem>
            <MenuItem value={"Terreno Industrial"}>Terreno Industrial</MenuItem>
            <MenuItem value={"Terreno Rústico"}>Terreno Rústico</MenuItem>
            <MenuItem value={"Herdade"}>Herdade</MenuItem>
            <MenuItem value={"Prédio"}>Prédio</MenuItem>
            <MenuItem value={"Outros"}>Outros</MenuItem>
          </Select>
        </div>
        <div className='locationdetails'>
          <TextField
            id='Address'
            variant='outlined'
            label='Morada'
            onChange={(e) => setAddress(e.target.value)}
          />
          <TextField
            id='District'
            variant='outlined'
            label='Distrito'
            onChange={(e) => setDistrict(e.target.value)}
          />
          <TextField
            id='County'
            variant='outlined'
            label='Concelho'
            onChange={(e) => setCounty(e.target.value)}
          />
          <TextField
            id='Parish'
            variant='outlined'
            label='Freguesia'
            onChange={(e) => setParish(e.target.value)}
          />
        </div>
        <div className='clientdetails'>
          <TextField
            id='BankName'
            variant='outlined'
            label='Banco'
            onChange={(e) => setBank(e.target.value)}
          />
          <TextField
            id='ClientName'
            variant='outlined'
            label='Proponente'
            onChange={(e) => setClientName(e.target.value)}
          />
          <TextField
            id='ClientContact'
            variant='outlined'
            label='Contacto'
            onChange={(e) => setClientContact(e.target.value)}
          />
        </div>
        <div className='areadetails'>
          <TextField
            id='Latitude'
            variant='outlined'
            label='Latitude'
            onChange={(e) => setLatitude(e.target.value)}
          />
          <TextField
            id='Longitude'
            variant='outlined'
            label='Longitude'
            onChange={(e) => setLongitude(e.target.value)}
          />
           <TextField
            id='Distancia'
            variant='outlined'
            label='Distância'
            onChange={(e) => setDistance(e.target.value)}
          />
        </div>
        <div className='buttonprint'>
          <Button type='submit' variant='contained'>
            Criar Novo Processo
          </Button>
        </div>
      </form>
    </div>
  );
};

export default CreateProcess;
