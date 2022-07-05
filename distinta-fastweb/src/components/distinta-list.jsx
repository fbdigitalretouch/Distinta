import React from "react";
import { Container } from "react-bootstrap";
import Table from "react-bootstrap/Table"
import axios from "axios"


function Distinta(){

  const[report,setReport] = React.useState([])

  React.useEffect(() => {
    axios
    .get("http://localhost:3001/distinta/")
    .then((response) => {
      setReport(response.data);
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
          <th>Notes</th>
        </tr>
      </thead>
      <tbody>
        
       { report.map((report) => {return(  
          <tr>        
          <td key={report.id}>{report.id}</td>
          <td>Nome</td>
          <td>{report.typeOfOperation}</td>
          <td>{report.data}</td>
          <td>{report.notes}</td>
          </tr>
          )})}
        
      </tbody>
    </Table>
    </Container>
    )

}

export default Distinta;

