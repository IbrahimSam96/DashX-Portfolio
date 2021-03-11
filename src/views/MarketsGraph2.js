import React, { useEffect, useState } from "react";
import Highcharts from "highcharts/highstock";
import HightchartsReact from "highcharts-react-official";
import axios from 'axios';


const MainMG2 = (props) => { 

//State 
const [market, setMarket] = useState();

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


//  Initialize Graph for Next Day 
const firstDay = () => { 

    setInterval( async () => {
        
        var date = new Date();
        if ((date.getHours() == 10 && date.getMinutes() == 1 && date.getSeconds() == 50 ) )
        {
        const data = await axios.get(`https://financialmodelingprep.com/api/v3/quote/${props.ticker}?apikey=f2889259eb8ae41142c5d007d43efc1e`) 
     
        .then( (data) => {
        console.log(data.data[0])
        return data.data[0]
        })

          setOptions({ series: [{ data: [{x: data.timestamp *1000, y:data.previousClose }] }] }); 
       }

    }, 600);     
}


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
    width: 300,
    height: 200,
    backgroundColor: "#181C28",
    events: { 
    load: function() {
       setInterval( async ( ) => {
        var series = this.series[0];
      if (!market) {
     const data = await axios.get(`https://financialmodelingprep.com/api/v3/historical-chart/1min/${props.ticker}?apikey=f2889259eb8ae41142c5d007d43efc1e`) 
     
    .then( (data) => {
    console.log(data.data[0].date)
    return data.data[0] 
    })
               
return series.addPoint({x: new Date(data.date).getTime(), y:data.close})
      }
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
        lastVisiblePrice: {
            enabled: true,
            label: {
                enabled: true
            }
        } 
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
    data: [],
    type: 'area',
    name: props.name,
    id: props.name, 
    negativeColor: '#D0292C',     
   
    
    }
], 
tooltip: {
    pointFormat: `<span style="color:{series.color}">{series.name}</span>: {point.y} <b> {point.change}% </b>`,
    valueDecimals: 2, 
 },

} );


useEffect(() => {

marketStatus();
firstDay();
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
            </div>
           )

 }
   


export default MainMG2; 