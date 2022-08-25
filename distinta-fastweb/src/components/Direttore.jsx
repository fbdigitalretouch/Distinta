import React, {useState,useEffect} from "react";
import { Nav, Navbar, NavLink,Container,Button } from "react-bootstrap";
import { Link } from "react-router-dom"
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";


function Direttore(){

const {user} = useAuth0();
const dirName = user.name;
const [direttore,setDirettore] = useState();

//////////////////////////////////////Funzione per consentire solo al Dir di accedere al menù Direttore////////////////////////////////

useEffect(() => {
    axios   
        .get("https://distinta-fastweb.herokuapp.com/direttore")
        .then(response => {setDirettore(() => {
            const dirRisp = response.data;
            if(dirRisp.map(e => {return(e.direttore)}).includes(dirName)){
                return true
            }else{alert("Non sei il direttore")
                return false}
        })})
    
        .catch(error => {console.log('There was an error!', error)})
      
},[])


    return(
        <div>
            {direttore ?
             <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark">
               <Container> 
                   <Navbar.Brand href="#home">Menù Direttore</Navbar.Brand>
                   <Navbar.Toggle aria-controls="navbarScroll" data-bs-toggle="collapse" data-bs-target="#navbarScroll" /> 
               </Container>
                   <Navbar.Collapse id="navbarScroll">
               <Container>
               
                   <Nav > 
                      <Nav.Item > <NavLink  eventKey="1" as={Link} to="/direttore/stampaDistinta">Stampa Distinta</NavLink></Nav.Item>     
                      <Nav.Item> <NavLink  eventKey="2" as={Link} to="/direttore/modifica">Modifica Distinta</NavLink></Nav.Item>
                      <Nav.Item> <NavLink  eventKey="4" as={Link} to="/direttore/nuovoDistretto">Inserisci Distretto</NavLink></Nav.Item> 
                    </Nav> 
               </Container>   
               </Navbar.Collapse>
        </Navbar> : null}
        </div>

    )

}

export default Direttore;