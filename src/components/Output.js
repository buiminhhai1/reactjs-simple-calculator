import React, {Component} from 'react';

class Output extends Component {
    render () {
      return <div id="display" className="outputScreen">{this.props.currentValue}</div>
    }
  }; 
export default Output;