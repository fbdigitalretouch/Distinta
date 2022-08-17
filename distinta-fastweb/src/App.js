import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "react-datepicker/dist/react-datepicker.css";
import React from "react";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";

import Navigationbar from './components/navbar';
import DistintaList from "./components/distinta-list"
import Inserisci from "./components/Inserisci"
import NuovoDistretto from "./components/componentsDirettore/nuovoDistretto"
import ModificaDistinta from "./components/componentsDirettore/modificaDistinta"
import Direttore from "./components/Direttore"
import StampaDistinta from "./components/componentsDirettore/stampaDistinta"
import Home from "./components/home"


import { useAuth0 } from "@auth0/auth0-react";


function App() {

  const { loginWithRedirect,isAuthenticated } = useAuth0();

  return (

    <div className="App">


    
        <Router>
            <Navigationbar/>
            
            {isAuthenticated ? 
            <Routes>

            <Route exact path="/" element={<Home />}/>
            <Route exact path="/report" element={<DistintaList/>} />
            <Route path="/inserisci" element={<Inserisci/>} />
            <Route path="/direttore" element={<Direttore/>} />
            <Route path="/direttore/nuovoDistretto" element={<NuovoDistretto/>} />
            <Route path="/direttore/modifica" element={<ModificaDistinta/>} />
            <Route path="/direttore/stampaDistinta" element={<StampaDistinta/>} />
            </Routes> : <button className='loginButton' onClick={() => loginWithRedirect()}>Log In</button>}
        </Router>

    </div>
    
  );
}

export default App;