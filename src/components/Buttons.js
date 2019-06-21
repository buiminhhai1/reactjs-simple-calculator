import React, {Component} from 'react';

const clearStyle = {background: '#ac3939'},
      operatorStyle = {background: '#666666'},
      equalsStyle = {
        background: '#004466',
        position: 'absolute',
        height: 130,
        bottom: 5
      }
class Buttons extends Component {
  render() {
    return (
      <div >
        <button id="clear"  class="clear-style"  value='AC' onClick={this.props.initialize} className='jumbo' style={clearStyle}>AC</button>
        <button id="divide"   class="operator btn"  value='/'  onClick={this.props.operators} >/</button>
        <button id="multiply" class="operator btn"  value='x'  onClick={this.props.operators} >x</button>
        <button id="seven"    class="btn" value='7 '  onClick={this.props.numbers} >7</button>
        <button id="eight"   class="btn" value='8'  onClick={this.props.numbers} >8</button>
        <button id="nine"    class="btn" value='9'  onClick={this.props.numbers} >9</button>
        <button id="subtract"class="operator btn"  value='‑'  onClick={this.props.operators} >-</button>
        <button id="four"    class="btn" value='4'  onClick={this.props.numbers} >4</button>
        <button id="five"    class="btn" value='5'  onClick={this.props.numbers} >5</button>
        <button id="six"     class="btn" value='6'  onClick={this.props.numbers} >6</button>
        <button id="add"  class="operator btn"    value='+'  onClick={this.props.operators}>+</button>
        <button id="one"    class="btn"  value='1'  onClick={this.props.numbers} >1</button>
        <button id="two"     class="btn" value='2'  onClick={this.props.numbers} >2</button>
        <button id="three"  class="btn"  value='3'  onClick={this.props.numbers} >3</button>
        <button id="zero"   class="btn"  value='0'  onClick={this.props.numbers} className='jumbo'>0</button>
        <button id="decimal" class="btn" value='.'  onClick={this.props.decimal} >.</button>
        <button id="equals" class="btn"  value='='  onClick={this.props.evaluate} style={equalsStyle}>=</button>
      </div>
    );
  }
}
export default Buttons;



