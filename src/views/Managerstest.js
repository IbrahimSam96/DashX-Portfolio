import React, {useEffect, useState} from "react";
import Highcharts, { merge } from "highcharts/highstock";
import HightchartsReact from "highcharts-react-official";
import * as bigAyre from "./IbrahimNEW.json";
import firebase from "firebase"; 



//Data Restructring. 
const finalData = []; 

let z = []; 
let p ; 
let j = bigAyre.default[0].date.length;
for( p = 0 ; p < j ; p++){
z = [ new Date(bigAyre.default[0].date[p]).getTime(), bigAyre.default[0].Exp_Net[p]]

finalData.push({z})
};

const finalData2 = []; 

let z2 = []; 
let p2; 
let j2 = bigAyre.default[10].date.length;
for( p2 = 0 ; p2 < j2 ; p2++){
    z2 = [ new Date(bigAyre.default[10].date[p2]).getTime(), bigAyre.default[10].Exp_Net[p2]]
    finalData2.push({z2})
};

export const finalData3 = []; 

let z3 = []; 
let p3; 
let j3 = bigAyre.default[43].date.length;
for( p3 = 0 ; p3 < j3 ; p3++){
    z3 = [ new Date(bigAyre.default[43].date[p3]).getTime(), bigAyre.default[43].Exp_Net[p3]]
    finalData3.push({z3})
};

const finalData4 = []; 

let z4 = []; 
let p4; 
let j4 = bigAyre.default[3].date.length;
for( p4 = 0 ; p4 < j4 ; p4++){
z4 = [ new Date(bigAyre.default[3].date[p4]).getTime(), bigAyre.default[3].Exp_Net[p4]]
finalData4.push({z4})
};



const Main6 = () => {

const [m1, setM1] = useState([]);
const [m2, setM2] = useState([]);
const [m3, setM3] = useState([]);
const [m4, setM4] = useState([]);




const upload = () => {


var firestore = firebase.firestore();

const docRef = firestore.collection("Security").doc("NetExposure");

docRef.set({finalData,finalData2,finalData3,finalData4}, {merge:true})

.then( () => {
console.log("Document successfully written!");
});     

//Live Listener 
docRef.onSnapshot( (doc) => {
//push finaldata to m1 
doc.data().finalData.map( (obj) => {

Object.values(obj).map((arr) => {m1.push(arr)})

})
//push finaldata2 to m2
doc.data().finalData2.map( (obj) => {

    Object.values(obj).map((arr) => {m2.push(arr)})
    
    })
//push finaldata3 to m3
doc.data().finalData3.map( (obj) => {

    Object.values(obj).map((arr) => {m3.push(arr)})
    
    })
//push finaldata4 to m4
doc.data().finalData4.map( (obj) => {

    Object.values(obj).map((arr) => {m4.push(arr)})
    
    })


});

};


useEffect( () => {

upload();

}, [m1]);



const options = {
        title: {
            useHTML:true,
            text: '<div class="lhsTitle">Exposure by Manager',
            align: 'center',
            x: 0, 
            style: {
                color: 'white',
                fontSize: "23px"
            }
        },
        legend: {
            enabled: true, 
            itemStyle: {color: "white"}
        },
        tooltip: {
           // formatter: function() {
           // const nf = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' })

            //    if (this.points[0].point.index > 0) {
          //        return `<span style="color:{series.color}">${this.points[0].series.name}:</span>` + " " + nf.format(this.y) + '</b>  <b>' + `${this.points[0].point.change.toFixed(2)}` + '%' + `<br/>` + new Date(this.x).toLocaleDateString("en-US") ;
           //     } else {
           //       return   `<span style="color:{series.color}">${this.points[0].series.name}:</span>` + " " + nf.format(this.y) + '</b>  <b>' +  `${this.points[0].point.change.toFixed(2)}` + '%';
           //     }
         //     },
         pointFormat: '<span style="color:{series.color}">{series.name}</span>: ${point.y} <b>{point.change}% </b>',
            valueDecimals: 2, 
            
        },
        
        plotOptions: {
            series: {
                compare: 'percent',
                animation: false

            }
        },
        yAxis: {
            labels: {
                formatter: function () {
                    return (this.value > 0 ? ' + ' : '') + this.value  + '%';
                    
                },
                style: {color: "white"} 
            },
            gridLineColor: ' rgb(68 68 68) '
        },
        credits: {
            enabled: false
        },
        chart: {
            renderTo:"LaGraph",
            height:460,
            backgroundColor: "transparent", 
        },
        scrollbar: {
            barBackgroundColor: '#1976D2',
            buttonBackgroundColor: 'white',
        },
        rangeSelector: {
            buttonTheme: { // styles for the buttons
                fill: 'white',
                stroke: 'none',
                'stroke-width': 0,
                r: 8,
                style: {
                    color: '#039',
                    fontWeight: 'bold'
                },
                states: {
                    hover: {
                    },
                    select: {
                        fill: '#1976D2',
                        style: {
                            color: 'white'
                        }
                    }
                    // disabled: { ... }
                }
            },
            inputBoxBorderColor: 'white',
            inputBoxWidth: 110,
            inputBoxHeight: 15,
            inputStyle: {
                color: '#1976D2',
                fontWeight: 'bold'
            },
            labelStyle: {
                color: 'white',
                fontWeight: 'bold'
            },
            selected: 5
        },
        series: [ {

            data: m1, 
            type: 'line',
            name: 'Manger1',
            id: 'aapl' ,
            }, 
            {
                data: m2, 
                type: 'line',
                name: 'Manger2',
               
            },
            {
                data: m3, 
                type: 'line',
                name: 'Manger3',
                color:"orange"
               
            },
            {
                data: m4, 
                type: 'line',
                name: 'Manger4',
               
            },
        ], 
        
};


const renderHighChartCard = (
<HightchartsReact 
highcharts={Highcharts}
constructorType={'stockChart'}
options={options}
immutable = { true }

/>
);

return (

<div> 



{console.log(m1)}

{renderHighChartCard}

</div>

)

}

export default Main6; 