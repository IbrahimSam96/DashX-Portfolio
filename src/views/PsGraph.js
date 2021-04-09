import React from "react";
import Highcharts, { color } from "highcharts/highstock";
import HightchartsReact from "highcharts-react-official";
import drilldown from "highcharts/modules/drilldown.js";
drilldown(Highcharts);


class PsGraph extends React.Component {
constructor(props){
super(props)
this.state= {
     options : {
        title: {
            useHTML:true,
            text: '<div class="lhsTitle">Gross Exposure By Sector',
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
            renderTo:"PieEx",
            backgroundColor: "transparent", 
        },
        plotOptions: {
            series: {
                dataLabels: {
                    enabled: true,
                    style: {
                 
                      fontWeight: "bold",
                      color:"white",
                      textDecoration: 'none',
                        fontFamily: "Arial"
                    }
                }
            }
        },
        series: [
             {

            data: [
            { y: 30000000, name: "Technology"},
            { y: 1000000, name: "Industrials"},
            { y: 5000000, name: "Energy"},
            { y: 20000000, name: "Utilities"},
            { y: 4000000, name: "Communications"},
            { y: 2000000, name: "Financials"}, 
        ], 
            type: 'pie',
            name: 'Sector',
            id: 'aapl'    
            }
        ], 
        tooltip: {
            formatter: function() {
                if (this.series.chart.drilldownLevels !== undefined && this.series.chart.drilldownLevels.length > 0) {
                    return this.key + ":" + this.y  ;
                    
                } else {
                    const nf = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' })
                    
                    return   ` <b> ${nf.format(this.y)} </b>  \u00A0\u00A0\u00A0\u00A0 <b>${this.percentage.toFixed(2)}% </b>`  
                  
                }
                
            }
        },

    }
};

}

render(){

 const renderHighChartCard = (
                <HightchartsReact highcharts={Highcharts}
                    constructorType={'chart'}
                    options={this.state.options}
                />
        ) 

    return (
        <div> 
        {renderHighChartCard}
        </div>
        )
    }
}

export default PsGraph; 