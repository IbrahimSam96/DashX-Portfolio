import React, { useState } from 'react';
import DateFnsUtils from '@date-io/date-fns'; 
import {
  DatePicker,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';
import { createMuiTheme } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";

 export  const  YearMonthPicker = () => {

    const theme = createMuiTheme({
        overrides: {
          MuiInputLabel: { // Name of the component ⚛️ / style sheet
            root: { // Name of the rule
              color: "white",
              fontSize:"1.5em",
              "&$focused": { // increase the specificity for the pseudo class
                color: "white"
              },
            },
          },
          MuiInput: {
            underline: {
              '&:before': { //underline color when textfield is inactive
                borderBottom: '1px solid teal',
              },
              '&:hover:not($disabled):before': { //underline color when hovered 
                borderBottom: '1px solid teal',
              },
            }
          }
        }
      });
      

  const [selectedDate, handleDateChange] = useState(new Date());

  return (
    <div> 

    <h1  style={{color:"white", width:"5%", fontWeight:"bold", position:"relative", marginRight:"30%", fontSize:"1em", float:"left", marginTop:"-15%"}}> Select Period </h1>

    <ThemeProvider theme={theme}>
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <DatePicker variant="inline"
        label="Date"
        autoOk={true}
        value={selectedDate}
        onChange={handleDateChange}
        InputProps={{
            style: {
                color: "white",
                fontWeight:"bold",
                fontSize:"1.0em"
            }
        }}  
        style={{width:"65%"}}
        />
    </MuiPickersUtilsProvider>
    </ThemeProvider>

    </div>
  );
}