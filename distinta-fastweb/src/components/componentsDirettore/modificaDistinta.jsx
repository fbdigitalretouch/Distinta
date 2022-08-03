import '../../App.css'
import axios from "axios"
import React,{useState,useEffect} from "react";
import {Container,Form,Table,Button} from "react-bootstrap"
import Direttore from "../Direttore"
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import DoneIcon from '@mui/icons-material/Done';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import ModalMod from "./modal"


function ModificaDistinta(){

const [reports,setDistinta] = useState([]);
const [distrettos,setDistretto] = useState([]);
const [deleted,setDeleted] = useState("");
const [choise,setChoise] = useState("");
const [utentis,setUtenti] = useState([]);

/////////////////////////////////////////////////

const [updateId,setUpdateId] = useState("");
const [updated,setUpdated] = useState({})
const [onClick,setOnClick] = useState(false);
const [updateDone,setUpdateDone] = useState()







  useEffect(() => {
   axios
       .get("http://localhost:3001/distinta")
       .then(response => setDistinta(response.data))
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



 //////////////////////////////////////////////////selecting///////////////////////////////////////////////////////
        
function handleChange(e){

  const {name,value} = e.target;

  setChoise((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
        
      };
      
    })
} 


 function submitChoise(event){
    event.preventDefault()

      axios
        .get("http://localhost:3001/distinta/")
        .then(response => {setDistinta(response.data.filter(choosen => choosen.distretto === choise.distretto || choosen.username === choise.username))})
        .catch(error => {console.log('There was an error!', error)})
  
 }   
//////////////////////////////////////////////////edit///////////////////////////////////////////////////////

const updateData = (id) => {

setUpdateId(id);

setOnClick(true);
}

function promptAction(e){
  
    const {name,value} = e.target;
  
    setUpdated((prevNote) => {
        return {
          ...prevNote,
          [name]: value,
          
        };
        
      })
   
 }


//////////////////////////////////////////////////delete///////////////////////////////////////////////////////


 const deleteRow = async (id) => {

      axios
        .delete(`http://localhost:3001/distinta/delete/${id}`)
        .then( await
               axios
               .get("http://localhost:3001/distinta")
               .then( response => setDistinta(response.data))
               .catch(error => {console.log('There was an error!', error)}))
        .catch(error => {console.log('There was an error!', error)})
      
 }
 

//////////////////////////////////////////////////renderpage///////////////////////////////////////////////////////

return(

    <div>
    <Direttore/>
    <Container fluid className="tableDistinta">
        <h1> Modifica Distinta</h1>

    <Form onSubmit={submitChoise}>
         <Form.Group className="mb-3" name="choise" value={choise}>
            <Form.Select onChange={handleChange} className="mb-3" aria-label="Default select example" name="distretto"> 
            <option>Seleziona Distretto</option>
            {distrettos.map(distretto => {return(<option value={distretto.distretto}>{distretto.distretto}</option>)})}
         </Form.Select>
         <Form.Select onChange={handleChange} className="mb-3" aria-label="Default select example" name="username"> 
            <option>Seleziona User</option>
            <option>Tutti</option>
            {utentis.map(utenti => {return(<option value={utenti.username}>{utenti.username}</option>)})}
         </Form.Select>
         </Form.Group>
          <Form.Group > 
                  <Button className="btn-lg modifyBtn" variant="warning" name="btn-submit" type="submit" >
              Invia
              </Button>
              </Form.Group>
         </Form>

    </Container>
    <Container fluid className="tableDistinta">
    <Table bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Username</th>
          <th>Attività</th>
          <th>Data</th>
          <th>Distretto</th>
          <th>Note</th>
          <th>Cliente</th>
        </tr>
      </thead>
      <tbody>

        
       { reports.slice(0).reverse().map((report) => {return(  
          <tr>        
          <td key={report.id}>{reports.indexOf(report) + 1}</td>
          <td onClick={promptAction} >{report.username}</td>
          <td onClick={promptAction} >{report.typeOfOperation}</td>
          <td onClick={promptAction} >{report.date}</td>
          <td onClick={promptAction} >{report.distretto}</td>
          <td onClick={promptAction} >{report.notes}</td>
          <td onClick={promptAction} >{report.clientName}</td> 
          <td onClick={promptAction} ><button  className="editbtn">{ 
            !onClick ? <ModalMod 
            name="editbtn"
            id={report._id}
            distretto={report.distretto}
            username={report.username}
            clientName={report.clientName}
            typeOfOperation={report.typeOfOperation}
            notes={report.notes}
            onClick={() => {updateData(report._id)}} value={report._id}/> :
            <DoneIcon onClick={() => {updateDone(report._id)}}/> 
            }</button></td>
          <td><button className="deletebtn"><DeleteForeverIcon  name="deletebtn" onClick={() => {deleteRow(report._id)}} value={report._id} /></button></td>
          </tr>
          )})}
        
      </tbody>
    </Table>


    </Container>
    </div>


)

}

export default ModificaDistinta;