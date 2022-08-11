import '../../App.css'
import React, { useState, useEffect } from 'react';
import {Container,Form,Table,Button} from "react-bootstrap"
import ModalStampa from "./modalStampa";
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

 

    return( 
<div>
<Direttore />
    <Container fluid className="tableDistinta">
        <h1> Modifica Distinta</h1>

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
              <ModalStampa/>
          </Button>
        </Form.Group>
    </Form>
    </Container>


            
</div>
    )
}

export default StampaDistinta;