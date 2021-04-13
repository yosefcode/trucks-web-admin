import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import "./selectDetails.css";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import { grey } from "@material-ui/core/colors";
import { PersonPin } from "@material-ui/icons";
const useStyles = makeStyles((theme) => ({
  formControl: {
    marginRight: "40%",
    // marginBottom: 100,
    // margin: theme.spacing(-2),
    marginTop: theme.spacing(2),
    minWidth: 120,
    maxWidth: 300,
  },
}));

const usetfStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      width: "80%",
    },
  },
}));

const Selected = (props) => {
  const { options, setOptions, title } = props;
  const classes = useStyles();
  const classestf = usetfStyles();
  const [personName, setPersonName] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [removed, setRemoved] = useState(false);
  const [noChoose, setNoChoose] = useState(false);
  const [noItems, setNoItems] = useState(false);

  const handleChange = (event) => {
    setNoChoose(false);
    // setPersonName((names) => [...names, event.target.value]);
    setRemoved(false);
    if (personName.indexOf(event.target.value) < 0) {
      setPersonName((names) => [...names, event.target.value]);
    } else {
      let theNames = personName.filter((e) => e !== event.target.value);
      setPersonName(theNames);
    }
    // let theNames = personName;
    // theNames.push(event.target.value);
    // setPersonName(theNames);
  };

  const add = async () => {
    let theOptions = options;
    let test = theOptions.find((e) => e === inputValue);
    if (!test) {
      theOptions.push(inputValue);
      setOptions(theOptions);
      setPersonName([]);
    }
  };

  const remove = () => {
    if (personName.length < 1) {
      setNoChoose(true);
    }
    if (options.length < 1) {
      setNoItems(true);
    } else {
      let theOptions = options.filter((e) => !personName.includes(e));
      setOptions(theOptions);
      setPersonName([]);
      setRemoved(true);
    }
  };

  return (
    <div>
      <div className="aa">
        <div className={classestf.root} noValidate autoComplete="off">
          <TextField
            id="outlined-basic"
            label={`Add ${title}`}
            variant="outlined"
            onChange={(e) => setInputValue(e.target.value)}
          />
          <div className="divbtn">
            <AddCircleIcon
              className="btn"
              name="AddCircleIcon"
              style={{ fontSize: 35, color: grey[600] }}
              onClick={!inputValue ? null : add}
            />
          </div>
        </div>
      </div>

      <FormControl className={classes.formControl}>
        {options.map((name, index) => (
          <MenuItem key={name.uniqueId}>
            <Checkbox
              checked={personName.indexOf(name) > -1}
              multiple
              value={name}
              onChange={handleChange}
            />
            <ListItemText primary={name} />
          </MenuItem>
        ))}
      </FormControl>

      <div className="btnrmv">
        <Button variant="contained" onClick={remove}>
          remove
        </Button>
      </div>

      {noChoose && !noItems && <div className="err">Choose an item</div>}
    </div>
  );
};

export default Selected;
