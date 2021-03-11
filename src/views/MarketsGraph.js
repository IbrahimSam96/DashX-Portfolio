import React, { useEffect, useState } from "react";
import Highcharts from "highcharts/highstock";
import HightchartsReact from "highcharts-react-official";
import axios from 'axios';

// Forked to ------------------> MainiMG2 

const MainMG = (props) => { 

//State 
const [market, setMarket] = useState();
const [index, setIndex]  = useState();

const marketStatus = () => {

    setInterval( async () => {

      const data = await axios.get("https://financialmodelingprep.com/api/v3/market-hours?apikey=f2889259eb8ae41142c5d007d43efc1e")
        .then( res => {
            console.log(res.data[0].isTheStockMarketOpen)
            return res.data[0].isTheStockMarketOpen
        })
        return setMarket(data) 

    }, 60000);
}

const intialize = () => { 

    setInterval(() => {
        var date = new Date();
        if (date.getHours() == 9  && date.getMinutes() == 53 & date.getSeconds() == 10 )
        axios.get(`https://financialmodelingprep.com/api/v3/quote/${props.ticker}?apikey=f2889259eb8ae41142c5d007d43efc1e`) 
        .then(data => {
            console.log(options)
          setOptions({ series: [{ data: [{x:data.data[0].timestamp * 1000, y: data.data[0].previousClose}] }] });
        });
    

    }, 600);
     
}
//Clear Graph for Next Day 
const nextDay = () => { 

    setInterval(() => {
        
        var date = new Date();
        if (date.getHours() == 9  && date.getMinutes() == 29 && date.getSeconds() >= 10 ) 
       {
          setOptions({ series: [{ data: [] }] });
       }

    }, 600);     
}

const loaddata = () => {

setInterval( async ( ) => {

    if(market) {

 const data = await axios.get(`https://financialmodelingprep.com/api/v3/historical-chart/1min/${props.ticker}?apikey=f2889259eb8ae41142c5d007d43efc1e`) 
 
.then( (data) => {
console.log(data.data[0])
return data.data
})
return data
    }

}, 60000);

}; 



const [options, setOptions] = useState({ 
    title: {
    text: props.name,
    style: {
        color: "white"
    }
},
legend: {
    enabled: false,
},
credits: {
    enabled: false
},
chart: {
    width: 350,
    height: 250,
    backgroundColor: "#222222",
    events: { 
    load: function() {
     setInterval( ()  => {
        var series = this.series[0].data;
        var date = new Date(); 
        if ( market )
         axios.get( `https://financialmodelingprep.com/api/v3/quote/${props.ticker}?apikey=f2889259eb8ae41142c5d007d43efc1e` ) 
        .then( data => {
            console.log(data)
         series.addPoint( {y: data.data[0].price, x: data.data[0].timestamp * 1000} )
       
         } )
     }, 60000);   
       
   },

    },
},
time: {
    useUTC: false,
},
plotOptions: {
    series: {
        color: '#2F9337 ',
        compare: 'percent',
    }
},
xAxis: {
    type:"datetime",
    startOnTick: true,
    endOnTick: true,
    tickInterval: 60000 * 60 * 4,
    labels: {
      format:'{value: %l:%M%P}',
    },
    gridLineColor: 'transparent',
    visible: true,
}, 
yAxis: {
    visible: false,
}, 
series: [{
    data:[],
    type: 'area',
    name: "ayre",
    id: 'S&P', 
    negativeColor: '#D0292C',     
    lastVisiblePrice: {
        enabled: true,
        label: {
            enabled: true
        }
    } 
    
    }
], 
tooltip: {
    pointFormat: `<span style="color:{series.color}">{series.name}</span>: {point.y} <b> {point.change}% </b>`,
    valueDecimals: 2, 
 },

} );


useEffect(() => {
loaddata();
marketStatus();

  }, []);
           
          
const renderHighChartCard = (
        
 <HightchartsReact highcharts={Highcharts}
            constructorType={'chart'}
            options={options}
                                            />
);

    return (
            <div> 
            {renderHighChartCard}
            {intialize()}
            {nextDay()}
            </div>
           )

 }
   


export default MainMG; 