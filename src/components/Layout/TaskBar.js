import Button from "../UI/Button";
import "./TaskBar.css";

export default function TaskBar(props) {
  return (
    <>
      <div className="task-bar">
        <div>
          <h2>Toll entries/Vehicle entries</h2>
        </div>
        <div>
          <Button onClick={props.clickVehicleEntry}>Add vehicle entry</Button>
          <Button onClick={props.clickTollName}>Add new toll</Button>
          <Button onClick={props.clickAllToll}>View all tolls</Button>
        </div>
      </div>
    </>
  );
}
