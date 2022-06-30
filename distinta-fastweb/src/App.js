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


function App() {
  return (
    <div className="App">
        <Router>
            <Navigationbar />
            <Routes>
            <Route path="/distinta" element={<DistintaList/>} />
            <Route path="/login" element={<Inserisci/>} />
            <Route path="/logout" element={<Logout/>} />
            <Route path="/direttore" element={<Direttore/>} />
            </Routes>
        </Router>
    </div>
    
  );
}


        //  
        //  <Route path='/login' component={Login}/>

        //  <Route path='/logout' component={Logout}/>
        //  <Route path='/direttore' component={Direttore}/>
         
export default App;