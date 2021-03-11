import React, { Component } from "react";
//ReactRouter
import { NavLink } from "react-router-dom";
//BootStrap
import Navbar from 'react-bootstrap/Navbar';
import Carousel from 'react-bootstrap/Carousel';
//  Material UI Mui Data Tables
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import MUIDataTable  from "mui-datatables";
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
//Graphs + Data
import NotionalGraph from "./notionalNavMtdPl";



class Ps extends Component {

render() {

// Create large Navbar
const renderLargeNavBar = (
<div >
            <Navbar >
                <NavLink exact to="/PortfolioSummary"> <Navbar.Brand style={{color:"white",  borderRight:"0.1em solid teal", paddingRight:"0.8em" }}> <b> Portofolio Summary </b> </Navbar.Brand></NavLink>
                    <NavLink exact to="/PortfolioSummary/PerformanceAttribution"> <Navbar.Brand  style={{color:"white", fontSize:"1.0em"}}>Performance Attribution </Navbar.Brand> </NavLink>
                    <NavLink exact to="/PortfolioSummary/RiskAdjustedPerformance" > <Navbar.Brand  style={{color:"white", fontSize:"1.0em"}}>Risk Adjusted Performance </Navbar.Brand></NavLink>
                    <NavLink exact to="/PortfolioSummary/Benchmark"> <Navbar.Brand  style={{color:"white", fontSize:"1.0em"}}>Benchmark </Navbar.Brand> </NavLink>
            </Navbar>
            </div>

);

const renderPortfolioStats = () => { 
return (
 <div style={{height:"450px"}}>
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


     <ListItem button style={{ display:"grid", gridTemplateColumns: "repeat(2, 80%)"}}>
       <ListItemText primary="Annualized Return "
                   primaryTypographyProps={{
                     style: 
                     {whiteSpace:"normal", fontWeight:"bold", fontSize:"0.8em" } 
                    }}
       />
       <ListItemText primary="18%" 
               primaryTypographyProps={{
                 style: 
                 { whiteSpace: "normal" , fontWeight:"bold", fontSize:"1.0em", float:"right", width:"100%" } 
                }}
       />
     </ListItem>
     

     <ListItem button style={{ display:"grid", gridTemplateColumns: "repeat(2, 80%)", }}>
       <ListItemText primary="Annualized Volatility "
               primaryTypographyProps={{
                 style: 
                 { whiteSpace: "normal" , fontWeight:"bold", fontSize:"0.8em" } 
                }}
       />
       <ListItemText primary="4%" 
               primaryTypographyProps={{
                 style: 
                 { whiteSpace: "normal" , fontWeight:"bold", fontSize:"1.0em", float : "right", width:"100%"} 
                }}
       />
     </ListItem>
   

     <ListItem button style={{ display:"grid", gridTemplateColumns: "repeat(2, 80%)"}}>
       <ListItemText primary="3M Return" 
               primaryTypographyProps={{
                 style: 
                 { whiteSpace: "normal" , fontWeight:"bold", fontSize:"0.8em" } 
                }}
       />
       <ListItemText primary="5.5%"
               primaryTypographyProps={{
                 style: 
                 { whiteSpace: "normal" , fontWeight:"bold", fontSize:"1.0em", float : "right", width:"100%" } 
                }}
       />
     </ListItem>
    

     <ListItem button style={{ display:"grid", gridTemplateColumns: "repeat(2, 80%)"}}>
       <ListItemText primary="Sharp Ratio" 
               primaryTypographyProps={{
                 style: 
                 { whiteSpace: "normal" , fontWeight:"bold", fontSize:"0.8em" } 
                }}
       />
       <ListItemText primary="1.25"
               primaryTypographyProps={{
                 style: 
                 { whiteSpace: "normal" , fontWeight:"bold", fontSize:"1.0em", float : "right", width:"100%"   } 
                }}
       />
     </ListItem>
   

     <ListItem button style={{ display:"grid", gridTemplateColumns: "repeat(2, 80%)" }}>
       <ListItemText primary="Sortino Ratio" 
               primaryTypographyProps={{
                 style: 
                 { whiteSpace: "normal" , fontWeight:"bold", fontSize:"0.8em" } 
                }}
       />
       <ListItemText primary="2.21"
               primaryTypographyProps={{
                 style: 
                 { whiteSpace: "normal" , fontWeight:"bold", fontSize:"1.0em", float : "right", width:"100%",  } 
                }}
       />
     </ListItem>

     <ListItem button style={{ display:"grid", gridTemplateColumns: "repeat(2, 80%)"}}>
       <ListItemText primary="Worst Drawdown"
               primaryTypographyProps={{
                 style: 
                 { whiteSpace: "normal" , fontWeight:"bold", fontSize:"0.8em" } 
                }}
       />
       <ListItemText primary="-22%" 
               primaryTypographyProps={{
                 style: 
                 { whiteSpace: "normal" , fontWeight:"bold", fontSize:"1.0em", float : "right", width:"100%" } 
                }}
       />
     </ListItem>
     

     <ListItem button style={{ display:"grid", gridTemplateColumns: "repeat(2, 80%)"}}>
       <ListItemText primary="Current Drawdown"
               primaryTypographyProps={{
                 style: 
                 { whiteSpace: "normal" , fontWeight:"bold", fontSize:"0.8em" } 
                }}
       />
       <ListItemText primary="3%" 
               primaryTypographyProps={{
                 style: 
                 { whiteSpace: "normal" , fontWeight:"bold", fontSize:"1.0em", float : "right", width:"100%" } 
                }}
       />
     </ListItem>

     <ListItem button style={{ display:"grid", gridTemplateColumns: "repeat(2, 80%)"}}>
       <ListItemText primary="Longest Drawdown"
               primaryTypographyProps={{
                 style: 
                 { whiteSpace: "normal" , fontWeight:"bold", fontSize:"0.8em"} 
                }}
       />
       <ListItemText primary="4555"
               primaryTypographyProps={{
                 style: 
                 { whiteSpace: "normal" , fontWeight:"bold", fontSize:"1.0em", float : "right", width:"100%" } 
                }}
       />
     </ListItem>


     <ListItem button style={{ display:"grid", gridTemplateColumns: "repeat(2, 80%)"}}>
       <ListItemText primary="Avg. Time to Recovery"
               primaryTypographyProps={{
                 style: 
                 { whiteSpace: "normal" , fontWeight:"bold", fontSize:"0.8em" } 
                }}
       />
       <ListItemText primary="" 
               primaryTypographyProps={{
                 style: 
                 { whiteSpace: "normal" , fontWeight:"bold", fontSize:"1.0em", float : "right", width:"100%" } 
                }}
       />
     </ListItem>
 


     <ListItem button style={{ display:"grid", gridTemplateColumns: "repeat(2, 80%)"}}>
       <ListItemText primary="Best Month"
               primaryTypographyProps={{
                 style: 
                 { whiteSpace: "normal" , fontWeight:"bold", fontSize:"0.8em" } 
                }}
       />
       <ListItemText primary="" 
               primaryTypographyProps={{
                 style: 
                 { whiteSpace: "normal" , fontWeight:"bold", fontSize:"1.0em", float : "right",width:"100%" } 
                }}
       />
     </ListItem>


     <ListItem button style={{ display:"grid", gridTemplateColumns: "repeat(2, 80%)"}}>
       <ListItemText primary="Worst Month"
               primaryTypographyProps={{
                 style: 
                 { whiteSpace: "normal" , fontWeight:"bold", fontSize:"0.8em"  } 
                }}
       />
       <ListItemText primary=""
               primaryTypographyProps={{
                 style: 
                 { whiteSpace: "normal" , fontWeight:"bold", fontSize:"1.0em", float : "right", width:"100%" } 
                }}
       />
     </ListItem>
 

     <ListItem button style={{ display:"grid", gridTemplateColumns: "repeat(2, 80%)"}}>
       <ListItemText primary="% Postive Months "
               primaryTypographyProps={{
                 style: 
                 { whiteSpace: "normal" , fontWeight:"bold", fontSize:"0.8em" } 
                }}
        />
       <ListItemText primary="" 
               primaryTypographyProps={{
                 style: 
                 { whiteSpace: "normal" , fontWeight:"bold", fontSize:"1.0em", float : "right", width:"100%" } 
                }}
       />
     </ListItem>


     <ListItem button style={{ display:"grid", gridTemplateColumns: "repeat(2, 80%)"}}>
       <ListItemText primary="Avg. Monthly Return"
               primaryTypographyProps={{
                 style: 
                 { whiteSpace: "normal" , fontWeight:"bold", fontSize:"0.8em" } 
                }}
       />
       <ListItemText primary=""
               primaryTypographyProps={{
                 style: 
                 { whiteSpace: "normal" , fontWeight:"bold", fontSize:"1.0em", float : "right", width:"100%" } 
                }}
       />
     </ListItem>


     <ListItem button style={{ display:"grid", gridTemplateColumns: "repeat(2, 80%)"}}>
       <ListItemText primary="Best Day"
               primaryTypographyProps={{
                 style: 
                 { whiteSpace: "normal" , fontWeight:"bold", fontSize:"0.8em"  } 
                }}
       />
       <ListItemText primary="" 
               primaryTypographyProps={{
                 style: 
                 { whiteSpace: "normal" , fontWeight:"bold", fontSize:"1.0em" , float : "right", width:"100%"} 
                }}
       />
     </ListItem>
   

     <ListItem button style={{ display:"grid", gridTemplateColumns: "repeat(2, 80%)"}}>
       <ListItemText primary="Worst Day"
               primaryTypographyProps={{
                 style: 
                 { whiteSpace: "normal" , fontWeight:"bold", fontSize:"0.8em"  } 
                }}
       />
       <ListItemText primary="" 
               primaryTypographyProps={{
                 style: 
                 { whiteSpace: "normal" , fontWeight:"bold", fontSize:"1.0em", float : "right", width:"100%" } 
                }}
       />
     </ListItem>


     <ListItem button style={{ display:"grid", gridTemplateColumns: "repeat(2, 80%)"}}>
       <ListItemText primary="3Y Correlation Newedge CTA "
               primaryTypographyProps={{
                 style: 
                 { whiteSpace: "normal" , fontWeight:"bold", fontSize:"0.8em" } 
                }}
       />
       <ListItemText primary=""
               primaryTypographyProps={{
                 style: 
                 { whiteSpace: "normal" , fontWeight:"bold", fontSize:"1.0em", float : "right", width:"100%"} 
                }}
       />
     </ListItem>


     <ListItem button style={{ display:"grid", gridTemplateColumns: "repeat(2, 80%)"}}>
       <ListItemText primary="3Y Correlation S&P 500"
               primaryTypographyProps={{
                 style: 
                 { whiteSpace: "normal" , fontWeight:"bold", fontSize:"0.8em"  } 
                }}
       />
       <ListItemText primary="" 
               primaryTypographyProps={{
                 style: 
                 { whiteSpace: "normal" , fontWeight:"bold", fontSize:"1.0em", float : "right", width:"100%" } 
                }}
       />
     </ListItem>
  

     <ListItem button style={{ display:"grid", gridTemplateColumns: "repeat(2, 80%)"}}>
       <ListItemText primary="3Y Correlation S&P GSCI"
               primaryTypographyProps={{
                 style: 
                 { whiteSpace: "normal" , fontWeight:"bold", fontSize:"0.8em" } 
                }}
       />
       <ListItemText primary="" 
               primaryTypographyProps={{
                 style: 
                 { whiteSpace: "normal" , fontWeight:"bold", fontSize:"1.0em" , float : "right", width:"100%"} 
                }}
       />
     </ListItem>
 

     <ListItem button style={{ display:"grid", gridTemplateColumns: "repeat(2, 80%)"}} >
       <ListItemText primary="3Y Correlation Bloomberg Barclays
       Global-Agg. Bond Index"
       primaryTypographyProps={{
         style: 
         { wordWrap:"break-word", fontWeight:"bold", fontSize:"0.8em", float : "left", width:"65%" } 
        }}
       />
       <ListItemText  primary="88848"
               primaryTypographyProps={{
                 style: 
                 { whiteSpace: "normal" , fontWeight:"bold", fontSize:"1.0em", width:"100%", float:"right" } 
                }}
       />
     </ListItem>

   </List>
 </div>
         );
};



        const historicdata = [
            {Year:"2014", Jan: 0.32, Feb: 0.21, Mar: -0.71, Apr: -0.34, May: -1.36, Jun: -1.23 ,Jul: 0.32, Aug: 2.83, Sep: 3.94, Oct:1.23, Nov:5.01, Dec:1.23, Yearly:13.45},
            {Year:"2015", Jan: 0.22, Feb: 0.51, Mar: 0.11, Apr: -2.34, May: 1.94, Jun: -3.23 ,Jul: 0.52, Aug: -0.83, Sep: 1.94, Oct:1.23, Nov:3.21, Dec:1.23, Yearly:16.29},
            {Year:"2016", Jan: 0.12, Feb: 1.11, Mar: 0.41, Apr: 1.34, May: 2.26, Jun: -2.93 ,Jul: 0.30, Aug: 3.83, Sep: 2.94, Oct:1.23, Nov:1.91, Dec:1.23, Yearly:13.05},
            {Year:"2017", Jan: 0.52, Feb: -0.31, Mar: 0.54, Apr: -1.94, May: 3.16, Jun: -2.24 ,Jul: 0.62, Aug: -1.83, Sep: -1.24, Oct:1.23, Nov:3.21, Dec:1.23, Yearly:5.49},
            {Year:"2018", Jan: -0.12, Feb: 0.91, Mar: 1.11, Apr: 2.34, May: -1.16, Jun: -0.26 ,Jul: 0.98, Aug: -0.83, Sep: 2.74, Oct:1.23, Nov:1.91, Dec:1.23, Yearly:23.45},
            {Year:"2019", Jan: -0.12, Feb: 0.91, Mar: 1.11, Apr: 2.34, May: -1.16, Jun: -0.26 ,Jul: 0.98, Aug: -0.83, Sep: 2.74, Oct:1.23, Nov:1.91, Dec:1.23, Yearly:23.45},
            {Year:"2019", Jan: -0.12, Feb: 0.91, Mar: 1.11, Apr: 2.34, May: -1.16, Jun: -0.26 ,Jul: 0.98, Aug: -0.83, Sep: 2.74, Oct:1.23, Nov:1.91, Dec:1.23, Yearly:23.45},
          ];
        
        
           const historiccolumns = [
            {
                name: "Year",
                label: "Year",
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
                name: "Jan",
                label: "Jan ",
                options: {
                 sort: true,
                 sortThirdClickReset: true,
                 setCellProps: v => {
                    if( v == 0.00 ) return {
                        style:{color: "white", fontSize: "0.8em"  }, id:"ayree"
                    }
                    else if( v[0] == "-" ) return {
                      style:{color: "red", fontSize: "0.8em"  }, id:"ayree"
                  }
                    else return {
                        style:{color: "green", fontSize: "0.8em" }, id:"ayree"
                    }
                },
                customBodyRender: (value, tableMeta, updateValue) => {
                    const nf = value.toFixed(2) 
                    return nf
                  },
                setCellHeaderProps: v => ({style: {backgroundColor:"#131722", color:"white", whiteSpace:"nowrap"}}),
                }
               },
               {
                name: "Feb",
                label: "Feb ",
                options: {
                 sort: true,
                 sortThirdClickReset: true,
                 setCellProps: v => {
                    if( v == 0.00 ) return {
                        style:{color: "white", fontSize: "0.8em"  }, id:"ayree"
                    }
                    else if( v[0] == "-" ) return {
                      style:{color: "red", fontSize: "0.8em"  }, id:"ayree"
                  }
                    else return {
                        style:{color: "green", fontSize: "0.8em" }, id:"ayree"
                    }
                },
                customBodyRender: (value, tableMeta, updateValue) => {
                    const nf = value.toFixed(2) 
                    return nf
                  },
                setCellHeaderProps: v => ({style: {backgroundColor:"#131722", color:"white", whiteSpace:"nowrap"}}),
                }
               },
               {
                name: "Mar",
                label: "Mar ",
                options: {
                 sort: true,
                 sortThirdClickReset: true,
                 setCellProps: v => {
                    if( v == 0.00 ) return {
                        style:{color: "white", fontSize: "0.8em"  }, id:"ayree"
                    }
                    else if( v[0] == "-" ) return {
                      style:{color: "red", fontSize: "0.8em"  }, id:"ayree"
                  }
                    else return {
                        style:{color: "green", fontSize: "0.8em" }, id:"ayree"
                    }
                },
                customBodyRender: (value, tableMeta, updateValue) => {
                    const nf = value.toFixed(2) 
                    return nf
                  },
                setCellHeaderProps: v => ({style: {backgroundColor:"#131722", color:"white", whiteSpace:"nowrap"}}),
                }
               },
               {
                name: "Apr",
                label: "Apr ",
                options: {
                 sort: true,
                 sortThirdClickReset: true,
                 setCellProps: v => {
                    if( v == 0.00 ) return {
                        style:{color: "white", fontSize: "0.8em"  }, id:"ayree"
                    }
                    else if( v[0] == "-" ) return {
                      style:{color: "red", fontSize: "0.8em"  }, id:"ayree"
                  }
                    else return {
                        style:{color: "green", fontSize: "0.8em" }, id:"ayree"
                    }
                },
                customBodyRender: (value, tableMeta, updateValue) => {
                    const nf = value.toFixed(2) 
                    return nf
                  },
                setCellHeaderProps: v => ({style: {backgroundColor:"#131722", color:"white", whiteSpace:"nowrap"}}),
                }
               },
               {
                name: "May",
                label: "May ",
                options: {
                 sort: true,
                 sortThirdClickReset: true,
                 setCellProps: v => {
                    if( v == 0.00 ) return {
                        style:{color: "white", fontSize: "0.8em"  }, id:"ayree"
                    }
                    else if( v[0] == "-" ) return {
                      style:{color: "red", fontSize: "0.8em"  }, id:"ayree"
                  }
                    else return {
                        style:{color: "green", fontSize: "0.8em" }, id:"ayree"
                    }
                },
                customBodyRender: (value, tableMeta, updateValue) => {
                    const nf = value.toFixed(2) 
                    return nf
                  },
                setCellHeaderProps: v => ({style: {backgroundColor:"#131722", color:"white", whiteSpace:"nowrap"}}),
                }
               },
               {
                name: "Jun",
                label: "Jun ",
                options: {
                 sort: true,
                 sortThirdClickReset: true,
                 setCellProps: v => {
                    if( v == 0.00 ) return {
                        style:{color: "white", fontSize: "0.8em"  }, id:"ayree"
                    }
                    else if( v[0] == "-" ) return {
                      style:{color: "red", fontSize: "0.8em"  }, id:"ayree"
                  }
                    else return {
                        style:{color: "green", fontSize: "0.8em" }, id:"ayree"
                    }
                },
                customBodyRender: (value, tableMeta, updateValue) => {
                    const nf = value.toFixed(2) 
                    return nf
                  },
                setCellHeaderProps: v => ({style: {backgroundColor:"#131722", color:"white", whiteSpace:"nowrap"}}),
                }
               },
               {
                name: "Jul",
                label: "Jul ",
                options: {
                 sort: true,
                 sortThirdClickReset: true,
                 setCellProps: v => {
                    if( v == 0.00 ) return {
                        style:{color: "white", fontSize: "0.8em"  }, id:"ayree"
                    }
                    else if( v[0] == "-" ) return {
                      style:{color: "red", fontSize: "0.8em"  }, id:"ayree"
                  }
                    else return {
                        style:{color: "green", fontSize: "0.8em" }, id:"ayree"
                    }
                },
                customBodyRender: (value, tableMeta, updateValue) => {
                    const nf = value.toFixed(2) 
                    return nf
                  },
                setCellHeaderProps: v => ({style: {backgroundColor:"#131722", color:"white", whiteSpace:"nowrap"}}),
                }
               },
               {
                name: "Aug",
                label: "Aug ",
                options: {
                 sort: true,
                 sortThirdClickReset: true,
                 setCellProps: v => {
                    if( v == 0.00 ) return {
                        style:{color: "white", fontSize: "0.8em"  }, id:"ayree"
                    }
                    else if( v[0] == "-" ) return {
                      style:{color: "red", fontSize: "0.8em"  }, id:"ayree"
                  }
                    else return {
                        style:{color: "green", fontSize: "0.8em" }, id:"ayree"
                    }
                },
                customBodyRender: (value, tableMeta, updateValue) => {
                    const nf = value.toFixed(2) 
                    return nf
                  },
                setCellHeaderProps: v => ({style: {backgroundColor:"#131722", color:"white", whiteSpace:"nowrap"}}),
                }
               },
               {
                name: "Sep",
                label: "Sep ",
                options: {
                 sort: true,
                 sortThirdClickReset: true,
                 setCellProps: v => {
                    if( v == 0.00 ) return {
                        style:{color: "white", fontSize: "0.8em"  }, id:"ayree"
                    }
                    else if( v[0] == "-" ) return {
                      style:{color: "red", fontSize: "0.8em"  }, id:"ayree"
                  }
                    else return {
                        style:{color: "green", fontSize: "0.8em" }, id:"ayree"
                    }
                },
                customBodyRender: (value, tableMeta, updateValue) => {
                    const nf = value.toFixed(2) 
                    return nf
                  },
                setCellHeaderProps: v => ({style: {backgroundColor:"#131722", color:"white", whiteSpace:"nowrap"}}),
                }
               },
               {
                name: "Oct",
                label: "Oct ",
                options: {
                 sort: true,
                 sortThirdClickReset: true,
                 setCellProps: v => {
                    if( v == 0.00 ) return {
                        style:{color: "white", fontSize: "0.8em"  }, id:"ayree"
                    }
                    else if( v[0] == "-" ) return {
                      style:{color: "red", fontSize: "0.8em"  }, id:"ayree"
                  }
                    else return {
                        style:{color: "green", fontSize: "0.8em" }, id:"ayree"
                    }
                },
                customBodyRender: (value, tableMeta, updateValue) => {
                    const nf = value.toFixed(2) 
                    return nf
                  },
                setCellHeaderProps: v => ({style: {backgroundColor:"#131722", color:"white", whiteSpace:"nowrap"}}),
                }
               },
               {
                name: "Nov",
                label: "Nov ",
                options: {
                 sort: true,
                 sortThirdClickReset: true,
                 setCellProps: v => {
                    if( v == 0.00 ) return {
                        style:{color: "white", fontSize: "0.8em"  }, id:"ayree"
                    }
                    else if( v[0] == "-" ) return {
                      style:{color: "red", fontSize: "0.8em"  }, id:"ayree"
                  }
                    else return {
                        style:{color: "green", fontSize: "0.8em" }, id:"ayree"
                    }
                },
                customBodyRender: (value, tableMeta, updateValue) => {
                    const nf = value.toFixed(2) 
                    return nf
                  },
                setCellHeaderProps: v => ({style: {backgroundColor:"#131722", color:"white", whiteSpace:"nowrap"}}),
                }
               },
               {
                name: "Dec",
                label: "Dec ",
                options: {
                 sort: true,
                 sortThirdClickReset: true,
                 setCellProps: v => {
                    if( v == 0.00 ) return {
                        style:{color: "white", fontSize: "0.8em"  }, id:"ayree"
                    }
                    else if( v[0] == "-" ) return {
                      style:{color: "red", fontSize: "0.8em"  }, id:"ayree"
                  }
                    else return {
                        style:{color: "green", fontSize: "0.8em" }, id:"ayree"
                    }
                },
                customBodyRender: (value, tableMeta, updateValue) => {
                    const nf = value.toFixed(2) 
                    return nf
                  },
                setCellHeaderProps: v => ({style: {backgroundColor:"#131722", color:"white", whiteSpace:"nowrap"}}),
                }
               },
               {
                name: "Yearly",
                label: "Yearly ",
                options: {
                 sort: true,
                 sortThirdClickReset: true,
                 setCellProps: v => {
                    if( v == 0.00 ) return {
                        style:{color: "white", fontSize: "0.8em"  }, id:"ayree"
                    }
                    else if( v[0] == "-" ) return {
                      style:{color: "red", fontSize: "0.8em"  }, id:"ayree"
                  }
                    else return {
                        style:{color: "green", fontSize: "0.8em" }, id:"ayree"
                    }
                },
                customBodyRender: (value, tableMeta, updateValue) => {
                    const nf = value.toFixed(2) 
                    return nf
                  },
                setCellHeaderProps: v => ({style: {backgroundColor:"#131722", color:"white", whiteSpace:"nowrap"}}),
                }
               },
           ];
           
        
           const getMuiTheme2 = () => createMuiTheme({
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
                      backgroundColor: "#131722",
                      color:"white", 
                    },
                  }, 
                  MuiTableBody: {
                      root: {
                          backgroundColor: "#131722",
                        },
                  },  
                  MuiTable: {
                    root: {
                        backgroundColor: "#131722",
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
                  MUIDataTableToolbar: {
                    icon: {
                       color: "white",
                       '&:hover': {
                            color: "teal"
                        }
                    },
                },
              }
            });
        
