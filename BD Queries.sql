create database BMF;

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

create table Location (
	LocationId int primary key identity(1,1),
	LocationName varchar(50),
	AddressName varchar(500), 
	ZipCode varchar(10),
	Latitude varchar(20), 
	Longitude varchar(20), 
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
	HouseTypeID int foreign key references HouseType(HouseTypeId),
	AppraiserID int foreign key references Appraiser(AppraiserId),
	EntityID int foreign key references Entity(EntityId),
	VisitInteriorID int foreign key references VisitInterior(VisitInteriorId)
);

select * from Process;