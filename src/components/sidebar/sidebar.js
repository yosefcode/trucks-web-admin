import "./sidebar.css";
import "date-fns";
import React from "react";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";

const Sidebar = (props) => {
  const {
    selectedDate,
    setSelectedDate,
    loadsStudents,
    setStudents,
    drivers,
    setDrivers,
  } = props;

  const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
    root: {
      "& > *": {
        margin: theme.spacing(1),
        minWidth: 150,
        marginTop: 100,
      },
    },
  }));
  // const useStyles = makeStyles((theme) => ({
  //   },
  // }));

  const classes = useStyles();
  function ContainedButtons() {
    // const classes = useStyles();
    return (
      <div className={classes.root}>
        <Button
          variant="contained"
          onClick={async () => {
            await setDrivers("");
            // setSelectedDate(new Date());
            setStudents(loadsStudents);
          }}
        >
          Show all
        </Button>
      </div>
    );
  }

  const handleDateChange = (e) => {
    setSelectedDate(e);
  };

  const handleChange = (event) => {
    setDrivers(event.target.value);
  };

  return (
    <div className="sidebar">
      <div className="datepicker">
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <KeyboardDatePicker
            margin="normal"
            id="date-picker-dialog"
            label="Select a show date"
            format="MM/dd/yyyy"
            value={selectedDate}
            onChange={handleDateChange}
            mask="MM/dd/yyyy"
            KeyboardButtonProps={{
              "aria-label": "change date",
            }}
          />
        </MuiPickersUtilsProvider>
      </div>

      <div className="selectdrivers">
        <FormControl className={classes.formControl}>
          <InputLabel id="demo-simple-select-label">Drivers</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="select"
            value={drivers}
            onChange={handleChange}
          >
            <MenuItem value={"Josef"}>Josef</MenuItem>
            <MenuItem value={"Moshe"}>moshe</MenuItem>
            <MenuItem value={"Avi"}>Avi</MenuItem>
          </Select>
        </FormControl>
      </div>
      <ContainedButtons />
    </div>
  );
};

export default Sidebar;
