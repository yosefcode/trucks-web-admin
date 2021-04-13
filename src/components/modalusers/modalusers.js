import React, { useEffect, useState } from "react";
import "./modalusers.css";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import TableCell from "@material-ui/core/TableCell";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import { AccountCircle } from "@material-ui/icons/";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import LooksOneIcon from "@material-ui/icons/LooksOne";
import Button from "@material-ui/core/Button";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";

const Modalusers = (props) => {
  const {
    UserNames,
    setUserNames,
    remove,
    setRemove,
    setOpen,
    open,
    edit,
  } = props;

  const handleClose = () => {
    setOpen(false);
  };

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
    modal: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      border: "2px solid #000",
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
    btn: {
      width: "30%",
      margin: theme.spacing(2),
      marginLeft: 30,
    },
  }));

  const classes = useStyles();

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

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      className={classes.modal}
      open={open}
      onClose={handleClose}
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <div className="modalusers">
        <Fade in={open}>
          {edit ? (
            <div className={classes.paper}>
              <h2 id="transition-modal-title">Edit User</h2>
              <div className={classes.margin}>
                <div className="divadduser">
                  <div className="divinput">
                    <InputLabel htmlFor="input-with-icon-adornment">
                      Name
                    </InputLabel>
                    <Input
                      type="text"
                      name="name"
                      id="input-with-icon-adornment"
                      defaultValue={remove.name}
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
                      defaultValue={remove.numuser}
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
                      defaultValue={remove.password}
                      name="password"
                      onChange={onchange}
                      startAdornment={
                        <InputAdornment position="start">
                          <VpnKeyIcon />
                        </InputAdornment>
                      }
                    />
                  </div>
                </div>
              </div>

              <div className="btnmodal">
                <Button
                  className={classes.btn}
                  variant="contained"
                  onClick={() => {
                    setUserNames(UserNames.filter((e) => remove.id !== e.id));
                    handleClose();
                    // const adduser = () => {
                    for (var i = 0; i < UserNames.length; i++) {
                      var max = Math.max(UserNames[i].id);
                    }
                    // usernames.push({ ...inputValue, id: (max + 1).toString() });
                    setUserNames((userNames) => [
                      ...userNames,
                      { ...inputValue, id: (max + 1).toString() },
                    ]);
                    console.log(UserNames);
                    // };
                  }}
                >
                  change user{" "}
                </Button>
                <Button
                  variant="contained"
                  className={classes.btn}
                  onClick={handleClose}
                >
                  cancel{" "}
                </Button>
              </div>
            </div>
          ) : (
            <div className={classes.paper}>
              <h2 id="transition-modal-title">Warning!</h2>
              <p id="transition-modal-description">
                Are you sure you want to delete the user {remove.name}?
              </p>
              <div className="btnmodal">
                <Button
                  className={classes.btn}
                  variant="contained"
                  onClick={() => {
                    setUserNames(UserNames.filter((e) => remove.id !== e.id));
                    handleClose();
                  }}
                >
                  Yes{" "}
                </Button>
                <Button
                  variant="contained"
                  className={classes.btn}
                  onClick={handleClose}
                >
                  cancel{" "}
                </Button>
              </div>
            </div>
          )}
        </Fade>
      </div>
    </Modal>
  );
};

export default Modalusers;
