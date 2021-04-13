import "./location.css";
import React, { useState, useEffect } from "react";
import GoogleMapReact from "google-map-react";
import marker from "./marker.png";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { makeStyles } from "@material-ui/core/styles";

const Location = () => {
  const [pointsmap, setPointsmap] = useState([]);
  const [selectlocation, setSelectlocation] = useState("");

  const points = [
    { lat: 31.8800332, lng: 35.2398698, time: "10:00" },
    { lat: 31.8810432, lng: 35.2399698, time: "10:20" },
    { lat: 31.8800532, lng: 35.2378798, time: "10:40" },
    { lat: 31.8800632, lng: 35.2358698, time: "11:00" },
    { lat: 31.8800732, lng: 35.2338698, time: "11:20" },
    { lat: 31.8800832, lng: 35.2318698, time: "11:40" },
  ];

  useEffect(() => {
    setPointsmap(points);
  }, []);

  const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(0),
      minWidth: 300,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));
  const classes = useStyles();

  const handleChange = (event) => {
    setPointsmap(event.target.value);
  };

  const AnyReactComponent = ({ icon, text }) => (
    <div>
      <div className="timelocation">{text}</div>
      <div>{icon}</div>
    </div>
  );
  // const adduser = () => {
  for (var i = 0; i < points.length; i++) {
    var aa = points[i].lat;
    var bb = points[i].lng;
    // console.log(aa, bb);
  }
  // };

  // adduser();
  return (
    <div className="location">
      <h2>Location</h2>

      <div className="selectlocation">
        <FormControl className={classes.formControl}>
          <InputLabel id="demo-simple-select-label"></InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="select"
            value={selectlocation}
            onChange={handleChange}
            displayEmpty
          >
            <MenuItem value={selectlocation} color="#ccc">
              Select a location to view
            </MenuItem>
            <MenuItem value={points}>View all locations</MenuItem>
            {points.map((point) => (
              <MenuItem
                // value={""}
                value={{ lat: point.lat, lng: point.lng, time: point.time }}
              >
                {point.lat} , {point.lng} - {point.time}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>

      <div className="maps">
        <GoogleMapReact
          bootstrapURLKeys={{
            key: "AIzaSyDruzVgnPzX3hODNpHFohGBhvj-KO-nFQk",
            language: "en",
          }}
          // center={{ lat: aa, lng: bb }}
          center={pointsmap.length > 1 ? pointsmap[0] : pointsmap}
          defaultZoom={17}
        >
          {pointsmap.length > 1 ? (
            pointsmap.map((point) => (
              <AnyReactComponent
                lat={point.lat}
                lng={point.lng}
                icon={<img className="imgmarker" src={marker} alt="" />}
                text={point.time}
              />
            ))
          ) : (
            <AnyReactComponent
              lat={pointsmap.lat}
              lng={pointsmap.lng}
              icon={<img className="imgmarker" src={marker} alt="" />}
              text={pointsmap.time}
            />
          )}
        </GoogleMapReact>
      </div>
    </div>
  );
};

export default Location;
