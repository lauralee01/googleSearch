import React from 'react';
import * as Style from '../styles/index';

const SearchSuggestions = (props) => {
  const options = props.results.map(r => (
    <Style.Key key={r.id}>
      {r.companyName}
    </Style.Key>
  ))
  return <Style.List>{options}</Style.List>
}

export default SearchSuggestions;