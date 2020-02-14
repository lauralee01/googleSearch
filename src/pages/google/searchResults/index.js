import React, {Component} from 'react';
import SearchResults from './SearchResults';
import * as Styles from '../../styles/index'

export default class index extends Component {
  
  render() {
     return (
       <Styles.HomePage>
         <SearchResults/>
       </Styles.HomePage>
     );
  }
};


