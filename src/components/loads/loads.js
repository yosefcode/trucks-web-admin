import "./loads.css";
import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";

function Loads(props) {
  const [loads, setLoads] = useState(props.loads);
  const [loadsticket, setLoadsticket] = useState();
  const [open, setOpen] = React.useState(false);

  // useEffect(() => {
  //   axios.get("http://127.0.0.1:8000/loads/").then((res) => {
  //     console.log(res.data);
  //     setLoads(res.data);
  //     setHeader(Object.keys(res.data[0]));
  //   });
  // }, []);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  function renderTableHeader() {
    let header = Object.keys(loads[0]);
    return header.map((key, index) => {
      return <th key={index}>{key}</th>;
    });
  }

  function renderTableData() {
    return loads.map((load, index) => {
      const { ID, TonsorLoad, Product, TicketNumber, Ticket } = load;
      return (
        <tr key={ID}>
          <td>{ID}</td>
          <td>{TonsorLoad}</td>
          <td>{Product}</td>
          <td>{TicketNumber}</td>
          <td>
            <Button
              variant="outlined"
              color="primary"
              onClick={() => {
                handleClickOpen();
                setLoadsticket(Ticket);
              }}
            >
              <img src={Ticket} className="imgticket" alt="" />
            </Button>
            <Dialog
              open={open}
              onClose={handleClose}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
              <Button onClick={handleClose} color="primary">
                cancel
              </Button>
              <DialogContent>
                <img src={loadsticket} alt=""></img>
              </DialogContent>
            </Dialog>
          </td>
        </tr>
      );
    });
  }

  return (
    <div className="loads">
      <table className="students">
        <tbody>
          <tr>{renderTableHeader()}</tr>
          {renderTableData()}
        </tbody>
      </table>
    </div>
  );
}

export default Loads;
