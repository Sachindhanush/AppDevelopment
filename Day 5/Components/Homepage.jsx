import React from 'react';
// import { Link } from 'react-router-dom';
import './Homepage.css';
import Navbar from '../Pages/Navbar';

export default function HomePage() {
  return (
    <div>
    <Navbar/>
    <div>
    
    <div className="Home">
    <div className="tit"> <h1>WELCOME TO CLEARLY</h1> </div>
        <div className="Homeadmin">
          ADMIN LOGIN
        </div>
        <div className="Homestaff">
          CUSTOMER LOGIN
        </div>
      </div>
 </div>
 </div>
);
}