import React from "react";
import Highcharts, { color } from "highcharts/highstock";
import HightchartsReact from "highcharts-react-official";
import {highChartData} from "./Chart"
import drilldown from "highcharts/modules/drilldown.js";
drilldown(Highcharts);


const Main2 = () => {

    const options = {
        title: {
            useHTML:true,
            text: '<div class="lhsTitle"> Exposure by Asset Class',
            align: 'center',
            x: 0, 
            style: {
                color: 'white',
                fontSize: "1em",
                fontWeight:"bold"
            }
        },
        credits: {
            enabled: false
        },
        chart: {
          renderTo:"LaPie",
            backgroundColor: "transparent", 
        },
        plotOptions: {
            series: {
                dataLabels: {
                    enabled: true,
                    style: {
                      fontStyle:"normal",
                      fontWeight: "bold",
                      color:"white",
                      textDecoration: 'none',
                        textOutline:false, 
                    },
                },
                animation:false
            }
        },
        series: [ {

            data: [
            { y: 30, name: "Equity", drilldown: "equity"},
            { y: 35, name: "Fixed Income" , drilldown: "fixedincome"},
            { y: 5, name: "FX" , drilldown: "fx"},
            { y: 5, name: "Options" , drilldown: "options"},
            { y: 10, name: "Futures" , drilldown: "futures"},
            { y: 15, name: "Others" , drilldown: "others"}, 
        ], 
            type: 'pie',
            name: 'Asset Class',
            }
        ], 
        drilldown: {
            activeDataLabelStyle: {
                cursor: 'pointer',
                color: 'white',
                fontWeight: 'bold',
                textDecoration: 'none'
            },
            series: [{
                id: 'equity',
                type:"pie",
                dataLabels: {
                    enabled: true,
                    format: '{point.name:.1f}',
                },
                data: [
                    { y: 30416700, name: "Blue Creek"},
                    { y: 35141200, name: "Waterfront Capital" },
                    { y: 12412444, name: "Block Heights"},
                    { y: 5000000, name: "Serverside" },
                    { y: 10150456, name: "JackHammer" },
                    { y: 15777000, name: "Tokyo West" }, 
                ]
            }, {
                id: 'fixedincome',
                type:"pie",
                dataLabels: {
                    enabled: true,
                    format: '{point.name:.1f}'                    // Number'{point.y:.1f}'  
                },
                data: [
                    { y: 30416700, name: "Blue Creek"},
                    { y: 35141200, name: "Waterfront Capital" },
                    { y: 12412444, name: "Block Heights"},
                    { y: 5000000, name: "Serverside" },
                    { y: 10150456, name: "JackHammer" },
                    { y: 15777000, name: "Tokyo West" }, 
                ]
            },{
                id: 'fx',
                type:"pie",
                data: [
                    { y: 30416700, name: "Blue Creek"},
                    { y: 35141200, name: "Waterfront Capital" },
                    { y: 12412444, name: "Block Heights"},
                    { y: 5000000, name: "Serverside" },
                    { y: 10150456, name: "JackHammer" },
                    { y: 15777000, name: "Tokyo West" }, 
                ]
            },{
                id: 'options',
                type:"pie",
                data: [
                    { y: 30416700, name: "Blue Creek"},
                    { y: 35141200, name: "Waterfront Capital" },
                    { y: 12412444, name: "Block Heights"},
                    { y: 5000000, name: "Serverside" },
                    { y: 10150456, name: "JackHammer" },
                    { y: 15777000, name: "Tokyo West" }, 
                ]
            },{
                id: 'futures',
                type:"pie",
                data: [
                    { y: 30416700, name: "Blue Creek"},
                    { y: 35141200, name: "Waterfront Capital" },
                    { y: 12412444, name: "Block Heights"},
                    { y: 5000000, name: "Serverside" },
                    { y: 10150456, name: "JackHammer" },
                    { y: 15777000, name: "Tokyo West" }, 
                ]
            },{
                id: 'others',
                type:"pie",
                data: [
                    { y: 30416700, name: "Blue Creek"},
                    { y: 35141200, name: "Waterfront Capital" },
                    { y: 12412444, name: "Block Heights"},
                    { y: 5000000, name: "Serverside" },
                    { y: 10150456, name: "JackHammer" },
                    { y: 15777000, name: "Tokyo West" }, 
                ]
            },
        
        ]
        },
        tooltip: {
            formatter: function() {
                if (this.series.options.type == 'pie') {
                const nf = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'})
                    return `<span> <b>  ${nf.format(this.y)}  </b> </span > \u00A0\u00A0\u00A0\u00A0   <span > <b> ${this.percentage.toFixed(2)}% </b> </span> `              
                }

                  //  return '<b>' + nf.format(this.y) + '</b>' + ;
            }
        },
        
        
    };

 const renderHighChartCard = (
 <HightchartsReact highcharts={Highcharts}
constructorType={'chart'}
 options={options}

                />
        ) 

return (

<div> 
{renderHighChartCard}
</div>

)

}

export default Main2; 