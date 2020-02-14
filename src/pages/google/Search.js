import React, {Component} from 'react';
import * as Style from '../styles/index';
import { searchData }  from './searchdata';
import SearchSuggestions from './SearchSuggestions';

export default class Search extends Component {
state = {
    searchTitle: '',
    searchDetails: [],
    searchData,
    showResults: false,
}

handleChange = e => { 
    e.preventDefault()
    console.log(e.target.value)
    const searchTitle = e.target.value
    const filteredData = this.state.searchData.filter(obj => {
        return obj.companyName.toLowerCase().includes(searchTitle.toLowerCase());
    })
    this.setState({
        searchData: filteredData,
        showResults: true
    })
}
  render() {
      console.log(this.state.searchData)
     return (
       <Style.Search>
            <img src={require("../../assets/images/google.png")} alt="google" />
            <Style.InputDiv style={
                this.state.showResults? {
                    width: '582px',
                    borderRadius: '30px',
                    border: 'none',
                    boxShadow: '0px 6px 6px 4px rgba(0, 0, 0, 0.2)',
                    outline: 'none',
                    position: 'relative',
                    zIndex: '500',
                    opacity: '2'
                }: null
            }>
                <input 
                    type="search" 
                    name="searchTitle" 
                    onChange={this.handleChange} 
                    style={
                        this.state.showResults
                          ? {
                              borderRadius: 'none',
                              boxShadow: 'none'
                            }
                          : null
                      }
                />
                {
                this.state.showResults ?  <SearchSuggestions results={this.state.searchData} /> : null
                }
            </Style.InputDiv>
            <Style.SearchButton>
                <button>Google</button>
                <button>search to find me</button>
            </Style.SearchButton>
       </Style.Search>
     );
  }
 
};
