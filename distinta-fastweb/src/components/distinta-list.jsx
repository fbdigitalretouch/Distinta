import React from "react";
import { Container } from "react-bootstrap";
import Table from "react-bootstrap/Table"


function Distinta(props){
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
        </tr>
      </thead>
      <tbody>
        <tr>
       { /* distinta da cliclare in base all'attività all'interno del database*/}
          <td>1</td>
          <td>Nome</td>
          <td>Attività</td>
          <td>17/04/2022</td>
          <td>Emisfero</td>
        </tr>
      </tbody>
    </Table>
    </Container>
    )

}

export default Distinta;

