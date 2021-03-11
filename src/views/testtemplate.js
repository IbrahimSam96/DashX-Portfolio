import React, { Component } from 'react';
//BootStrap UI React-Bootstarp Libr.
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import ListGroup from 'react-bootstrap/ListGroup';
//Material UI 
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import DehazeIcon from '@material-ui/icons/Dehaze';
import $ from 'jquery';
//ReactRouter
import {NavLink} from "react-router-dom";
// Particles
import Particles from "react-particles-js"

class Template2 extends Component {
constructor(props){
super(props)
this.state = {
left: false
    } 
}


render() {    

//Sidebar Callbacks I.E Open/Close, 
const toggleDrawer = (anchor, open) => (event) => {
            if (
              event.type === "keydown" &&
              (event.key === "Tab" || event.key === "Shift")
            ) {
              return;
            }
        
            this.setState({ left: open });
};


return (

<div style={{display:"grid", gridTemplateColumns:"repeat(1, 1fr)",gridTemplateRows:"repeat(1, 43px)", backgroundColor:"#11151f"}}> 

<div className="MainNav"  >

<Button onClick={toggleDrawer( this.state.left , true)} > <DehazeIcon onClick={toggleDrawer( this.state.left , true)}   style={{color:"white", fontSize:"1.5rem"}}/>

</Button>

<NavLink to="/" style={{textDecoration:"none", color:"white", fontSize:"1.5rem",  fontFamily:"'Trebuchet MS',  Arial, sans-serif"}}
>My Portfolio  
</NavLink>

<span className="hidden-xs text-muted " style={{paddingLeft:"10px", fontSize:"0.6rem"}}>
  XYZ
</span>

</div>


<React.Fragment>
<Drawer
anchor="bottom"
open={this.state.left}
onClose={toggleDrawer( this.state.left, false)}
>

<Nav to="/" className="flex-sm-column" id="sidebar">

<ListGroup className="nav nav-sidebar flex-sm-column">

<ListGroup.Item>
<a
href="#summary"
data-toggle="collapse"
aria-expanded="false"

                    > <span>Summary</span>
                    </a>
                  </ListGroup.Item>
                  <ListGroup onClick={toggleDrawer( this.state.left , false)}>
                    <ListGroup className="sub-menu collapse" id="summary">
                    <ListGroup.Item>
                        {" "}
                        <NavLink exact to="/">
                          Dashboard{" "}
                        </NavLink>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        {" "}
                        <NavLink exact to="/PortfolioSummary">
                          Portofolio Summary{" "}
                        </NavLink>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        {" "}
                        <NavLink exact to="/Securities">
                          Securities
                        </NavLink>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        {" "}
                        <NavLink exact to="/Exposures">
                          Exposures{" "}
                        </NavLink>
                      </ListGroup.Item>
                    </ListGroup>
                  </ListGroup>
                  <ListGroup.Item
                    role="separator"
                    className="divider"
                  ></ListGroup.Item>

                  <ListGroup.Item>
                    <a
                      href="#IntradayPerformance"
                      data-toggle="collapse"
                      aria-expanded="false"
                    >
                      <span>Intraday Performance</span>
                    </a>
                  </ListGroup.Item>
                  <ListGroup >
                    <ListGroup
                      className="sub-menu collapse"
                      onClick={toggleDrawer( this.state.left , false)}
                      id="IntradayPerformance"
                    >
                      <ListGroup.Item>
                        {" "}
                        <NavLink exact to="/LivePortfolio">
                          Live Portfolio
                        </NavLink>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        {" "}
                        <NavLink exact to="/Markets">
                          Markets{" "}
                        </NavLink>
                      </ListGroup.Item>
                    </ListGroup>
                  </ListGroup>

                  <ListGroup.Item>
                    <a
                      href="#RiskReporting"
                      data-toggle="collapse"
                      aria-expanded="false"
                  
                    >
                      <span>Risk Reporting</span>
                    </a>
                  </ListGroup.Item>
                  <ListGroup  onClick={toggleDrawer( this.state.left , false)}>
                    <ListGroup className="sub-menu collapse" id="RiskReporting">
                     
                      <ListGroup.Item>
                        {" "}
                        <NavLink exact to="/FXRiskAllocation">
                          FX Risk Allocation{" "}
                        </NavLink>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        {" "}
                        <NavLink exact to="/LiquidityReports">
                          Liquidity Reports
                        </NavLink>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        {" "}
                        <NavLink exact to="/OverlapReporting">
                          Overlap Reporting{" "}
                        </NavLink>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        {" "}
                        <NavLink exact to="/CorrelationMatrix">
                          Correlation Matrix
                        </NavLink>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        {" "}
                        <NavLink exact to="/CounterpartyRisk">
                          Counterparty Risk
                        </NavLink>
                      </ListGroup.Item>
                    </ListGroup>
                  </ListGroup>

                  <ListGroup.Item>
                    <a
                      href="#PortfolioAnalytics"
                      data-toggle="collapse"
                      aria-expanded="false"
                  
                    >
                      <span>Portfolio Analytics</span>
                    </a>
                  </ListGroup.Item>
                  <ListGroup  onClick={toggleDrawer( this.state.left , false)}>
                    <ListGroup
                      className="sub-menu collapse"
                      id="PortfolioAnalytics"
                    >
                      <ListGroup.Item>
                        {" "}
                        <NavLink exact to="/PortofolioBuilder">
                          Portfolio Builder
                        </NavLink>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        {" "}
                        <NavLink exact to="/Factors">
                          Factors{" "}
                        </NavLink>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        {" "}
                        <NavLink exact to="/WinLossRatio">
                          Win/Loss Ratio{" "}
                        </NavLink>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        {" "}
                        <NavLink exact to="/ValueandGrowthModel">
                          Value and Growth Model{" "}
                        </NavLink>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        {" "}
                        <NavLink exact to="/DailyMarkets">
                          Daily Markets Correlations
                        </NavLink>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        {" "}
                        <NavLink exact to="/AllocationTool">
                          Allocation Tool{" "}
                        </NavLink>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        {" "}
                        <NavLink exact to="/DynamicAllocationTool">
                          Dynamic Allocation Tool
                        </NavLink>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        {" "}
                        <NavLink exact to="/HitRate">
                          Hit Rate
                        </NavLink>
                      </ListGroup.Item>
                    </ListGroup>
                  </ListGroup>

        

                </ListGroup>
                  </Nav>
                  </Drawer>
</React.Fragment>
					
		
		
			</div>
    );
  }
}




export default Template2;












