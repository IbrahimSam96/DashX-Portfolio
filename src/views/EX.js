import React, { Component } from "react";

//BootStrap
import Navbar from 'react-bootstrap/Navbar';
import Modal from 'react-bootstrap/Modal';
import Particles from 'react-particles-js';
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import Carousel from 'react-bootstrap/Carousel';
//Data
import Main62 from "./ManagerTest2";
import PsGraph from "./PsGraph";
import Main2 from "./Graphstest";
import Main5 from "./Graptest2.";
//MUITable 
import MUIDataTable from "mui-datatables";
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';

//Router
import { NavLink } from "react-router-dom";




class EXT extends Component {

    render() {

 const renderPortfolioStats = () => { 
             return (
    <div style={{height:"420px"}}>
      <List
        style={{
          backgroundColor:"#131722",
          color: "white",
          maxHeight: "100%",
          overflowY: "scroll", 
        }}
        
      >
        <ListItem button >

          <ListItemText
            primary="Portfolio Statistics"
            primaryTypographyProps={{
                 style: 
                 { whiteSpace: "normal" , fontWeight:"bold",  textAlign: "center", fontSize:"1.2em" } 
                }}
          />

        </ListItem>
        <Divider style={{ backgroundColor: "teal" }} />


        <ListItem button>
          <ListItemText primary="Annualized Return"
                      primaryTypographyProps={{
                        style: 
                        { whiteSpace: "normal" , fontWeight:"bold", fontSize:"0.8em" } 
                       }}
          />
          <ListItemText primary="18%" 
                  primaryTypographyProps={{
                    style: 
                    { whiteSpace: "normal" , fontWeight:"bold", fontSize:"1.0em", float: "right"} 
                   }}
          />
        </ListItem>
        

        <ListItem button>
          <ListItemText primary="Annualized Volatility"
                  primaryTypographyProps={{
                    style: 
                    { whiteSpace: "normal" , fontWeight:"bold", fontSize:"0.8em"} 
                   }}
          />
          <ListItemText primary="4%" 
                  primaryTypographyProps={{
                    style: 
                    { whiteSpace: "normal" , fontWeight:"bold", fontSize:"1.0em", float: "right" } 
                   }}
          />
        </ListItem>
      

        <ListItem button>
          <ListItemText primary="3M Return" 
                  primaryTypographyProps={{
                    style: 
                    { whiteSpace: "normal" , fontWeight:"bold", fontSize:"0.8em" } 
                   }}
          />
          <ListItemText primary=""
                  primaryTypographyProps={{
                    style: 
                    { whiteSpace: "normal" , fontWeight:"bold", fontSize:"1.0em", float: "right" } 
                   }}
          />
        </ListItem>
       

        <ListItem button>
          <ListItemText primary="Sharp Ratio" 
                  primaryTypographyProps={{
                    style: 
                    { whiteSpace: "normal" , fontWeight:"bold", fontSize:"0.8em" } 
                   }}
          />
          <ListItemText primary=""
                  primaryTypographyProps={{
                    style: 
                    { whiteSpace: "normal" , fontWeight:"bold", fontSize:"1.0em", float: "right" } 
                   }}
          />
        </ListItem>
      

        <ListItem button>
          <ListItemText primary="Sortino Ratio" 
                  primaryTypographyProps={{
                    style: 
                    { whiteSpace: "normal" , fontWeight:"bold", fontSize:"0.8em" } 
                   }}
          />
          <ListItemText primary=""
                  primaryTypographyProps={{
                    style: 
                    { whiteSpace: "normal" , fontWeight:"bold", fontSize:"1.0em", float : "right" } 
                   }}
          />
        </ListItem>

        <ListItem button>
          <ListItemText primary="Worst Drawdown"
                  primaryTypographyProps={{
                    style: 
                    { whiteSpace: "normal" , fontWeight:"bold", fontSize:"0.8em" } 
                   }}
          />
          <ListItemText primary="" 
                  primaryTypographyProps={{
                    style: 
                    { whiteSpace: "normal" , fontWeight:"bold", fontSize:"1.0em", float : "right" } 
                   }}
          />
        </ListItem>
        

        <ListItem button>
          <ListItemText primary="Current Drawdown"
                  primaryTypographyProps={{
                    style: 
                    { whiteSpace: "normal" , fontWeight:"bold", fontSize:"0.8em" } 
                   }}
          />
          <ListItemText primary="" 
                  primaryTypographyProps={{
                    style: 
                    { whiteSpace: "normal" , fontWeight:"bold", fontSize:"1.0em", float : "right" } 
                   }}
          />
        </ListItem>

        <ListItem button>
          <ListItemText primary="Longest Drawdown"
                  primaryTypographyProps={{
                    style: 
                    { whiteSpace: "normal" , fontWeight:"bold", fontSize:"0.8em" } 
                   }}
          />
          <ListItemText primary=""
                  primaryTypographyProps={{
                    style: 
                    { whiteSpace: "normal" , fontWeight:"bold", fontSize:"1.0em", float : "right" } 
                   }}
          />
        </ListItem>
  

        <ListItem button>
          <ListItemText primary="Avg. Time to Recovery"
                  primaryTypographyProps={{
                    style: 
                    { whiteSpace: "normal" , fontWeight:"bold", fontSize:"0.8em"} 
                   }}
          />
          <ListItemText primary="" 
                  primaryTypographyProps={{
                    style: 
                    { whiteSpace: "normal" , fontWeight:"bold", fontSize:"1.0em", float : "right" } 
                   }}
          />
        </ListItem>
    


        <ListItem button>
          <ListItemText primary="Best Month"
                  primaryTypographyProps={{
                    style: 
                    { whiteSpace: "normal" , fontWeight:"bold", fontSize:"0.8em" } 
                   }}
          />
          <ListItemText primary="" 
                  primaryTypographyProps={{
                    style: 
                    { whiteSpace: "normal" , fontWeight:"bold", fontSize:"1.0em", float : "right" } 
                   }}
          />
        </ListItem>
  

        <ListItem button>
          <ListItemText primary="Worst Month"
                  primaryTypographyProps={{
                    style: 
                    { whiteSpace: "normal" , fontWeight:"bold", fontSize:"0.8em" } 
                   }}
          />
          <ListItemText primary=""
                  primaryTypographyProps={{
                    style: 
                    { whiteSpace: "normal" , fontWeight:"bold", fontSize:"1.0em", float : "right" } 
                   }}
          />
        </ListItem>
    

        <ListItem button>
          <ListItemText primary="% Postive Months "
                  primaryTypographyProps={{
                    style: 
                    { whiteSpace: "normal" , fontWeight:"bold", fontSize:"0.8em" } 
                   }}
           />
          <ListItemText primary="" 
                  primaryTypographyProps={{
                    style: 
                    { whiteSpace: "normal" , fontWeight:"bold", fontSize:"1.0em", float : "right" } 
                   }}
          />
        </ListItem>
 

        <ListItem button>
          <ListItemText primary="Avg. Monthly Return"
                  primaryTypographyProps={{
                    style: 
                    { whiteSpace: "normal" , fontWeight:"bold", fontSize:"0.8em" } 
                   }}
          />
          <ListItemText primary=""
                  primaryTypographyProps={{
                    style: 
                    { whiteSpace: "normal" , fontWeight:"bold", fontSize:"1.0em", float : "right" } 
                   }}
          />
        </ListItem>


        <ListItem button>
          <ListItemText primary="Best Day"
                  primaryTypographyProps={{
                    style: 
                    { whiteSpace: "normal" , fontWeight:"bold", fontSize:"0.8em" } 
                   }}
          />
          <ListItemText primary="" 
                  primaryTypographyProps={{
                    style: 
                    { whiteSpace: "normal" , fontWeight:"bold", fontSize:"1.0em" , float : "right"} 
                   }}
          />
        </ListItem>
      

        <ListItem button>
          <ListItemText primary="Worst Day"
                  primaryTypographyProps={{
                    style: 
                    { whiteSpace: "normal" , fontWeight:"bold", fontSize:"0.8em" } 
                   }}
          />
          <ListItemText primary="" 
                  primaryTypographyProps={{
                    style: 
                    { whiteSpace: "normal" , fontWeight:"bold", fontSize:"1.0em", float : "right" } 
                   }}
          />
        </ListItem>


        <ListItem button>
          <ListItemText primary="3Y Correlation Newedge CTA "
                  primaryTypographyProps={{
                    style: 
                    { whiteSpace: "normal" , fontWeight:"bold", fontSize:"0.8em" } 
                   }}
          />
          <ListItemText primary=""
                  primaryTypographyProps={{
                    style: 
                    { whiteSpace: "normal" , fontWeight:"bold", fontSize:"1.0em", float : "right" } 
                   }}
          />
        </ListItem>
  

        <ListItem button>
          <ListItemText primary="3Y Correlation S&P 500"
                  primaryTypographyProps={{
                    style: 
                    { whiteSpace: "normal" , fontWeight:"bold", fontSize:"0.8em" } 
                   }}
          />
          <ListItemText primary="" 
                  primaryTypographyProps={{
                    style: 
                    { whiteSpace: "normal" , fontWeight:"bold", fontSize:"1.0em", float : "right" } 
                   }}
          />
        </ListItem>
     

        <ListItem button>
          <ListItemText primary="3Y Correlation S&P GSCI"
                  primaryTypographyProps={{
                    style: 
                    { whiteSpace: "normal" , fontWeight:"bold", fontSize:"0.8em" } 
                   }}
          />
          <ListItemText primary="" 
                  primaryTypographyProps={{
                    style: 
                    { whiteSpace: "normal" , fontWeight:"bold", fontSize:"1.0em" , float : "right"} 
                   }}
          />
        </ListItem>
    

        <ListItem button    >
          <ListItemText primary="3Y Correlation Bloomberg Barclays
          Global-Agg. Bond Index"
          primaryTypographyProps={{
            style: 
            { whiteSpace: "normal" , fontWeight:"bold", fontSize:"0.8em" } 
           }}
          />
          <ListItemText  primary="884848"
                  primaryTypographyProps={{
                    style: 
                    { whiteSpace: "normal" , fontWeight:"bold", fontSize:"1.0em", margin:"0% -10%" } 
                   }}
          />
        </ListItem>

      </List>
    </div>
            );
        };


        const data3 = [
            {Manager: "Tokyo West", Strategy: "Quantify", Notional: 200000000, Margin:0.71, Exp_Gross:300236234, Exp_Net: 132156736, Exp_Gross2: 223 ,Exp_Net2:102 },
            {Manager: "Block Heights", Strategy: "Quantify", Notional: 100000000, Margin:0.30, Exp_Gross:140456050, Exp_Net: 120000000, Exp_Gross2: 135 ,Exp_Net2:82 },
            {Manager: "Blue Creek", Strategy: "Zabre", Notional: 1000000, Margin:0.11, Exp_Gross:2000000, Exp_Net: 12000000, Exp_Gross2: 23 ,Exp_Net2:12 },
            {Manager: "Server Side", Strategy: "Zabre", Notional: 7000000, Margin:0.70, Exp_Gross:14000000, Exp_Net: 8000000, Exp_Gross2: 53 ,Exp_Net2:20 },
            {Manager: "Waterfront Capital", Strategy: "Zabre", Notional: 2000000, Margin:0.21, Exp_Gross:3400000, Exp_Net: 1887000, Exp_Gross2: 29 ,Exp_Net2:12 },
            {Manager: "Waterfront Capital", Strategy: "Zabre", Notional: 2000000, Margin:0.21, Exp_Gross:3400000, Exp_Net: 1887000, Exp_Gross2: 29 ,Exp_Net2:12 },
            {Manager: "Server Side", Strategy: "Zabre", Notional: 7000000, Margin:0.70, Exp_Gross:14000000, Exp_Net: 8000000, Exp_Gross2: 53 ,Exp_Net2:20 },
            {Manager: "Waterfront Capital", Strategy: "Zabre", Notional: 2000000, Margin:0.21, Exp_Gross:3400000, Exp_Net: 1887000, Exp_Gross2: 29 ,Exp_Net2:12 },
            {Manager: "Waterfront Capital", Strategy: "Zabre", Notional: 2000000, Margin:0.21, Exp_Gross:3400000, Exp_Net: 1887000, Exp_Gross2: 29 ,Exp_Net2:12 },
        ];
        
        const columns3 = [
            {
                name: "Manager",
                label: "Manager",
                options: {
                 sort: true,
                 sortThirdClickReset: true,
                 setCellProps: v => 
                 {
                     return {style:{fontSize: "0.8em", color: "white" } , id:"ayree"}
                 },
                 
                setCellHeaderProps: v => ({style: {backgroundColor:"#131722", color:"white"}}),
                }
               },
               {
                name: "Strategy",
                label: "Strategy",
                options: {
                 sort: true,
                 sortThirdClickReset: true,
                 setCellProps: v => 
                 {
                     return {style:{fontSize: "0.8em", color: "white" }  }
                 },
        
                setCellHeaderProps: v => ({style: {backgroundColor:"#131722", color:"white"}}),
                }
               },
               {
                name: "Notional",
                label: "Notional ",
                options: {
                 sort: true,
                 sortThirdClickReset: true,
                 setCellProps: v => {

                     if( v[0] == "-" ) return {
                      style:{color: "red", fontSize: "0.8em"  }, 
                  }
                    else return {
                        style:{color: "green", fontSize: "0.8em" }, 
                    }
                },
                 customBodyRender: (value, tableMeta, updateValue) => {
                    const nf = new Intl.NumberFormat()
                    return nf.format(value)
                },
                setCellHeaderProps: v => ({style: {backgroundColor:"#131722", color:"white", whiteSpace:"nowrap"}}),
                }
               },
               {
                name: "Margin",
                label: "Margin % of Notional",
                options: {
                 sort: true,
                 sortThirdClickReset: true,
                 setCellProps: v => {

                     if( v[0] == "-" ) return {
                      style:{color: "red", fontSize: "0.8em", textAlign:"center"  }, 
                  }
                    else return {
                        style:{color: "green", fontSize: "0.8em", textAlign:"center"  }, 
                    }
                },
                customBodyRender: (value, tableMeta, updateValue) => {
                  const nf = value.toFixed(2) + "%"
                  return nf
                },
                 setCellHeaderProps: v => ({style: {backgroundColor:"#131722", color:"white", whiteSpace:"nowrap"}}),
                }
               },
               {
                name: "Exp_Gross",
                label: " Gross Exposure ($) ",
                options: {
                 sort: true,
                 sortThirdClickReset: true,
                 setCellProps: v => {
                    if( v[0] == "-"  ) return {
                        style:{color: "red",fontSize: "0.8em"  }, 
                    }
                    else if( v == "$0.00" ) return {
                       style:{color: "white",fontSize: "0.8em"  }, 
                   }
                    else return {
                        style:{color : "green", fontSize: "0.8em" },
                    }
                },
                customBodyRender: (value, tableMeta, updateValue) => {
                 const nf = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' })
                 return nf.format(value)
             },
                setCellHeaderProps: v => ({style: {backgroundColor:"#131722", color:"white"}}),
                }
               },
               {
                   name: "Exp_Net",
                   label: "Net Exposure ($)",
                   options: {
                    sort: true,
                    sortThirdClickReset: true,
                    setCellProps: v => {
                        if( v[0] == "-"  ) return {
                            style:{color: "red",fontSize: "0.8em"  }, 
                        }
                        else if( v == "$0.00" ) return {
                           style:{color: "black",fontSize: "0.8em"  }, 
                       }
                        else return {
                            style:{color : "green", fontSize: "0.8em" },
                        }
                    },
                    customBodyRender: (value, tableMeta, updateValue) => {
                        const nf = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' })
                        return nf.format(value)
                    },
                    setCellHeaderProps: v => ({style: {backgroundColor:"#131722", color:"white"}}),
                   }
                  },
                  {
                   name: "Exp_Gross2",
                   label: "Gross % of Notional",
                   options: {
                    sort: true,
                    sortThirdClickReset: true,
                    setCellProps: v =>  {
                        if( v[0] == "-" ) return {
                            style:{color: "red", fontSize: ".8em"  }, 
                        }
                        else if( v == "$0.00" ) return {
                            style:{color: "black", fontSize: ".8em"  }, 
                        }
                        else return {
                            style:{color : "green", fontSize: ".8em" }, 
                        }
                    },
                    customBodyRender: (value, tableMeta, updateValue) => {
                        const nf = value.toFixed(2) +"%"
                        return nf
                      },
                    setCellHeaderProps: v => ({style: {backgroundColor:"#131722", color:"white"}}),
                   }
                  },
                  {
                   name: "Exp_Net2",
                   label: "Net % of Notional",
                   options: {
                    sort: true,
                    sortThirdClickReset: true,
                    setCellProps: v =>  {
                        if( v[0] == "-" ) return {
                            style:{color: "red", fontSize: ".8em"  }, 
                        }
                        else if( v == "$0.00" ) return {
                            style:{color: "black", fontSize: ".8em"  }, 
                        }
                        else return {
                            style:{color : "green", fontSize: ".8em" },
                        }
                    },
                    customBodyRender: (value, tableMeta, updateValue) => {
                        const nf = value.toFixed(2) +"%"
                        return nf
                      },
                   setCellHeaderProps: v => ({style: {backgroundColor:"#131722", color:"white"}}),
                   }
                  },
           ];
        
           const getMuiTheme3 = () => createMuiTheme({
            overrides: {
              MUIDataTableHeadCell: {
                sortAction: {
                    '& path': {
                      color: "teal " // or whatever you need
                    }, 
                    }, 
                    sortActive: {
                        color: "white"  // whatever you need
                      }
                  
              },
                  MuiToolbar: {
                    root: {
                      backgroundColor: '#131722',
                      color:"white", 
                    },
                  }, 
                  MuiTableBody: {
                      root: {
                          backgroundColor: '#131722',
                        },
                  },  
                  MuiTable: {
                    root: {
                        backgroundColor: '#131722',
                      },
                  },
                  MUIDataTableToolbar: {
                    icon: {
                       color: "white",
                       '&:hover': {
                            color: "teal"
                        }
                    },
                },
                MuiTableRow: {
                    root: {
                      "&.MuiTableRow-hover": {
                        "&:hover": {
                          backgroundColor:"#454B59",
                       
                        }
                      }
                    }
                  },
                
                  
                  //Control Column Width
              //    MUIDataTableHeadCell: {
             //   root: {
             //       '&:first-child': {
             //           width: '5%',
               //     },
                 //   '&:nth-child(2)': {
                   //     width: '15%',
                    //},
                    //'&:nth-child(3)': {
                    //    width: '70%',
                    //},
                    //'&:last-child': {
                     //   width: '10%',
                    //},
                //},
            //},
                
            }
            });
        
           
            const options3 = {
                search: true,
                print: true,
                pagination: false,
                responsive: 'standard',
                viewColumns: false,
                selectableRowsHeader: false,
                selectableRows: "none",
                download: true,
                filter: false,
                tableBodyMaxHeight: "358px",
               };
        
               const renderTable3 = (
                <MuiThemeProvider theme={getMuiTheme3()}>
                <MUIDataTable
                  title={"Managers Exposures"}
                data={data3}
                  columns={columns3}
                  options={options3}
                  
                />
                </MuiThemeProvider>
                )

const renderPieChartEx = ( 
<Carousel pauseOnHover="hover" style={{marginRight:"-30%"}} controls={false} >

<Carousel.Item >
                         
<Main2/>
                 
</Carousel.Item >

<Carousel.Item >

<Main5/>

</Carousel.Item>
<Carousel.Item >

<PsGraph/>

</Carousel.Item>
</Carousel>

);



  // Create large Navbar
  const renderLargeNavBar = (
      <div className="container cyan brackets" >
    <Navbar >
        <NavLink exact to="/Exposures"> <Navbar.Brand style={{color:"white",  borderRight:"0.1em solid teal", paddingRight:"0.8em" }} > <b>Portfolio Exposures</b> </Navbar.Brand> </NavLink>
        <NavLink exact to="/Exposures/ManagerExposures">   <Navbar.Brand style={{color:"white", fontSize:"1.0em"}} > Manager Exposures </Navbar.Brand> </NavLink>
    </Navbar>
    </div>
);      

   return (

 <div className="EX">

  <div style={{backgroundColor:"#181C28", position:"fixed", top:"0%", left:"-100vw", height:"100%", width:"500vw", zIndex:-3}}>
        </div>


<div className="NavEx" >
{renderLargeNavBar}
</div>


<div className="ManagersExposuresTable"  >
{renderTable3}
    </div>

    <div className="StatsEx" >
         {renderPortfolioStats()}
    </div>
    

    <div id="GraphEx" className="GraphEx">
          <Main62/>
    </div>

<div className="PieEx">
{renderPieChartEx}
</div>

</div>

        )
    }
}

export default EXT; 