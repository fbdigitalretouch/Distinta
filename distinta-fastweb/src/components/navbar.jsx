import React from "react";
import {Link} from "react-router-dom";

function Navbar(){
    return(
        <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
            <Link to="/" className="navbar-brand">Distinta Fastweb</Link>
            <div className="collapse navbar-collapse">
                <ul className="navbar-nav mr-auto">
                    <li className="navbar-item">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="navbar-item">
                        <Link to="/login">Login</Link>
                    </li>
                    <li className="navbar-item">
                        <Link to="/distinta-user">La mia distinta</Link>
                    </li>
                    <li className="navbar-item">
                        <Link to="/logout">Logout</Link>
                    </li>
                    <li className="navbar-item">
                        <Link to="/direttore">Manutenzione</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}


export default Navbar