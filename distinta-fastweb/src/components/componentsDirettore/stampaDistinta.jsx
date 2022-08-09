import '../../App.css'
import React, { useState, useEffect } from 'react';
import {Container,Form,Table,Button} from "react-bootstrap"
import Direttore from "../Direttore"
import axios from "axios"

function StampaDistinta(){

const [reports,setDistinta] = useState([]);
const [distrettos,setDistretto] = useState([]);
const [choise,setChoise] = useState("");
const [utentis,setUtenti] = useState([]);


  useEffect(() => {
   axios
       .get("http://localhost:3001/distinta")
       .then(response => setDistinta(response.data))
       .catch(error => {console.log('There was an error!', error)})
  },[]);
         
  useEffect(() => {
     axios
         .get("http://localhost:3001/user")
         .then(response => setDistretto(response.data))
         .catch(error => {console.log('There was an error!', error)})
          },[]);

  useEffect(() => {
     axios
         .get("http://localhost:3001/utenti")
         .then(response => setUtenti(response.data))
         .catch(error => {console.log('There was an error!', error)})
          },[]);



 //////////////////////////////////////////////////selecting///////////////////////////////////////////////////////
        
function handleChange(e){

  const {name,value} = e.target;

  setChoise((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
        
      };
      
    })
} 


 function submitChoise(event){
    event.preventDefault()

      axios
        .get("http://localhost:3001/distinta/")
        .then(response => {setDistinta(response.data.filter(choosen => choosen.distretto === choise.distretto || choosen.username === choise.username))})
        .catch(error => {console.log('There was an error!', error)})
  
 }   

  //////////////////////////////////////////////////rendering///////////////////////////////////////////////////////

    return( 
<div>
<Direttore />
    <Container fluid className="tableDistinta">
        <h1> Stampa Distinta</h1>

    <Form onSubmit={submitChoise}>
        <Form.Group className="mb-3" name="choise" value={choise}>
            <Form.Select onChange={handleChange} className="mb-3" aria-label="Default select example" name="distretto"> 
            <option>Seleziona Distretto</option>
            {distrettos.map(distretto => {return(<option value={distretto.distretto}>{distretto.distretto}</option>)})}
            </Form.Select>
        <Form.Select onChange={handleChange} className="mb-3" aria-label="Default select example" name="username"> 
            <option>Seleziona User</option>
            <option>Tutti</option>
            {utentis.map(utenti => {return(<option value={utenti.username}>{utenti.username}</option>)})}
        </Form.Select>
          </Form.Group>
        <Form.Group > 
          <Button className="btn-lg modifyBtn" variant="warning" name="btn-submit" type="submit" >
              Invia
          </Button>
        </Form.Group>
    </Form>
    </Container>

    <Container fluid className="tableDistinta">
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


    </Container>
            
</div>
    )
}

export default StampaDistinta;