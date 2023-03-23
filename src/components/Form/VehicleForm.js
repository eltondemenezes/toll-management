import { useDispatch, useSelector } from "react-redux";
import Modal from "../UI/Modal";
import Button from "../UI/Button";
import "./VehicleForm.css";
import { vehicleActions } from "../../store/index";

export default function VehicleForm(props) {
  const dispatch = useDispatch();
  const form = useSelector((state) => state.vehicle);

  const handleChange = (event) => {
    const { name, value } = event.target;
    dispatch(vehicleActions.updateVehicle({ name, value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const now = new Date();
    const date = now.toLocaleDateString('en-US', { month: '2-digit', day: '2-digit', year: 'numeric' });
    const time = now.toLocaleTimeString('en-US', { hour12: false });
    const formattedDateTime = `${date}, ${time}`;
    const newForm = {...form, tariff: currentVehicle, date: formattedDateTime}
    
    props.newVehicle(newForm);
    dispatch(vehicleActions.clearVehicle());
  };

  function getIndex(name) {
    return props.items.findIndex((obj) => obj.name === name);
  }
  const indexValue = getIndex(form.toll);

  let currentVehicle;

  if (form.vehicletype === "CAR/JEEP/VAN") {
    currentVehicle = props.items[indexValue].vehicle;
  }
  if (form.vehicletype === "LCV") {
    currentVehicle = props.items[indexValue].lcv;
  }
  if (form.vehicletype === "TRUCK/BUS") {
    currentVehicle = props.items[indexValue].truck;
  }
  if (form.vehicletype === "HEAVYVEHICLE") {
    currentVehicle = props.items[indexValue].hvehicle;
  }

  return (
    <Modal onClose={props.onClick}>
      <div className="vehicle-form">
        <h2>Add new entry</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="select-toll">Select Toll*</label>
          <select
            id="select-toll"
            name="toll"
            value={form.toll}
            onChange={handleChange}
          >
            {props.items.map((item) => {
              return <option value={item.name}>{item.name}</option>;
            })}
          </select>

          <label htmlFor="vehicletype">Select vehicle type*</label>
          <select
            id="vehicletype"
            name="vehicletype"
            value={form.vehicletype}
            onChange={handleChange}
          >
            <option value="CAR/JEEP/VAN">CAR/JEEP/VAN</option>
            <option value="LCV">LCV</option>
            <option value="TRUCK/BUS">TRUCK/BUS</option>
            <option value="HEAVYVEHICLE">HEAVY VEHICLE</option>
          </select>

          <label>Vehicle Number*</label>
          <input
            type="text"
            name="vehiclenumber"
            value={form.vehiclenumber}
            onChange={handleChange}
          />

          <label>Tariff*</label>
          <input
            type="text"
            readOnly
            name="tariff"
            value={currentVehicle}
            onChange={handleChange}
          />

          <Button className="submit-button" type="submit">
            Add Entry
          </Button>
        </form>
      </div>
    </Modal>
  );
}
