import React from "react";
import Autosuggest from 'react-autosuggest';
import axios from 'axios';

  //NOT USED - Search box with tickers can look for NAME && SYMBOL
  
  class SearchBox extends React.Component {
    constructor() {
      super();

      this.state = {
        value: '',
        suggestions: [],
        ticker: []
      }; 
      

    }

    componentDidMount() {
      this.setapiData();
    }

    // https://developer.mozilla.org/en/docs/Web/JavaScript/Guide/Regular_Expressions#Using_Special_Characters
  escapeRegexCharacters(str) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }

     getSuggestions(value) {
        const escapedValue = this.escapeRegexCharacters(value.trim());
        
        if (escapedValue === '') {
          return [];
        }
      
        const regex = new RegExp('^' + escapedValue, 'i');
      
        return this.state.ticker.filter(language => regex.test(language.name ) || regex.test(language.symbol ) )  
      }

      
   getSuggestionValue(suggestion) {
    return suggestion.symbol;
  }
  
   renderSuggestion(suggestion) {
    return (
    <span style={{justifyContent:"space-evenly"}}> {suggestion.symbol}<span style={{marginLeft:"68px"}}> {suggestion.name} </span> </span>
    );
  }
  

      
 
     onChange = (event, { newValue, method }) => {
        this.setState({
          value: newValue
        });
      };
      
     onSuggestionsFetchRequested = ({ value }) => {
        this.setState({
          suggestions: this.getSuggestions(value)
        });
      };
    
       onSuggestionsClearRequested = () => {
        this.setState({
          suggestions: []
        });
      };

    
  // get Value await and then Store in state
 setapiData = async  () => {
    const data =  await  this.apiCall();
    this.setState({ticker: data})
    };

    
    // get the API Data
     apiCall = ( ) => { 

        const data = axios.get("https://financialmodelingprep.com/api/v3/stock/list?apikey=f2889259eb8ae41142c5d007d43efc1e")
        .then( res => {
            console.log(res.data)
            return res.data
        })
        return data
        }; 

  
  
    render() {
      const { value, suggestions } = this.state;
      const inputProps = {
        placeholder: "Search for Ticker",
        value,
        onChange: this.onChange
      };
  
   
      return (
        <Autosuggest 
        
          suggestions={suggestions}
          onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
          onSuggestionsClearRequested={this.onSuggestionsClearRequested}
          getSuggestionValue={this.getSuggestionValue}
          renderSuggestion={this.renderSuggestion}
          renderSectionTitle={this.renderSectionTitle}
      
          inputProps={inputProps} />
      );
    }
  }
 
  
  export default SearchBox;