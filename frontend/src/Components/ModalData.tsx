import { doc } from "@firebase/firestore";
import { DateTimePicker, LocalizationProvider } from "@material-ui/lab";
import AdapterDateFns from "@material-ui/lab/AdapterDateFns";
import { Button, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import { updateDoc } from "firebase/firestore";
import React, { FC, useState } from "react";
import { db } from "../firebase";
interface Props {
  process: any;
  setUpdating: (any: any) => void;
}
const ModalData: FC<Props> = ({ process, setUpdating }) => {
  const [creationDate, setCreationDate] = useState<Date | string>(
    new Date(process.creationDate)
  );
  const [visitDate, setVisitDate] = useState<Date | string>(
    new Date(process.visitDate)
  );
  const [entity, setEntity] = useState<string>(process.entity);
  const [appraiser, setAppraiser] = useState<string>(process.appraiser);
  const [processNumber, setProcessNumber] = useState<string>(
    process.processNumber
  );
  const [vRef, setVRef] = useState<string>(process.vRef);
  const [interiorVisit, setInteriorVisit] = useState<string | number>(
    process.interiorVisit
  );
  const [houseType, setHouseType] = useState<string | number>(
    process.houseType
  );
  const [address, setAddress] = useState<string>(process.address);
  const [district, setDistrict] = useState<string>(process.district);
  const [county, setCounty] = useState<string>(process.county);
  const [parish, setParish] = useState<string>(process.parish);
  const [bank, setBank] = useState<string>(process.bank);
  const [clientName, setClientName] = useState<string>(process.clientName);
  const [clientContact, setClientContact] = useState<string>(
    process.clientContact
  );
  const [latitude, setLatitude] = useState<string>(process.latitude);
  const [longitude, setLongitude] = useState<string>(process.longitude);
  const [distance, setDistance] = useState<string>(process.distance);

  const finishProcess = async (id: any) => {
    const userDoc = doc(db, "processes", id);
    const newFields = {
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
      isActive: 0,
    };
    await updateDoc(userDoc, newFields);
    setUpdating(true);
    setUpdating(false);
  };

  const handleForm = (e: React.FormEvent) => {
    e.preventDefault();
    finishProcess(process.id);
  };

  const handlePickerVisit = (value: any) => {
    setVisitDate(value);
  };

  const handlePickerCreation = (value: any) => {
    setCreationDate(value);
  };

  return (
    <div className="modallayout">
      <form className="processForm" onSubmit={handleForm}>
        <div className="datesdetails">
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DateTimePicker
              label="Criação"
              onChange={handlePickerCreation}
              value={creationDate}
              renderInput={(params: any) => <TextField {...params} />}
            />
            <DateTimePicker
              label="Visita"
              onChange={handlePickerVisit}
              value={visitDate}
              renderInput={(params: any) => <TextField {...params} />}
            />
          </LocalizationProvider>
        </div>
        <div className="processdetails">
          <TextField
            id="processNumber"
            variant="outlined"
            label="N/Ref"
            value={processNumber}
            onChange={(e) => setProcessNumber(e.target.value)}
          />
          <TextField
            id="VRef"
            variant="outlined"
            label="V/Ref"
            value={vRef}
            onChange={(e) => setVRef(e.target.value)}
          />
          <TextField
            id="entity"
            variant="outlined"
            label="Entidade"
            value={entity}
            onChange={(e) => setEntity(e.target.value)}
          />
          <TextField
            id="appraiser"
            variant="outlined"
            label="Avaliador"
            value={appraiser}
            onChange={(e) => setAppraiser(e.target.value)}
          />
        </div>
        <div className="housedetails">
          <InputLabel id="interiorVisit">Visita pelo Interior</InputLabel>
          <Select
            labelId="interiorVisitlabel"
            id="interiorVisit"
            value={interiorVisit}
            label="Visita pelo interior"
            onChange={(e) => setInteriorVisit(e.target.value)}
          >
            <MenuItem value={"sim"}>Sim</MenuItem>
            <MenuItem value={"nao"}>Não</MenuItem>
          </Select>
          <InputLabel id="HouseType">Tipo de Imóvel</InputLabel>
          <Select
            labelId="HouseType"
            id="HouseType"
            value={houseType}
            label="Tipo de Imóvel"
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
        <div className="locationdetails">
          <TextField
            id="Address"
            variant="outlined"
            label="Morada"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <TextField
            id="District"
            variant="outlined"
            label="Distrito"
            value={district}
            onChange={(e) => setDistrict(e.target.value)}
          />
          <TextField
            id="County"
            variant="outlined"
            label="Concelho"
            value={county}
            onChange={(e) => setCounty(e.target.value)}
          />
          <TextField
            id="Parish"
            variant="outlined"
            label="Freguesia"
            value={parish}
            onChange={(e) => setParish(e.target.value)}
          />
        </div>
        <div className="clientdetails">
          <TextField
            id="BankName"
            variant="outlined"
            label="Banco"
            value={bank}
            onChange={(e) => setBank(e.target.value)}
          />
          <TextField
            id="ClientName"
            variant="outlined"
            label="Proponente"
            value={clientName}
            onChange={(e) => setClientName(e.target.value)}
          />
          <TextField
            id="ClientContact"
            variant="outlined"
            label="Contacto"
            value={clientContact}
            onChange={(e) => setClientContact(e.target.value)}
          />
        </div>
        <div className="areadetails">
          <TextField
            id="Latitude"
            variant="outlined"
            label="Latitude"
            value={latitude}
            onChange={(e) => setLatitude(e.target.value)}
          />
          <TextField
            id="Longitude"
            variant="outlined"
            label="Longitude"
            value={longitude}
            onChange={(e) => setLongitude(e.target.value)}
          />
          <TextField
            id="Distancia"
            variant="outlined"
            label="Distância"
            value={distance}
            onChange={(e) => setDistance(e.target.value)}
          />
        </div>
        <div className="buttonprint">
          <Button type="submit" variant="contained">
            Concluir Processo
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ModalData;
