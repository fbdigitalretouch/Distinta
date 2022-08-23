import axios from "axios"
import React,{useState} from "react";
import {Container,Form,Button} from "react-bootstrap"
import Direttore from "../Direttore"

function NuovoDistretto(){

    const[distretto,setDistretto] = useState("");
    const[direttore,setDirettore] = useState("");

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

    function handleChange2(event){
      event.preventDefault()
    const { name, value } = event.target;

    setDirettore((prevNote) => {
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
        .post("http://localhost:3001/distretto/add",distretto)
        .then(alert(distretto.distretto))
    }

    function submitDirettore(e){
        e.preventDefault()
        e.stopPropagation()
      
       axios   
           .post("http://localhost:3001/direttore/add",direttore)
           .then(alert(`${direttore.direttore} aggiunto`))

 setTimeout(()=>{
   window.location.reload(false)
 },1000)
 
 
    }



    return(
        <div>
        <Direttore/>
        
        <Container>
                
            <Form onSubmit={submitDistretto}>
            <h1 className="mt-4">Inserisci un nuovo Distretto</h1>
                <Form.Group>
                    <Form.Control type="text" placeholder="Nuovo Distretto" name="distretto" onChange={handleChange} value={distretto.distretto} />
                </Form.Group>
                <Button className="btn-lg submitbtn submitButton" variant="warning" name="btn-submit" type="submit" >Invia</Button>
            </Form>
                
            <Form onSubmit={submitDirettore}>
            <h1>Inserisci un nuovo Direttore</h1>
                <Form.Group>
                    <Form.Control type="text" placeholder="Nuovo Direttore" name="direttore" onChange={handleChange2} value={direttore.direttore} />
                </Form.Group>
                <Button className="btn-lg submitbtn submitButton" variant="warning" name="btn-submit" type="submit" >Invia</Button>
            </Form>
        </Container>
        </div>
    )
}

export default NuovoDistretto;