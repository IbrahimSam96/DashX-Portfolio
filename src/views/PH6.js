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

class PH6 extends Component {

    render() {

      // Create large Navbar
      const renderLargeNavBar = (
        <div className="container cyan brackets" >
      <Navbar >
          <NavLink exact to= "/Securities"> <Navbar.Brand  style={{color:"white",  borderRight:"0.1em solid teal", paddingRight:"0.8em" }}> Securities</Navbar.Brand></NavLink>
          <NavLink exact to= "/Securities/Equity"> <Navbar.Brand  style={{color:"white", fontSize:"1.0em"}}> Equity</Navbar.Brand></NavLink>
          <NavLink exact to= "/Securities/Futures"> <Navbar.Brand  style={{color:"white", fontSize:"1.0em"}}> Futures</Navbar.Brand></NavLink>
          <NavLink exact to= "/Securities/Options"> <Navbar.Brand  style={{color:"white", fontSize:"1.0em", borderBottom:"0.1em solid white"}}> <b>Options</b></Navbar.Brand></NavLink>
          <NavLink exact to= "/Securities/CurrencyByPortfolio"> <Navbar.Brand  style={{color:"white", fontSize:"1.0em"}}> Currency By Portfolio</Navbar.Brand></NavLink>    
      </Navbar>
      </div>
    ); 
  


    const columns = [
        {
         name: "security",
         label: "Security",
         options: {
         text:"Security Name",
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
         name: "description",
         label: "Description",
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
         name: "securitytype",
         label: "Security Type",
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
            name: "sector",
            label: "Sector",
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
         name: "Poss_Long",
         label: "Long",
         options: {
         text:"Number of Units Long",
         filter: false,
          sort: true,
          sortThirdClickReset: true,
          setCellProps: v => 
          {
            if( v == "0" ) return {
                style:{color: "white",fontSize: ".8em"  },    
            }
            else return {
                style:{color : "green",fontSize: ".8em" }
            }
          },
          customBodyRender: (value, tableMeta, updateValue) => {
            const nf = new Intl.NumberFormat()
            return nf.format(value)
        },
        setCellHeaderProps: v => ({style: {backgroundColor:"#131722", color:"white"}}),
         }
        },
        {
            name: "Poss_Short",
            label: "Short",
            options: {
                text:"Number of Units Short",
                filter: false,
             sort: true,
             sortThirdClickReset: true,
             setCellProps: v => {
                 if( v == "0" ) return {
                     style:{color: "white", fontSize: ".8em"  }
                 }
                 else return {
                     style:{color : "red", fontSize: ".8em" }
                 }
             },
             customBodyRender: (value, tableMeta, updateValue) => {
                const nf = new Intl.NumberFormat()
                return nf.format(value)
            },
            setCellHeaderProps: v => ({style: {backgroundColor:"#131722", color:"white"}}),
            }
           },
           {
            name: "Poss_Gross",
            label: "Gross",
            options: {
                text:"Gross Number of Units ",
                filter: false,
             sort: true,
             sortThirdClickReset: true,
             setCellProps: v => {
                 if( v == "0" ) return {
                     style:{color: "white",fontSize: ".8em"  }
                 }
                 else return {
                     style:{color : "green",fontSize: ".8em" }
                 }
             },
             customBodyRender: (value, tableMeta, updateValue) => {
                const nf = new Intl.NumberFormat()
                return nf.format(value)
            },
            setCellHeaderProps: v => ({style: {backgroundColor:"#131722", color:"white"}}),
            }
           },
           {
            name: "Poss_Net",
            label: "Net",
            options: {
                text:"Net Number of Units ",
                filter: false,
             sort: true,
             sortThirdClickReset: true,
             setCellProps: v => {
                 if( v[0] < "-" ) return {
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
                 const nf = new Intl.NumberFormat()
                 return nf.format(value)
             },
             setCellHeaderProps: v => ({style: {backgroundColor:"#131722", color:"white"}}),
            }
           },
           {
            name: "Exp_Long",
            label: "Long ($)",
            options: {
                text:"Long Exposure",
                filter: false,
             sort: true,
             sortThirdClickReset: true,
             setCellProps: v => {
                 if( v == "$0.00" ) return {
                     style:{color: "white", fontSize: ".8em" }
                 }
                 else return {
                     style:{color : "green", fontSize: ".8em" }
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
               name: "Exp_Short",
               label: "Short ($)",
               options: {
                text:"Short Exposure",
                filter: false,
                sort: true,
                sortThirdClickReset: true,
                setCellProps: v => {
                    if( v == "$0.00" ) return {
                        style:{color: "white", fontSize: ".8em"  }
                    }
                    else return {
                        style:{color: "red", fontSize: ".8em" }
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
               name: "Exp_Gross",
               label: "Gross ($)",
               options: {
                text:"Gross Exposure",
                filter: false,
                sort: true,
                sortThirdClickReset: true,
                setCellProps: v => {
                    if( v == "$0.00" ) return {
                        style:{color: "white", fontSize: ".8em"  }
                    }
                    else return {
                        style:{color : "green", fontSize: ".8em" }
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
               label: "Net ($)",
               options: {
                text:"Net Exposure",
                filter: false,
                sort: true,
                sortThirdClickReset: true,
                setCellProps: v => {
                    if( v[0] == "-" ) return {
                        style:{color: "red", fontSize: ".8em"  }
                    }
                    else if( v == "$0.00" ) return {
                        style:{color: "white", fontSize: ".8em"  }
                    }
                    else return {
                        style:{color : "green", fontSize: ".8em" }
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
    
    
        //        {
        //        label: "Position",
        //        options: {
        //        sort: false,
        //        empty: true, 
        //        filter: false,
        //        setCellHeaderProps: v => ({style: {backgroundColor:"#131722", color:"white", position: "absolute", top: "-55px", left: "450px", width:"300px",textAlign:"center"}}),
        //         }
        //        },
        //        {
        //         name: "exposure",
        //         label: "Exposure",
        //         options: {
        //          sort: false,
        //          empty: true,
        //          filter: false,
        //          setCellHeaderProps: v => ({ style: { backgroundColor:"#131722", color:"white",position: "absolute", top: "-55px", left: "850px", width:"350px", textAlign:"center"  } })
        //         }
        //        },
       
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
    
    

    const GG = []; 
    for(const v in Gandu.default){
        var z ={}; 
        z["security"] = Gandu.default[v].Security;
        z["description"] = Gandu.default[v].Description
        z["securitytype"] = Gandu.default[v].SecurityType
        z["sector"] = Gandu.default[v].Sector
        z["Poss_Long"] = Gandu.default[v].Pos_Long[Gandu.default[v].Pos_Long.length -1]
        z["Poss_Short"] =  Gandu.default[v].Pos_Short[Gandu.default[v].Pos_Short.length -1]
        z["Poss_Gross"] = Gandu.default[v].Pos_Gross[Gandu.default[v].Pos_Gross.length -1]
        z["Poss_Net"] =Gandu.default[v].Pos_Net[Gandu.default[v].Pos_Net.length -1]
        z["Exp_Long"] = Gandu.default[v].Exp_Long[Gandu.default[v].Exp_Long.length -1]
        z["Exp_Short"] = Gandu.default[v].Exp_Short[Gandu.default[v].Exp_Short.length -1]
        z["Exp_Gross"] =Gandu.default[v].Exp_Gross[Gandu.default[v].Exp_Gross.length -1]
        z["Exp_Net"] = Gandu.default[v].Exp_Long[Gandu.default[v].Exp_Long.length -1]
        z["date"] = new Date(Gandu.default[v].date[Gandu.default[v].date.length-1]).toISOString().slice(0,10)
        GG.push(z)  
    }


    const options = {
        search: true,
        responsive: 'standard',
        viewColumns: true,
        selectableRowsHeader: false,
        selectableRows: "none",
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
  title={"Options"}
 data={GG}
  columns={columns}
  options={options}
  
/>
</MuiThemeProvider>
)

return (

    <div className="OP">
    <div style={{backgroundColor:"#181C28", position:"fixed", top:"0%", left:"-100vw", height:"100%", width:"500vw", zIndex:-3}}>
    
    </div>
    
    <div className="OpNav">
    {renderLargeNavBar}
    </div>
    
    <div className="OpT">
    {renderTable}
    </div>
    
    </div>
    
            )
    }
}

export default PH6; 