import React, {Component} from 'react';
import Search from './Search';
import * as Styles from '../styles/index'

export default class SearchResults extends Component {
  
  render() {
     return (
       <Styles.HomePage>
         <Search />
       </Styles.HomePage>
     );
  }
};


