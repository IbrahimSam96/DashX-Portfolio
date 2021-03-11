import React from "react";
import Highcharts from "highcharts/highstock";
import HightchartsReact from "highcharts-react-official";
import Form from 'react-bootstrap/Form'
import * as bigAyre from "./IbrahimNEW.json";
import HC_more from 'highcharts/highcharts-more';
HC_more(Highcharts);

class Waterfallchart2 extends React.Component {
constructor(props){
    super(props)
    this.state = {
     options : {
        chart: {
            type: 'waterfall',
renderTo:"PaCH2",
            backgroundColor: "transparent", 
        },
        title: {
            text: 'Performance Attribution YTD',
            style: {
                color: 'white',
            }
        },
       
        credits: {
            enabled: false
        },
        xAxis: {
            type: 'category',
            crosshair: true,
            labels: {
                style: { 
                     color:"white", 
                     fontWeight:"bold",
                     fontSize:"1em"
                    }
            },
        },
    
        yAxis: {
            title: {
                text: 'P&L Total',
                style: {color:"white"},
            }, 
            labels:{
                style:{color:"white"  }
            },
        },
        legend: {
            enabled: false
        },
    
        tooltip: {
            pointFormat: '<b>${point.y:,.2f}</b> USD'
        },
    
        series: [{
           
            upColor: Highcharts.getOptions().colors[2],
            color: Highcharts.getOptions().colors[5],
            data: [{
                name: 'Equity',
                y: 120000
            }, {
                name: 'Fixed Income',
                y: 569000
            }, {
                name: 'FX',
                y: 231000
            },  {
                name: 'Options',
                y: -342000
            },  {
                name: 'Futures',
                y: 342000
            }, 
             {
                name: 'Others',
                y: -233000
            }, {
                name: 'Total',
                isSum: true,
                color: Highcharts.getOptions().colors[1]
            }],
            dataLabels: {
                enabled: true,
                formatter: function () {
                    return Highcharts.numberFormat(this.y / 1000, 0, ',') + 'k';
                },
                style: {
                    fontWeight: 'bold'
                }
            },
            pointPadding: 0
        }]

    }
}
};
render(){
    
    const updateData = ( ) => {
        this.setState({
            options : {
                chart: {
                    type: 'waterfall',
                    backgroundColor: "#343A40", 
                },
                title: {
                    text: 'Performance Attribution MTD',
                    style: {
                        color: 'white',
                    }
                },
               
                credits: {
                    enabled: false
                },
                xAxis: {
                    type: 'category',
                    labels: {
                        style: {  color:"white"}
                    },
                },
            
                yAxis: {
                    title: {
                        text: 'P&L Total',
                        style: {color:"white"},
                    }, 
                    labels:{
                        style:{color:"white"  }
                    },
                },
                legend: {
                    enabled: false
                },
            
                tooltip: {
                    pointFormat: '<b>${point.y:,.2f}</b> USD'
                },
            
                series: [{
                    upColor: Highcharts.getOptions().colors[2],
                    color: Highcharts.getOptions().colors[5],
                    data: [{
                        name: 'Equity',
                        y: 120000
                    }, {
                        name: 'Fixed Income',
                        y: -569000
                    }, {
                        name: 'FX',
                        y: 231000
                    },  {
                        name: 'Options',
                        y: -342000
                    },  {
                        name: 'Futures',
                        y: 342000
                    }, 
                     {
                        name: 'Others',
                        y: -233000
                    }, {
                        name: 'Total',
                        isSum: true,
                        color: Highcharts.getOptions().colors[1]
                    }],
                    dataLabels: {
                        enabled: true,
                        formatter: function () {
                            return Highcharts.numberFormat(this.y / 1000, 0, ',') + 'k';
                        },
                        style: {
                            fontWeight: 'bold'
                        }
                    },
                    pointPadding: 0
                }]
        
            }
        })
    };

const renderHighChartCard = (
<HightchartsReact 
highcharts={Highcharts}
constructorType={'chart'}
options={this.state.options} /> 
) ;


return (
<div> 

{renderHighChartCard}

</div>
)
} 

}

 

  
export default Waterfallchart2; 