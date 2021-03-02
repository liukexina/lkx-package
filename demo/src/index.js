import React, { Component } from 'react';
import { render } from 'react-dom';
import VParser from '../../src';

export default class Demo extends Component {
  render() {
    return (
      <div>
        VParser
        <br/>
        <VParser></VParser>
      </div>
    );
  }
}

render(<Demo />, document.querySelector('#root'));
