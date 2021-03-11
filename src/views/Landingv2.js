import React, { Component,  createRef, useEffect, useRef, useState } from "react";
// React Router
import {NavLink} from "react-router-dom";
// MUI Data Tables & Material UI
import MUIDataTable from "mui-datatables";
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';

import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import CompareArrowsIcon from '@material-ui/icons/CompareArrows';
import AssessmentIcon from '@material-ui/icons/Assessment';
import SwapVertIcon from '@material-ui/icons/SwapVert';
import DescriptionOutlinedIcon from '@material-ui/icons/DescriptionOutlined';
import TimelineIcon from '@material-ui/icons/Timeline';

import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';


// React BootStrap
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge'
import Carousel from 'react-bootstrap/Carousel';
import Modal from 'react-bootstrap/Modal';
// Components
import Main2 from "./Graphstest";
import Main4 from "./Linetest";
import Main5 from "./Graptest2.";
import Main6 from "./Managerstest";

import LivePortfolioGraph from "./LivePortfolioGraph";
// Firebase
import fire from "./Fire"
import firebase from "firebase"
import axios from 'axios';


const  LandingPage2 = () => {


const [show, setShow] = useState(false);
const [datarec, setDatarec] = useState([]);
const [value, setValue] = useState(0);
const [gav, setGav] = useState([]);


useEffect( () => {

var firestore = firebase.firestore();

const docRef = firestore.collection("Security").doc("RecentTrades");

const recentTradesData = () => {

docRef.onSnapshot( (doc) => {  

setDatarec(doc.data())   

console.log("CurrentData:", doc.data() )


})
};

recentTradesData();


var prevScrollpos = window.pageYOffset;

const hidedisplayNav = ( ) => {

  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos < 56) {
    hehe.current.style.visibility = "visible";
 
  }
 else if (prevScrollpos > currentScrollPos) {
    hehe.current.style.visibility = "visible";
 
  } else {
    hehe.current.style.visibility = "hidden";
    
  }
  prevScrollpos = currentScrollPos;
}

window.addEventListener("scroll", hidedisplayNav)


callserver();


return () => {
window.removeEventListener('scroll', hidedisplayNav);

}




}, [setDatarec ]);




const recentTradesColumns = [
            {
                name: "time",
                label: "Timestamp",
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
                name: "side",
                label: "Side",
                options: {
                 sort: true,
                 sortThirdClickReset: true,
                 setCellProps: v => {
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
                name: "orderType",
                label: "Order Type",
                options: {
                 sort: true,
                 sortThirdClickReset: true,
                 setCellProps: v => {
                    if( typeof v === "string" ) return {
                        style: {color: "white",fontSize: "0.7em"  }, id:"ayree"
                    }   
                    else return {
                        style:{color : "white",fontSize: "0.7em" }, id:"ayree"
                    }
                },
                setCellHeaderProps: v => ({style: {backgroundColor:"#131722", color:"white"}}),
                }
               },
               {
                   name: "size",
                   label: "Trade Size",
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
                            style:{color: "white", fontSize: "0.8em" }, id:"ayree"
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
                    name: "price",
                    label: "Execution Price",
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
                             style:{color: "white", fontSize: "0.8em" }, id:"ayree"
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
                    name: "fee",
                    label: "Fee",
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
                             style:{color: "white", fontSize: "0.8em" }, id:"ayree"
                         }
                     },
                     customBodyRender: (value, tableMeta, updateValue) => {
                         const nf = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' })
                         return nf.format(value)
                     },
                     setCellHeaderProps: v => ({style: {backgroundColor:"#131722", color:"white"}}),
                    }
                   },
           
];

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
        setCellHeaderProps: v => ({style: {backgroundColor:"#343A40", color:"white"}}),
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
        setCellHeaderProps: v => ({style: {backgroundColor:"#343A40", color:"white"}}),
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
          const nf = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' })
          return nf.format(value)
      },
      setCellHeaderProps: v => ({style: {backgroundColor:"#343A40", color:"white"}}),
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
        setCellHeaderProps: v => ({style: {backgroundColor:"#343A40", color:"white"}}),
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
            setCellHeaderProps: v => ({style: {backgroundColor:"#343A40", color:"white"}}),
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
    tableBodyMaxHeight: "265px"
};

const recentTradesOptions = {
        search: true,
        print: true,
        pagination: false,
        responsive: 'vertical',
        viewColumns: true,
        selectableRowsHeader: false,
        selectableRows: "none",
        download: true,
        filter: false,
        tableBodyMaxHeight: "265px",

        // serverside:true,
        // onTableChange: (action, tableState) => {
          
        //   var firestore = firebase.firestore();
        //   const docRef = firestore.collection("Security").doc("RecentTrades");

        //     docRef.onSnapshot( (doc) => {  
        //     this.setState({datarec: doc.data() })   
        //   })
        
        // },
        


      
};

