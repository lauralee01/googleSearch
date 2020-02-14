import React, {Component} from 'react';
import Search from './Search';
import * as Styles from '../styles/index';
import MiniFooter from './MiniFooter';
import Footer from './Footer';

export default class Google extends Component {
  
  render() {
     return (
       <Styles.HomePage>
         <Search />
         <MiniFooter />
         <Footer />
       </Styles.HomePage>
     );
  }
};


