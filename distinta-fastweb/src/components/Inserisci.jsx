import axios from "axios"
import React,{useState} from "react";
import {Container,Form,Button} from "react-bootstrap"


function Inserisci(props){
// const [attivazione,setAttivazione] = useState("")
//  const baseURL = "/distinta/";
//  
//  
//    React.useEffect(() => {
//      axios.get("/").then((response) => {
//        setDistinta(response.data);
//      });
//    }, []);
//  
//  
//  
//  function createAttivazione(req,res) {
//    axios
//        .post("/add", {
//          typeOfOperation:req.body.typeOfOperation,
//          clientName:req.body.client,
//          date: new Date()
//        })
//        .then((response) => {
//          setDistinta(response.data);
//        });
//  
//        console.log(distinta)
//  }

    return(
        <Container className="inputBox"> 

        <h1 className="mt-3">Inserisci un nuovo elemento:</h1>
        <Form>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control type="text" placeholder="Cos'hai attivato?" name="typeOfOperation"/>
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control type="text" placeholder="Nome del cliente" name="client"/>
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Control as="textarea" rows={2}  placeholder="Hai delle note aggiuntive?" name="notes"/>
              </Form.Group>
              <Button className="btn-lg submitbtn" variant="warning" name="btn-submit" type="submit" onSubmit={createAttivazione}>
              Invia
              </Button>

        </Form>


        </Container>

    )

}

export default Inserisci;