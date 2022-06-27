import './App.css';
import React from "react";
import {BrowserRouter as Router,Route,Link} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/navbar"
import DistintaList from "./components/distinta-list"


function App() {
  return (
    <div>
    <h1>helloworld</h1>
    <Router>
    <Navbar/>
    
    <br/>
    <Route path="/" exact component={DistintaList} />
    </Router>
    </div>
    
  );
}

export default App;