create table HouseType(
	HouseTypeId int primary key identity(1,1), 
	HouseType varchar(150),
);

create table Appraiser (
	AppraiserId int primary key identity(1,1), 
	AppraiserName varchar(150), 
);

create table Entity (
	EntityId int primary key identity(1,1), 
	EntityName varchar(250),
	SubEntity varchar(150)
);

create table VisitInterior (
	VisitInteriorId int primary key identity(1,1), 
	VisitInterior bit
);

create table District(
	DistrictId int primary key identity(1,1),
	DistrictName varchar(150),
);

create table County(
	CountyId int primary key identity(1,1), 
	CountyName varchar(150),

);

create table Parish(
	ParishId int primary key identity(1,1), 
	ParishName varchar(450), 
	
);

create table LocationHouse (
	LocationId int primary key identity(1,1),
	DistrictID int foreign key references District(DistrictId), 
	CountyID int foreign key references County(CountyId), 
	ParishID int foreign key references Parish(ParishId), 
);

create table Process(
	ProcessID int primary key,
	VRef int,
	ClientName VarChar(250), 
	ClientContact varchar(20),
	ClientNIF Varchar(10),
	DayCreation datetime2, 
	DayReceived datetime2, 
	DayVisit datetime2, 
	DayConcluded datetime2,
	SurveyPercentage int, 
	HouseValue int, 
	LocationName varchar(50),
	AddressName varchar(500), 
	ZipCode varchar(10),
	Latitude varchar(20), 
	Longitude varchar(20), 
	HouseTypeID int foreign key references HouseType(HouseTypeId),
	AppraiserID int foreign key references Appraiser(AppraiserId),
	EntityID int foreign key references Entity(EntityId),
	VisitInteriorID int foreign key references VisitInterior(VisitInteriorId), 
	LocationHouseID int foreign key references LocationHouse(LocationId),

);

insert into HouseType(HouseType) values ('Apartamento'); 
insert into HouseType(HouseType) values ('Moradia'); 
insert into HouseType(HouseType) values ('Terreno'); 
insert into HouseType(HouseType) values ('Loja'); 
insert into HouseType(HouseType) values ('Escritório'); 
insert into HouseType(HouseType) values ('Prédio'); 
insert into HouseType(HouseType) values ('Armazém'); 
insert into HouseType(HouseType) values ('Quinta e Herdade'); 
insert into HouseType(HouseType) values ('Garagem'); 

insert into Appraiser(AppraiserName) values ('Bruno Fagundes'); 

insert into Entity(EntityName) values ('Cerat'); 

insert into VisitInterior(VisitInterior) values (1); 
insert into VisitInterior(VisitInterior) values (0);

insert into District(DistrictName) values ('Aveiro');
insert into District(DistrictName) values ('Beja');
insert into District(DistrictName) values ('Braga');
insert into District(DistrictName) values ('Bragança');
insert into District(DistrictName) values ('Castelo Branco');
insert into District(DistrictName) values ('Coimbra');
insert into District(DistrictName) values ('Évora');
insert into District(DistrictName) values ('Faro');
insert into District(DistrictName) values ('Guarda');
insert into District(DistrictName) values ('Leiria');
insert into District(DistrictName) values ('Lisboa');
insert into District(DistrictName) values ('Portalegre');
insert into District(DistrictName) values ('Porto');
insert into District(DistrictName) values ('Santarém');
insert into District(DistrictName) values ('Setúbal');
insert into District(DistrictName) values ('Viana do Castelo');
insert into District(DistrictName) values ('Vila Real');
insert into District(DistrictName) values ('Viseu');
insert into District(DistrictName) values ('Madeira');
insert into District(DistrictName) values ('Porto Santo');
insert into District(DistrictName) values ('Santa Maria');
insert into District(DistrictName) values ('São Miguel');
insert into District(DistrictName) values ('Terceira');
insert into District(DistrictName) values ('Graciosa');
insert into District(DistrictName) values ('São Jorge');
insert into District(DistrictName) values ('Pico');
insert into District(DistrictName) values ('Faial');
insert into District(DistrictName) values ('Flores');
insert into District(DistrictName) values ('Corvo');

/*Faro*/
insert into County(CountyName) values ('Albufeira');
insert into County(CountyName) values ('Alcoutim');
insert into County(CountyName) values ('Aljezur');
insert into County(CountyName) values ('Castro Marim');
insert into County(CountyName) values ('Faro');
insert into County(CountyName) values ('Lagoa (Algarve)');
insert into County(CountyName) values ('Lagos');
insert into County(CountyName) values ('Loulé');
insert into County(CountyName) values ('Monchique');
insert into County(CountyName) values ('Olhão');
insert into County(CountyName) values ('Portimão');
insert into County(CountyName) values ('São Brás de Alportel');
insert into County(CountyName) values ('Silves');
insert into County(CountyName) values ('Tavira');
insert into County(CountyName) values ('Vila do Bispo');
insert into County(CountyName) values ('Vila Real de Santo António');

insert into Parish(ParishName) values ('Conceição e Estoi');
insert into Parish(ParishName) values ('Faro (Sé e São Pedro)');
insert into Parish(ParishName) values ('Montenegro');
insert into Parish(ParishName) values ('Santa Bárbara de Nexe');
