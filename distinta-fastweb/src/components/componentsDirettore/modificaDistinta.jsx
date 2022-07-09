import '../../App.css'
import axios from "axios"
import React,{useState,useEffect} from "react";
import {Container,Form,Table,} from "react-bootstrap"
import Direttore from "../Direttore"
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from "@mui/icons-material/Edit";


function ModificaDistinta(){

const [reports,setDistinta] = useState([]);
const [distrettos,setDistretto] = useState([]);
const [deleted,setDeleted] = useState("");
const [choise,setChoise] = useState("")

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

function handleChange(e){

  const {name,value} = e.target;

  setChoise((prev)=>{
    return{
      ...prev,
      [name]:value
    }
  })
  console.log(choise)
  axios
       .get("http://localhost3001/distinta",choise)
       .then(response => setDistinta(response.data))
       .catch(error => {console.log('There was an error!', error)})


}

function editOne(){
  axios
      .post()
}

function deleteOne(e){

  const deleteId = e.target.value

  setDeleted(deleteId);

 
  axios
      .delete("http://localhost:3001/distinta/delete",deleted)
      .then(response => setDistinta((prevvvalue)=>{return{...prevvvalue}}),alert(`${deleted} deleted succesfully`))
      .catch(error => {console.log('There was an error!', error);
    })

       
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

    <Form>
         <Form.Group className="mb-3" name="choise" value={choise}>
            <Form.Select onChange={handleChange} className="mb-3" aria-label="Default select example" name="distretto"> 
            <option>Seleziona Distretto</option>
            {distrettos.map(distretto => {return(<option value={distretto.distretto}>{distretto.distretto}</option>)})}
         </Form.Select>
         <Form.Select onChange={handleChange} className="mb-3" aria-label="Default select example" name="users"> 
            <option>Seleziona User</option>
            <option>Tutti</option>
            {reports.map(distretto => { 
           
             return(<option value={distretto.username}>{distretto.username}</option>)})}
         </Form.Select>
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
          <td><button name="editbtn" onClick={editOne} value={report.id} className="editbtn"><EditIcon/></button></td>
          <td><button name="deletebtn" onClick={deleteOne} value={report._id} className="deletebtn">delete</button></td>
          </tr>
          )})}
        
      </tbody>
    </Table>


    </Container>
    </div>


)

}

export default ModificaDistinta;