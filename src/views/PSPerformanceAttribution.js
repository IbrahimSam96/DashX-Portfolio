
import React, { Component } from "react";
// MaterialUi
import MUIDataTable, { TableHead, TableHeadCell } from "mui-datatables";
import { createMuiTheme, MuiThemeProvider, } from '@material-ui/core/styles';
//BootStrap
import Navbar from 'react-bootstrap/Navbar';
// Date Picker
import {YearMonthPicker} from "./DatePicker"
//Graphs + Data
import Waterfallchart from "./WaterfallChart";
import Waterfallchart2 from "./WaterfallChart2";
//ReactRouter
import { NavLink } from "react-router-dom";



//Need to store both charts options in one state.. MTD + YTD

class Ps3 extends Component {
constructor(props) {
  super(props);
    this.state = { 
      value: new Date()
                 };

}
render() {

// Create large Navbar
const renderLargeNavBar = (
<div className="container cyan PS2">
                <Navbar >
                    <NavLink exact to="/PortfolioSummary"> <Navbar.Brand style={{color:"white",  borderRight:"0.1em solid teal", paddingRight:"0.8em" }}> <b> Portofolio Summary </b> </Navbar.Brand></NavLink>
                        <NavLink exact to="/PortfolioSummary/PerformanceAttribution"> <Navbar.Brand  style={{color:"white", fontSize:"1.0em",borderBottom:"0.1em solid white" }}>Performance Attribution </Navbar.Brand> </NavLink>
                        <NavLink exact to="/PortfolioSummary/RiskAdjustedPerformance" > <Navbar.Brand  style={{color:"white", fontSize:"1.0em"}}>Risk Adjusted Performance </Navbar.Brand></NavLink>
                        <NavLink exact to="/PortfolioSummary/Benchmark"> <Navbar.Brand  style={{color:"white", fontSize:"1.0em"}}>Benchmark </Navbar.Brand> </NavLink>
                </Navbar>
                </div>
);

// Monthly Portfolio Attrbution Table

const columns = [
    {
        name: "date",
        label: "Month Year",
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
        name: "equity",
        label: "Equity",
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
       },
      },
       {
        name: "fixedincome",
        label: "Fixed Income",
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
       },
      },
       {
        name: "fx",
        label: "FX",
        options: {
         sort: true,
         sortThirdClickReset: true,
         setCellProps: v => {
             if( v[0] == "-"  ) return {
                 style:{color: "red",fontSize: "1em"  }, id:"ayree"
             }
             else if( v == "$0.00" ) return {
                style:{color: "black",fontSize: "1em"  }, id:"ayree"
            }
             else return {
                 style:{color : "green",fontSize: "0.8em" }, id:"ayree"
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
        name: "options",
        label: "Options",
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
           name: "futures",
           label: "Futures",
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
          {
            name: "others",
            label: "Others",
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
           {
            name: "total",
            label: "Total",
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
            fontWeight:"bold"
          },
        }, 
        MuiTableBody: {
            root: {
                backgroundColor: '#131722',
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
    }
  })



   const options = {
    search: false,
    print: false,
    pagination: false,
    responsive: 'vertical',
    viewColumns: false,
    selectableRowsHeader: false,
    selectableRows: "none",
    download: false,
    filter: false,
    tableBodyMaxHeight: "360px"
     };

    const gl = [
{date:"August 2019", equity: -3, fixedincome:1, fx:0.9, options: 3, futures:2.30, others:3.00, total:3.2},
{date:"September 2019", equity: 2, fixedincome: -1.5, fx:0.5, options: 3, futures:12.30, others: -3.00, total:9.2 },
{date:"October 2019", equity: 5, fixedincome:1.9, fx: -1.5, options: 3, futures:15.30, others:2.00, total:13.2},
{date:"November 2019", equity: -13, fixedincome:1.6, fx:2.5, options: 3, futures:4.30, others:1.00, total: -3.2},
{date:"December 2019", equity: 1, fixedincome:1.2, fx:0.2, options: 3, futures: -5.30, others:4.00, total:3.2},
]


     const renderMonthlyTable = (
    <MuiThemeProvider theme={getMuiTheme()}>
    <MUIDataTable
      title={"Monthly Portfolio Attribution (%)"}
      data={gl}
      columns={columns}
      options={options}
    />
    </MuiThemeProvider>
    );
    


return (

<div className="PA">

<div style={{backgroundColor:"#181C28", position:"fixed", top:"0%", left:"-100vw", height:"100%", width:"500vw", zIndex:-3}}>

</div>

<div className="PaNav">
{renderLargeNavBar}
</div>

<div className="PaD">
<YearMonthPicker/>
</div>

<div id="PaCH1" className="PaCH1">
<Waterfallchart/>
</div>

<div id="PaCH2" className="PaCH2">
<Waterfallchart2/>
</div>

<div className="PaT">
{renderMonthlyTable}
</div>



</div>
)
}
}

export default Ps3;