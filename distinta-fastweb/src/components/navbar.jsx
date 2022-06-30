import { Nav, Navbar, NavLink,Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Navigationbar = () => {
    return (
        <Navbar collapseOnSelect expand="sm" bg="warning" variant="light" >
               <Container> 
                   <Navbar.Brand href="#home">Distinta Fastweb</Navbar.Brand>
                   <Navbar.Toggle aria-controls="navbarScroll" data-bs-toggle="collapse" data-bs-target="#navbarScroll" /> 
               </Container>
                   <Navbar.Collapse id="navbarScroll">
               <Container>
                    <Nav >
                      <Nav.Item> <NavLink  eventKey="1" as={Link} to="/">Home</NavLink>                   </Nav.Item>  
                      <Nav.Item> <NavLink  eventKey="2" as={Link} to="/login">Inserisci</NavLink>             </Nav.Item>   
                      <Nav.Item> <NavLink  eventKey="3" as={Link} to="/distinta">Distinta</NavLink>       </Nav.Item>     
                      <Nav.Item> <NavLink  eventKey="4" as={Link} to="/logout">Logout</NavLink>           </Nav.Item>     
                      <Nav.Item> <NavLink  eventKey="5" as={Link} to="/direttore">Direttore</NavLink>     </Nav.Item>  
                    </Nav>
               </Container>   
               </Navbar.Collapse>
        </Navbar>
    );
}
 
export default Navigationbar;

// https://codesandbox.io/s/react-bootstrap-navbar-0c6ko?file=/src/App.js