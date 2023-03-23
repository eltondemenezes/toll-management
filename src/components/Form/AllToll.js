import Modal from "../UI/Modal";

export default function allToll(props) {
  return (
    <Modal onClose={props.onClick} className="alltoll-modal">
      <div className="row vehicle-list-bar">
        <div className="col-lg-4">TOLL NAME</div>
        <div className="col-lg-2">CAR/JEEP/VAN</div>
        <div className="col-lg-2">LCV</div>
        <div className="col-lg-2">TRUCK/BUS</div>
        <div className="col-lg-2">HEAVY VEHICLE</div>
      </div>
      {props.items.map((item) => {
        return (
          <div className="row vehicle-list">
            <div className="col-lg-4">{item.name}</div>
            <div className="col-lg-2">{item.vehicle}</div>
            <div className="col-lg-2">{item.lcv}</div>
            <div className="col-lg-2">{item.truck}</div>
            <div className="col-lg-2">{item.hvehicle}</div>
          </div>
        );
      })}
    </Modal>
  );
}
