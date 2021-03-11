import React from "react";

export default class MarketsScreener extends React.PureComponent {
  constructor(props) {
    super(props);
    this._ref = React.createRef();
    this.state = {
    option: {
              "width": "100%",
              "height": "100%",
            "largeChartUrl": "https://marketssnap.web.app/overview",
              "defaultColumn": "overview",
              "defaultScreen": "most_capitalized",
              "market": "america",
              "showToolbar": true,
              "colorTheme": "dark",
              "locale": "en"
    },
      type: "america"
    };
    this.currentDOMId = "";
  }

  componentDidMount() {
    const script = document.createElement("script");
    script.id = `gg${this.state.type}`;
    this.currentDOMId = `gg${this.state.type}`;
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-screener.js";
    script.async = true;
    this._ref.current.appendChild(script);
    script.innerHTML = JSON.stringify(this.state.option);
  }

  Changeexchange = (e) => {
   
    this.setState({
      type: e.target.value
    });

    // Remove the existing DOM elem
    const elem = document.getElementById(this.currentDOMId);
    elem.parentNode.removeChild(elem);

    // Create a new elem with updated values
    // so that updated iframe will load
    const script = document.createElement("script");
    script.id = `gg${this.state.type}`;
    this.currentDOMId =`gg${this.state.type}`;
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-screener.js";
    script.async = true;
    this._ref.current.appendChild(script);
    if (e.target.value === "crypto" ) { 
        script.innerHTML = JSON.stringify({
              "width": "100%",
              "height": "100%",
            "largeChartUrl": "https://marketssnap.web.app/crypto",
              "defaultColumn": "overview",
              "defaultScreen": "general",
              "market": e.target.value,
              "showToolbar": true,
              "colorTheme": "dark",
              "locale": "en"
          })
    } 
   else if (e.target.value === "forex" ) { 
      script.innerHTML = JSON.stringify({
            "width": "100%",
            "height": "100%",
          "largeChartUrl": "https://marketssnap.web.app/overview",
            "defaultColumn": "overview",
            "defaultScreen": "general",
            "market": e.target.value,
            "showToolbar": true,
            "colorTheme": "dark",
            "locale": "en"
        })
  } 
    else{

      script.innerHTML = JSON.stringify({
          "width": "100%",
          "height": "100%",
        "largeChartUrl": "https://marketssnap.web.app/overview",
          "defaultColumn": "overview",
          "defaultScreen": "most_capitalized",
          "market": e.target.value,
          "showToolbar": true,
          "colorTheme": "dark",
          "locale": "en"
      })

    }
  };

  SelectBox = () => {
    return (
      <div className="select-div">

        <select
          className="exchange"
          value={this.state.type}
          name="pagination"
          onChange={this.Changeexchange}
        >
          <option value="america"> US Exchanges </option>
          <option value="australia"> Australia (ASX) </option>
          <option value="canada"> Canada (TSX, TSXV, CSE, NEO) </option>
          <option value="egypt"> Egypt (EGX) </option>
          <option value="germany"> Germany (FWB, SWB, XETR)</option>
          <option value="india"> India (BSE, NSE) </option>
          <option value="israel"> Israel (TASE) </option>
          <option value="italy"> Italy (MIL, MILSEDEX) </option>
          <option value="poland"> Poland (NEWCONNECT)</option>
          <option value="turkey"> Turkey (BIST) </option>
          <option value="uk"> United Kingdom (LSE, LSIN) </option>
          <option value="vietnam"> Vietnam (HNX) </option>
          <option value="forex"> Forex </option>
          <option value="crypto"> Crypto </option>
        </select>
      </div>
    );
  };

  render() {

    return (
      <div className="tradingview-widget-container" ref={this._ref}>

        <div >
          {this.SelectBox()} 
     
        </div>
        <div className="tradingview-widget-container__widget"> </div>
      </div>
    );
  }
}
