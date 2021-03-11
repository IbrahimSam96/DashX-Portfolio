import React from "react";
import * as Data from "./data.json";
import Card from 'react-bootstrap/Card';

//Recharts Library 
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, BarChart, Bar, Legend } from 'recharts';



// Data Restructring for Recahrts[{},{}..]
const arr = []; 

const values = Object.values(Data.default);

const dates = values[0];
const open = values[1];
const close = values[4];
const volume = values[6]; 
const high = values[2]; 
const low = values[5];

//ForLoop 
var i;
var l = Object.keys(dates)

for (i = 0; i < l.length; i++) {

    const b = {}
    b["Dates"] = dates[i]
    b["Open Price"] = open[i]
    b["Clsoe Price"] = close[i]
    b["Volume"] = volume[i]
    b["High "] = high[i]
    b["Low"] = low[i]

    arr.push(b)
}


// Date formating (String to Number)
var z = Object.values(dates)
const numberDates = z.map( date => {
return new Date(date).getTime();
})

//Data Restructure fro highcharts [[],[],[]...]
export const highChartData = [];
var g;
var n = Object.keys(dates);

for( g = 0; g < n.length; g++ ) {
 
    const p = [numberDates[g],open[g],high[g],low[g],close[g]];

    highChartData.push(p);

}

const Chart = () => {

    const renderSmallCard = (
        <Card border="primary" style={{ width: '18rem' }}>
            <Card.Header>Header</Card.Header>
            <Card.Body>
                <LineChart width={250} height={110} data={arr}>
                    <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                    <CartesianGrid stroke="#ccc" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                </LineChart>
            </Card.Body>
        </Card>
    );

    const renderLineChart = (
        <LineChart width={500} height={400} data={arr} >
            <Line type="linear" dataKey="Open Price" stroke="#8884d8" dot={false}  />
            <CartesianGrid stroke="#ccc" />
            <XAxis dataKey="Dates" />
            <YAxis />
            <Tooltip />
        </LineChart>
    );

    const renderBarChart = (
        <BarChart width={730} height={250} data={arr}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="pv" fill="#8884d8" />
            <Bar dataKey="uv" fill="#82ca9d" />
        </BarChart>
    );

    return (

        <div style={{ position: "relative", top: "0px", left: "0px" }}>

            <div style={{ position: "absolute", top: "75px", left: "175px" }}>
                {renderLineChart}
            </div>

            <div style={{ position: "absolute", top: "75px", left: "725px" }}>
                {renderLineChart}
            </div>
            {console.log(highChartData)}
            {console.log(dates)}
             </div>
        )
}
export default Chart;