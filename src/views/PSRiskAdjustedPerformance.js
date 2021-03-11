
import React, { Component } from "react";

//BootStrap
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'
import Particles from 'react-particles-js';
//Graphs + Data

//ReactRouter
import { NavLink } from "react-router-dom";

class Ps5 extends Component {

    render() {

     // Create large Navbar
     const renderLargeNavBar = (
        <div className="container cyan PS2">
        <Navbar >
            <NavLink exact to="/PortfolioSummary"> <Navbar.Brand style={{color:"white",  borderRight:"0.1em solid teal", paddingRight:"0.8em" }}> <b> Portofolio Summary </b> </Navbar.Brand></NavLink>
                <NavLink exact to="/PortfolioSummary/PerformanceAttribution"> <Navbar.Brand  style={{color:"white", fontSize:"1.0em"}}>Performance Attribution </Navbar.Brand> </NavLink>
                <NavLink exact to="/PortfolioSummary/RiskAdjustedPerformance" > <Navbar.Brand  style={{color:"white", fontSize:"1.0em" , borderBottom:"0.1em solid white"}}>Risk Adjusted Performance </Navbar.Brand></NavLink>
                <NavLink exact to="/PortfolioSummary/Benchmark"> <Navbar.Brand  style={{color:"white", fontSize:"1.0em"}}>Benchmark </Navbar.Brand> </NavLink>
        </Navbar>
        </div>
    );
    return (
        <div >
               <div style={{backgroundColor:"#181C28", position:"fixed", top:"0%", left:"0%", height:"220vh", width:"200vh", zIndex:-3}}>
                  <Particles
                            params={{
      "particles": {
          "number": {
              "value": 50
          },
          line_linked: {
                          shadow: {
                              enable: true,
                              color: "#3CA9D1",
                              blur: 5
                          }
                      },
          "size": {
              "value": 3
          }
      },
      "interactivity": {
          "events": {
              "onhover": {
                  "enable": true,
                  "mode": "repulse"
              }
          }
      }
                                          }} />
                    </div>

        <div style={{ position: "absolute", top: "65px", left: "-10%", width:"100%"}}>
                  {renderLargeNavBar}
      </div>

              
          </div>
      )

   
    }
}

export default Ps5;