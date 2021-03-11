import React from "react"; 

import Tabsshow from "./TradingView";
import StockGainer from "./TradingViewStockMarketGainer";
import Tabsshow3 from "./TadingViewForexheat";
import MovingMarkets from "./MovingMarkets";
import TradingViewWidget, {Themes} from 'react-tradingview-widget';



const MarketsPage = (props) => {


const tradingViewlive = ( ) => (        

<TradingViewWidget symbol="NASDAQ:AAPL" theme={Themes.DARK} autosize hide_side_toolbar={false} details={true}/>

);


return ( 

<div className="MarketsPage">

<div style={{backgroundColor:"#181C28", position:"fixed", top:"0%", left:"-100vw", height:"100%", width:"500vw", zIndex:-3}}>

</div>

<div className="MovingMarkets" >
<MovingMarkets/>
</div>

<div className="MaMar">
<Tabsshow/>
</div>

<div className="MaGraph">
{tradingViewlive()}  
</div>  

<div className="MaOver">
<StockGainer/>
</div>

<div className="MaForex" >
<Tabsshow3/>
</div>


</div>


);

}

export default MarketsPage;
