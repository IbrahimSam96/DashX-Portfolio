import React from "react"; 

export default  class TechnicalAnalysis extends React.PureComponent {
    constructor(props) {
        super(props);
        this._ref = React.createRef();
    }
 componentDidMount() {
        const script = document.createElement('script');
        script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-technical-analysis.js' 
        script.async = true;
        this._ref.current.appendChild(script);
        script.innerHTML = JSON.stringify(
            {
                  "interval": "1m",
                  "width": "100%",
                  "isTransparent": false,
                  "height": "100%",
                  "symbol": this.props.odd,
                  "showIntervalTabs": true,
                  "locale": "en",
                  "colorTheme": "dark"
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

