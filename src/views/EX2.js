import React, { Component } from "react";

//BootStrap
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form'
import ListGroup from 'react-bootstrap/ListGroup'
import Particles from 'react-particles-js';
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
//Data

//MUITable 
import MUIDataTable from "mui-datatables";
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';

//Router
import { NavLink } from "react-router-dom";
import Main63 from "./ManagerTest3";


class EX2 extends Component {
    constructor(props) {
        super(props)
        this.state= { 
        show: false,
        value: "Blue Creek",
        }

        this.handleChange= this.handleChange.bind(this);

        
    }
        handleChange(e) {
         console.log(e.target.value)
        this.setState({value: e.target.value})
        }


    render() {

   // Create large Navbar
   const renderLargeNavBar = (
    <div className="container cyan brackets" >
  <Navbar >
      <NavLink exact to="/Exposures"> <Navbar.Brand style={{color:"white",  borderRight:"0.1em solid teal", paddingRight:"0.8em" }} > <b>Portfolio Exposures</b> </Navbar.Brand> </NavLink>
      <NavLink exact to="/Exposures/ManagerExposures">   <Navbar.Brand style={{color:"white", fontSize:"1.0em" , borderBottom:"0.1em solid white"}} > Manager Exposures </Navbar.Brand> </NavLink>
  </Navbar>
  </div>
);      



const historicdata = [
    {Year:"2014", Jan: 0.32, Feb: 0.21, Mar: -0.71, Apr: -0.34, May: -1.36, Jun: -1.23 ,Jul: 0.32, Aug: 2.83, Sep: 3.94, Oct:1.23, Nov:5.01, Dec:1.23, Yearly:13.45},
    {Year:"2015", Jan: 0.22, Feb: 0.51, Mar: 0.11, Apr: -2.34, May: 1.94, Jun: -3.23 ,Jul: 0.52, Aug: -0.83, Sep: 1.94, Oct:1.23, Nov:3.21, Dec:1.23, Yearly:16.29},
    {Year:"2016", Jan: 0.12, Feb: 1.11, Mar: 0.41, Apr: 1.34, May: 2.26, Jun: -2.93 ,Jul: 0.30, Aug: 3.83, Sep: 2.94, Oct:1.23, Nov:1.91, Dec:1.23, Yearly:13.05},
    {Year:"2017", Jan: 0.52, Feb: -0.31, Mar: 0.54, Apr: -1.94, May: 3.16, Jun: -2.24 ,Jul: 0.62, Aug: -1.83, Sep: -1.24, Oct:1.23, Nov:3.21, Dec:1.23, Yearly:5.49},
    {Year:"2018", Jan: -0.12, Feb: 0.91, Mar: 1.11, Apr: 2.34, May: -1.16, Jun: -0.26 ,Jul: 0.98, Aug: -0.83, Sep: 2.74, Oct:1.23, Nov:1.91, Dec:1.23, Yearly:23.45},
    {Year:"2019", Jan: -0.12, Feb: 0.91, Mar: 1.11, Apr: 2.34, May: -1.16, Jun: -0.26 ,Jul: 0.98, Aug: -0.83, Sep: 2.74, Oct:1.23, Nov:1.91, Dec:1.23, Yearly:23.45},
    {Year:"2020", Jan: 0.52, Feb: -0.31, Mar: 0.54, Apr: -1.94, May: 3.16, Jun: -2.24 ,Jul: 0.62, Aug: -1.83, Sep: -1.24, Oct:1.23, Nov:3.21, Dec:1.23, Yearly:5.49},
    {Year:"2021", Jan: -0.12, Feb: 0.91, Mar: 1.11, Apr: 2.34, May: -1.16, Jun: -0.26 ,Jul: 0.98, Aug: -0.83, Sep: 2.74, Oct:1.23, Nov:1.91, Dec:1.23, Yearly:23.45},
    
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
        tableBodyMaxHeight: "358px"
        };
   

const historicalPerformanceTable = (
    <MuiThemeProvider theme={getMuiTheme()}>
<MUIDataTable
  title={"Monthly Returns (%) - Actual"}
data={historicdata}
  columns={historiccolumns}
  options={historicOptions}
  
/>
</MuiThemeProvider>
);
 


// Date Picker 
const renderManagers = ( 
    
    <Form inline>
    <Form.Label  style={{color:"white", position:"absolute", left:"-130px", top:"5px", fontSize:"1rem",}}>
     Select Manager  
    </Form.Label>
    <Form.Control 
      as="select"
      custom
      onChange= {this.handleChange}
      value={this.state.value}
    >
    
   <option value="Blue Creek"> Blue Creek</option> 
   <option value="Waterfront Capital" > Waterfront Capital</option> 
   <option value="Tokyo West" > Tokyo West</option> 
   <option value="Block Heights" > Block Heights</option> 
   <option value="Server Side" > Server Side</option> 
   
    </Form.Control>
  
  </Form>
 );

const ManagerData = [ 
    {
    Manager:"Blue Creek", AnnualizedReturn: "16.38%", AnnualizedVolatility: "10.80%", MReturn: "3.70%",SharpRatio:"2.67", SortinoRatio:"7.67",WorstDrawdown:"-32.88", CurrentDrawdown:"-7.49",LongestDrawdown:"23",AvgTimetoRecovery:"2",BestMonth:"64.24", WorstMonth:"-10.8", PostiveMonths:"62.4", AvgMonthlyReturn:"1.41", BestDay:"8.63", WorstDay:"-65.45", YCorrelationNewedgeCTA:"0.4", YCorrelationSP:"0.16", YCorrelationSPGSCI:"-0.3",
    YCorrelationBloombergBarclaysGlobalAggBondIndex:"0.05" 
    },

    {
        Manager:"Tokyo West", AnnualizedReturn: "11.38%", AnnualizedVolatility: "14.80%", MReturn: "1.70%",SharpRatio:"5.67", SortinoRatio:"3.67",WorstDrawdown:"-2.88", CurrentDrawdown:"-13.49",LongestDrawdown:"45",AvgTimetoRecovery:"4",BestMonth:"45.24", WorstMonth:"-20.8", PostiveMonths:"62.4", AvgMonthlyReturn:"5.01", BestDay:"28.63", WorstDay:"-36.45", YCorrelationNewedgeCTA:"0.03", YCorrelationSP:"0.16", YCorrelationSPGSCI:"-0.5",
        YCorrelationBloombergBarclaysGlobalAggBondIndex:"0.05" 
        },
        {
            Manager:"Waterfront Capital", AnnualizedReturn: "14.38%", AnnualizedVolatility: "9.80%", MReturn: "3.24%",SharpRatio:"2.67", SortinoRatio:"2.67",WorstDrawdown:"-22.88", CurrentDrawdown:"-13.49",LongestDrawdown:"333",AvgTimetoRecovery:"21",BestMonth:"12.24", WorstMonth:"-12.8", PostiveMonths:"4.4", AvgMonthlyReturn:"53.41", BestDay:"8.63", WorstDay:"-36.45", YCorrelationNewedgeCTA:"0.04", YCorrelationSP:"0.36", YCorrelationSPGSCI:"-0.004",
            YCorrelationBloombergBarclaysGlobalAggBondIndex:"0.05" 
            },
            {
                Manager:"Server Side", AnnualizedReturn: "12.38%", AnnualizedVolatility: "12.80%", MReturn: "4.70%",SharpRatio:"3.67", SortinoRatio:"1.67",WorstDrawdown:"-1.88", CurrentDrawdown:"-2.49",LongestDrawdown:"53",AvgTimetoRecovery:"12",BestMonth:"231.24", WorstMonth:"-13.8", PostiveMonths:"3.4", AvgMonthlyReturn:"3.41", BestDay:"48.63", WorstDay:"-66.45", YCorrelationNewedgeCTA:"0.66", YCorrelationSP:"0.16", YCorrelationSPGSCI:"-0.004",
                YCorrelationBloombergBarclaysGlobalAggBondIndex:"0.05" 
                },
                {
                    Manager:"Block Heights", AnnualizedReturn: "22.38%", AnnualizedVolatility: "5.80%", MReturn: "33.70%",SharpRatio:"5.67", SortinoRatio:"3.67",WorstDrawdown:"-18.88", CurrentDrawdown:"-2.49",LongestDrawdown:"4",AvgTimetoRecovery:"15",BestMonth:"53.24", WorstMonth:"-102.8", PostiveMonths:"5.4", AvgMonthlyReturn:"4.41", BestDay:"86.63", WorstDay:"-64.45", YCorrelationNewedgeCTA:"0.4", YCorrelationSP:"0.5", YCorrelationSPGSCI:"-0.004",
                    YCorrelationBloombergBarclaysGlobalAggBondIndex:"0.05" 
                    },
                    
]


const renderPortfolioStats = () => { 

    for(var i = 0; i < ManagerData.length; i++  ) {

        if(this.state.value == ManagerData[i].Manager) { 


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
   primary={this.state.value}
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
               { whiteSpace: "normal" , fontWeight:"bold", fontSize:"0.8em"  } 
              }}
 />
 <ListItemText primary={ManagerData[i].AnnualizedReturn} 
         primaryTypographyProps={{
           style: 
           { whiteSpace: "normal" , fontWeight:"bold", fontSize:"1.0em" , float:"right"  ,  } 
          }}
 />
</ListItem>


<ListItem button>
 <ListItemText primary="Annualized Volatility"
         primaryTypographyProps={{
           style: 
           { whiteSpace: "normal" , fontWeight:"bold", fontSize:"0.8em",   } 
          }}
 />
 <ListItemText primary={ManagerData[i].AnnualizedVolatility} 
         primaryTypographyProps={{
           style: 
           { whiteSpace: "normal" , fontWeight:"bold", fontSize:"1.0em", float:"right"  ,   } 
          }}
 />
</ListItem>


<ListItem button>
 <ListItemText primary="3M Return" 
         primaryTypographyProps={{
           style: 
           { whiteSpace: "normal" , fontWeight:"bold", fontSize:"0.8em",  } 
          }}
 />
 <ListItemText primary={ManagerData[i].MReturn}
         primaryTypographyProps={{
           style: 
           { whiteSpace: "normal" , fontWeight:"bold", fontSize:"1.0em" , float:"right" ,  } 
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
 <ListItemText primary={ManagerData[i].SharpRatio}
         primaryTypographyProps={{
           style: 
           { whiteSpace: "normal" , fontWeight:"bold", fontSize:"1.0em" , float:"right" ,  } 
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
 <ListItemText primary={ManagerData[i].SortinoRatio}
         primaryTypographyProps={{
           style: 
           { whiteSpace: "normal" , fontWeight:"bold", fontSize:"1.0em" , float:"right",  } 
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
 <ListItemText primary={ManagerData[i].WorstDrawdown}
         primaryTypographyProps={{
           style: 
           { whiteSpace: "normal" , fontWeight:"bold", fontSize:"1.0em" , float:"right"} 
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
 <ListItemText primary={ManagerData[i].CurrentDrawdown}
         primaryTypographyProps={{
           style: 
           { whiteSpace: "normal" , fontWeight:"bold", fontSize:"1.0em",  float:"right" } 
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
 <ListItemText primary={ManagerData[i].LongestDrawdown}
         primaryTypographyProps={{
           style: 
           { whiteSpace: "normal" , fontWeight:"bold", fontSize:"1.0em"  , float:"right"} 
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
 <ListItemText primary={ManagerData[i].AvgTimetoRecovery}
         primaryTypographyProps={{
           style: 
           { whiteSpace: "normal" , fontWeight:"bold", fontSize:"1.0em" , float:"right" } 
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
 <ListItemText primary={ManagerData[i].BestMonth}
         primaryTypographyProps={{
           style: 
           { whiteSpace: "normal" , fontWeight:"bold", fontSize:"1.0em"  , float:"right"} 
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
 <ListItemText primary={ManagerData[i].WorstMonth}
         primaryTypographyProps={{
           style: 
           { whiteSpace: "normal" , fontWeight:"bold", fontSize:"1.0em"  , float:"right"} 
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
 <ListItemText primary={ManagerData[i].PostiveMonths}
         primaryTypographyProps={{
           style: 
           { whiteSpace: "normal" , fontWeight:"bold", fontSize:"1.0em"  , float:"right" } 
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
 <ListItemText primary={ManagerData[i].AvgMonthlyReturn}
         primaryTypographyProps={{
           style: 
           { whiteSpace: "normal" , fontWeight:"bold", fontSize:"1.0em"  , float:"right"} 
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
 <ListItemText primary={ManagerData[i].BestDay}
         primaryTypographyProps={{
           style: 
           { whiteSpace: "normal" , fontWeight:"bold", fontSize:"1.0em" , float:"right"} 
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
 <ListItemText primary={ManagerData[i].WorstDay}
         primaryTypographyProps={{
           style: 
           { whiteSpace: "normal" , fontWeight:"bold", fontSize:"1.0em" , float:"right" } 
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
 <ListItemText primary={ManagerData[i].YCorrelationNewedgeCTA}
         primaryTypographyProps={{
           style: 
           { whiteSpace: "normal" , fontWeight:"bold", fontSize:"1.0em" , float:"right" } 
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
 <ListItemText primary={ManagerData[i].YCorrelationSP}
         primaryTypographyProps={{
           style: 
           { whiteSpace: "normal" , fontWeight:"bold", fontSize:"1.0em"  , float:"right" } 
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
 <ListItemText primary={ManagerData[i].YCorrelationSPGSCI}
         primaryTypographyProps={{
           style: 
           { whiteSpace: "normal" , fontWeight:"bold", fontSize:"1.0em" , float:"right" } 
          }}
 />
</ListItem>


<ListItem button    >
 <ListItemText primary="3Y Correlation Bloomberg Barclays
 Global-Agg. Bond Index"
 primaryTypographyProps={{
   style: 
   { whiteSpace: "normal" , fontWeight:"bold", fontSize:"0.8em", marginRight:"5%" } 
  }}
 />
 <ListItemText  primary={ManagerData[i].YCorrelationBloombergBarclaysGlobalAggBondIndex}
         primaryTypographyProps={{
           style: 
           { whiteSpace: "normal" , fontWeight:"bold", fontSize:"1.0em", float:"right" } 
          }}
 />
</ListItem>

</List>
</div>
   );
        }
    }
};


return (

    <div className="MG">

<div style={{backgroundColor:"#181C28", position:"fixed", top:"0%", left:"-100vw", height:"100%", width:"500vw", zIndex:-3}}>

</div>


    <div className="MgNav">
    {renderLargeNavBar}
    </div>

    <div className="MgSelect" >
    {renderManagers}
    </div>

    <div className="MgStats" >

    {renderPortfolioStats()}
    </div>

    <div className="MgT" >
    {historicalPerformanceTable}
    </div>

    <div id="GraphMg" className="GraphMg">
    <Main63/>
    </div>

    </div>

        )
    }
}

export default EX2; 