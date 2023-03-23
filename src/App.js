import React, { useState } from "react";
import MainHeader from "./components/Layout/MainHeader";
import TaskBar from "./components/Layout/TaskBar";
import VehicleList from "./components/Vehicles/VehicleList";
import TollData from "./data/TollData";
import vehicleData from "./data/VehicleData";

import VehicleForm from "./components/Form/VehicleForm";
import TollForm from "./components/Form/TollForm";
import AllToll from "./components/Form/AllToll";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [isTollOpen, setIsTollOpen] = useState(false);
  const [allToll, setAllToll] = useState(false);
  const [tollItem, setTollItem] = useState(TollData);
  const [vehicleItem, setVehicleItem] = useState(vehicleData);

  const handleVehicleEntry = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  const handleTollName = () => {
    setIsTollOpen(true);
  };

  const handleCloseTollModal = () => {
    setIsTollOpen(false);
  };

  const handleAllToll = () => {
    setAllToll(true);
  };

  const handleCloseAllToll = () => {
    setAllToll(false);
  };

  const handleTollItem = (form) => {
    setTollItem([
      {
        name: form.name,
        vehicle: form.vehicle,
        lcv: form.lcv,
        truck: form.truck,
        hvehicle: form.hvehicle,
      },
      ...tollItem,
    ]);
  };

  const handleNewVehicle = (form) => {
    setVehicleItem([
      {
        toll: form.toll,
        vehicletype: form.vehicletype,
        vehiclenumber: form.vehiclenumber,
        tariff: form.tariff,
        date: form.date,
      },
      ...vehicleItem,
    ]);
  };

  return (
    <div className="container">
      {isOpen && (
        <VehicleForm
          onClick={handleCloseModal}
          items={tollItem}
          newVehicle={handleNewVehicle}
        />
      )}
      {isTollOpen && (
        <TollForm onClick={handleCloseTollModal} tollItem={handleTollItem} />
      )}
      {allToll && <AllToll onClick={handleCloseAllToll} items={tollItem} />}
      <MainHeader />
      <TaskBar
        clickVehicleEntry={handleVehicleEntry}
        clickTollName={handleTollName}
        clickAllToll={handleAllToll}
      />
      <VehicleList vehicleList={vehicleItem}/>
    </div>
  );
}

export default App;
