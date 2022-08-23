import React, {useState,useEffect} from "react";
import { Nav, Navbar, NavLink,Container,Button } from "react-bootstrap";
import { Link } from "react-router-dom"
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";


function Direttore(){

const {user} = useAuth0();
const dirName = user.name;
const [direttore,setDirettore] = useState();
const [direttori,setDirettori] = useState([]);

useEffect(() => {
    axios   
        .get("http://localhost:3001/direttore")
        .then(response => {setDirettori(async() => {const map = await response.data; return(map.map(e => {return (e.direttore)}))})
    })
        .catch(error => {console.log('There was an error!', error)})

         
},[])



//////////////////////////////////////Funzione per consentire solo al Direttore di accedere////////////////////////////////

useEffect(() => {
console.log(direttori)
//direttore   if(direttori.direttore === dirName){
//direttore       
//direttore       setDirettore(true)
//direttore   }else{
//direttore       console.log("Nome non registrato nel DB dei direttori")
//direttore       setDirettore(false)
//   }

},[]);

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