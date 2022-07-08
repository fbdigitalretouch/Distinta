import React from "react";
import { Container } from "react-bootstrap";
import Table from "react-bootstrap/Table"
import axios from "axios"


function Distinta(){

  const[reports,setReports] = React.useState([])

  React.useEffect(() => {
    axios
    .get("http://localhost:3001/distinta/")
    .then((response) => {
      setReports(response.data); console.log(response.data)
    });
  },[]);
 
  
    return(
        <Container>
        <h1>Distinta</h1>
    <Table striped bordered hover>
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
          <td key={report.id}>{reports.indexOf(report) + 1}</td>
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
    </Container>
    )

}

export default Distinta;

