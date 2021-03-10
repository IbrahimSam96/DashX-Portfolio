import React from "react";

export default class Tabsshow extends React.PureComponent {
  constructor(props) {
    super(props);
    this._ref = React.createRef();
    this.state = {
      stock: {
        title: "Stocks",
        tabs: [
          {
            title: "Financial",
            symbols: [
              {
                s: "NYSE:JPM",
                d: "Jpmorgan Chase & Co"
              },
              {
                s: "NYSE:WFC",
                d: "Wells Fargo Co New"
              },
              {
                s: "NYSE:BAC",
                d: "Bank Amer Corp"
              },
              {
                s: "NYSE:HSBC",
                d: "Hsbc Hldgs Plc"
              },
              {
                s: "NYSE:C",
                d: "Citigroup Inc"
              },
              {
                s: "NYSE:MA",
                d: "Mastercard Incorporated"
              }
            ]
          },
          {
            title: "Technology",
            symbols: [
              {
                s: "NASDAQ:AAPL",
                d: "Apple"
              },
              {
                s: "NASDAQ:GOOGL",
                d: "Google Inc"
              },
              {
                s: "NASDAQ:MSFT",
                d: "Microsoft Corp"
              },
              {
                s: "NASDAQ:FB",
                d: "Facebook Inc"
              },
              {
                s: "NYSE:ORCL",
                d: "Oracle Corp"
              },
              {
                s: "NASDAQ:INTC",
                d: "Intel Corp"
              }
            ]
          },
          {
            title: "Services",
            symbols: [
              {
                s: "NASDAQ:AMZN",
                d: "Amazon Com Inc"
              },
              {
                s: "NYSE:BABA",
                d: "Alibaba Group Hldg Ltd"
              },
              {
                s: "NYSE:T",
                d: "At&t Inc"
              },
              {
                s: "NYSE:WMT",
                d: "Wal-mart Stores Inc"
              },
              {
                s: "NYSE:CHL",
                d: "China Mobile Limited"
              },
              {
                s: "NYSE:V",
                d: "Visa Inc"
              }
            ]
          }
        ],
        width: "100%",
        height: "100%",
        largeChartUrl: "https://dashx-portfolio.web.app/overview",
        showChart: true,
        locale: "en",
        plotLineColorGrowing: "rgba(33, 150, 243, 1)",
        plotLineColorFalling: "rgba(33, 150, 243, 1)",
        belowLineFillColorGrowing: "rgba(33, 150, 243, 0.12)",
        belowLineFillColorFalling: "rgba(33, 150, 243, 0.12)",
        gridLineColor: "#2A2E39",
        scaleFontColor: "rgba(120, 123, 134, 1)",
        showSymbolLogo: true,
        symbolActiveColor: "rgba(33, 150, 243, 0.12)",
        colorTheme: "dark"
      },
      indices: {
        title: "Indices",
        tabs: [
          {
            title: "US & Canada",
            title_raw: "US & Canada",
            symbols: [
              {
                s: "FOREXCOM:SPXUSD",
                d: "S&P 500"
              },
              {
                s: "FOREXCOM:NSXUSD",
                d: "Nasdaq 100"
              },
              {
                s: "CME_MINI:ES1!",
                d: "S&P 500 E-MINI FUTURES"
              },
              
              {
                s: "INDEX:DXY",
                d: "U.S. Dollar Currency Index"
              },
              {
                s: "FOREXCOM:DJI",
                d: "Dow 30"
              }
            ]
          },
          {
            title: "Europe",
            title_raw: "Europe",
            symbols: [
              {
                s: "INDEX:SX5E",
                d: "Euro Stoxx 50"
              },
              {
                s: "FOREXCOM:UKXGBP",
                d: "FTSE 100"
              },
              {
                s: "INDEX:DEU30",
                d: "DAX Index"
              },
              {
                s: "INDEX:CAC40",
                d: "CAC 40 Index"
              },
              {
                s: "INDEX:SMI"
              }
            ]
          },
          {
            title: "Asia/Pacific",
            title_raw: "Asia/Pacific",
            symbols: [
              {
                s: "INDEX:NKY",
                d: "Nikkei 225"
              },
              {
                s: "INDEX:HSI",
                d: "Hang Seng"
              },
              {
                s: "BSE:SENSEX",
                d: "BSE SENSEX"
              },
              {
                s: "BSE:BSE500"
              },
              {
                s: "INDEX:KSIC",
                d: "Kospi Composite"
              }
            ]
          }
        ],
        width: "100%",
        height: "100%",
        showChart: true,
        "largeChartUrl": "https://dashx-portfolio.web.app/overview",
        locale: "en",
        plotLineColorGrowing: "rgba(33, 150, 243, 1)",
        plotLineColorFalling: "rgba(33, 150, 243, 1)",
        belowLineFillColorGrowing: "rgba(33, 150, 243, 0.12)",
        belowLineFillColorFalling: "rgba(33, 150, 243, 0.12)",
        gridLineColor: "#2A2E39",
        scaleFontColor: "rgba(120, 123, 134, 1)",
        showSymbolLogo: true,
        symbolActiveColor: "rgba(33, 150, 243, 0.12)",
        colorTheme: "dark"
      },
      forex: {
        title: "Currencies",
        tabs: [
          {
            title: "Major",
            title_raw: "Major",
            symbols: [
              {
                s: "FX_IDC:EURUSD"
              },
              {
                s: "FX_IDC:USDJPY"
              },
              {
                s: "FX_IDC:GBPUSD"
              },
              {
                s: "FX_IDC:AUDUSD"
              },
              {
                s: "FX_IDC:USDCAD"
              },
              {
                s: "FX_IDC:USDCHF"
              }
            ],
            quick_link: {
              title: "More majors",
              href: "/markets/currencies/rates-major/"
            }
          },
          {
            title: "Minor",
            title_raw: "Minor",
            symbols: [
              {
                s: "FX_IDC:EURGBP"
              },
              {
                s: "FX_IDC:EURJPY"
              },
              {
                s: "FX_IDC:GBPJPY"
              },
              {
                s: "FX_IDC:CADJPY"
              },
              {
                s: "FX_IDC:GBPCAD"
              },
              {
                s: "FX_IDC:EURCAD"
              }
            ],
            quick_link: {
              title: "More minors",
              href: "/markets/currencies/rates-minor/"
            }
          },
          {
            title: "Exotic",
            title_raw: "Exotic",
            symbols: [
              {
                s: "FX_IDC:USDSEK"
              },
              {
                s: "FX_IDC:USDMXN"
              },
              {
                s: "FX_IDC:USDZAR"
              },
              {
                s: "FX_IDC:EURTRY"
              },
              {
                s: "FX_IDC:EURNOK"
              },
              {
                s: "FX_IDC:GBPPLN"
              }
            ],
            quick_link: {
              title: "More exotics",
              href: "/markets/currencies/rates-exotic/"
            }
          }
        ],
        width: "100%",
        height: "100%",
        largeChartUrl: "https://dashx-portfolio.web.app/overview",
        showChart: true,
        locale: "en",
        plotLineColorGrowing: "rgba(33, 150, 243, 1)",
        plotLineColorFalling: "rgba(33, 150, 243, 1)",
        belowLineFillColorGrowing: "rgba(33, 150, 243, 0.12)",
        belowLineFillColorFalling: "rgba(33, 150, 243, 0.12)",
        gridLineColor: "#2A2E39",
        scaleFontColor: "rgba(120, 123, 134, 1)",
        showSymbolLogo: true,
        symbolActiveColor: "rgba(33, 150, 243, 0.12)",
        colorTheme: "dark"
      },
      crypto: {
        title: "Cryptocurrencies",
        title_raw: "Cryptocurrencies",
        tabs: [
          {
            title: "Overview",
            title_raw: "Overview",
            symbols: [
              {
                s: "BITSTAMP:BTCUSD"
              },
              {
                s: "BITSTAMP:ETHUSD"
              },
              {
                s: "BITSTAMP:XRPUSD"
              },
              {
                s: "COINBASE:BCHUSD"
              },
              {
                s: "COINBASE:LTCUSD"
              },
              {
                s: "BITFINEX:IOTUSD"
              }
            ],
            quick_link: {
              title: "More cryptocurrencies",
              href: "/markets/cryptocurrencies/prices-all/"
            }
          },
          {
            title: "Bitcoin",
            title_raw: "Bitcoin",
            symbols: [
              {
                s: "BITSTAMP:BTCUSD"
              },
              {
                s: "COINBASE:BTCEUR"
              },
              {
                s: "COINBASE:BTCGBP"
              },
              {
                s: "BITFLYER:BTCJPY"
              },
              {
                s: "CEXIO:BTCRUB"
              },
              {
                s: "CME:BTC1!"
              }
            ],
            quick_link: {
              title: "More Bitcoin pairs",
              href: "/markets/cryptocurrencies/prices-bitcoin/"
            }
          },
          {
            title: "XRP",
            title_raw: "XRP",
            symbols: [
              {
                s: "BITSTAMP:XRPUSD"
              },
              {
                s: "KRAKEN:XRPEUR"
              },
              {
                s: "KORBIT:XRPKRW"
              },
              {
                s: "BITSO:XRPMXN"
              },
              {
                s: "BINANCE:XRPBTC"
              },
              {
                s: "BITTREX:XRPETH"
              }
            ],
            quick_link: {
              title: "More XRP pairs",
              href: "/markets/cryptocurrencies/prices-xrp/"
            }
          },
          {
            title: "Ethereum",
            title_raw: "Ethereum",
            symbols: [
              {
                s: "COINBASE:ETHUSD"
              },
              {
                s: "KRAKEN:ETHEUR"
              },
              {
                s: "KRAKEN:ETHGBP"
              },
              {
                s: "KRAKEN:ETHJPY"
              },
              {
                s: "POLONIEX:ETHBTC"
              },
              {
                s: "KRAKEN:ETHXBT"
              }
            ],
            quick_link: {
              title: "More Ethereum pairs",
              href: "/markets/cryptocurrencies/prices-ethereum/"
            }
          },
          {
            title: "Bitcoin Cash",
            title_raw: "Bitcoin Cash",
            symbols: [
              {
                s: "COINBASE:BCHUSD"
              },
              {
                s: "BITSTAMP:BCHEUR"
              },
              {
                s: "CEXIO:BCHGBP"
              },
              {
                s: "BITSTAMP:BCHBTC"
              },
              {
                s: "HITBTC:BCHETH"
              },
              {
                s: "KRAKEN:BCHXBT"
              }
            ],
            quick_link: {
              title: "More Bitcoin Cash pairs",
              href: "/markets/cryptocurrencies/prices-bitcoin-cash/"
            }
          }
        ],
        width: "100%",
        height: "100%",
        largeChartUrl: "https://dashx-portfolio.web.app/crypto",
        showChart: true,
        locale: "en",
        plotLineColorGrowing: "rgba(33, 150, 243, 1)",
        plotLineColorFalling: "rgba(33, 150, 243, 1)",
        belowLineFillColorGrowing: "rgba(33, 150, 243, 0.12)",
        belowLineFillColorFalling: "rgba(33, 150, 243, 0.12)",
        gridLineColor: "#2A2E39",
        scaleFontColor: "rgba(120, 123, 134, 1)",
        showSymbolLogo: true,
        symbolActiveColor: "rgba(33, 150, 243, 0.12)",
        colorTheme: "dark"
      },
      type: "Stocks"
    };
    this.currentDOMId = "";
  }
  componentDidMount() {
    const script = document.createElement("script");
    script.id = `gg${this.state.type}`;
    this.currentDOMId = `gg${this.state.type}`;
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-market-overview.js";
    script.async = true;
    this._ref.current.appendChild(script);
    script.innerHTML = JSON.stringify(this.state.stock);
  }

