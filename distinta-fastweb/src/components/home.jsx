import React,{useState,useEffect} from "react";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios"

const Home = () => {
  const { user, isAuthenticated } = useAuth0();

const [userLogged,setUserLogged] = useState([]);
const [usersLogged,setUsersLogged] = useState([]);



useEffect(() => {
  axios.get("http://localhost:3001/utenti")
      .then(response => {setUsersLogged(response.data)})
      .catch(error => {console.log('There was an error!', error);},)},[])

function onLoad(){

if(usersLogged.filter(e => e.username.includes(user.name) === false)) {   


  axios.post("http://localhost:3001/utenti", {username:userLogged})
      .then(response => {"Nuovo utente aggiunto"})
      .catch(error => {console.log('There was an error!', error)});

    } else {

    alert(`Ciao ${userLogged}`)}

}


  

    return(
    isAuthenticated && (
      <div>
        <h2 name="username" value={user.name}>Bentornato, {user.name}</h2>
        <p>L'indirizzo email con cui hai fatto il login è {user.email}</p>
      </div>
    )
  )
};

export default Home;