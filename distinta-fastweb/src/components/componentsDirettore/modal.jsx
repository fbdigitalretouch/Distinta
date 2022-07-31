import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form'
import EditIcon from "@mui/icons-material/Edit";
import axios from "axios"

function ModalMod(props) {
  const [show, setShow] = useState(false);
  const [reports,setReport] = useState([]);
  const [distrettos,setDistretto] = useState([]);
  const [utentis,setUtenti] = useState([]);

    const [distinta,setDistinta] = useState({
    index:"",
    username:"",
    distretto:"",
    typeOfOperation:"",
    clientName:"",
    notes:"",
    date: ""

  })

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  //////////////////////////////////////distretto+users+distinta Load////////////////////////////////////////
    useEffect(() => {
   axios
       .get("http://localhost:3001/distinta", props.id)
       .then(response => setReport(response.data))
       .catch(error => {console.log('There was an error!', error)})
  },[]);
  
  useEffect(() => {
   axios
       .get("http://localhost:3001/user")
       .then(response => setDistretto(response.data))
       .catch(error => {console.log('There was an error!', error)})
        },[]);

    useEffect(() => {
     axios
         .get("http://localhost:3001/utenti")
         .then(response => setUtenti(response.data))
         .catch(error => {console.log('There was an error!', error)})
          },[]);

  


//////////////////////////////////////SelectHandleChange/////////////////////////////////////

  const handleChange = (e) => {
    const [name,value] = e.target
  setDistinta((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
        
      };
      
    })

  }
//////////////////////////////////////Select Username/////////////////////////////////////


  return (
    <>
      
       <EditIcon onClick={handleShow}/>
     

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modifica la Distinta</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group>
            <Form.Select onChange={handleChange} className="mb-3" aria-label="Default select example" name="newDistretto"> 
            <option>{props.distretto}</option>
            {distrettos.map(distretto => {return(<option value={distretto.distretto}>{distretto.distretto}</option>)})}
         </Form.Select>
          <Form.Select onChange={handleChange} className="mb-3" aria-label="Default select example" name="newUsername"> 
            <option>{props.username}</option>
            {utentis.map(utenti => {return(<option value={utenti.username}>{utenti.username}</option>)})}
         </Form.Select>
          <Form.Control as="textarea" rows={2} name="notes" onChange={handleChange} value={distinta.notes}>
            {props.notes}
          </Form.Control>
          </Form.Group>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}




export default ModalMod;