import axios from "axios"
import React,{useState} from "react";
import {Container,Form,Button} from "react-bootstrap"
import Direttore from "../Direttore"

function NuovoDistretto(){

    const[distretto,setDistretto] =useState("")

    function handleChange(event){
      event.preventDefault()
    const { name, value } = event.target;

    setDistretto((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
       
      };
      
    })
};

    function submitDistretto(e){
    e.preventDefault()
    e.stopPropagation()

    axios
        .post("http://localhost:3001/user/add",distretto)
        .then(alert(distretto.distretto))
    }



    return(
        <div>
        <Direttore/>
        
        <Container>
            <h1>Inserisci un nuovo distretto</h1>
            <Form onSubmit={submitDistretto}>
                <Form.Group>
                    <Form.Control type="text" placeholder="Nuovo Distretto" name="distretto" onChange={handleChange} value={distretto.distretto} />
                </Form.Group>
                <Button className="btn-lg submitbtn" variant="warning" name="btn-submit" type="submit" >Invia</Button>
            </Form>

        </Container>
        </div>
    )
}

export default NuovoDistretto;