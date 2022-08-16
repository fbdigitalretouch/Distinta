import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form'
import EditIcon from "@mui/icons-material/Edit";
import axios from "axios"

function  ModalMod(props) {
  const [show, setShow] = useState(false);
  const [distrettos,setDistretto] = useState([]);
  const [utentis,setUtenti] = useState([]);

 

    const [distinta,setDistinta] = useState({
    newUsername:"",
    newDistretto:"",
    newTypeOfOperation:"",
    newClientName:"",
    newNotes:"",

  })

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  //////////////////////////////////////distretto+users+distinta Load////////////////////////////////////////
  
  useEffect(() => {
   axios
       .get("http://localhost:3001/distretto")
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



  const idSet = async (propId) => {
     const id = await propId;
       axios
       .get(`http://localhost:3001/distinta/find/${id}`)
       .then(response =>setDistinta(response.data))
       .catch(error => {console.log('There was an error!', error)})

       console.log(distinta)
      
  }

    function handleChange(e){
    const {name,value} = e.target
  setDistinta((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
        
      };
      
    })

  }

//////////////////////////////////////update Part/////////////////////////////////////

const submitChange = async (submitId) => {
  const id = await submitId;

  axios 
        .patch(`http://localhost:3001/distinta/update/${id}`,distinta)
        .then(response => {console.log(distinta);
             axios
                 .get("http://localhost:3001/distinta")
                 .then(response => setDistinta(response.data))
                 .catch(error => {console.log('There was an error!', error)})})
        .catch(error => console.log('There was an error!', error))


}

//////////////////////////////////////Render/////////////////////////////////////


  return (
    <>
      
  <EditIcon onClick={handleShow}/>
     

  <Modal show={show} onHide={handleClose}>
    <Modal.Header closeButton>
       <Modal.Title onLoad={() => idSet(props.id)}><img  src="https://icon-library.com/images/paper-icon-png/paper-icon-png-11.jpg" className='imgDistinta'/>Modifica la Distinta</Modal.Title>
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
            
            <Form.Control className="mb-3" type="text" name="newTypeOfOperation" onChange={handleChange}  placeholder={props.typeOfOperation} />

            <Form.Control className="mb-3" type="text" name="newClientName" onChange={handleChange} placeholder={props.clientName}/>

            <Form.Control className="mb-3" as="textarea" rows={2} name="newNotes" onChange={handleChange}  placeholder={props.notes}/> 

        </Form.Group>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() => {submitChange(props.id); handleClose()}}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}




export default ModalMod;