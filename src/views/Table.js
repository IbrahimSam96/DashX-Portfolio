import React, { Component } from "react";

//BootStrap
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'
import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';

//Graphs + Data
import Main from "./Script1";
import * as Data from "./data.json";

import { NavLink } from "react-router-dom";
import { Consumer } from "./CTX";


class St extends Component {

    render() {

        return (
            
            <div style={{ position: "absolute", top: "0px", left: "0px" }}>
                
  <div style={{backgroundColor:"#181C28", position:"absolute", top:"55px", left:"0px", height:"825px", width:"1500px"}}>

</div>
                <div  style={{ position: "absolute", top: "100px", left: "100px" }}>
                    <Main />
                </div>
                
             </div>
        )
    }
}

export default St;

