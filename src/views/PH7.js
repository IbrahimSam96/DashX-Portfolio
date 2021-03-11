import React, { Component } from "react";

//BootStrap
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'

//Data
import * as Gandu from "./IbrahimNEW.json"
//MUITable 
import MUIDataTable, { TableHeadRow } from "mui-datatables";
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import Particles from 'react-particles-js';
//Router
import { NavLink } from "react-router-dom";

class PH7 extends Component {

    render() {

      // Create large Navbar
      const renderLargeNavBar = (
        <div className="container cyan brackets" >
      <Navbar >
          <NavLink exact to= "/Securities"> <Navbar.Brand  style={{color:"white",  borderRight:"0.1em solid teal", paddingRight:"0.8em" }}> Securities</Navbar.Brand></NavLink>
          <NavLink exact to= "/Securities/Equity"> <Navbar.Brand  style={{color:"white", fontSize:"1.0em"}}> Equity</Navbar.Brand></NavLink>
          <NavLink exact to= "/Securities/Futures"> <Navbar.Brand  style={{color:"white", fontSize:"1.0em"}}> Futures</Navbar.Brand></NavLink>
          <NavLink exact to= "/Securities/Options"> <Navbar.Brand  style={{color:"white", fontSize:"1.0em"}}> Options</Navbar.Brand></NavLink>
          <NavLink exact to= "/Securities/CurrencyByPortfolio"> <Navbar.Brand  style={{color:"white", fontSize:"1.0em", borderBottom:"0.1em solid white"}}> <b>Currency By Portfolio</b></Navbar.Brand></NavLink>
    
      </Navbar>
      </div>
    ); 

const columns = [
    {
     name: "currency",
     label: "Currency",
     options: {
      text:"Currency",
      sort: true,
      sortThirdClickReset: true,
      setCellProps: v => 
      {
          return {style:{fontSize: ".8em", color: "white" }}
      },
      setCellHeaderProps: v => ({style: {backgroundColor:"#131722", color:"white"}}),
     }
    },
    {
     name: "country",
     label: "Country",
     options: {
      text:"Country",
      sort: true,
      sortThirdClickReset: true,
      setCellProps: v => 
      {
          return {style:{fontSize: ".8em", color: "white"  }}
      },
      setCellHeaderProps: v => ({style: {backgroundColor:"#131722", color:"white"}}),
     }
    },
    
       {
        name: "position_local",
        label: "Position (Local)",
        options: {
          text:"Local Currency",
         sort: true,
         sortThirdClickReset: true,
         setCellProps: v => {
            if( v[0] == "-" ) return {
                style:{color: "red", fontSize: ".8em"  }
            }
            else if( v == "0" ) return {
               style:{color: "white", fontSize: ".8em"  }
           }
            else return {
                style:{color : "green", fontSize: ".8em"  }
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
           name: "position_base",
           label: "Position (Base)",
           options: {
            text:"Base Currency",
            sort: true,
            sortThirdClickReset: true,
            setCellProps: v => {
                if( v[0] == "-" ) return {
                    style:{color: "red", fontSize: ".8em"  }
                }
                else if( v == "0" ) return {
                   style:{color: "white", fontSize: ".8em"  }
               }
                else return {
                    style:{color : "green", fontSize: ".8em"  }
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
            name: "manager",
            label: "Manager",
            options: {
             sort: false,
             setCellProps: v => 
             {
                 return {style:{fontSize: ".8em", color: "white"  }}
             },
             setCellHeaderProps: v => ({style: {backgroundColor:"#131722", color:"white"}}),
            }
           },
          {
            name: "date",
            label: "Date",
            options: {
              text:"Date",
             sort: true,
             sortThirdClickReset: true,
             setCellProps: v => 
             {
                 return {style:{fontSize: ".8em", color:"white" }} 
             },
                setCellHeaderProps: v => ({style: {backgroundColor:"#131722", color:"white" }}),
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
        },
      }, 
      MuiTableBody: {
          root: {
              backgroundColor: '#131722',
            },
      }, 
      MuiTablePagination: { 
        root: {
            backgroundColor: '#131722',
          },
       
      },
      MuiTableFooter:{
        root: {
            backgroundColor: '#131722',
          },
      },
      MuiTableHead:{
        root: {
            backgroundColor: '#131722',
          },
      },
      MuiTable: {
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
      MUIDataTableToolbar: {
        icon: {
           color: "white",
           '&:hover': {
                color: "teal"
            }
        },
    },
    MUIDataTableFilterList:{ 
        root:{ 
    backgroundColor:"#131722",
    margin:"0"
        }, 
        chip: {
            backgroundColor:"teal",
             color:"white"
        }
    },
    // MuiTableSortLabel: {
    //     root: {
    //       width: "100%",
    //     },
    //   },
    
    }
  });



    const GG = [
        {currency:"CAD", country:"CAD",position_local:4555676.87, position_base:3456654.65, manager:"Tokyo West, Blue Creek, ServerSide ", date: new Date("12/30/2020").toISOString().slice(0,10) 
         },
         {currency:"USD", country:"United States",position_local:7555676.87, position_base:7456654.65, manager:"Jack Hammer, Blue Creek ", date: new Date("12/30/2020").toISOString().slice(0,10) 
        },
        {currency:"JPY", country:"Japan",position_local:11555676.87, position_base:9456654.65, manager:"Waterfront Capital, Blue Creek, ServerSide ", date: new Date("12/30/2020").toISOString().slice(0,10) 
    },
    {currency:"CHF", country:"Swizerland",position_local:2555676.87, position_base:2466654.65, manager:"Tokyo West, Blue Creek, ServerSide ", date: new Date("12/30/2020").toISOString().slice(0,10) 
},
    ]; 
 
        
    


   const options = {
    search: false,
    print: false,
    pagination: false,
    responsive: 'standard',
    viewColumns: false,
    selectableRowsHeader: false,
    selectableRows: "none",
    viewColumns: false,
    download: false,
    textLabels: {
      body: {
        noMatch: "Sorry, no matching records found",
        toolTip: "Sort",
        columnHeaderTooltip: column => `${column.text}`
      },
  }
   };
   
const renderTable = (
    <MuiThemeProvider theme={getMuiTheme()}>
<MUIDataTable
  title={"Currency By Portfolio"}
 data={GG}
  columns={columns}
  options={options}
  
/>
</MuiThemeProvider>
)

return (

    <div className="CU">
    <div style={{backgroundColor:"#181C28", position:"fixed", top:"0%", left:"-100vw", height:"100%", width:"500vw", zIndex:-3}}>
    
    </div>
    
    <div className="CuNav">
    {renderLargeNavBar}
    </div>
    
    <div className="CuT">
    {renderTable}
    </div>
    
    </div>
    
            )
    }
}

export default PH7; 