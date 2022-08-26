import '../../App.css'
import axios from "axios"
import React,{useState,useEffect} from "react";
import {Container,Form,Table,Button} from "react-bootstrap"


import Direttore from "../Direttore"
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import ModalMod from "./modal"
import ReplayIcon from '@mui/icons-material/Replay';
import SearchIcon from '@mui/icons-material/Search';


function ModificaDistinta(){

const [reports,setDistinta] = useState([]);
const [distrettos,setDistretto] = useState([]);
const [choise,setChoise] = useState("");
const [utentis,setUtenti] = useState([]);
const [years,setYears] = useState([]); 
const [months,setMonths] = useState([]); 

/////////////////////////////////////////////////recupero dei dati dal database/////////////////////////////////////////



  useEffect(() => {
   axios
       .get("http://localhost:3001/distinta")
       .then(response => {setDistinta(response.data);
                          const yearz = response.data.map(e =>{return(e.year)})
                          const filteredY = yearz.filter((value,index) => {return yearz.indexOf(value) === index});
                          setYears(filteredY);
                          const monthz = response.data.map(e => {return (e.month)})
                          const filteredM = monthz.filter((value,index) => {return monthz.indexOf(value) === index})
                          setMonths(filteredM);
      })
       .catch(error => {console.log('There was an error!', error)})
 
      },[]);



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




 //////////////////////////////////////////////////handlechange della selezione///////////////////////////////////////////////////////
        
function handleChange(e){
  console.log(years)
  const {name,value} = e.target;

  setChoise((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
        
      };
      
    })
} 

/////////// creare una funzione per aggiungere la data a setchoise poi con il submit filtrare anche il mese.


 function submitChoise(event){
    event.preventDefault()

      axios
        .get("http://localhost:3001/distinta/")
        .then(response => {console.log(choise);
          setDistinta(response.data.filter((choosen) => 
              choosen.distretto === choise.distretto && 
              // choosen.username === choise.username && 
              choosen.month === choise.month && 
              choosen.year === choise.year
            ))
          })
        .catch(error => {console.log('There was an error!', error)})

 }   

//////////////////////////////////////////////////delete///////////////////////////////////////////////////////

    function pageUpdate(){
     axios
        .get("http://localhost:3001/distinta")
        .then( response => setDistinta(response.data))
        .catch(error => {console.log('There was an error!', error)})
    }

     function deleteRow(id)  {

     axios
          .delete(`http://localhost:3001/distinta/delete/${id}`)
          .then(response => pageUpdate())
          .catch(error => {console.log('There was an error!', error)})
    
 }
 


return(

    <div>
    <Direttore/>
    <Container fluid className="tableDistinta">
        <h1 className="mt-4"> Modifica Distinta</h1>

    <Form onSubmit={submitChoise}>
         <Form.Group className="mb-3" name="choise" value={choise}>
            <Form.Select onChange={handleChange} className="mb-3" aria-label="Default select example" name="distretto"> 
            <option>Seleziona Distretto</option>
            {distrettos.map(distretto => {return(<option value={distretto.distretto}>{distretto.distretto}</option>)})}
         </Form.Select>
        { 
          //  <Form.Select onChange={handleChange} className="mb-3" aria-label="Default select example" name="username"> 
          //  <option>Seleziona User</option>
          //  <option>Tutti</option>
          //  {utentis.map(utenti => {return(<option value={utenti.username}>{utenti.username}</option>)})}
          //  </Form.Select> 
        }
         <Form.Select onLoad={handleChange} onChange={handleChange} className="mb-3" aria-label="Default select example" name="month"> 
            <option >Mese</option>
            <option>Tutti</option>
            {months.map(months => {return(<option value={months}>{months}</option>)})}
         </Form.Select>
         <Form.Select onLoad={handleChange} onChange={handleChange} className="mb-3" aria-label="Default select example" name="year"> 
            <option> Anno</option>
            <option>Tutti</option>
            {years.map(years => {return(<option value={years}>{years}</option>)})}
         </Form.Select>

         </Form.Group>
          <Form.Group > 
                  <Button className="m-2 mb-4" size="lg" variant="warning" name="btn-submit" type="submit" >
              <SearchIcon/>
              </Button>
              <Button className="m-2 mb-4" size="lg" variant="warning" onClick={() => window.location.reload(false)}>  <ReplayIcon/> </Button>
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
          <td key={report._id}>{reports.indexOf(report) + 1}</td>
          <td>{report.username}</td>
          <td>{report.typeOfOperation}</td>
          <td>{report.date}</td>
          <td>{report.distretto}</td>
          <td>{report.notes}</td>
          <td>{report.clientName}</td> 
          <td><ModalMod 
            key = {report._id}
            name="editbtn"
            id={report._id}
            distretto={report.distretto}
            username={report.username}
            clientName={report.clientName}
            typeOfOperation={report.typeOfOperation}
            notes={report.notes}
            value={report._id}/></td>
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