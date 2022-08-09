import React from "react";
import { Nav, Navbar, NavLink,Container } from "react-bootstrap";
import { Link } from "react-router-dom"



function Direttore(){
    return(
        
        <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark" >
               <Container> 
                   <Navbar.Brand href="#home">Menù Direttore</Navbar.Brand>
                   <Navbar.Toggle aria-controls="navbarScroll" data-bs-toggle="collapse" data-bs-target="#navbarScroll" /> 
               </Container>
                   <Navbar.Collapse id="navbarScroll">
               <Container>
                    <Nav > 
                      <Nav.Item> <NavLink  eventKey="1" as={Link} to="/direttore/stampaDistinta">Stampa Distinta</NavLink></Nav.Item>     
                      <Nav.Item> <NavLink  eventKey="2" as={Link} to="/direttore/modifica">Modifica Distinta</NavLink></Nav.Item>
                      <Nav.Item> <NavLink  eventKey="4" as={Link} to="/direttore/nuovoDistretto">Inserisci Distretto</NavLink></Nav.Item> 
                    </Nav>
               </Container>   
               </Navbar.Collapse>
        </Navbar> 

    )

}

export default Direttore;