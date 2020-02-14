import React, {Component} from 'react';
import * as Styles from '../../styles/index';
import { getSearchQuery } from '../../../store/actions/api';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

class SearchResults extends Component {
  
  render() {
    console.log(this.props.searchQuery)
    const searchQuery = this.props.searchQuery
     return (
       <Styles.HomePage>
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
  searchQuery: state.search.searchQuery
});

export default withRouter(
connect(mapStateToProps, {
  getSearchQuery
})(SearchResults)
);