const gl = [{ticker:"TSLA", security:"Equity", exposure:50000000, long:5.5, total:12.00 },
{ticker:"MSCA", security:"Microsoft", exposure: 100000000, long:12.5, total:19.00 },
{ticker:"GOOG", security:"Google", exposure:40000000 ,long:1.5, total:12.00 },
{ticker:"APPL", security:"Apple", exposure:9000000, long:2.5, total:12.00 },
{ticker:"EXON", security:"Exon Inc.", exposure:70000000, long:15.5, total:12.00 },
]

const gl2 = [
{time:"23/09/2020", security:"Equity", side:"Buy", orderType:"Limit", size:124.00, price: 400, fee:9 },
{time:"23/09/2020", security:"Equity", side:"Sell", orderType:"Stop Market", size:1222.00, price: 2000, fee:90 },
{time:"23/09/2020", security:"Equity", side:"Buy", orderType:"Limit", size:200.00, price: 100, fee:4 },
{time:"23/09/2020", security:"Equity", side:"Buy", orderType:"Limit", size:320.00, price: 8000, fee:43 },
{time:"23/09/2020", security:"Equity", side:"Sell", orderType:"Stop Market", size:92.00, price: 1000, fee:24 },
]



const renderTable = (
<MuiThemeProvider theme={getMuiTheme()}>
        
<MUIDataTable
  title={"Top Long Positions"}
  data={gl}
  columns={columns}
  options={options}
  
/>
</MuiThemeProvider>
);


const renderTable2 = (
  <MuiThemeProvider theme={getMuiTheme()}>
<MUIDataTable
title={""}
data={datarec.RecentTrades}
columns={recentTradesColumns}
options={recentTradesOptions}

/>
</MuiThemeProvider>
);


const renderPieChart = ( 
<Carousel pauseOnHover="hover" indicators={false} >

<Carousel.Item  >



<Main2/>

</Carousel.Item>

<Carousel.Item  >


  
<Main5 />

</Carousel.Item>
</Carousel>

);



function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={2}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};


  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }
  
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

const TabsNavigation = ( ) => (
  <div>
  <AppBar position="static">
  <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
    <Tab label="Exposure by Asset Class" {...a11yProps(0)}  />
    <Tab label="Exposure by Manager" {...a11yProps(1)}  />

  </Tabs>
</AppBar>
<TabPanel value={value} index={0}>
<Main2/>
</TabPanel>
<TabPanel value={value} index={1}>
<Main5 />
</TabPanel>
</div>
) ;

const renderbox = (
<NavLink className="NavLink" exact to= "/Securities"> 
<div className="hodl" 
style={{ width:'100%', height:"75px", color:"white",
 backgroundColor:"transparent", display:"grid",
  gridTemplateColumns:"repeat(2, 1fr)", 
  gridTemplateRows:"repeat(2, 1fr)"}} >
<span style={{gridColumn:"1/2", gridRow:"1/3", fontSize:"0.8rem", paddingTop:"25px", fontFamily:"'Trebuchet MS',  Arial, sans-serif" }}>Securities</span>
<span style={{gridColumn:"2/4", gridRow:"1/3", paddingTop:"20px", paddingLeft:"25px"}}>
<DescriptionOutlinedIcon style={{fontSize:"1.5rem", color:"white" }}/>
</span>
</div>
</NavLink> 

);
const renderbox2   = (
<NavLink className="NavLink" exact to= "/" onClick={ () => setShow(true)}> 
<div className="hodl" 
style={{ width:'100%', height:"75px", color:"white",
 backgroundColor:"transparent", display:"grid",
  gridTemplateColumns:"repeat(2, 1fr)", 
  gridTemplateRows:"repeat(2, 1fr)"}} >
<span style={{gridColumn:"1/2", gridRow:"1/3", fontSize:"0.8rem", paddingTop:"25px", fontFamily:"'Trebuchet MS',  Arial, sans-serif"}}>Recent Trades</span>
<span style={{gridColumn:"2/4", gridRow:"1/3", paddingTop:"20px", paddingLeft:"25px"}}>
<CompareArrowsIcon style={{fontSize:"1.5rem", color:"white" }}/>
</span>
</div>
</NavLink> 
    );
const renderbox3   = (
<NavLink className="NavLink" exact to= "/Securities"> 
<div className="hodl" 
style={{ width:'100%', height:"75px", color:"white",
 backgroundColor:"transparent", display:"grid",
  gridTemplateColumns:"repeat(2, 1fr)", 
  gridTemplateRows:"repeat(2, 1fr)"}} >
<span style={{gridColumn:"1/2", gridRow:"1/3", fontSize:"0.8rem", paddingTop:"25px", fontFamily:"'Trebuchet MS',  Arial, sans-serif"}}>Exposures</span>
<span style={{gridColumn:"2/4", gridRow:"1/3", paddingTop:"20px", paddingLeft:"25px"}}>
<TrendingUpIcon style={{fontSize:"1.5rem", color:"white" }}/>
</span>
</div>
</NavLink> 
    );
