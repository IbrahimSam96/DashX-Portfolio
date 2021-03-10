import React from "react"
import TradingViewWidget, {Themes} from 'react-tradingview-widget';
import CryptoOverview from "./CryptoOverview";
import Template2 from "./testtemplate"


import SymbolOverview from "./TradingViewSymbolOverview";


const CryptoProfile = (props) => {


    const tradingViewlive = ( ) => (

        <TradingViewWidget symbol={props.odd} theme={Themes.DARK} autosize />
        
        );


return (


<div className="CR">

<div style={{backgroundColor:"#181C28", position:"fixed", top:"0%", left:"-100vw", height:"100%", width:"500vw", zIndex:-3}}>

</div>

<div className="SideBar">
    <Template2/>
</div>


<div className="SymbCr">
<SymbolOverview odd={props.odd} />  
</div>

<div className="CrGraph">
{tradingViewlive()}  
</div>  

<div className="OverCr">
<CryptoOverview />
</div>

</div>

);

}


export default CryptoProfile; 
