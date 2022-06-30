import React from "react";
import {Container,Form,Button} from "react-bootstrap"


function Inserisci(props){
    return(
        <Container className="inputBox"> 

        <h1 className="mt-3">Inserisci un nuovo elemento:</h1>
        <Form>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control type="text" placeholder="Cos'hai attivato?" name={props.attivazione}/>
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Control as="textarea" rows={2}  placeholder="Hai delle note aggiuntive?" name={props.notes}/>
              </Form.Group>
              <Button className="btn-lg submitbtn" variant="warning" name="btn-submit" type="submit">
              Invia
              </Button>

        </Form>


        </Container>

    )

}

export default Inserisci;