  Changeexchange = (e) => {
   
    this.setState({
      type: e.target.value
    });

    // Remove the existing DOM elem
    const elem = document.getElementById(this.currentDOMId);
    elem.parentNode.removeChild(elem);

    // Create a new elem with updated values
    // so that updated iframe will load
    const script = document.createElement("script");
    script.id = `gg${this.state.type}`;
    this.currentDOMId = `gg${this.state.type}`;
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-market-overview.js";
    script.async = true;
    this._ref.current.appendChild(script);
    if (e.target.value === "Stocks") {
      script.innerHTML = JSON.stringify(this.state.stock);
    } else if (e.target.value === "Indices") {
      script.innerHTML = JSON.stringify(this.state.indices);
    } else if (e.target.value === "Forex") {
      script.innerHTML = JSON.stringify(this.state.forex);
    } else if (e.target.value === "Cryptocurrencies") {
      script.innerHTML = JSON.stringify(this.state.crypto);
    }
  };

  SelectBox = () => {
    return (
      <div className="select-div">
        <select
          className="exchange"
          value={this.state.type}
          name="pagination"
          onChange={this.Changeexchange}
        >
          <option value="Stocks"> Stocks</option>
          <option value="Indices"> Indices </option>
          <option value="Forex"> Forex </option>
          <option value="Cryptocurrencies"> Crypto </option>
        </select>
      </div>
    );
  };

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
