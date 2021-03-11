// import { Bookshelf } from './views/getData'; //Database Connection (Controllers for the server, and ASYNC api calls to get Data )

import React, { Component } from 'react';
 //CTX Provider (Make Data available to any Component)
import Securities from './views/Securities';
//React Router
import {Route, Switch} from "react-router-dom"; 
// SideBar
import Template2 from "./views/testtemplate"

// Routes Components 

//Dashboard
import LandingPage2 from './views/Landingv2';

// PortofolioSummary
import Ps from "./views/PortfolioSummary";
import Ps3 from './views/PSPerformanceAttribution';
import Ps5 from './views/PSRiskAdjustedPerformance';
import Ps10 from './views/PSBenchmark';
// Risk Reporting 
import PH from './views/PH';
import PH2 from './views/PH2';
import PH6 from './views/PH6';
import PH7 from './views/PH7';
import PH3 from './views/PH3';
//Exposures
import EXT from './views/EX';
import EX2 from './views/EX2';
//Markets Page
import MarketsPage from './views/Markets';
//Live Portfolio
import LivePortfolio from './views/LivePortfolio';




class App extends Component {

render() {  

return (

<Securities>
<Template2/>
<Switch>
<div >

<Route exact path="/" component={LandingPage2} />

<Route exact path="/PortfolioSummary" component={Ps} />
<Route exact path="/PortfolioSummary/PerformanceAttribution" component={Ps3} /> 
<Route exact path="/PortfolioSummary/RiskAdjustedPerformance" component={Ps5} />
<Route exact path="/PortfolioSummary/Benchmark" component={Ps10} />

<Route exact path="/LivePortfolio" component={LivePortfolio} />

<Route exact path="/Markets" component={MarketsPage} />

<Route exact path="/Securities" component={PH}/>
<Route exact path="/Securities/Equity"component={PH2}/>
<Route exact path="/Securities/Futures"component={PH3}/>
<Route exact path="/Securities/Options" component={PH6}/>
<Route exact path="/Securities/CurrencyByPortfolio" component={PH7}/>

<Route exact path="/Exposures/" component={EXT}/>
<Route exact path="/Exposures/ManagerExposures" component={EX2}/>

<Route exact path="/FXRiskAllocation" />
<Route exact path="/FuturesRiskAllocation" />
<Route exact path="/LiquidityReports" />
<Route exact path="/OverlapReporting" />
<Route exact path="/CorrelationMatrix" />
<Route exact path="/CounterpartyRisk" />
<Route exact path="/PortofolioHoldings" />
<Route exact path="/Exposures2" />
<Route exact path="/PerfomanceAttribution" />
<Route exact path="/ReturnsProfile" />
<Route exact path="/RiskAdjustedPerformance" />
<Route exact path="/PortofolioBuilder" />
<Route exact path="/Factors" />
<Route exact path="/WinLossRatio" />
<Route exact path="/ValueandGrowthModel" />
<Route exact path="/DailyMarkets" />
<Route exact path="/AllocationTool" />
<Route exact path="/DynamicAllocationTool" />
<Route exact path="/HitRate" />
<Route exact path="/IncomeStatement" />
<Route exact path="/BalanceSheet" />
<Route exact path="/DailyNAV" />
<Route exact path="/CFTC" />
<Route exact path="/SolvencyII" />
<Route exact path="/RegulationSHO" />
<Route exact path="/IMACompliance" />
<Route exact path="/StyleDrift" />
<Route exact path="/TradeActivity" />
<Route exact path="/ManagerAUM" />

</div>
</Switch>
</Securities>              


);

}

}

export default App;
