import '../../App.css'
import React, { useState, useEffect } from 'react';
import {Container,Form,Table,Button} from "react-bootstrap"
import PrintIcon from '@mui/icons-material/Print';
import SearchIcon from '@mui/icons-material/Search';
import Direttore from "../Direttore"
import axios from "axios"

function StampaDistinta(){

const [reports,setDistinta] = useState([]);
const [distrettos,setDistretto] = useState([]);
const [choise,setChoise] = useState("");
const [utentis,setUtenti] = useState([]);
const [years,setYears] = useState([]); 
const [months,setMonths] = useState([]); 


  useEffect(() => {
   axios
       .get("https://distinta-fastweb.herokuapp.com/distinta")
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
         .get("https://distinta-fastweb.herokuapp.com/distretto")
         .then(response => setDistretto(response.data))
         .catch(error => {console.log('There was an error!', error)})
          },[]);

  useEffect(() => {
     axios
         .get("https://distinta-fastweb.herokuapp.com/utenti")
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


const submitChoise = async (event) => {
    event.preventDefault()
 await  axios
        .get("https://distinta-fastweb.herokuapp.com/distinta/")
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
 ///////////////////////////////////////////////////funzione di stampa///////////////////////////////////////////////////////////////////

 function printMe(){
  setTimeout(()=>{
    window.print()
  },1000)
 }

 

return( 
  
<div>
<div  className="noPrint">
<Direttore />
    <Container fluid className="tableDistinta">
        <h1 className="mt-4"> Stampa Distinta</h1>

    <Form onSubmit={submitChoise}>
         <Form.Group className="mb-3" name="choise" value={choise}>
            <Form.Select onChange={handleChange} className="mb-3" aria-label="Default select example" name="distretto"> 
            <option>Seleziona Distretto</option>
            {distrettos.map(distretto => {return(<option value={distretto.distretto}>{distretto.distretto}</option>)})}
         </Form.Select>
         <Form.Select onLoad={handleChange} onChange={handleChange} className="mb-3" aria-label="Default select example" name="month"> 
            <option >Mese</option>
            {months.map(months => {return(<option value={months}>{months}</option>)})}
         </Form.Select>
         <Form.Select onLoad={handleChange} onChange={handleChange} className="mb-3" aria-label="Default select example" name="year"> 
            <option> Anno</option>
            {years.map(years => {return(<option value={years}>{years}</option>)})}
         </Form.Select>

         </Form.Group>
        <Form.Group > 
              <Button className="m-2 mb-4" size="lg" variant="warning" name="btn-submit" type="submit" >
              <SearchIcon/>
              </Button>
          <Button className="m-2 mb-4" size="lg" variant="warning" name="btn-submit" onClick={printMe}>
              <PrintIcon/>
          </Button>
        </Form.Group>
    </Form>
    </Container>
  </div>
  <div>  

<Container fluid className="stampaTableDistinta">
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


        
       { reports.map((report) => {return(  
          <tr>        
          <td key={report._id}>{reports.indexOf(report) + 1}</td>
          <td>{report.username}</td>
          <td>{report.typeOfOperation}</td>
          <td>{report.date}</td>
          <td>{report.distretto}</td>
          <td>{report.notes}</td>
          <td>{report.clientName}</td> 
          </tr>
          )})}
        
      </tbody>
    </Table>
</Container>
 </div>           
</div>
    )
}

export default StampaDistinta;