import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

////////////// utilizzo di AUTH0 come metodo di autenticazione //////////////////////////////////////////////
const Home = () => {
  const { user, isAuthenticated } = useAuth0();

    return(
    isAuthenticated && (
      <div className="homeDiv">
        <h2  name="username" value={user.name}>Benvenuto {user.name}.</h2>
        <p>L'indirizzo email con cui hai fatto il login è {user.email}.</p>
      </div>
    )
  )
};

export default Home;