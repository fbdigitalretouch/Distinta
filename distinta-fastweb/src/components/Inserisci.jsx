import axios from "axios"
import React,{useState,useEffect} from "react";
import {Container,Form,Button} from "react-bootstrap"
import { useAuth0 } from "@auth0/auth0-react";

function Inserisci(){

  const { user } = useAuth0();
  const [distretto,setDistretto] = useState([])


useEffect(() => {
  axios.get("http://localhost:3001/user")
      .then(response => {setDistretto(response.data)})
      .catch(error => {console.log('There was an error!', error);},)},[])


  const [distinta,setDistinta] = useState({
    index:"",
    username:user.name,
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
      return {
        ...prevNote,
        [name]: value,
        
      };
      
    });
  }

  function createAttivazione(event){
    event.preventDefault()
    event.stopPropagation()
    

      axios
      .post("http://localhost:3001/distinta/add", distinta)
      .then(response => alert("Distinta aggiunta " + user.name))
      .catch(error => {console.log('There was an error!', error);}, []);

  }

    return(
        <Container className="inputBox"> 

        <h1 className="mt-3">Ciao <span name="username" value={user.name}>{user.name}</span></h1>
             <Form onSubmit={createAttivazione}>
              <Form.Group className="mb-3">
                 <Form.Select aria-label="Default select example" onChange={handleChange} name="distretto"> 
                 <option>Seleziona il tuo Distretto</option>
                {distretto.map(distretto => {return(<option value={distretto.distretto}>{distretto.distretto}</option>)})}
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