import React, { useState, useEffect } from 'react';
import {Container,Form,Table,Button,Modal} from "react-bootstrap"
import PrintIcon from '@mui/icons-material/Print';
import axios from "axios"

function  ModalStampa(props) {
  const [show, setShow] = useState(false);
  const [reports,setReport] = useState([])


  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

//////////////////////////////////////Render/////////////////////////////////////


  return (
<>
<PrintIcon onClick={handleShow}  />
<Modal show={show} onHide={handleClose}>

<Modal.Body>
    <Table bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Username</th>
          <th>Attività</th>
          <th>Data</th>
          <th>Distretto</th>
          <th>Note</th>
          <th>Cliente</th>
        </tr>
      </thead>
      <tbody>


        
       { reports.slice(0).reverse().map((report) => {return(  
          <tr>        
          <td key={report._id}>{reports.indexOf(report) + 1}</td>
          <td>{report.username}</td>
          <td>{report.typeOfOperation}</td>
          <td>{report.date}</td>
          <td>{report.distretto}</td>
          <td>{report.notes}</td>
          <td>{report.clientName}</td> 
          </tr>
          )})}
        
      </tbody>
    </Table>
</Modal.Body>
<Modal.Footer>
    
</Modal.Footer>
</Modal>
    </>
  );
}




export default ModalStampa;