import React from 'react';
import * as Style from '../styles/index';

const SearchSuggestions = (props) => {
  const options = props.results.map(search => (
    <Style.Key key={search.id} onClick={() => props.showData(search)}>
      {search.companyName}
    </Style.Key>
  ))
  return <Style.List>{options}</Style.List>
}

export default SearchSuggestions;