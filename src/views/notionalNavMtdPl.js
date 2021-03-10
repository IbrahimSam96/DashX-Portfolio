import React from "react";
import Highcharts, { charts } from "highcharts/highstock";
import HightchartsReact from "highcharts-react-official";
import Form from 'react-bootstrap/Form'
import * as bigAyre from "./IbrahimNEW.json";
import HC_more from 'highcharts/highcharts-more';
HC_more(Highcharts);

class NotionalGraph extends React.Component {
    constructor(props) { 
        super(props)
        this.state= {
         options : {
          chart: {
          renderTo:"PsNotionalGraph",
            backgroundColor: "transparent", 
        },
        title: {
            text: 'Notional, NAV & MTD P&L',
            style: {
                color: 'white',
            }
        },
       
        credits: {
            enabled: false
        },
        xAxis: [
            {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
              'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
            ],
            crosshair: true,
            labels: {
                style: {
                    color: 'white'
                }
            }
          
          }
        ],
          yAxis: [
              { // Primary yAxis
            labels: {
                format: '{value}',
                style: {
                    color: Highcharts.getOptions().colors[2]
                }
            },
            title: {
                text: 'MTD P&L',
                style: {
                    color: Highcharts.getOptions().colors[2]
                }
            },
            opposite: true
    
        }, 
        { // Secondary yAxis
            gridLineWidth: 0,
            title: {
                text: 'Notional & NAV',
                style: {
                    color: Highcharts.getOptions().colors[0]
                }
            },
            labels: {
                format: '{value} ',
                style: {
                    color: Highcharts.getOptions().colors[0]
                }
            }
    
        }, 
    ],
        legend: {
            enabled: true,
            itemStyle: {
                color: 'white',
                fontWeight: 'bold'
            }
        },
    
        tooltip: {
            shared: true,
            
        },
        series: [
            {
            name: 'NAV',
           
            yAxis: 1,
            data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4],
    
        }, {
            name: 'Notional',
            color:"white",
            yAxis: 1,
            data: [1016, 1016, 1015.9, 1015.5, 1012.3, 1009.5, 1009.6, 1010.2, 1013.1, 1016.9, 1018.2, 1016.7],
    
        },
        {
            name: 'MTD P&L',
            type: 'column',
            color: Highcharts.getOptions().colors[2],
            yAxis: 0,
            data: [49.9, -71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4],
        },
    ],

    }

        }
        } 

    render() {
    
        const renderHighChartCard = (
            <HightchartsReact highcharts={Highcharts}
                constructorType={'chart'}
                options={this.state.options}
            />
        );

    return (
        <div> 
        {renderHighChartCard}
        </div>
        )
    }
}

export default NotionalGraph; 