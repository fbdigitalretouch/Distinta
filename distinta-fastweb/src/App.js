import './App.css';
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import Navigationbar from './components/navbar';
import DistintaList from "./components/distinta-list"
import Inserisci from "./components/Inserisci"
import Logout from "./components/Logout"
import Direttore from "./components/Direttore"
import Login from "./components/login-module"

const logged = false;


// Devo sistemare il login in modo da poter renderizzare condizionalmente i reindirizzamenti solo nel caso in cui 
// l'utente sia loggato.

function App() {
  return (
    <div className="App">
        <Router>
            <Navigationbar/>
            {logged ? <h1>Benvenuto!</h1> : <Login/>}
            <Routes>
            <Route path="/distinta" element={<DistintaList/>} />
            <Route path="/inserisci" element={<Inserisci/>} />
            <Route path="/logout" element={<Logout/>} />
            <Route path="/direttore" element={<Direttore/>} />
            <Route path="/login" element={<Login/>} />
            </Routes>
        </Router>

    </div>
    
  );
}


   //      {() => {if(logged===false){
   //           return(<Login/>)}
   //         }}

export default App;