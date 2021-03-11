import React from "react";

export default class StockGainer extends React.PureComponent {
  constructor(props) {
    super(props);
    this._ref = React.createRef();
    this.state = {
      exchange: "US"
    };
    this.currentDOMId = "";
  }
  componentDidMount() {
    const script = document.createElement("script");
    script.id = `dom-exchng-id-${this.state.exchange}`;
    this.currentDOMId = `dom-exchng-id-${this.state.exchange}`;
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-hotlists.js";
    script.async = true;
    this._ref.current.appendChild(script);
    script.innerHTML = JSON.stringify(
      {
            "colorTheme": "dark",
            "dateRange": "12M",
            "exchange": `${this.state.exchange}`,
            "showChart": true,
            "locale": "en",
            "largeChartUrl": "https://dashx-portfolio.web.app/overview",
            "isTransparent": false,
            "showSymbolLogo": true,
            "width": "100%",
            "height": "100%",
            "plotLineColorGrowing": "rgba(25, 118, 210, 1)",
            "plotLineColorFalling": "rgba(25, 118, 210, 1)",
            "gridLineColor": "rgba(42, 46, 57, 1)",
            "scaleFontColor": "rgba(120, 123, 134, 1)",
            "belowLineFillColorGrowing": "rgba(33, 150, 243, 0.12)",
            "belowLineFillColorFalling": "rgba(33, 150, 243, 0.12)",
            "symbolActiveColor": "rgba(33, 150, 243, 0.12)"
          }
          )
  }

  Changeexchange = (e) => {
    this.setState({ exchange: e.target.value });

    // Remove the existing DOM elem
    const elem = document.getElementById(this.currentDOMId);
    elem.parentNode.removeChild(elem);

    // Create a new elem with updated values
    // so that updated iframe will load
    const script = document.createElement("script");
    script.id = `dom-exchng-id-${this.state.exchange}`;
    this.currentDOMId = `dom-exchng-id-${this.state.exchange}`;
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-hotlists.js";
    script.async = true;
    this._ref.current.appendChild(script);
    script.innerHTML = JSON.stringify(
      {
            "colorTheme": "dark",
            "dateRange": "12M",
            "exchange": e.target.value,
            "showChart": true,
            "locale": "en",
            "largeChartUrl": "https://dashx-portfolio.web.app/overview",
            "isTransparent": false,
            "showSymbolLogo": true,
          "width": "100%",
            "height": "100%",
            "plotLineColorGrowing": "rgba(25, 118, 210, 1)",
            "plotLineColorFalling": "rgba(25, 118, 210, 1)",
            "gridLineColor": "rgba(42, 46, 57, 1)",
            "scaleFontColor": "rgba(120, 123, 134, 1)",
            "belowLineFillColorGrowing": "rgba(33, 150, 243, 0.12)",
            "belowLineFillColorFalling": "rgba(33, 150, 243, 0.12)",
            "symbolActiveColor": "rgba(33, 150, 243, 0.12)"
          })
  };

  SelectBox = () => (
    <div className="select-div">
      <select
        className="exchange"
        value={this.state.exchange}
        name="pagination"
        onChange={this.Changeexchange}
      >
             <option  value="US"> USA (US Exchanges)</option>
              <option value="NASDAQ"> USA (NASDAQ)</option>
              <option value="NYSE"> USA (NYSE)</option>
              <option value="AMEX"> USA (NYSE ARCA)</option>
              <option value="OTC"> USA (OTC)  </option>
              <option value="ASX"> Australia (ASX) </option>
              <option value="TSX"> Canada (TSX) </option>
              <option value="CSE"> Canada (CSE)</option>
              <option value="NEO"> Canada (NEO) </option>
              <option value="TSXV"> Canada (TSXV)</option>
              <option value="EGX"> EGY (EGX)</option>
              <option value="FWB"> Germany (FWB)</option>
              <option value="SWB"> Germany (SWB) </option>
              <option value="XETR"> Germany (XETR)</option>
              <option value="NSE"> India (NSE) </option>
              <option value="BSE"> India (BSE) </option>
              <option value="MIL"> Italy (MIL)</option>
              <option value="NEWCONNECT"> Poland (NEWCONNECT) </option>
              <option value="BIST"> Turkey (BIST)</option>
              <option value="LSE"> United Kingdom (LSE)</option>
              <option value="LSIN"> United Kingdom (LSIN) </option>
              <option value="HNX"> Vietnam (HNX) </option>
      </select>
    </div>
  );

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

