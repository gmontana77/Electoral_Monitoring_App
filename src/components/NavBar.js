// src/components/NavBar.js

import React from "react"; 
import { useAuth0 } from "../react-auth0-spa";
import { Link } from "react-router-dom"; 

const NavBar = () => {
    const { isAuthenticated, logout } = useAuth0();
  
    return (
      // .. code removed for brevity
 
      <div style={{ paddingLeft: '2em',paddingBottom: '2em'}}> 
      {isAuthenticated && (<button  
                          style={{ fontSize:'1em', padding:'0.25em 1em', border:'2px solid palevioletred', borderRadius: '3px', cursor: 'pointer' }} 
                          onClick={() => logout()}>Log out</button>)}
  
      {/* NEW - add a link to the home and profile pages */}
      {isAuthenticated && (
        <span>
          <Link style={{ marginLeft: '20px', color: 'palevioletred', fontSize: '1.1em', cursor: 'pointer' }} to="/profile">Perfil</Link>
          <Link style={{ marginLeft: '20px', color: 'palevioletred', fontSize: '1.1em', cursor: 'pointer' }} to="/surveyex">Encuesta</Link> 
          <Link style={{ marginLeft: '20px', color: 'palevioletred', fontSize: '1.1em', cursor: 'pointer' }} to="/surveysdone">Resultados</Link>
        </span>
      )}
      </div>
    );
  };
  
  export default NavBar;

