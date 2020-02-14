import React, {Component} from 'react';
import Search from './Search';
import * as Styles from '../styles/index'

export default class Footer extends Component {
  
  render() {
     return (
       <Styles.Footer>
        <Styles.FirstDiv>
            <p>Advertising</p>
            <p>Business</p>
            <p>For</p>
            <p>How Search Works</p>
        </Styles.FirstDiv>
        <Styles.SecondDiv>
            <p>Privacy</p>
            <p>Terms</p>
            <p>With good</p>
        </Styles.SecondDiv>
       </Styles.Footer>
     );
  }
};