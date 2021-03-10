import React from "react"; 

export default  class MovingMarkets extends React.PureComponent {
    constructor(props) {
        super(props);
        this._ref = React.createRef();
    }
 componentDidMount() {
        const script = document.createElement('script');
        script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js' 
        script.async = true;
        this._ref.current.appendChild(script);
        script.innerHTML = JSON.stringify(
            {
                  "symbols": [
                    {
                      "proName": "FOREXCOM:SPXUSD",
                      "title": "S&P 500"
                    },
                    {
                      "proName": "FOREXCOM:NSXUSD",
                      "title": "Nasdaq 100"
                    },
                    {
                      "proName": "FX_IDC:EURUSD",
                      "title": "EUR/USD"
                    },
                    {
                      "proName": "BITSTAMP:BTCUSD",
                      "title": "BTC/USD"
                    },
                    {
                      "proName": "BITSTAMP:ETHUSD",
                      "title": "ETH/USD"
                    }
                  ],
                  "showSymbolLogo": true,
                "largeChartUrl": "https://dashx-portfolio.web.app/overview",
                  "colorTheme": "dark",
                  "isTransparent": false,
                  "displayMode": "adaptive",
                  "locale": "en"
                })
    }
   


    render() {

        return(

        <div className="tradingview-widget-container" ref={this._ref}>
          
         <div className="tradingview-widget-container__widget"> </div>
           
        </div>
        );
    }
   
}

