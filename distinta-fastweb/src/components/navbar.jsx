import { Nav, Navbar, NavLink,Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const Navigationbar = () => {


    const { logout } = useAuth0();
    
    return (
        <Navbar collapseOnSelect expand="sm" bg="warning" variant="light" >
               <Container> 
                   <Navbar.Brand href="/home">Distinta Fastweb</Navbar.Brand>
                   <Navbar.Toggle aria-controls="navbarScroll" data-bs-toggle="collapse" data-bs-target="#navbarScroll" /> 
               </Container>
                   <Navbar.Collapse id="navbarScroll">
               <Container>
                    <Nav >
                      <Nav.Item> <NavLink  eventKey="1" as={Link} to="/">Home</NavLink>                   </Nav.Item>  
                      <Nav.Item> <NavLink  eventKey="2" as={Link} to="/inserisci">Inserisci</NavLink>     </Nav.Item>   
                      <Nav.Item> <NavLink  eventKey="3" as={Link} to="/report">Distinta</NavLink>       </Nav.Item>     
                      <Nav.Item> <NavLink  eventKey="4" onClick={() => logout({ returnTo: window.location.origin })}>Logout</NavLink>           </Nav.Item>     
                      <Nav.Item> <NavLink  eventKey="5" as={Link} to="/direttore">Direttore</NavLink>     </Nav.Item>  
                    </Nav>
               </Container>   
               </Navbar.Collapse>
        </Navbar>
    );
}
 
export default Navigationbar;
