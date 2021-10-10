export default interface Processes {
    setProcesses: (val: any) => void;
    processes: any;
}

export default interface Props {
    processes: any;
}

export default interface Process {
    creationDate: Date | string;
    initialDate: Date | string;
    entity: string;
    appraiser: string;
    vRef: string;
    interiorVisit: string|number;
    houseType: string|number;
    address: string;
    district: string;
    county: string;
    parish: string;
    bank: string;
    clientName: string;
    latitude: string;
    longitude: string;
}

