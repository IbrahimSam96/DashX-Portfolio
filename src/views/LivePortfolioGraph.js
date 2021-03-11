import React, { useEffect, useState } from "react";
import { createChart } from 'lightweight-charts';
import _debounce from 'lodash.debounce';
import firebase from "firebase"; 



const  LivePortfolioGraph = (props) => {

const [width, setWidth] = useState(0);
const [zobe, setZobe] = useState([]);


useEffect( ()=> {


const handleResize = _debounce(() => {chart.applyOptions({width: props.g.current.clientWidth,   });  } ,100 ); 

window.addEventListener("resize", handleResize); 


const chart = createChart(props.g.current, {
        width: width,
        height: 450,
        layout: {
            textColor: '#d1d4dc',
            backgroundColor: '#131722',
        },
        rightPriceScale: {
            scaleMargins: {
                top: 0.3,
                bottom: 0.25,
            },
        },
        timeScale: {
            visible: true,
        },
        crosshair: {
            vertLine: {
                width: 5,
                color: 'rgba(224, 227, 235, 0.1)',
                style: 0,
            },
            horzLine: {
                visible: false,
                labelVisible: true,
            },
        },
        localization: {
            priceFormatter: price => {
            const nf = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' })
             return   nf.format(price)
            },
    

        },    
        grid: {
            vertLines: {
                color: 'rgba(42, 46, 57, 0)',
            },
            horzLines: {
                color: 'rgba(42, 46, 57, 0)',
            },
        },
});



var areaSeries = chart.addAreaSeries({
topColor: 'rgba(38, 198, 218, 0.04)',
bottomColor: 'rgba(38, 198, 218, 0.04)',
lineColor: 'rgba(38, 198, 218, 1)',
lineWidth: 2,
crossHairMarkerVisible: false,
});



var firestore = firebase.firestore();

const docRef = firestore.collection("Security").doc("NetExposure");

//Live Listener 
docRef.onSnapshot(  (doc) => {

doc.data().finalData2.map( (obj) => {

Object.values(obj).map( (arr) => {  zobe.push({time: new Date(arr[0]).toISOString().split('T')[0], value:arr[1]}) } ) 

areaSeries.setData(zobe) 


});


});

const delay = ms => new Promise(res => setTimeout(res, ms));




var legend = document.createElement('div');
legend.classList.add('legend');
props.g.current.appendChild(legend);


var firstRow = document.createElement('span');
firstRow.classList.add("FirstRow");
firstRow.innerHTML = 'GAV $';

firstRow.style.color = 'white';


var firstRowPerc = document.createElement('div');
firstRowPerc.classList.add("FirstRowPerc");
firstRowPerc.innerHTML = 'N/A';
firstRowPerc.style.color = 'white';


var dateholder = document.createElement('div');
dateholder.classList.add("dateholder");
dateholder.innerHTML = '';


var GAV = props.GAV.current

var GavValue = document.createElement("div"); 
GavValue.classList.add("GavValue");
GavValue.style.color = "white"
GavValue.style.display = "inline-block"
GavValue.style.fontSize = "2rem"
GavValue.style.letterSpacing = "1px"
GavValue.style.fontFamily = "'Trebuchet MS',  Arial, sans-serif"


var DTD = document.createElement("span");
DTD.classList.add("DTD"); 
DTD.style.color = "white";
DTD.style.display= "inline-block"
DTD.style.paddingLeft = "15px"
DTD.style.fontFamily = "'Trebuchet MS',  Arial, sans-serif"


var GavChange = document.createElement("span")
GavChange.classList.add("GavChange"); 
GavChange.style.color = "white";
GavChange.style.display= "inline-block";
GavChange.style.fontFamily = "'Trebuchet MS',  Arial, sans-serif"
GavChange.style.paddingLeft = "15px";

var Gavtooltip = document.createElement("span");
Gavtooltip.classList.add("Gavtooltip");
Gavtooltip.style.display = "inline-block";
Gavtooltip.style.position ="absolute";
Gavtooltip.style.color = "white"; 
Gavtooltip.style.visibility = "hidden";
Gavtooltip.style.backgroundColor = "#11151f";

var tooltiptext = document.createElement("span");
tooltiptext.classList.add("tooltiptext");
tooltiptext.innerHTML = "DTD Change %"
tooltiptext.style.display = "inline-block";
tooltiptext.style.position ="absolute";
tooltiptext.style.color = "white"; 
tooltiptext.style.visibility = "hidden";
tooltiptext.style.backgroundColor = "#11151f";






GAV.appendChild(GavValue);
GAV.appendChild(DTD);
GAV.appendChild(GavChange);
GAV.appendChild(Gavtooltip);
GAV.appendChild(tooltiptext);

legend.appendChild(firstRow);
legend.appendChild(dateholder);
legend.appendChild(firstRowPerc);




const tootlipActivate = async ( ) => {

await delay(1000);

chart.subscribeCrosshairMove((param) => {
if (param.time) {
    const lastprice = areaSeries.Oe.Bi.Ae[areaSeries.Oe.Bi.Ae.length - 1].F
        const price = param.seriesPrices.get(areaSeries);
        const percenetage =  price / areaSeries.Oe.Bi.Ae[0].F * 100 -100;                  
        const nf = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' })
        var previousDayPrice = areaSeries.Oe.Bi.Ae[areaSeries.Oe.Bi.Ae.length - 2].F;
        var DChange =  lastprice - previousDayPrice 
        var DTDChange  =  DChange/lastprice*100
        var IncepDate = new Date (`${zobe[0].time["year"]} ${zobe[0].time["month"]} ${zobe[0].time["day"]}` ) 
        var LastDate =  new Date (`${zobe[zobe.length-1].time["year"]} ${zobe[zobe.length-1].time["month"]} ${zobe[zobe.length-1].time["day"]}` )
        var Diffrence = Math.abs(IncepDate -LastDate) 
        var daysinyear = 1000 * 60 * 60 * 24 ;
        var monthsinyear = 1000 * 60 * 60 * 24 *30.4167 
        var Yearsdif = 1000 * 60 * 60 * 24 *30.4167 *12
        var DiffrenceinDays = `${Math.round(Diffrence / daysinyear)} Days`
        var DiffrenceinMonths = `${Math.round(Diffrence / monthsinyear)} Months`
        var DiffrenceinYears = `${Math.round(Diffrence / Yearsdif)} Years`
        const bf = new Intl.NumberFormat('en-US' )

        firstRow.innerHTML = ` GAV  ${nf.format(price.toFixed(2))} `;
        firstRow.style.color = 'white';

        firstRowPerc.innerHTML = `${percenetage.toFixed(2)} %`

        dateholder.innerHTML = `${param.time.day}/${param.time.month} /${param.time.year}`
        dateholder.style.display = "inline-block";


        GavValue.innerHTML = nf.format(lastprice); 
        GavChange.innerHTML = bf.format(DChange);
        DTD.innerHTML = `${DTDChange.toFixed(3)}%`

        Gavtooltip.innerHTML = ` Last Update: ${zobe[zobe.length -1] .time.day}/${zobe[zobe.length -1] .time.month}/${zobe[zobe.length -1].time.year} `
       
console.log( DiffrenceinDays , DiffrenceinMonths, DiffrenceinYears )

        // % Since incepton Graph
         if(percenetage.toString()[0] === "-"){
            firstRowPerc.style.color = "red";
        }
        else{
            firstRowPerc.style.color = "green"   ;
        }

// Day 2 Day Change
        if(DChange.toString()[0] === "-"){
            GavChange.style.color = "red";
        }
        else{
            GavChange.style.color = "green"    ;
        }
//  Day 2 Day Change %
        if(DTDChange.toString()[0] === "-"){
            DTD.style.color = "red";
        }
        else{
            DTD.style.color = "green"    ;
        }
        
    }

else {

const lastprice = areaSeries.Oe.Bi.Ae[areaSeries.Oe.Bi.Ae.length - 1].F
const percenetage =  lastprice / areaSeries.Oe.Bi.Ae[0].F * 100 -100; 
    var previousDayPrice = areaSeries.Oe.Bi.Ae[areaSeries.Oe.Bi.Ae.length - 2].F;
    var DChange =  lastprice - previousDayPrice 
    var DTDChange  =  DChange/ lastprice * 100
    const nf = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' } )
    const bf = new Intl.NumberFormat('en-US' )

      firstRow.innerHTML = 'GAV ' +  nf.format(lastprice.toFixed(2));
      firstRow.style.color = 'white';

      firstRowPerc.innerHTML = `${percenetage.toFixed(2)} %`

    dateholder.innerHTML = ``
    dateholder.style.display = "none";




      if(percenetage.toString()[0] === "-"){
        firstRowPerc.style.color = "red";
    }
    else{
        firstRowPerc.style.color = "green"    ;
    }

  }
});

}

tootlipActivate();



// Clean Up
return () => {
window.removeEventListener('resize', handleResize);

}

}, [zobe])



return (


<div style={{position:"relative", left:"5%", height:"100%", width:"100%", display:"none"}}>

</div>

)

}

export default LivePortfolioGraph;