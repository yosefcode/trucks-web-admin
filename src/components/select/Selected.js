import React, { useState } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import "./selectDetails.css";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import { grey } from "@material-ui/core/colors";
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

// function getStyles(name, personName, theme) {
//   return {
//     fontWeight:
//       personName.indexOf(name) === -1
//         ? theme.typography.fontWeightRegular
//         : theme.typography.fontWeightMedium,
//   };
// }

const Selected = (props) => {
  const { options, setOptions, title } = props;
  const classes = useStyles();
  const classestf = usetfStyles();
  const theme = useTheme();
  const UserNames = props.UserNames || null;
  const setUserNames = props.setUserNames || null;
  const [personName, setPersonName] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [updateName, setUpdateName] = useState("");
  const [updateMail, setUpdateMail] = useState("");
  const [toAdd, setToAdd] = useState(false);
  const [toUpdate, setToUpdate] = useState(false);
  const [removed, setRemoved] = useState(false);
  const [noChoose, setNoChoose] = useState(false);
  const [noItems, setNoItems] = useState(false);

  const handleChange = (event) => {
    setNoChoose(false);
    setPersonName(event.target.value);
    setRemoved(false);
  };

  const add = async () => {
    let theOptions = options;
    let test = theOptions.find((e) => e === inputValue);
    if (!test) {
      await theOptions.push(inputValue);
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

  const update = () => {
    let theOptions = options;
    let index = theOptions.indexOf(personName[0]);
    theOptions[index].name = updateName;
    theOptions[index].Email = updateMail;
    setOptions(theOptions);
    setToUpdate(false);
    setPersonName([]);
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
          <MenuItem>
            <Checkbox
              key={index}
              checked={personName.indexOf(name) > -1}
              multiple
              value={name}
              onChange={handleChange}
            />
            <ListItemText
              primary={
                title !== "Users"
                  ? name
                  : "name: " + name.name + ", Email: " + name.Email
              }
            />
          </MenuItem>
        ))}
      </FormControl>

      <div className="btnrmv">
        <Button variant="contained" onClick={remove}>
          remove
        </Button>
      </div>

      <div style={{ marginRight: "10%" }}>
        {noChoose && !noItems && (
          <div style={{ color: "red" }}>Choose an item</div>
        )}

        {noItems && <div style={{ color: "red" }}>No items</div>}

        {title === "Users" && (
          <div>
            <button
              onClick={() => setToUpdate(true)}
              style={{ color: "green" }}
            >
              update
            </button>
          </div>
        )}

        {toUpdate &&
          (personName.length > 1 ? (
            <div style={{ color: "red" }}>choose only one item</div>
          ) : noItems ? (
            <div style={{ color: "red" }}>No items</div>
          ) : personName.length < 1 ? (
            <div style={{ color: "red" }}>choose an item</div>
          ) : (
            <div>
              <input
                onChange={(e) => setUpdateName(e.target.value)}
                style={{
                  borderTop: "none",
                  borderRight: "none",
                  borderLeft: "none",
                  borderWidth: "0.5px",
                  height: "20px",
                  width: "100px",
                }}
                placeholder={personName[0].name}
              ></input>
              <input
                onChange={(e) => setUpdateMail(e.target.value)}
                style={{
                  borderTop: "none",
                  borderRight: "none",
                  borderLeft: "none",
                  borderWidth: "0.5px",
                  height: "20px",
                  width: "100px",
                }}
                placeholder={personName[0].Email}
              ></input>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <button
                  style={{ borderRadius: "20%", margin: "2%" }}
                  onClick={update}
                >
                  update
                </button>
                <button
                  style={{ borderRadius: "20%", margin: "2%" }}
                  onClick={() => setToUpdate(false)}
                >
                  cancel
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Selected;
