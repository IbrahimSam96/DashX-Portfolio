import React from "react"; 

export default  class Fundemental extends React.PureComponent {
    constructor(props) {
        super(props);
        this._ref = React.createRef();
    }
 componentDidMount() {
        const script = document.createElement('script');
        script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-financials.js' 
        script.async = true;
        this._ref.current.appendChild(script);
        script.innerHTML = JSON.stringify(
            {
                  "symbol": this.props.odd,
                  "colorTheme": "dark",
                  "isTransparent": false,
                  "largeChartUrl": "",
                  "displayMode": "regular",
                  "width": "100%",
                  "height": "100%",
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