        //Options onCellClick Function
        //onCellClick: (cellIndex, rowIndex,  ) => {
        //console.log(cellIndex, rowIndex)
        //  if(rowIndex["colIndex"] == 0 )  {
        //this.setState({show:true})
        //}
        // }
        
            const historicOptions = {
                search: true,
                print: true,
                pagination: false,
                responsive: 'standard',
                viewColumns: false,
                selectableRowsHeader: false,
                selectableRows: "none",
                download: true,
                filter: false,
                tableBodyMaxHeight: "390px",
              
                };
           
        
        const historicalPerformanceTable = (
            <MuiThemeProvider theme={getMuiTheme2()}>
        <MUIDataTable
          title={"Monthly Returns (%) - Actual"}
        data={historicdata}
          columns={historiccolumns}
          options={historicOptions}
          
        />
        </MuiThemeProvider>
        );
         

        const getMuiTheme = () => createMuiTheme({
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
                MuiTableRow: {
                    root: {
                      "&.MuiTableRow-hover": {
                        "&:hover": {
                          backgroundColor:"#454B59",
                       
                        }
                      }
                    }
                  },
                MuiTableBody: {
                    root: {
                        backgroundColor: '#131722',
                      },
                },  
            }
          });

          const columns = [
            {
                name: "ticker",
                label: "Ticker",
                options: {
                 sort: true,
                 sortThirdClickReset: true,
                 setCellProps: v => 
                 {
                    if( typeof v === "string" ) return {
                        style: {color: "white",fontSize: "0.7em"  }, id:"ayree"
                    }   
                    else return {
                        style:{color : "white",fontSize: "0.7em" }
                    }
                },
                setCellHeaderProps: v => ({style: {backgroundColor:"#131722", color:"white"}}),
              }
              },
               {
                name: "security",
                label: "Security",
                options: {
                 sort: true,
                 sortThirdClickReset: true,
                 setCellProps: v => 
                 {
                    if( typeof v === "string" ) return {
                        style: {color: "white",fontSize: "0.7em"  }, id:"ayree"
                    }   
                    else return {
                        style:{color : "white",fontSize: "0.7em" }, id:"ayree"
                    }
                },
                setCellHeaderProps: v => ({style: {backgroundColor:"#131722", color:"white"}}),
               },
              },
               {
                name: "exposure",
                label: "Exposure",
                options: {
                 sort: true,
                 sortThirdClickReset: true,
                 setCellProps: v => {
                     if( v[0] == "-"  ) return {
                         style:{color: "red",fontSize: "0.7em"  }, id:"ayree"
                     }
                     else if( v == "$0.00" ) return {
                        style:{color: "white",fontSize: "0.7em"  }, id:"ayree"
                    }
                     else return {
                         style:{color : "green", fontSize: "0.8em" }, id:"ayree"
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
                name: "long",
                label: "Long (%)",
                options: {
                 sort: true,
                 sortThirdClickReset: true,
                 setCellProps: v => {
                     if( v[0] == "-" ) return {
                         style:{color: "red", fontSize: "1em"  }, id:"ayree"
                     }
                     else return {
                         style:{color : "green", fontSize: "0.8em" }, id:"ayree"
                     }
                 },
                 customBodyRender: (value, tableMeta, updateValue) => {
                  const nf = Math.round(value) +"%"
                  return nf
                },
                setCellHeaderProps: v => ({style: {backgroundColor:"#131722", color:"white"}}),
                }
               },
               {
                   name: "total",
                   label: "Total (%)",
                   options: {
                    sort: true,
                    sortThirdClickReset: true,
                    setCellProps: v => {
                        if( v == 0.00 ) return {
                            style:{color: "black", fontSize: "1em"  }, id:"ayree"
                        }
                        else if( v[0] == "-" ) return {
                          style:{color: "red", fontSize: "1em"  }, id:"ayree"
                      }
                        else return {
                            style:{color: "green", fontSize: "0.8em" }, id:"ayree"
                        }
                    },
                    customBodyRender: (value, tableMeta, updateValue) => {
                      const nf = Math.round(value) +"%"
                      return nf
                    },
                    setCellHeaderProps: v => ({style: {backgroundColor:"#131722", color:"white"}}),
                   }
                  },
           
           ];

           const columns2 = [
            {
                name: "ticker",
                label: "Ticker",
                options: {
                 sort: true,
                 sortThirdClickReset: true,
                 setCellProps: v => 
                 {
                    if( typeof v === "string" ) return {
                        style: {color: "white",fontSize: "0.7em"  }, id:"ayree"
                    }   
                    else return {
                        style:{color : "white",fontSize: "0.7em" }
                    }
                },
                setCellHeaderProps: v => ({style: {backgroundColor:"#131722", color:"white"}}),
              }
              },
               {
                name: "security",
                label: "Security",
                options: {
                 sort: true,
                 sortThirdClickReset: true,
                 setCellProps: v => 
                 {
                    if( typeof v === "string" ) return {
                        style: {color: "white",fontSize: "0.7em"  }, id:"ayree"
                    }   
                    else return {
                        style:{color : "white",fontSize: "0.7em" }, id:"ayree"
                    }
                },
                setCellHeaderProps: v => ({style: {backgroundColor:"#131722", color:"white"}}),
               },
              },
               {
                name: "exposure",
                label: "Exposure",
                options: {
                 sort: true,
                 sortThirdClickReset: true,
                 setCellProps: v => {
                     if( v[0] == "-"  ) return {
                         style:{color: "red",fontSize: "0.7em"  }, id:"ayree"
                     }
                     else if( v == "$0.00" ) return {
                        style:{color: "black",fontSize: "0.7em"  }, id:"ayree"
                    }
                     else return {
                         style:{color : "green",fontSize: "0.8em" }, id:"ayree"
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
                name: "short",
                label: "Short (%)",
                options: {
                 sort: true,
                 sortThirdClickReset: true,
                 setCellProps: v => {
                     if( v[0] == "-" ) return {
                         style:{color: "red", fontSize: "0.8em"  }, id:"ayree"
                     }
                     else return {
                         style:{color : "green", fontSize: "0.8em" }, id:"ayree"
                     }
                 },
                 customBodyRender: (value, tableMeta, updateValue) => {
                  const nf = Math.round(value) +"%"
                  return nf
                },
                setCellHeaderProps: v => ({style: {backgroundColor:"#131722", color:"white"}}),
                }
               },
               {
                   name: "total",
                   label: "Total (%)",
                   options: {
                    sort: true,
                    sortThirdClickReset: true,
                    setCellProps: v => {
                        if( v == 0.00 ) return {
                            style:{color: "black", fontSize: "0.7em"  }, id:"ayree"
                        }
                        else if( v[0] == "-" ) return {
                          style:{color: "red", fontSize: "0.8em"  }, id:"ayree"
                      }
                        else return {
                            style:{color: "green", fontSize: "0.8em" }, id:"ayree"
                        }
                    },
                    customBodyRender: (value, tableMeta, updateValue) => {
                      const nf = Math.round(value) +"%"
                      return nf
                    },
                    setCellHeaderProps: v => ({style: {backgroundColor:"#131722", color:"white"}}),
                   }
                  },
           
           ];

        const gl = [{ticker:"TSLA", security:"Equity", exposure:50000000, long:5.5, total:12.00 },
        {ticker:"MSCA", security:"Microsoft", exposure: 100000000, long:12.5, total:19.00 },
        {ticker:"GOOG", security:"Google", exposure:40000000 ,long:1.5, total:12.00 },
        {ticker:"APPL", security:"Apple", exposure:9000000, long:2.5, total:12.00 },
        {ticker:"EXON", security:"Exon Inc.", exposure:70000000, long:15.5, total:12.00 },
     
        ]
        const gl2 = [{ticker:"TSLA", security:"Equity", exposure: -50000000, short: -5.5, total: -12.00 },
        {ticker:"MSCA", security:"Microsoft", exposure: -100000000, short: -12.5, total: -19.00 },
        {ticker:"GOOG", security:"Google", exposure: -40000000 ,short: -1.5, total: -12.00 },
        {ticker:"APPL", security:"Apple", exposure: -9000000, short: -2.5, total: -12.00 },
        {ticker:"EXON", security:"Exon Inc.", exposure: -70000000, short: -15.5, total: -12.00 },
        ]

        const options = {
            search: false,
            print: false,
            pagination: false,
            responsive: 'standard',
            viewColumns: false,
            selectableRowsHeader: false,
            selectableRows: "none",
            download: false,
            filter: false,
            tableBodyMaxHeight: "380px"
             };

    //Render Top Long Positions Table
        const renderLongPositionTable = (
            <MuiThemeProvider theme={getMuiTheme()}>    
        <MUIDataTable
          title={"Top Long Positions"}
          data={gl}
          columns={columns}
          options={options}
          
        />
        </MuiThemeProvider>
        );

          //Render Top Short Positions Table
          const renderShortPositionTable = (
            <MuiThemeProvider theme={getMuiTheme()}>    
           <MUIDataTable
             title={"Top Short Positions"}
             data={gl2}
             columns={columns2}
             options={options}
             
           />
           </MuiThemeProvider>
);

const shortLongPositions = () => (
  
<Carousel pauseOnHover="hover" controls={false} >
<Carousel.Item style={{border:"1px solid teal"}}>

{renderLongPositionTable}

</Carousel.Item>

<Carousel.Item style={{border:"1px solid teal"}}>
{renderShortPositionTable}


</Carousel.Item>
</Carousel>

);


        return (

<div className="PS">

<div style={{backgroundColor:"#181C28", position:"fixed", top:"0%", left:"-100vw", height:"100%", width:"500vw", zIndex:-3}}>


</div>

<div className="PsNav">
{renderLargeNavBar}
</div>


<div id="PsNotionalGraph" className="PsNotional">
<NotionalGraph/>
</div>

<div className="PsPositions">
{shortLongPositions()}
</div>

<div className="PsStats">
{renderPortfolioStats()}
</div>

<div className="PsPerformance">
{historicalPerformanceTable}
</div>


</div>
)
}
}

export default Ps;