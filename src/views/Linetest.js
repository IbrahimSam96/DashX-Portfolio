import React, { useState } from "react";
import Highcharts from "highcharts/highstock";
import HightchartsReact from "highcharts-react-official";
//Data
import * as bigAyre from "./IbrahimNEW.json";






const lineData = []; 

let z = []; 
let p ; 
let j = bigAyre.default[10].date.length;
for( p = 0 ; p < j ; p++){
z = [ new Date(bigAyre.default[10].date[p]).getTime() , bigAyre.default[10].Exp_Net[p]]

lineData.push(z)
};




const Main4 = () => {

const [option, setOption] = useState({ 
    title: {
        text: ''
    },
    legend: {
        enabled: false,
    },
    credits: {
        enabled: false
    },
    chart: {
        renderTo:"LineGraph",
        backgroundColor: "transparent", 

        // events: {
        //     load()  {
        //       const chart = this,
        //         series = chart.series[0],
        //         points = series.points,
        //         zones = [];
      
        //       series.points.forEach((p, i) => {
        //         if ( points[0].y < points[i].y ) {
                
        //           zones.push({
        //             value: points[i].x,
        //             color: 'green'
        //           })
        //         } else {
                  
        //           zones.push({
        //             value: p.x,
        //             color: 'red'
        //           })
        //         }
        //       });

        //       series.update({
        //         zones: zones
        //       })
        //     }
        //   }
    },
    plotOptions: {
        series: {
            color: '#F2803A ', 
            compare:"percent"
        }
    },
    xAxis: {
        type: 'datetime',
        gridLineColor: 'transparent',
        visible: false
    }, 
    yAxis: {
        visible: false
    }, 
    series: [ { 
        color:"#93385FFF",
        data: lineData,
        type: 'area',
        name: 'NAV',
        id: 'aapl',
        zoneAxis: 'x',

        }
    ], 
    tooltip: {
        xDateFormat: '%Y-%m-%d',
        pointFormat: `<span style="color:{series.color}">{series.name}</span>: {point.y} <b> {point.change}% </b>`,
        valueDecimals: 2, 
     },
      
})


// const option = {

//         title: {
//             text: ''
//         },
//         legend: {
//             enabled: false,
//         },
//         credits: {
//             enabled: false
//         },
//         chart: {
//             renderTo:"LineGraph",
//             backgroundColor: "transparent", 
//             // events: {
//             //     load()  {
//             //       const chart = this,
//             //         series = chart.series[0],
//             //         points = series.points,
//             //         zones = [];
          
//             //       series.points.forEach((p, i) => {
//             //         if ( points[0].y < points[i].y ) {
                    
//             //           zones.push({
//             //             value: points[i].x,
//             //             color: 'green'
//             //           })
//             //         } else {
                      
//             //           zones.push({
//             //             value: p.x,
//             //             color: 'red'
//             //           })
//             //         }
//             //       });
//             //       series.update({
//             //         zones: zones
//             //       })
//             //     }
//             //   }
//         },
//         plotOptions: {
//             series: {
//                 color: '#F2803A ', 
//                 compare:"percent"
//             }
//         },
//         xAxis: {
//             type: 'datetime',
//             gridLineColor: 'transparent',
//             visible: false
//         }, 
//         yAxis: {
//             visible: false
//         }, 
//         series: [ { 
//             data: lineData,
//             type: 'area',
//             name: 'NAV',
//             id: 'aapl',
//             zoneAxis: 'x',

//             }
//         ], 
//         tooltip: {
//             xDateFormat: '%Y-%m-%d',
//             pointFormat: `<span style="color:{series.color}">{series.name}</span>: {point.y} <b> {point.change}% </b>`,
//             valueDecimals: 2, 
//          },
       
        
        


//         };



const renderHighChartCard = (
<HightchartsReact
 highcharts={Highcharts}
constructorType={'chart'}
options={option}

/>
); 


    return (

        <div> 
        {renderHighChartCard}
        </div>

        )
}

export default Main4; 