import '../../App.css'
import axios from "axios"
import React,{useState} from "react";
import {Container,Form,Table,} from "react-bootstrap"
import Direttore from "../Direttore"
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from "@mui/icons-material/Edit";


function ModificaDistinta(){

const [reports,setDistinta] = useState([]);
const [distrettos,setDistretto] = useState([]);

    axios
        .get("http://localhost:3001/distinta")
        .then(response => setDistinta(response.data));
            

    axios
        .get("http://localhost:3001/user")
        .then(response => setDistretto(response.data));

function handleChange(){

}


//////////////////////////////////////////////////renderpage///////////////////////////////////////////////////////

return(

    <div>
    <Direttore/>
    <Container>
        <h1> Modifica Distinta</h1>

    <Form>
         <Form.Group className="mb-3">
            <Form.Select aria-label="Default select example" name="distretto"> 
            <option>Seleziona Distretto</option>
            {distrettos.map(distretto => {return(<option value={distretto.distretto}>{distretto.distretto}</option>)})}
         </Form.Select>
        <Form.Select aria-label="Default select example" name="users"> 
            <option>Seleziona User</option>
            <option>Tutti</option>
            {reports.map(distretto => {return(<option value={distretto.username}>{distretto.username}</option>)})}
         </Form.Select>
         </Form.Group>
         </Form>

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
          <td key={report.id}>{reports.indexOf(report) + 1}</td>
          <td>{report.username}</td>
          <td>{report.typeOfOperation}</td>
          <td>{report.date}</td>
          <td>{report.distretto}</td>
          <td>{report.notes}</td>
          <td>{report.clientName}</td>
          <td><button className="editbtn"><EditIcon/></button></td>
          <td><button className="deletebtn"><DeleteForeverIcon/></button></td>
          </tr>
          )})}
        
      </tbody>
    </Table>


    </Container>
    </div>


)

}

export default ModificaDistinta;