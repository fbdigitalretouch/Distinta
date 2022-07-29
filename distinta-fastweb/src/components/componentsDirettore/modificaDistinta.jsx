import '../../App.css'
import axios from "axios"
import React,{useState,useEffect} from "react";
import {Container,Form,Table,Button} from "react-bootstrap"
import Direttore from "../Direttore"
// import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from "@mui/icons-material/Edit";
import TaskAltIcon from '@mui/icons-material/TaskAlt';


function ModificaDistinta(){

const [reports,setDistinta] = useState([]);
const [distrettos,setDistretto] = useState([]);
const [deleted,setDeleted] = useState("");
const [choise,setChoise] = useState("");
const [utentis,setUtenti] = useState([]);

/////////////////////////////////////////////////

const [updateId,setUpdateId] = useState("");
const [updated,setUpdated] = useState({})
const [classUpdate,setClassUpdate] = useState(false);







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
  function updateChange(e){
  
      const {name,value} = e.target;
  
    setUpdated((prevNote) => {
        return {
          ...prevNote,
          [name]: value,
          
        };
        
      })
   
 }
//   
//   function classNameChange(){
//     if (classnameChange === "hidden"){
//       setClassnameChange("display")
//     }else{setClassnameChange("hidden")}
//   }
//   
//   
//   function editOne(e){
//   
//     const updateId =  e.target.value;
//     
//   
//     axios
//         .patch("http://localhost:3001/distinta/patch/",updateId, updated)
//         .then(response => alert("Distinta Aggiornata"))
//         .catch(error => console.log('There was an error!', error));
//   
//         classNameChange()
//     
//   }
//   
//   
///////////////////////////////////////////////////////////////////////////////////////////////////////////////

const updateData = (id) => {

setUpdateId(id);

setClassUpdate(true);

}

//////////////////////////////////////////////////delete///////////////////////////////////////////////////////


 const deleteRow = (id) => {

  axios
      .delete(`http://localhost:3001/distinta/delete/${id}`)

          axios
        .get("http://localhost:3001/distinta")
        .then(response => setDistinta(response.data))
        .catch(error => {console.log('There was an error!', error)})
 }
 

//////////////////////////////////////////////////renderpage///////////////////////////////////////////////////////

return(

    <div>
    <Direttore/>
    <Container>
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
          <td>{report.username}</td>
          <td>{report.typeOfOperation}</td>
          <td>{report.date}</td>
          <td>{report.distretto}</td>
          <td>{report.notes}</td>
          <td>{report.clientName}</td>
          <td><button name="editbtn" onClick={() => {updateData(report._id)}} value={report._id} className="editbtn"><EditIcon/></button></td>
          <td><button name="deletebtn" onClick={() => {deleteRow(report._id)}} value={report._id} className="deletebtn">delete</button></td>
          </tr>
          )})}
        
      </tbody>
    </Table>


    </Container>
    </div>


)

}

export default ModificaDistinta;