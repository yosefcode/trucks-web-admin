import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import Home from "./components/home/home";
import Users from "./components/users/users";
import Details from "./components/details/details";
import Bar from "./components/bar/bar";
import Login from "./components/login/login";

function App() {
  const students = [
    {
      ID: 1110405210915,
      Driver: "Josef",
      Date: "04/05/2021",
      Constractor: "bb",
      Customer: "momo",
      Origin: "aaa",
      Destination: "bbb",
      City: "Jerusalem",
      StartTime: "8:00",
      EndTime: "16:00",
      WorksHours: 8,
      Loads: 7,
      Weight: 100,
      Locations: "6",
    },
    {
      ID: 1230405210915,
      Driver: "Moshe",
      Date: "04/06/2021",
      Constractor: "bb",
      Customer: "momo",
      Origin: "aaa",
      Destination: "bbb",
      City: "Jerusalem",
      StartTime: "8:00",
      EndTime: "16:00",
      WorksHours: 8,
      Loads: 7,
      Weight: 100,
      Locations: "7",
    },
    {
      ID: 2220405210915,
      Driver: "Avi",
      Date: "04/05/2021",
      Constractor: "bb",
      Customer: "momo",
      Origin: "aaa",
      Destination: "bbb",
      City: "Jerusalem",
      StartTime: "8:00",
      EndTime: "16:00",
      WorksHours: 8,
      Loads: 7,
      Weight: 100,
      Locations: "5",
    },
    {
      ID: 3330405210915,
      Driver: "josef",
      Date: "04/01/2021",
      Constractor: "bb",
      Customer: "momo",
      Origin: "aaa",
      Destination: "bbb",
      City: "Jerusalem",
      StartTime: "8:00",
      EndTime: "16:00",
      WorksHours: 8,
      Loads: 7,
      Weight: 100,
      Locations: "22",
    },
    {
      ID: 4440405210915,
      Driver: "moshe",
      Date: "04/04/2021",
      Constractor: "bb",
      Customer: "momo",
      Origin: "aaa",
      Destination: "bbb",
      City: "Jerusalem",
      StartTime: "8:00",
      EndTime: "16:00",
      WorksHours: 8,
      Loads: 7,
      Weight: 100,
      Locations: "33",
    },
    {
      ID: 5550405210915,
      Driver: "avi",
      Date: "04/06/2021",
      Constractor: "bb",
      Customer: "momo",
      Origin: "aaa",
      Destination: "bbb",
      City: "Jerusalem",
      StartTime: "8:00",
      EndTime: "16:00",
      WorksHours: 8,
      Loads: 7,
      Weight: 100,
      Locations: "22",
    },
  ];

  const loads = [
    {
      ID: 1,
      TonsorLoad: "123456",
      Product: "banana",
      TicketNumber: "123456",
      Ticket:
        "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/golden-ticket-birthday-invitation-design-template-03400be12f7be89bcf2cc4d4f110bd8d_screen.jpg?ts=1594343898",
    },
    {
      ID: 2,
      TonsorLoad: "123456",
      Product: "banana",
      TicketNumber: "123456",
      Ticket:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLBpBrAgczr7BCLM5ISVqmSFfPnIsZP_PkpA&usqp=CAU",
    },
    {
      ID: 3,
      TonsorLoad: "123456",
      Product: "banana",
      TicketNumber: "123456",
      Ticket:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH3FCMyH5HjPx5zp3roleAir7wQM4Mi4XJRA&usqp=CAU",
    },
    {
      ID: 4,
      TonsorLoad: "123456",
      Product: "banana",
      TicketNumber: "123456",
      Ticket:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUdcBsKJTobKV7P2dB3gtw-SZMvEIWWevNqQ&usqp=CAU",
    },
    {
      ID: 5,
      TonsorLoad: "123456",
      Product: "banana",
      TicketNumber: "123456",
      Ticket:
        "https://lingopolo.org/thai/sites/lingopolo.org.thai/files/styles/entry/public/images/2019/04/16/ticket.jpg?itok=2AuUpT7f",
    },
    {
      ID: 6,
      TonsorLoad: "123456",
      Product: "banana",
      TicketNumber: "123456",
      Ticket:
        "https://thumbs.dreamstime.com/b/blank-blue-raffle-ticket-isolated-white-135508999.jpg",
    },
  ];

  const [login, setLogin] = useState();

  // useEffect(() => {
  //   JSON.parse(localStorage.getItem("userName")) ===
  //     process.env.REACT_APP_EMAILDEMO &&
  //   JSON.parse(localStorage.getItem("password")) ===
  //     process.env.REACT_APP_PASSDEMO
  //     ? setLogin(false)
  //     : setLogin(true);
  // }, []);

  return (
    <div id="App" className="App">
      <Router>
        <Switch>
          {login ? (
            <Route exact path="/">
              <Login />
            </Route>
          ) : (
            <Route exact path="/">
              <Bar />
              <Home students={students} loads={loads} />
            </Route>
          )}
          <Route exact path="/works/:id">
            <Bar />
            <Home students={students} loads={loads} />
          </Route>

          <Route path="/users/:id">
            <Bar />
            <Users />
          </Route>

          <Route path="/details/:id">
            <Bar />
            <Details />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
