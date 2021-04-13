import React, { useEffect, useState } from "react";
import "./adduser.css";
import { makeStyles } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import { AccountCircle } from "@material-ui/icons/";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import LooksOneIcon from "@material-ui/icons/LooksOne";
import Button from "@material-ui/core/Button";

const Users = (props) => {
  const [value, setValue] = useState("");

  const useStyles = makeStyles((theme) => ({
    root: {
      width: "100%",
    },
    container: {
      maxHeight: 360,
    },
    margin: {
      margin: theme.spacing(5),
      // width: "100%",
    },
    btn: {
      width: "30%",
      margin: theme.spacing(2),
      marginLeft: 30,
    },
  }));

  const classes = useStyles();

  const { UserNames, setUserNames } = props;
  const [inputValue, setInputValue] = useState({
    id: "",
    name: "",
    numuser: "",
    password: "",
  });

  const onchange = (e) =>
    setInputValue({
      ...inputValue,
      [e.target.name]: e.target.value,
    });

  const adduser = () => {
    for (var i = 0; i < UserNames.length; i++) {
      var max = Math.max(UserNames[i].id);
    }
    setUserNames((userNames) => [
      ...userNames,
      { ...inputValue, id: (max + 1).toString() },
    ]);
    console.log(UserNames);
  };

  return (
    <div className={classes.margin}>
      <div className="addusers">
        <div className="divadduser">
          <div className="divinput">
            <InputLabel htmlFor="input-with-icon-adornment">Name</InputLabel>
            <Input
              name="name"
              id="input-with-icon-adornment"
              onChange={onchange}
              startAdornment={
                <InputAdornment position="start">
                  <AccountCircle />
                </InputAdornment>
              }
            />
          </div>
          <div className="divinput">
            <InputLabel htmlFor="input-with-icon-adornment">
              User number
            </InputLabel>
            <Input
              name="numuser"
              onChange={onchange}
              id="input-with-icon-adornment"
              startAdornment={
                <InputAdornment position="start">
                  <LooksOneIcon />
                </InputAdornment>
              }
            />
          </div>
          <div className="divinput">
            <InputLabel htmlFor="input-with-icon-adornment">
              Password
            </InputLabel>
            <Input
              id="input-with-icon-adornment"
              name="password"
              onChange={onchange}
              startAdornment={
                <InputAdornment position="start">
                  <VpnKeyIcon />
                </InputAdornment>
              }
            />
          </div>
          <Button className="btnadduser" variant="contained" onClick={adduser}>
            Add User
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Users;
