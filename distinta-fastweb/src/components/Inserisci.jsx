import axios from "axios"
import React,{useState} from "react";
import {Container,Form,Button} from "react-bootstrap"

function Inserisci(){

  const [users,setUsers] = useState([])

  axios.get("http://localhost:3001/user")
      .then(response => {setUsers(response.data)})


  const [distinta,setDistinta] = useState({
    typeOfOperation:"",
    clientName:"",
    notes:""

  })

  function handleChange(event) {
    event.preventDefault()
    const { name, value } = event.target;

    setDistinta((prevNote) => {
      return {
        ...prevNote,
        [name]: value
      };
      
    });
     console.log(distinta)
  }

  function createAttivazione(event){
    event.preventDefault()
    event.stopPropagation()

      axios
      .post("http://localhost:3001/distinta/add", distinta)
      .then(response => response.json(response.data));

  }

    return(
        <Container className="inputBox"> 

        <h1 className="mt-3">Inserisci un nuovo elemento:</h1>
             <Form onSubmit={createAttivazione}>
              <Form.Group className="mb-3">
                 <Form.Select aria-label="Default select example">
                 <option>Seleziona il tuo Distretto</option>
                {users.map(user => {return(<option>{user.distretto}</option>)})}

              </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3">
                 <Form.Select aria-label="Default select example">
                 <option>Seleziona il tuo Nome</option>
                    {users.map(user => {return(<option>{user.username}</option>)})}
                 </Form.Select>
              </Form.Group>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Control type="text" placeholder="Cos'hai attivato?" name="typeOfOperation" onChange={handleChange} value={distinta.typeOfOperation} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Control type="text" placeholder="Nome del cliente" name="clientName" onChange={handleChange} value={distinta.clientName} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                  <Form.Control as="textarea" rows={2}  placeholder="Hai delle note aggiuntive?" name="notes" onChange={handleChange} value={distinta.notes} />
              </Form.Group>
              <Form.Group > 
                  <Button className="btn-lg submitbtn" variant="warning" name="btn-submit" type="submit" >
              Invia
              </Button>
              </Form.Group>


        </Form>


        </Container>

    )

}

export default Inserisci;