import { useDispatch, useSelector } from "react-redux";
import Modal from "../UI/Modal";
import Button from "../UI/Button";
import "./VehicleForm.css";
import { tollActions } from "../../store/index";

export default function TollForm(props) {
  const dispatch = useDispatch();
  const form = useSelector((state) => state.toll);

  const handleChange = (event) => {
    const { name, value } = event.target;
    dispatch(tollActions.updateToll({ name, value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.tollItem(form);
    dispatch(tollActions.clearToll());
  };

  return (
    <Modal onClose={props.onClick}>
      <div className="vehicle-form">
        <h2>Add new toll</h2>
        <form onSubmit={handleSubmit}>
          <label>Toll Name*</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
          />

          <label>Vehicle Fare details*</label>

          <label>
            Car/Jeep/Van:
            <input
              type="number"
              name="vehicle"
              value={form.vehicle}
              onChange={handleChange}
            />
          </label>

          <label>
            LCV:
            <input
              type="number"
              name="lcv"
              value={form.lcv}
              onChange={handleChange}
            />
          </label>

          <label>
            Truck/Bus:
            <input
              type="number"
              name="truck"
              value={form.truck}
              onChange={handleChange}
            />
          </label>

          <label>
            Heavy vehicle:
            <input
              type="number"
              name="hvehicle"
              value={form.hvehicle}
              onChange={handleChange}
            />
          </label>

          <Button className="submit-button" type="submit">
            Add details
          </Button>
        </form>
      </div>
    </Modal>
  );
}
