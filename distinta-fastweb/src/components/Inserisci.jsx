import axios from "axios"
import React,{useState} from "react";
import {Container,Form,Button} from "react-bootstrap"
import { useAuth0 } from "@auth0/auth0-react";

function Inserisci(){
  let date = new Date()
  let option = {day:"numeric",year:"numeric",month:"numeric"}

  const { user } = useAuth0();
  const [users,setUsers] = useState([])

  axios.get("http://localhost:3001/user")
      .then(response => {setUsers(response.data)})


  const [distinta,setDistinta] = useState({
    username:"",
    distretto:"",
    typeOfOperation:"",
    clientName:"",
    notes:"",
    date: ""

  })

  function handleChange(event) {
    event.preventDefault()
    const { name, value } = event.target;

    setDistinta((prevNote) => {
      console.log(user.name)
      return {
        ...prevNote,
        [name]: value,
        date: date.toLocaleDateString("it-IT",option)
        
      };
      
    });
  }

  function createAttivazione(event){
    event.preventDefault()
    event.stopPropagation()

      axios
      .post("http://localhost:3001/distinta/add", distinta)
      .then(response => alert("Distinta aggiunta " + user.name));

  }

    return(
        <Container className="inputBox"> 

        <h1 className="mt-3">Ciao {user.name}</h1>
             <Form onSubmit={createAttivazione}>
              <Form.Group className="mb-3">
                 <Form.Select aria-label="Default select example" onChange={handleChange} name="distretto"> 
                 <option>Seleziona il tuo Distretto</option>
                {users.map(username => {return(<option value={username.distretto}>{username.distretto}</option>)})}
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

    //         <Form.Group className="mb-3">
    //            <Form.Select aria-label="Default select example">
    //            <option>Seleziona il tuo Nome</option>
    //               {users.map(user => {return(<option>{user.username}</option>)})}
    //            </Form.Select>
    //         </Form.Group>\*