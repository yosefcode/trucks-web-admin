import React, { useEffect, useState } from "react";
import "./users.css";
import Modalusers from "../modalusers/modalusers";
import AddUser from "../adduser/adduser";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import DeleteIcon from "@material-ui/icons/Delete";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
import VisibilityIcon from "@material-ui/icons/Visibility";
import EditIcon from "@material-ui/icons/Edit";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { TableSortLabel } from "@material-ui/core";

const Users = () => {
  const [UserNames, setUserNames] = useState([
    { id: "1", name: "Jo", numuser: "111", password: "a12" },
    { id: "2", name: "Bob", numuser: "222", password: "b12" },
    { id: "3", name: "Dan", numuser: "333", password: "c12" },
    { id: "4", name: "Ann", numuser: "444", password: "d12" },
  ]);
  const [remove, setRemove] = useState({});
  const [open, setOpen] = useState(false);
  const [edit, setEdit] = useState(false);

  //   const theme = createMuiTheme({
  //     overrides: {
  //       MuiTableSortLabel: {
  //         icon: {
  //           opacity: "200ms"
  //         },
  //       },
  //     },
  //   });
  //   const StyledTableSort = withStyles((theme) => ({
  //     MuiTableSortLabel: {
  //       icon: {
  //         opacity: "200ms"
  //       },
  //     },
  // }))(TableSortLabel);

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

  let header = ["", "", "Name", "User number", "Password"];

  function renderTableHeader() {
    return header.map((key, index) => (
      <TableCell component="th" key={index}>
        {key}
      </TableCell>
    ));
  }

  const useRowStyles = makeStyles((theme) => ({
    root: {
      "& > *": {
        borderBottom: "unset",
      },
    },
  }));

  const StyledTableRow = withStyles((theme) => ({
    root: {
      "&:nth-of-type(odd)": {
        backgroundColor: "#e6e6e6",
      },
    },
  }))(TableRow);

  const StyledTableHeader = withStyles((theme) => ({
    head: {
      backgroundColor: "#404040",
      color: theme.palette.common.white,
      height: 70,
    },
    body: {
      fontSize: 14,
    },
  }))(TableRow);

  function RenderTableData(props) {
    const { user } = props;
    const classes = useRowStyles();
    const [typepassword, setTypepassword] = useState([{ type: "password" }]);

    return (
      <React.Fragment>
        <StyledTableRow className={classes.root} component="table" scope="row">
          <TableCell
            component="table"
            scope="row"
            align="center"
            style={{ width: "10%" }}
          >
            <DeleteIcon
              onClick={() => {
                setOpen(true);
                setRemove(user);
                setEdit(false);
              }}
            />
          </TableCell>
          <TableCell
            component="table"
            scope="row"
            align="center"
            style={{ width: "10%" }}
          >
            <EditIcon
              onClick={() => {
                setEdit(true);
                setOpen(true);
                setRemove(user);
              }}
            />
          </TableCell>
          <TableCell align="center" style={{ width: "25%" }}>
            {user.name}
          </TableCell>
          <TableCell align="center" style={{ width: "25%" }}>
            {user.numuser}
          </TableCell>
          <TableCell align="center" style={{ width: "30%" }}>
            <div className="divpassword">
              <div className="divinputpassword">
                <input
                  className="inputpassword"
                  disabled
                  type={typepassword.map((type) => type.type)}
                  value={user.password}
                />
              </div>
              <div className="diviconhiden">
                {[
                  typepassword[0].type === "password" ? (
                    <VisibilityIcon
                      className="iconhiden"
                      onClick={() => {
                        setTypepassword([{ type: "text" }]);
                      }}
                    />
                  ) : (
                    <VisibilityOffIcon
                      className="iconhiden"
                      onClick={() => {
                        setTypepassword([{ type: "password" }]);
                      }}
                    />
                  ),
                ]}
              </div>
            </div>
          </TableCell>
        </StyledTableRow>
      </React.Fragment>
    );
  }

  return (
    <div className="users">
      <h1>Users</h1>
      <div className="divtable">
        <TableContainer component={Paper} className={classes.container}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <StyledTableHeader>{renderTableHeader()}</StyledTableHeader>
            </TableHead>

            <TableBody>
              {UserNames.map((user) => (
                <RenderTableData key={user.id} user={user}></RenderTableData>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        {/* <ThemeProvider theme={theme}>
          <Button>font-size: 1rem</Button>
        </ThemeProvider> */}
      </div>
      <div className="divsidebar">
        <AddUser UserNames={UserNames} setUserNames={setUserNames} />
      </div>
      <Modalusers
        UserNames={UserNames}
        setUserNames={setUserNames}
        remove={remove}
        setRemove={setRemove}
        open={open}
        setOpen={setOpen}
        edit={edit}
      />
    </div>
  );
};

export default Users;
