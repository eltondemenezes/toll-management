import "./VehicleList.css";

export default function VehicleList(props) {
  return (
    <>
      <div className="row vehicle-list-bar">
        <div className="col-lg-4">VEHICLE TYPE</div>
        <div className="col-lg-2">VEHICLE NUMBER</div>
        <div className="col-lg-2">DATE/TIME</div>
        <div className="col-lg-2">TOLL NAME</div>
        <div className="col-lg-2">TARIFF</div>
      </div>
      {props.vehicleList.map((item) => {
        return (
          <div className="row vehicle-list" key={item.id}>
            <div className="col-lg-4">{item.vehicletype}</div>
            <div className="col-lg-2">{item.vehiclenumber}</div>
            <div className="col-lg-2">{item.date}</div>
            <div className="col-lg-2">{item.toll}</div>
            <div className="col-lg-2">{item.tariff}</div>
          </div>
        );
      })}
    </>
  );
}
