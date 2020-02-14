import React, {Component} from 'react';
import * as Styles from '../../styles/index';
import { getSearchData, getSearchQuery } from '../../../store/actions/api';
import SearchSuggestions from '../SearchSuggestions';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

class SearchResults extends Component {
  state = {
    searchTitle: '',
    searchDetails: [],
    showResults: false,
}

  handleChange = e => { 
    e.preventDefault()
    console.log(e.target.value)
    const searchTitle = e.target.value
    const filteredData = this.props.search.filter(obj => {
        return obj.companyName.toLowerCase().includes(searchTitle.toLowerCase());
    })
    this.setState({
        searchData: filteredData,
        showResults: true
    })
    this.props.getSearchData(this.state.searchDetails);
}
handleSearchData = (obj) => {
  console.log(obj)
  this.props.getSearchQuery(obj, this.props.history)
}
  render() {
    console.log(this.props.searchQuery)
    console.log(this.props.search)
    const searchQuery = this.props.searchQuery
     return (
       <Styles.HomePage>
          <Styles.InputDiv className="input" style={
                this.state.showResults ? {
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
                this.state.showResults ?  <SearchSuggestions results={this.state.searchData} showData={this.handleSearchData} /> : null
                }
            </Styles.InputDiv>
       {searchQuery ? <Styles.SearchResults>
        <Styles.Company>{searchQuery.companyName} | </Styles.Company>
        <Styles.Company>{searchQuery.jobTitle}</Styles.Company>
       <Styles.Details>{searchQuery.details}</Styles.Details>
       <Styles.Data>{searchQuery.location} </Styles.Data>
       <Styles.Data>{searchQuery.price} </Styles.Data>
       <Styles.Data>{searchQuery.duration}</Styles.Data>
       </Styles.SearchResults>: <div>No Search Results</div>
       }
      
       </Styles.HomePage>
     );
  }
};

const mapStateToProps = state => ({
  searchQuery: state.search.searchQuery,
  search: state.search.searchData,
});

export default withRouter(
connect(mapStateToProps, {
  getSearchQuery,
  getSearchData
})(SearchResults)
);

