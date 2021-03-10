import React from "react";
import Highcharts, { color } from "highcharts/highstock";
import HightchartsReact from "highcharts-react-official";

import drilldown from "highcharts/modules/drilldown.js";
drilldown(Highcharts);


const Main5 = () => {

    const options = {
        
        title: {
            useHTML:true,
            text: '<div class="lhsTitle">Exposure by Manager',
            align: 'center',
            x: 0, 
            style: {
                color: 'white',
                fontSize: "1em"
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
                        fontFamily: "Arial"
                    }
                }
            }, 
            animation:false
        },
        series: [ {

            data: [
            { y: 30416700, name: "Blue Creek", drilldown: "bluecreek"},
            { y: 35141200, name: "Waterfront Capital" , drilldown: "waterfrontcapital"},
            { y: 12412444, name: "Block Heights" , drilldown: "blockheights"},
            { y: 5000000, name: "Serverside" , drilldown: "serverside"},
            { y: 10150456, name: "JackHammer" , drilldown: "jackhammer"},
            { y: 15777000, name: "Tokyo West" , drilldown: "tokyowest"}, 
        ], 
            type: 'pie',
            name: 'Exposure by Manager',
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
                id: 'bluecreek',
                type:"pie",
                data: [
                    {y:11 , name: "Equity"},
                    {y:4 , name: "Fixed Income"},
                    {y:5 , name: "FX"},
                    {y:10 , name: "Options"},
                    {y:1 , name: "Futures"},
                    {y:4 , name: "Others"},
                ]
            }, {
                id: 'waterfrontcapital',
                type:"pie",
                data: [
                    {y:11 , name: "Equity"},
                    {y:4 , name: "Fixed Income"},
                    {y:5 , name: "FX"},
                    {y:10 , name: "Options"},
                    {y:1 , name: "Futures"},
                    {y:4 , name: "Others"},
                ]
            },{
                id: 'blockheights',
                type:"pie",
                data: [
                    {y:11 , name: "Equity"},
                    {y:4 , name: "Fixed Income"},
                    {y:5 , name: "FX"},
                    {y:10 , name: "Options"},
                    {y:1 , name: "Futures"},
                    {y:4 , name: "Others"},
                ]
            },{
                id: 'serverside',
                type:"pie",
                data: [
                    {y:11 , name: "Equity"},
                    {y:4 , name: "Fixed Income"},
                    {y:5 , name: "FX"},
                    {y:10 , name: "Options"},
                    {y:1 , name: "Futures"},
                    {y:4 , name: "Others"},
                ]
            },{
                id: 'jackhammer',
                type:"pie",
                data: [
                    {y:11 , name: "Equity"},
                    {y:4 , name: "Fixed Income"},
                    {y:5 , name: "FX"},
                    {y:10 , name: "Options"},
                    {y:1 , name: "Futures"},
                    {y:4 , name: "Others"},
                ]
            },{
                id: 'tokyowest',
                type:"pie",
                data: [
                    {y:11 , name: "Equity"},
                    {y:4 , name: "Fixed Income"},
                    {y:5 , name: "FX"},
                    {y:10 , name: "Options"},
                    {y:1 , name: "Futures"},
                    {y:4 , name: "Others"},
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
        <div > 
        {renderHighChartCard}
        </div>
        )
}

export default Main5; 