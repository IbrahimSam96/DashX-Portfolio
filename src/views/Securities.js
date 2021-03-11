import React from "react"
import * as Data from "./ibrahim.json"
import { Provider } from "./CTX";



class Securities extends React.Component {

constructor(props) {
    super(props)
    this.state = {
        Long:{}, // Quantity of Long Position
        Short:{}, // Quantity of Short Position
        priceHistory: Data.date, // End of Day Pricing (One price for each trading day for example. We could change this instead to Hourly Pricing, then you will get one price per trading hour)
        currentPrice: Data.price, //  Most recent price,
        ticker:{}, // Unique Security Identifier (We might need to add more than one type)
        quantity: Data.quantity, // Net Quantity (Long minus Short)
        contractSize:{}, // For Equities, =1
        costPerUnit:{}, // The average cost per unit.
        currency:{}, // Local Currency of the Security
        category:{}, // Asset Class (e.g. Equity / Fixed Income / Futures / Options)
        sector:{}, // Sector information (e.g. Technology, Industrials, Financial Services)
        description:{}, // Description information (i.e. Full Name)
        entryDate:{}, // Date of First Purchase (if bought then sold completely then bought again, this date will change to the newer date)
        marketValue : Data.market_value, // Market Value of the position. For Equities, =quantity x currentPrice
        unrealizedPL : Data.unrealized_pnl, // Unrealized P&L
        realizedPL : Data.realized_pnl, // Realized P&L
        costBasis : Data.cost_basis, // Total Exposure based on costPerUnit. For Futures, this will NOT be equal to Margin. 

    };      
}



render() {

return (
    
    <div>
        
     <Provider value ={this.state}>
       {this.props.children}
       {console.log(this.state)}
      </Provider>
    </div>
)

}

}

export default Securities;
