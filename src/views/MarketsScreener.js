import React from "react"

import Template2 from "./testtemplate"
import MarketsScreener from "./TradingViewMarketsScreener";


const MarketsScreen = (props) => {


return (


<div className="SA">

<div style={{backgroundColor:"#181C28", position:"fixed", top:"0%", left:"-100vw", height:"100%", width:"500vw", zIndex:-3}}>

</div>


<div className="SideBar">
<Template2/>
</div>

<div className="Scree">
<MarketsScreener/>
</div>

</div>

);

}


export default MarketsScreen; 
