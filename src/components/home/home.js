import "./home.css";
import React, { useState, useEffect } from "react";
import Sidebar from "../sidebar/sidebar";
import Loads from "../loads/loads";
import Location from "../location/location";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";

function Home(props) {
  const loadsStudents = props.students;
  const loads = props.loads;
  const [drivers, setDrivers] = useState("");
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [students, setStudents] = useState(loadsStudents);

  useEffect(async () => {
    const month = selectedDate.getMonth() + 1;
    const date = selectedDate.getDate();
    const year = selectedDate.getFullYear().toString();

    var filterDate =
      (month < 10 ? "0" + month : month) +
      "/" +
      (date < 10 ? "0" + date : date) +
      "/" +
      year;

    setStudents(
      loadsStudents.filter((loaddate) => loaddate.Date.includes(filterDate))
    );
  }, [selectedDate]);

  useEffect(() => {
    setStudents(
      loadsStudents.filter((driver) =>
        driver.Driver.toLowerCase().includes(drivers.toLowerCase())
      )
    );
  }, [drivers]);

  // useEffect(() => {
  //   axios.get("http://127.0.0.1:8000/details/").then((res) => {
  //     console.log(res.data);
  //      setStunents(res.data);
  //     setHeader(Object.keys(res.data[0]));
  //   });
  // }, []);

  const useStyles = makeStyles({
    root: {
      width: "100%",
    },
    container: {
      maxHeight: 600,
    },
  });

  const classes = useStyles();

  let header = [
    "Job Number",
    "Driver",
    "Date",
    "Constractor",
    "Customer",
    "Origin",
    "Destination",
    "City",
    "Start Time",
    "End Time",
    "Works Hours",
    "Loads",
    "Weight",
    "Locations",
  ];

  function renderTableHeader() {
    // let header = Object.keys(loadsStudents[0]);
    return header.map((key, index) => (
      <TableCell component="th" key={index}>
        {key}
      </TableCell>
    ));
  }

  const useRowStyles = makeStyles({
    root: {
      "& > *": {
        height: 50,
      },
    },
  });

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
    const { row } = props;
    const [openlocation, setOpenlocation] = useState(false);
    const [openload, setOpenload] = useState(false);
    const classes = useRowStyles();
    return (
      <React.Fragment>
        <StyledTableRow className={classes.root} component="table" scope="row">
          <TableCell component="table" scope="row" align="center">
            <IconButton
              aria-label="expand row"
              size="small"
              onClick={() => setOpenload(!openload)}
            >
              {openload ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </IconButton>{" "}
            {"    "}
            {row.ID}
          </TableCell>
          <TableCell align="center">{row.Driver}</TableCell>
          <TableCell align="center">{row.Date}</TableCell>
          <TableCell align="center">{row.Constractor}</TableCell>
          <TableCell align="center">{row.Customer}</TableCell>
          <TableCell align="center">{row.Origin}</TableCell>
          <TableCell align="center">{row.Destination}</TableCell>
          <TableCell align="center">{row.City}</TableCell>
          <TableCell align="center">{row.StartTime}</TableCell>
          <TableCell align="center">{row.EndTime}</TableCell>
          <TableCell align="center">{row.WorksHours}</TableCell>
          <TableCell align="center">{row.Loads}</TableCell>
          <TableCell align="center">{row.Weight}</TableCell>

          <TableCell align="center">{row.Locations}</TableCell>
        </StyledTableRow>

        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={14}>
          <Collapse in={openload} timeout="auto" unmountOnExit>
            <Box margin={2}>
              <Typography gutterBottom component="div">
                <div className="divopentable">
                  <div className="divopenload">
                    <h2>LOADS</h2>
                    <Loads loads={loads} />
                  </div>
                  <div className="divopenlocation">
                    <Location />
                  </div>
                </div>
              </Typography>
            </Box>
          </Collapse>
        </TableCell>
      </React.Fragment>
    );
  }

  return (
    <div className="home">
      <Sidebar
        drivers={drivers}
        setDrivers={setDrivers}
        setSelectedDate={setSelectedDate}
        selectedDate={selectedDate}
        loadsStudents={loadsStudents}
        setStudents={setStudents}
      />
      <div className="divtable">
        <h1>Admin Table</h1>

        <TableContainer component={Paper} className={classes.container}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <StyledTableHeader>{renderTableHeader()}</StyledTableHeader>
            </TableHead>

            <TableBody>
              {students.map((row) => (
                <RenderTableData key={row.ID} row={row} />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}

export default Home;
