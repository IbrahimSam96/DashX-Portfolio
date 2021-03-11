
import React from "react"; 

export default  class Tabsshow2 extends React.PureComponent {
    constructor(props) {
        super(props);
        this._ref = React.createRef();
    }
 componentDidMount() {
        const script = document.createElement('script');
        script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-financials.js'
        script.async = true;
        script.innerHTML = JSON.stringify(
        {
            "symbol": "NASDAQ:AAPL",
            "colorTheme": "dark",
            "isTransparent": false,
            "largeChartUrl": "",
            "displayMode": "regular",
            "width": 480,
            "height": 600,
            "locale": "en"
          })

        this._ref.current.appendChild(script);
    }
    render() {
        return(
        <div class="tradingview-widget-container" ref={this._ref}>
            <div class="tradingview-widget-container__widget"></div>
           
        </div>
        );
    }
   
}


  


