import '../App.css'
import axios from "axios"
import React,{useState,useEffect} from "react";
import {Container,Form,Table,Button} from "react-bootstrap"
import ReplayIcon from '@mui/icons-material/Replay';


function Distinta(){

const [reports,setDistinta] = useState([]);
const [distrettos,setDistretto] = useState([]);
const [choise,setChoise] = useState("");
const [years,setYears] = useState([]); 
const [months,setMonths] = useState([]); 

/////////////////////////////////////////////////recupero dei dati dal database/////////////////////////////////////////



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
        .get("https://distinta-fastweb.herokuapp.com/distinta/")
        .then(response => {console.log(choise);
          setDistinta(response.data.filter((choosen) => 
              choosen.distretto === choise.distretto && 
              choosen.month === choise.month && 
              choosen.year === choise.year
            ))
          })
        .catch(error => {console.log('There was an error!', error)})

 }   

return(

    <div>
    <Container fluid className="tableDistinta">
        <h1 className="mt-4">Distinta</h1>

    <Form onSubmit={submitChoise}>
         <Form.Group className="mb-3" name="choise" value={choise}>
            <Form.Select onChange={handleChange} className="mb-3" aria-label="Default select example" name="distretto"> 
            <option>Seleziona Distretto</option>
            {distrettos.map(distretto => {return(<option value={distretto.distretto}>{distretto.distretto}</option>)})}
         </Form.Select>
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
              <Button className="btn-lg modifyBtn" variant="warning" name="btn-submit" type="submit" >
              Invia
              </Button>
              <Button className="btn-lg modifyBtn ml-2" variant="warning" onClick={() => window.location.reload(false)}>  <ReplayIcon/> </Button>
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
          </tr>
          )})}
        
      </tbody>
    </Table>


    </Container>
    </div>


)

}
export default Distinta;