const renderbox4 = (
<NavLink className="NavLink" exact to= "/Securities"> 
<div className="hodl" 
style={{ width:'100%', height:"75px", color:"white",
 backgroundColor:"transparent", display:"grid",
  gridTemplateColumns:"repeat(2, 1fr)", 
  gridTemplateRows:"repeat(2, 1fr)"}} >
<span style={{gridColumn:"1/2", gridRow:"1/3", fontSize:"0.8rem", paddingTop:"25px", fontFamily:"'Trebuchet MS',  Arial, sans-serif"}}>Live Portfolio</span>
<span style={{gridColumn:"2/4", gridRow:"1/3", paddingTop:"20px", paddingLeft:"25px"}}>
<AssessmentIcon style={{fontSize:"1.5rem", color:"white" }}/>
</span>
</div>
</NavLink> 
    );
const renderbox5 = (
<NavLink className="NavLink" exact to= "/Securities"> 
<div className="hodl" 
style={{ width:'100%', height:"75px", color:"white",
 backgroundColor:"transparent", display:"grid",
  gridTemplateColumns:"repeat(2, 1fr)", 
  gridTemplateRows:"repeat(2, 1fr)"}} >
<span style={{gridColumn:"1/2", gridRow:"1/3", fontSize:"0.8rem", paddingTop:"25px", fontFamily:"'Trebuchet MS',  Arial, sans-serif"}}>Performance Attribution</span>
<span style={{gridColumn:"2/4", gridRow:"1/3", paddingTop:"20px", paddingLeft:"25px"}}>
<SwapVertIcon style={{fontSize:"1.5rem", color:"white" }}/>
</span>
</div>
</NavLink> 
    );

const renderbox7 = (
<NavLink className="NavLink" exact to= "/Securities"> 
<div className="hodl" 
style={{ width:'100%', height:"75px", color:"white",
 backgroundColor:"transparent", display:"grid",
  gridTemplateColumns:"repeat(2, 1fr)", 
  gridTemplateRows:"repeat(2, 1fr)"}} >
<span style={{gridColumn:"1/2", gridRow:"1/3", fontSize:"0.8rem", paddingTop:"25px", fontFamily:"'Trebuchet MS',  Arial, sans-serif"}}>Markets</span>
<span style={{gridColumn:"2/4", gridRow:"1/3", paddingTop:"20px", paddingLeft:"25px"}}>
<TimelineIcon style={{fontSize:"1.5rem", color:"white" }}/>
</span>
</div>
</NavLink> 
    );


const recentTrades  = ( 
<Modal 
          show={show}
          onHide={() => setShow(false) } 
         centered
         size="lg"
         dialogClassName="AyoModal"
        >
          <Modal.Header closeButton  >
            <Modal.Title >
              Recent Trades
            </Modal.Title>
          </Modal.Header>
          <Modal.Body > 
        
            {renderTable2}

          </Modal.Body>
        </Modal>

);


const kos = useRef(null);
const hehe = useRef(null);
const GAV = useRef(null);
const Stats = useRef(null);


const callserver =  () => {

  axios
  .post('https://www.interactivebrokers.com/tradingapi/v1/oauth/request token')

  .then(res => {

    console.log(res.data)
  })

  .catch(error => console.error(`${error}`))
}


return (

<div className="LA" >


<div  style={{backgroundColor:"#181C28", position:"fixed",  top:"0%", left:"-100vw", height:"100%", width:"500vw", zIndex:-3}}>

</div>


<div ref={kos} className="LivePortfolioGraph"  >

<LivePortfolioGraph kos={kos}  GAV={GAV}/>

</div>

<div ref={GAV} className="GAV">


</div>

<div ref={Stats} className="Stats">


</div>


{/* <div  className="LaPie">
{TabsNavigation()}
</div> */}

{/* <div id="LaGraph" className="LaGraph"  >
<Main6/>
</div> */}

<div  >
{recentTrades}
</div>



<div ref={hehe} className="QuickLinks">

<div className="LaSec" >
{renderbox}
</div>
<div className="LaExp" >
{renderbox3}
</div>
<div className="LaLive" >
{renderbox4}
</div>
<div className="LaRe" >
{renderbox2}
</div>
<div className="LaPer" >
{renderbox5}
</div>
<div className="LaMar" >
{renderbox7}
</div>
</div>

</div>


)

}

export default LandingPage2;