import React from "react";
import Highcharts from "highcharts/highstock";
import HightchartsReact from "highcharts-react-official";
import Card from 'react-bootstrap/Card';
import {highChartData} from "./Chart"
import drilldown from "highcharts/modules/drilldown.js";
drilldown(Highcharts);


const Main3 = () => {

    const options = {
        title: {
            text: 'Exposure by Currency (%)'
        },
        credits: {
            enabled: false
        },
        xAxis: {
            type: 'category',
           // remove gridlines gridLineColor: 'transparent',
        }, 
       
        series: [ {

            data: [
            { y: 30, name: "USD", drilldown: "usd"},
            { y: 35, name: "Euro" , drilldown: "euro"},
            { y: 5, name: "Yen" , drilldown: "yen"},
            { y: 15, name: "Others" , drilldown: "others"}, 
        ], 
            type: 'column',
            name: 'Currency',
            id: 'aapl'
               
            }
        ], 
        drilldown: {
            activeAxisLabelStyle: {
                textDecoration: 'none',
                fontStyle: 'italic'
            },
            activeDataLabelStyle: {
                textDecoration: 'none',
                fontStyle: 'italic'
            },
            series: [{
                id: 'usd',
                type:"column",
                name:"Asset Class",
                data: [
                    {y:11 , name: "Equity"},
                    {y:4 , name: "Fixed Income"},
                    {y:5 , name: "FX"},
                    {y:10 , name: "Options"},
                    {y:10 , name: "Futures"},
                    {y:10 , name: "Others"},
                ]
            }, {
                id: 'euro',
                type:"column",
                name:"Asset Class",
                data: [
                    {y:11 , name: "Equity"},
                    {y:4 , name: "Fixed Income"},
                    {y:5 , name: "FX"},
                    {y:10 , name: "Options"},
                    {y:10 , name: "Futures"},
                    {y:10 , name: "Others"},
                ]
            },{
                id: 'yen',
                type:"column",
                name:"Asset Class",
                data: [
                    {y:11 , name: "Equity"},
                    {y:4 , name: "Fixed Income"},
                    {y:5 , name: "FX"},
                    {y:10 , name: "Options"},
                    {y:10 , name: "Futures"},
                    {y:10 , name: "Others"},
                ]
            },{
                id: 'others',
                type:"column",
                name:"Asset Class",
                data: [
                    {y:11 , name: "Equity"},
                    {y:4 , name: "Fixed Income"},
                    {y:5 , name: "FX"},
                    {y:10 , name: "Options"},
                    {y:10 , name: "Futures"},
                    {y:10 , name: "Others"},
                ]
            },
        
        ]
        },
        tooltip: {
            formatter: function(){
                if (this.series.options.type == 'pie')
                    return this.percentage.toFixed(2) +'%';
                return this.y;
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
        {console.log(highChartData)}
        </div>
        )
}

export default Main3; 