import './App.css';
import React, {useState,useEffect} from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import axios from "axios"

import {BrowserRouter as Router,Routes,Route,useParams} from "react-router-dom";

import Navigationbar from './components/navbar';
import DistintaList from "./components/distinta-list"
import Inserisci from "./components/Inserisci"
import NuovoDistretto from "./components/componentsDirettore/nuovoDistretto"
import ModificaDistinta from "./components/componentsDirettore/modificaDistinta"
import Direttore from "./components/Direttore"
import Login from "./components/login-module"
import { useAuth0 } from "@auth0/auth0-react";




// Devo sistemare il login in modo da poter renderizzare condizionalmente i reindirizzamenti solo nel caso in cui 
// l'utente sia loggato.

function App() {



  const { loginWithRedirect,isAuthenticated,user } = useAuth0();

  


  return (

    <div className="App">


    
        <Router>
            <Navigationbar/>
            
            {isAuthenticated ? 
            <Routes>

            
            <Route exact path="/report" element={<DistintaList/>} />
            <Route path="/inserisci" element={<Inserisci/>} />
            <Route path="/direttore" element={<Direttore/>} />
            <Route path="/direttore/nuovoDistretto" element={<NuovoDistretto/>} />
            <Route path="/direttore/modifica" element={<ModificaDistinta/>} />
            <Route path="/login" element={<Login/>} />
            </Routes> : <button className='loginButton' onClick={() => loginWithRedirect()}>Log In</button>}
        </Router>

    </div>
    
  );
}

export default App;