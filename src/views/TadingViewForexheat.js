import React from "react"; 
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';



export default  class Tabsshow3 extends React.PureComponent {
    constructor(props) {
        super(props);
        this._ref = React.createRef();
        this.state ={ 
          personName: ["EUR","USD", "JPY", "GBP", "CHF", "AUD","CAD", "CNY" ],
        };
        this.currentDOMId = "";
        this.names = [
          "EUR",
            "USD",
            "JPY",
            "GBP",
            "CHF",
            "AUD",
            "CAD",
            "NZD",
            "CNY",
            "TRY",
            "SEK",
            "NOK",
            "DKK",
            "ZAR",
            "HKD",
            "SGD",
            "THB",
            "MXN",
            "IDR",
            "KRW",
            "PLN",
            "ISK",
            "KWD",
            "PHP",
            "MYR",
            "INR",
            "TWD",
            "SAR",
            "AED",
            "RUB",
            "ILS",
            "ARS",
            "CLP",
            "COP",
            "PEN",
            "UYU", 
        ];
    }
 componentDidMount() {
        const script = document.createElement('script');
        script.id = `NN${this.state.personName}`;
        this.currentDOMId = `NN${this.state.personName}`;
        script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-forex-heat-map.js' 
        script.async = true;
        this._ref.current.appendChild(script);
        script.innerHTML = JSON.stringify(
          {
            "width": "100%",
             "height": "100%",
          "currencies": this.state.personName,
          "isTransparent": false,
          "colorTheme": "dark",
          "locale": "en",
          "largeChartUrl": "https://dashx-portfolio.web.app/overview",
        })
     
    }
   


    render() {


      const handleChange = (event) => {
     
        this.setState({personName: event.target.value});


         // Remove the existing DOM elem
    const elem = document.getElementById(this.currentDOMId);
    elem.parentNode.removeChild(elem);

    // Create a new elem with updated values
    // so that updated iframe will load
    const script = document.createElement("script");
    script.id = `NN${this.state.personName}`;
    this.currentDOMId = `NN${this.state.personName}`;
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-forex-heat-map.js";
    script.async = true;
    this._ref.current.appendChild(script);
    script.innerHTML = JSON.stringify(
      {
        "width": "100%",
          "height": "100%",
        "currencies": event.target.value,
        "isTransparent": false,
        "colorTheme": "dark",
        "locale": "en",
        "largeChartUrl": "https://dashx-portfolio.web.app/overview",
      })
      };


      const ITEM_HEIGHT = 48;
      const ITEM_PADDING_TOP = 8;
      const MenuProps = {
            PaperProps: {
              style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 150, 
      backgroundColor:"#1E222D",
      color:"white"
    },
  }

 

};






      const renderOtherSelectBox = () => {



        return (

          <div >
           <FormControl style={{ maxWidth: "270px", backgroundColor:"#1E222D",  }}>
           
              <InputLabel /> 
        
                 <Select
          labelId="demo-mutiple-checkbox-label"
          id="demo-mutiple-checkbox"
          multiple
          value={this.state.personName}
          onChange={handleChange}
          input={<Input />}
          renderValue={(selected) => selected.join(', ')}
          MenuProps={MenuProps}
        >
          {this.names.map((name) => (
            <MenuItem key={name} value={name}>
              <Checkbox checked={this.state.personName.indexOf(name) > -1} />
              <ListItemText primary={name} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>

          </div>


        )

      };

        return (

        <div className="tradingview-widget-container" ref={this._ref}>

          <div >
          {renderOtherSelectBox()}
          </div>
         <div className="tradingview-widget-container__widget"> </div>
           
        </div>
        
        );
    }
   
}

