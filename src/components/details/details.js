import { useState } from "react";
import "./details.css";
import Selected from "../selectDetails/selectDetails";

const Details = () => {
  const [TrucksTypes, setTrucksTypes] = useState([
    "Citroen",
    "Fiat",
    "Ferrari",
    "Dodge",
  ]);
  const [Contractors, setConstractors] = useState(["A", "B", "C", "D"]);
  const [Customers, setCustomers] = useState([
    "avraham",
    "ytzchak",
    "yaakov",
    "yosef",
  ]);
  const [Origins, setOrigin] = useState(["#", "$", "%", "&"]);
  const [Destinations, setDestinations] = useState(["#", "$", "%", "&"]);
  const [Cities, setCities] = useState([
    "Jerusalem",
    "TelAviv",
    "Hayfa",
    "Ashdod",
  ]);

  return (
    <div className="details">
      {/* <div className="head">
        <h1>Details</h1>
      </div> */}
      <div className="row1">
        <h3>Trucks Types</h3>
        <Selected
          options={TrucksTypes}
          setOptions={setTrucksTypes}
          title="TrucksTypes"
        />
      </div>
      <div className="row2">
        <h3>Contractors</h3>
        <Selected
          options={Contractors}
          setOptions={setConstractors}
          title="Contractors"
        />{" "}
      </div>
      <div className="row1">
        <h3>Customers</h3>
        <Selected
          options={Customers}
          setOptions={setCustomers}
          title="Customers"
        />{" "}
      </div>
      <div className="row2">
        <h3>Origins</h3>
        <Selected
          options={Origins}
          setOptions={setOrigin}
          title="Origins"
        />{" "}
      </div>
      <div className="row1">
        <h3>Destinations</h3>
        <Selected
          options={Destinations}
          setOptions={setDestinations}
          title="Destinations"
        />{" "}
      </div>
      <div className="row2">
        <h3>Cities</h3>
        <Selected options={Cities} setOptions={setCities} title="Cities" />
      </div>{" "}
    </div>
  );
};

export default Details;

//
