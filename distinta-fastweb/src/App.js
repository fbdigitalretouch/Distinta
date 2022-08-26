import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "react-datepicker/dist/react-datepicker.css";
import React from "react";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import {Button} from "react-bootstrap"

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

            <Route path="/" element={<Home />}/>
            <Route path="/report" element={<DistintaList/>} />
            <Route path="/inserisci" element={<Inserisci/>} />
            <Route path="/direttore" element={<Direttore/>} />
            <Route path="/direttore/nuovoDistretto" element={<NuovoDistretto/>} />
            <Route path="/direttore/modifica" element={<ModificaDistinta/>} />
            <Route path="/direttore/stampaDistinta" element={<StampaDistinta/>} />
            </Routes> : <Button className="loginButton" variant="warning" size="lg" onClick={() => loginWithRedirect()}>Log In</Button>}
        </Router>

    </div>
    
  );
}

export default App;